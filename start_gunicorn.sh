#!/bin/bash

# start_gunicorn.sh - Start Cellxgene Gateway with Gunicorn
#
# PREREQUISITES:
# - Gunicorn installed (included with cellxgene 1.3.0, or: pip install gunicorn)
# - Conda env named by CONDA_ENV (default: cellxgateway)
#
# USAGE:
# ./start_gunicorn.sh
#
# Configuration lives in this file rather than a .env: every setting below is
# written as ${VAR:-default}, so it can still be overridden from environment
# (e.g. systemd Environment=, or an inline export) without one

# Exit on error
set -e

# Get directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


# Server config
# Paths derive from conda env and repo location so script stays host-independent
# Conda variables
CONDA_ROOT=${CONDA_ROOT:-$HOME/miniforge3}
CONDA_ENV=${CONDA_ENV:-cellxgateway}
CONDA_ENV_BIN="$CONDA_ROOT/envs/$CONDA_ENV/bin"

# Cellxgene variables
export PATH="$CONDA_ENV_BIN:$PATH"
export CELLXGENE_LOCATION=${CELLXGENE_LOCATION:-$CONDA_ENV_BIN/cellxgene}
export CELLXGENE_DATA=${CELLXGENE_DATA:-$SCRIPT_DIR/data}
export QC_DATA=${QC_DATA:-$SCRIPT_DIR/analysis_qc}
export GATEWAY_LOG_LEVEL=${GATEWAY_LOG_LEVEL:-INFO}
export GATEWAY_IP=${GATEWAY_IP:-127.0.0.1}

# Trust forwarded headers set by reverse proxy
export PROXY_FIX_FOR=${PROXY_FIX_FOR:-1}
export PROXY_FIX_PROTO=${PROXY_FIX_PROTO:-1}
export PROXY_FIX_HOST=${PROXY_FIX_HOST:-1}
export PROXY_FIX_PREFIX=${PROXY_FIX_PREFIX:-1}

# Check cellxgene binary exists (defaults above are always set, so a missing
# binary can happen)
if [ ! -x "$CELLXGENE_LOCATION" ]; then
    echo "Error: cellxgene not found at $CELLXGENE_LOCATION"
    echo "Set CELLXGENE_LOCATION, or CONDA_ROOT/CONDA_ENV (currently:"
    echo "  CONDA_ROOT=$CONDA_ROOT, CONDA_ENV=$CONDA_ENV)"
    exit 1
fi

# Gunicorn configuration
# WARNING: Multi-worker mode has cache synchronization issues (see
# https://github.com/Novartis/cellxgene-gateway/pull/99). Each worker maintains
# its own in-memory cache, causing 404s for static assets when different workers
# handle requests for the same dataset. Use GUNICORN_WORKERS=1 until shared
# cache is implemented
WORKERS=${GUNICORN_WORKERS:-1}
# Use gthread worker class to enable concurrent request handling via threads.
# Threads share the same in-memory BackendCache, avoiding the cache
# synchronization issues that arise with multiple workers.
WORKER_CLASS=${GUNICORN_WORKER_CLASS:-gthread}
THREADS=${GUNICORN_THREADS:-8}
BIND=${GATEWAY_IP:-0.0.0.0}:${GATEWAY_PORT:-5005}
TIMEOUT=${GUNICORN_TIMEOUT:-120}
KEEPALIVE=${GUNICORN_KEEPALIVE:-5}
LOG_LEVEL=${GUNICORN_LOG_LEVEL:-info}

# Production optimization: enable backed mode to reduce memory usage
export GATEWAY_ENABLE_BACKED_MODE=${GATEWAY_ENABLE_BACKED_MODE:-true}

# Check if gunicorn is installed
if ! command -v gunicorn &> /dev/null; then
    echo "Error: gunicorn not found. Install with: pip install gunicorn"
    exit 1
fi

# Display configuration
echo "Starting Cellxgene Gateway with Gunicorn..."
echo "Configuration:"
echo "  Cellxgene executable: ${CELLXGENE_LOCATION}"
echo "  Data source: ${CELLXGENE_DATA:-$CELLXGENE_BUCKET}"
echo "  QC data: ${QC_DATA}"
echo "  Binding to: $BIND"
echo "  Workers: $WORKERS"
echo "  Worker class: $WORKER_CLASS"
echo "  Threads per worker: $THREADS"
echo "  Timeout: ${TIMEOUT}s"
echo "  Keepalive: ${KEEPALIVE}s"
echo "  Log level: $LOG_LEVEL"
echo "  Gateway log level: ${GATEWAY_LOG_LEVEL}"
echo "  Backed mode: ${GATEWAY_ENABLE_BACKED_MODE}"
echo "  Proxy fix (for/proto/host/prefix): ${PROXY_FIX_FOR}/${PROXY_FIX_PROTO}/${PROXY_FIX_HOST}/${PROXY_FIX_PREFIX}"
echo ""

cd "$SCRIPT_DIR"

# Start Gunicorn with optimized settings
# Additional options you can add via environment variables:
# - GUNICORN_MAX_REQUESTS: Restart worker after N requests (avoids memory leaks)
# - GUNICORN_MAX_REQUESTS_JITTER: Add randomness to max-requests
exec gunicorn cellxgene_gateway.gateway:app \
    --workers "$WORKERS" \
    --worker-class "$WORKER_CLASS" \
    --threads "$THREADS" \
    --bind "$BIND" \
    --timeout "$TIMEOUT" \
    --keep-alive "$KEEPALIVE" \
    --error-logfile - \
    --log-level "$LOG_LEVEL" \
    --preload \
    ${GUNICORN_MAX_REQUESTS:+--max-requests "$GUNICORN_MAX_REQUESTS"} \
    ${GUNICORN_MAX_REQUESTS_JITTER:+--max-requests-jitter "$GUNICORN_MAX_REQUESTS_JITTER"} \
    "$@"
