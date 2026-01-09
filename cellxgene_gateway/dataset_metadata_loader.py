# Import utility modules
import csv
import logging
import os
import re


# Set up logger for logging messages within this module
logger = logging.getLogger(__name__)


def extract_experiment_info(file_path):
    """
    Extract experiment name and version from file path.

    Parameters:
    -----------
    file_path: str
      File path from which experiment information should be extracted. This
      should be a full path to a `.h5ad` file.

    Returns:
    --------
    (experiment_name, version, display_name): tuple
      Tuple containing 3 elements:
        - experiment_name (str or None): name of experiment
        - version (str or None): version of experiment. Returns "base" if no
        version is found
        - display_name (str): human-readable name for experiment, which
        includes experiment name and version. Returns original file path if no
        match is found

    Examples:
    ---------
    - qc_KNK_URT007_scRNA.TCR_jul25.h5ad -> ("URT007", None, "URT007")
    - qc_KNK_URT007_scRNA.TCR_jul25_v2.h5ad -> ("URT007", "v2", "URT007 v2")
    - qc_KNK_URT005_scRNA.CSP.TCR_dec24_v3.h5ad -> ("URT005", "v3", "URT005 v3")
    - qc_ACV02_all.h5ad -> ("ACV02", "all", "ACV02 All")
    - qc_ACV02_atac.pseudorna.h5ad -> ("ACV02", "atac", "ACV02 ATAC")
    """
    if not file_path:
        return None, None, file_path

    # Remove .h5ad extension
    basename = file_path.replace(".h5ad", "")

    # Look for URT pattern (main experiments)
    urt_match = re.search(r"URT(\d+)", basename)
    if urt_match:
        experiment_num = urt_match.group(1)
        experiment_name = f"URT{experiment_num}"

        # Look for version pattern (_v\d+)
        version_match = re.search(r"_v(\d+)$", basename)
        if version_match:
            version = f"v{version_match.group(1)}"
            display_name = f"{experiment_name} {version}"
        else:
            version = "base"
            display_name = experiment_name

        return experiment_name, version, display_name

    # Look for ACV pattern with specific subtypes
    acv_match = re.search(r"(ACV\d+)_(.+)$", basename)
    if acv_match:
        experiment_name = acv_match.group(1)
        subtype = acv_match.group(2)

        # Map common subtypes to readable names
        subtype_map = {"all": "All", "atac.pseudorna": "ATAC", "cd4": "CD4"}
        version = subtype
        display_name = (
            f"{experiment_name} {subtype_map.get(subtype, subtype.title())}"
        )

        return experiment_name, version, display_name

    # Look for other patterns
    other_match = re.search(r"(ACV\d+)", basename)
    if other_match:
        experiment_name = other_match.group(1)
        # Check for version
        version_match = re.search(r"_v(\d+)$", basename)
        if version_match:
            version = f"v{version_match.group(1)}"
            display_name = f"{experiment_name} {version}"
        else:
            version = "base"
            display_name = experiment_name
        return experiment_name, version, display_name

    # Fallback - no grouping
    return None, None, file_path


def find_annotations_for_file(file_path, data_dir):
    """
    Find annotation files for a given dataset file.

    Parameters:
    -----------
    file_path: str
      Path to dataset file for which annotations are requested.

    data_dir: str
      Directory where dataset and annotation files are stored.

    Returns:
    --------
    (loadable_annotations, all_annotations): tuple
      Tuple containing 2 elements:
        - loadable_annotations (list): list of dictionaries for annotations that
        are loadable (excluding "gene_sets")
        - all_annotations (list): list of dictionaries for all annotation files
        available for download in .csv format
    """

    if not file_path:
        return [], []

    full_file_path = os.path.join(data_dir, file_path)
    if not os.path.exists(full_file_path):
        return [], []

    # Look for annotation directory
    annotation_dir = full_file_path.replace(".h5ad", "_annotations")
    if not os.path.exists(annotation_dir):
        return [], []

    loadable_annotations = []
    all_annotations = []
    try:
        for item in os.listdir(annotation_dir):
            if item.endswith(".csv"):
                annotation_dict = {
                    "name": item.replace(".csv", ""),
                    "file": item,
                    "path": os.path.join(annotation_dir, item),
                }
                # Add to all_annotations for download
                all_annotations.append(annotation_dict)
                # Only add to loadable_annotations if it doesn't contain "gene_sets"
                if "gene_sets" not in item:
                    loadable_annotations.append(annotation_dict)
    except Exception:
        pass

    return loadable_annotations, all_annotations


