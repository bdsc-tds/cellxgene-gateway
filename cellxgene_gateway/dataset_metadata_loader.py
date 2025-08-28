import csv
import os
import re
from cellxgene_gateway.dir_util import annotations_suffix

def extract_experiment_info(file_path):
    """
    Extract experiment name and version from file path.
    Returns tuple of (experiment_name, version, display_name).
    
    Examples:
    - qc_KNK_URT007_scRNA.TCR_jul25.h5ad -> ("URT007", None, "URT007")
    - qc_KNK_URT007_scRNA.TCR_jul25_v2.h5ad -> ("URT007", "v2", "URT007 v2")
    - qc_KNK_URT005_scRNA.CSP.TCR_dec24_v3.h5ad -> ("URT005", "v3", "URT005 v3")
    - qc_ACV02_all.h5ad -> ("ACV02", "all", "ACV02 All")
    - qc_ACV02_atac.pseudorna.h5ad -> ("ACV02", "atac", "ACV02 ATAC")
    """
    if not file_path:
        return None, None, file_path
    
    # Remove .h5ad extension
    basename = file_path.replace('.h5ad', '')
    
    # Look for URT pattern (main experiments)
    urt_match = re.search(r'URT(\d+)', basename)
    if urt_match:
        experiment_num = urt_match.group(1)
        experiment_name = f"URT{experiment_num}"
        
        # Look for version pattern (_v\d+)
        version_match = re.search(r'_v(\d+)$', basename)
        if version_match:
            version = f"v{version_match.group(1)}"
            display_name = f"{experiment_name} {version}"
        else:
            version = "base"
            display_name = experiment_name
            
        return experiment_name, version, display_name
    
    # Look for ACV pattern with specific subtypes
    acv_match = re.search(r'(ACV\d+)_(.+)$', basename)
    if acv_match:
        experiment_name = acv_match.group(1)
        subtype = acv_match.group(2)
        
        # Map common subtypes to readable names
        subtype_map = {
            'all': 'All',
            'atac.pseudorna': 'ATAC',
            'cd4': 'CD4'
        }
        version = subtype
        display_name = f"{experiment_name} {subtype_map.get(subtype, subtype.title())}"
        
        return experiment_name, version, display_name
    
    # Look for other patterns
    other_match = re.search(r'(ACV\d+)', basename)
    if other_match:
        experiment_name = other_match.group(1)
        # Check for version
        version_match = re.search(r'_v(\d+)$', basename)
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
    Returns a tuple of (loadable_annotations, all_annotations).
    loadable_annotations excludes gene_sets files.
    all_annotations includes all csv files for download.
    """
    if not file_path:
        return [], []
    
    full_file_path = os.path.join(data_dir, file_path)
    if not os.path.exists(full_file_path):
        return [], []
    
    # Look for annotation directory
    annotation_dir = full_file_path.replace('.h5ad', '_annotations')
    if not os.path.exists(annotation_dir):
        return [], []
    
    loadable_annotations = []
    all_annotations = []
    try:
        for item in os.listdir(annotation_dir):
            if item.endswith('.csv'):
                annotation_dict = {
                    'name': item.replace('.csv', ''),
                    'file': item,
                    'path': os.path.join(annotation_dir, item)
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
    Load dataset metadata from a CSV file and group by experiment.
    Returns a list of experiment groups and sets of modalities, PIs, and leads for filtering.
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
            print(f"Warning: CSV file {csv_path} not found. Using empty dataset list.")
            return datasets, sorted(modalities), sorted(principal_investigators), sorted(leads)
            
        with open(csv_path, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Find annotations for this dataset
                loadable_annotations, all_annotations = find_annotations_for_file(row.get('file_path', ''), data_dir)
                row['annotations'] = loadable_annotations  # For loading/launching
                row['all_annotations'] = all_annotations  # For downloading
                row['has_annotations'] = len(loadable_annotations) > 0
                
                # Extract experiment information
                experiment_name, version, display_name = extract_experiment_info(row.get('file_path', ''))
                row['experiment_name'] = experiment_name
                row['version'] = version
                row['display_name'] = display_name
                
                modalities.add(row.get('modality', '').strip())
                principal_investigators.add(row.get('principal_investigator', '').strip())
                leads.add(row.get('lead', '').strip())
                
                # Group by experiment if we have one
                if experiment_name:
                    if experiment_name not in experiment_groups:
                        experiment_groups[experiment_name] = {
                            'experiment_name': experiment_name,
                            'versions': [],
                            'modality': row.get('modality', ''),
                            'principal_investigator': row.get('principal_investigator', ''),
                            'lead': row.get('lead', ''),
                            'description': row.get('description', ''),
                            'has_annotations': False
                        }
                    
                    # Add version to the group
                    experiment_groups[experiment_name]['versions'].append(row)
                    
                    # Update group-level annotation status
                    if row['has_annotations']:
                        experiment_groups[experiment_name]['has_annotations'] = True
                else:
                    # Add as individual dataset if no experiment grouping
                    datasets.append(row)
        
        # Convert experiment groups to list and sort versions
        for group in experiment_groups.values():
            # Sort versions - put base version first, then others alphabetically
            def sort_key(x):
                version = x['version'] or 'base'
                if version == 'base':
                    return (0, '')
                elif version.startswith('v'):
                    # Extract number for v1, v2, etc.
                    try:
                        return (1, int(version[1:]))
                    except:
                        return (2, version)
                else:
                    return (3, version)
            
            group['versions'].sort(key=sort_key)
            datasets.append(group)
                    
        print(f"Loaded {len(datasets)} datasets/groups from {csv_path}")
    except Exception as e:
        print(f"Error loading CSV {csv_path}: {e}. Using empty dataset list.")
        
    return datasets, sorted(modalities), sorted(principal_investigators), sorted(leads)
