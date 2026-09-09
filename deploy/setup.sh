#!/bin/bash

# setup.sh - Prepare a freshly cloned repo so gateway can be started
#
# USAGE:
# ./deploy/setup.sh
#
# Creates conda env, installs this repo into it, re-applies cellxgene patch that
# gateway depends on, and creates runtime directories. Safe to re-run: every
# step is skipped if it has already been done.
#
# Config follows same ${VAR:-default} convention as start_gunicorn.sh, so both
# scripts agree on which environment they mean:
#   CONDA_ROOT (default $HOME/miniforge3), CONDA_ENV (default cellxgateway)
#
# Deliberately out of scope: nginx, systemd and TLS are host-specific and need
# root. See cellxgateway.service.example alongside this script, and README.

set -euo pipefail

DEPLOY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_DIR="$( cd "$DEPLOY_DIR/.." && pwd )"

CONDA_ROOT=${CONDA_ROOT:-$HOME/miniforge3}
CONDA_ENV=${CONDA_ENV:-cellxgateway}
CONDA_ENV_DIR="$CONDA_ROOT/envs/$CONDA_ENV"
CONDA_ENV_BIN="$CONDA_ENV_DIR/bin"
ENV_FILE="$DEPLOY_DIR/cellxgateway_env.yaml"

# Prefer mamba when present, if not default to conda
if [ -x "$CONDA_ROOT/bin/mamba" ]; then
    CONDA_BIN="$CONDA_ROOT/bin/mamba"
else
    CONDA_BIN="$CONDA_ROOT/bin/conda"
fi

echo "Setting up cellxgene-gateway"
echo "  Repository: $REPO_DIR"
echo "  Conda root: $CONDA_ROOT"
echo "  Conda env:  $CONDA_ENV"
echo ""

# 1. Conda environment
if [ ! -x "$CONDA_BIN" ]; then
    echo "Error: neither mamba nor conda found under $CONDA_ROOT/bin"
    echo "Install miniforge, or set CONDA_ROOT to an existing installation."
    exit 1
fi

if [ -d "$CONDA_ENV_DIR" ]; then
    echo "[1/5] Conda env '$CONDA_ENV' already exists, leaving it alone."
else
    echo "[1/5] Creating env '$CONDA_ENV' with $(basename "$CONDA_BIN") from $(basename "$ENV_FILE")..."
    "$CONDA_BIN" env create --name "$CONDA_ENV" --file "$ENV_FILE"
fi

# 2. Install repo into conda env
# Env file cannot express an editable install, so without this, env would
# resolve `cellxgene_gateway` to PyPI release rather than this fork
echo "[2/5] Installing (editable) repo into conda env..."
"$CONDA_ENV_BIN/pip" install --quiet --no-deps --editable "$REPO_DIR"

# 3. Re-apply cellxgene StringDtype patch
# Upstream cellxgene only treats boolean/category/object columns as categorical,
# so with newer pandas a "string" index falls into numeric range-filter branch
# and gene expression colouring returns 400 for every dataset. Patch lives in
# site-packages, so a rebuilt env loses it
echo "[3/5] Checking cellxgene StringDtype patch..."
ADAPTOR=$(find "$CONDA_ENV_DIR/lib" -path '*/server/data_common/data_adaptor.py' | head -1)
if [ -z "$ADAPTOR" ]; then
    echo "Error: could not find data_adaptor.py under $CONDA_ENV_DIR/lib"
    exit 1
fi
if grep -q '"boolean", "category", "object", "string"' "$ADAPTOR"; then
    echo "      Already patched: $ADAPTOR"
elif grep -q '"boolean", "category", "object"' "$ADAPTOR"; then
    sed -i 's/"boolean", "category", "object"/"boolean", "category", "object", "string"/' "$ADAPTOR"
    grep -q '"boolean", "category", "object", "string"' "$ADAPTOR"
    echo "      Patched: $ADAPTOR"
else
    # cellxgene is pinned to 1.3.0, so this means something changed upstream.
    # Fail rather than start a gateway whose gene expression silently 400s.
    echo "Error: expected dtype list not found in $ADAPTOR"
    echo "Check whether cellxgene fixed this upstream, then update this script."
    exit 1
fi

# 4. Runtime directories (all git-ignored)
# logs/ matters: systemd's StandardOutput=append: fails if it does not exist.
echo "[4/5] Creating runtime directories..."
mkdir -p "$REPO_DIR/data" "$REPO_DIR/data/vitessce_configs" \
         "$REPO_DIR/analysis_qc" "$REPO_DIR/logs"

# 5. Sanity checks
echo "[5/5] Verifying install..."
if [ ! -x "$CONDA_ENV_BIN/cellxgene" ]; then
    echo "Error: cellxgene not found at $CONDA_ENV_BIN/cellxgene"
    exit 1
fi
if [ ! -x "$CONDA_ENV_BIN/gunicorn" ]; then
    echo "Error: gunicorn not found at $CONDA_ENV_BIN/gunicorn"
    exit 1
fi
"$CONDA_ENV_BIN/python" -c "import cellxgene_gateway; print('      cellxgene_gateway', cellxgene_gateway.__version__, 'from', cellxgene_gateway.__file__)"

echo ""
echo "Setup complete."
if [ -z "$(ls -A "$REPO_DIR/data")" ]; then
    echo "Note: $REPO_DIR/data is empty. Datasets are not tracked in git; copy"
    echo "      .h5ad/.zarr files listed in datasets.tsv into it."
fi
echo ""
echo "Start gateway with:"
echo "  ./start_gunicorn.sh"
echo "or install a systemd unit based on deploy/cellxgateway.service.example."