def load_dataset_metadata(csv_path, data_dir=None):
    """
    Load dataset metadata from .csv file and group entries by experiment.

    Parameters:
    -----------
    csv_path: str
      Path to dataset metadata .csv file.

    data_dir: str or None
      Directory containing dataset files. If None, value is loaded from
      CELLXGENE_DATA environment variable (defaults to "cellxgene_data").

    Returns:
    --------
    (datasets,
     sorted(modalities),
     sorted(principal_investigators),
     sorted(leads)
    ): tuple
      Tuple containing 4 elements:
        - datasets (list): list of grouped experiment dictionaries or individual
        dataset rows
        - modalities (list): sorted list of unique modality names
        - principal_investigators (list): sorted list of unique PI names
        - leads (list): sorted list of unique project lead names
    """

    datasets = []
    experiment_groups = {}
    modalities = set()
    principal_investigators = set()
    leads = set()

    if data_dir is None:
        data_dir = os.environ.get("CELLXGENE_DATA", "cellxgene_data")

    try:
        if not os.path.exists(csv_path):
            logger.warning(
                f".csv file {csv_path} not found. Using empty dataset list."
            )
            return (
                datasets,
                sorted(modalities),
                sorted(principal_investigators),
                sorted(leads),
            )

        with open(csv_path, newline="") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Find annotations for this dataset
                loadable_annotations, all_annotations = (
                    find_annotations_for_file(
                        row.get("file_path", ""), data_dir
                    )
                )
                row["annotations"] = (
                    loadable_annotations  # For loading/launching
                )
                row["all_annotations"] = all_annotations  # For downloading
                row["has_annotations"] = len(loadable_annotations) > 0

                # Extract experiment information
                experiment_name, version, display_name = (
                    extract_experiment_info(row.get("file_path", ""))
                )
                row["experiment_name"] = experiment_name
                row["version"] = version
                row["display_name"] = display_name

                modalities.add(row.get("modality", "").strip())
                principal_investigators.add(
                    row.get("principal_investigator", "").strip()
                )
                leads.add(row.get("lead", "").strip())

                # Group by experiment if we have one
                if experiment_name:
                    if experiment_name not in experiment_groups:
                        experiment_groups[experiment_name] = {
                            "experiment_name": experiment_name,
                            "versions": [],
                            "modality": row.get("modality", ""),
                            "principal_investigator": row.get(
                                "principal_investigator", ""
                            ),
                            "lead": row.get("lead", ""),
                            "description": row.get("description", ""),
                            "has_annotations": False,
                        }

                    # Add version to the group
                    experiment_groups[experiment_name]["versions"].append(row)

                    # Update group-level annotation status
                    if row["has_annotations"]:
                        experiment_groups[experiment_name][
                            "has_annotations"
                        ] = True
                else:
                    # Add as individual dataset if no experiment grouping
                    datasets.append(row)

        # Convert experiment groups to list and sort versions
        for group in experiment_groups.values():
            # Sort versions - put base version first, then others alphabetically
            def sort_key(x):
                version = x["version"] or "base"
                if version == "base":
                    return (0, "")
                elif version.startswith("v"):
                    # Extract number for v1, v2, etc.
                    try:
                        return (1, int(version[1:]))
                    except:
                        return (2, version)
                else:
                    return (3, version)

            group["versions"].sort(key=sort_key)
            datasets.append(group)

        logger.info(f"Loaded {len(datasets)} datasets/groups from {csv_path}")
    except Exception as e:
        logger.warning(
            f"Error loading.csv {csv_path}: {e}. Using empty dataset list."
        )

    return (
        datasets,
        sorted(modalities),
        sorted(principal_investigators),
        sorted(leads),
    )
