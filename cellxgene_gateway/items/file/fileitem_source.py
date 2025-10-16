# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import utility modules
import os
from typing import List


# Import other functions from package
from cellxgene_gateway import dir_util
from cellxgene_gateway.items.file.fileitem import FileItem
from cellxgene_gateway.items.item import ItemTree, ItemType
from cellxgene_gateway.items.item_source import ItemSource, LookupResult


class FileItemSource(ItemSource):
    """
    Class to represent file-based dataset or annotation item source with path
    and optional extension.

    Inherits:
    ---------
    ItemSource: Abstract base class to manage and interact with file-based data
    item sources.
    """

    def __init__(
        self,
        base_path,
        name=None,
        h5ad_suffix=dir_util.h5ad_suffix,
        annotation_dir_suffix=dir_util.annotations_suffix,
        annotation_file_suffix=".csv",
        gene_set_file_suffix="_gene_sets.csv",
    ):
        """
        Initialise FileItemSource.

        Parameters:
        -----------
        base_path: str
          Root directory where files are stored.

        name: str, optional
          Optional name to identify source.

        h5ad_suffix: str
          File suffix used to identify .h5ad files.

        annotation_dir_suffix: str
          Directory suffix for annotations.

        annotation_file_suffix: str
          Suffix used for annotation files (default: '.csv').

        gene_set_file_suffix: str
          Suffix used for gene set annotation files.

        Returns:
        --------
        None
        """

        self._name = name
        self.base_path = base_path
        self.h5ad_suffix = h5ad_suffix
        self.annotation_dir_suffix = annotation_dir_suffix
        self.annotation_file_suffix = annotation_file_suffix
        self.gene_set_file_suffix = gene_set_file_suffix

    @property
    def name(self):
        """
        Name of file-based source.

        Returns:
        --------
        str
          Source name or default representation based on base path.
        """

        return self._name or f"Files:{self.base_path}"

    def is_gene_set(self, path: str) -> bool:
        """
        Check if given path is gene set file.

        Parameters:
        -----------
        path: str
          Path to check.

        Returns:
        --------
        bool
          True if file matches gene set suffix, otherwise False.
        """

        return path.endswith(self.gene_set_file_suffix)

    def is_h5ad_file(self, path: str) -> bool:
        """
        Check if path is valid .h5ad file.

        Parameters:
        -----------
        path: str
          File path to check.

        Returns:
        --------
        bool
          True if path ends with .h5ad and is a file, otherwise False.
        """

        return path.endswith(self.h5ad_suffix) and os.path.isfile(path)

    def convert_annotation_path_to_h5ad(self, path):
        """
        Convert annotation directory path to corresponding .h5ad file path.

        Parameters:
        -----------
        path: str
          Annotation directory path.

        Returns:
        --------
        str
          Corresponding .h5ad file path.
        """

        return path[: -len(self.annotation_dir_suffix)] + self.h5ad_suffix

    def convert_h5ad_path_to_annotation(self, path):
        """
        Convert .h5ad file path to corresponding annotation directory path.

        Parameters:
        -----------
        path: str
          .h5ad file path.

        Returns:
        --------
        str
          Corresponding annotation directory path.
        """

        return path[: -len(self.h5ad_suffix)] + self.annotation_dir_suffix

    def get_local_path(self, item: FileItem) -> str:
        """
        Get full local file system path for given item.

        Parameters:
        -----------
        item: FileItem
          Item for which path is requested.

        Returns:
        --------
        str
          Full path to item.
        """

        return os.path.join(self.base_path, item.descriptor)

    def get_annotations_subpath(self, item) -> str:
        """
        Get relative subpath where annotations are stored for an item.

        Parameters:
        -----------
        item: FileItem
          Item for which annotation subpath is needed.

        Returns:
        --------
        str
          Subpath to annotations directory.
        """

        return self.convert_h5ad_path_to_annotation(item.descriptor)

    def list_items(self, filter: str = None) -> ItemTree:
        """
        List all file items under path, optionally filtered.

        Parameters:
        -----------
        filter: str, optional
          Prefix path to filter file items.

        Returns:
        --------
        item_tree: ItemTree
          Tree structure of file items and directories.
        """

        item_tree = self.scan_directory("" if filter is None else filter)
        return item_tree

    def scan_directory(self, subpath: str = "") -> ItemTree:
        """
        Recursively scan directory and build ItemTree.

        Parameters:
        -----------
        subpath: str, optional
          Relative subpath to scan from base path.

        Returns:
        --------
        ItemTree(subpath, items, branches): ItemTree
          Tree structure representing items and subdirectories.
        """

        base_path = os.path.join(self.base_path, subpath)

        if not os.path.exists(base_path):
            raise Exception(
                f"Path for local files '{base_path}' does not exist."
            )

        filepath_map = dict(
            (filepath, os.path.join(base_path, filepath))
            for filepath in sorted(os.listdir(base_path))
        )

        h5ad_paths = [
            filepath
            for filepath, full_path in filepath_map.items()
            if self.is_h5ad_file(full_path)
        ]

        def is_annotation_dir(dir):
            """
            Check if directory is annotation directory with corresponding
            .h5ad file.

            Parameters:
            -----------
            dir: str
              Directory name to check, relative to base path.

            Returns:
            --------
            bool
              True if directory matches annotation suffix and corresponding
              .h5ad file exists.
            """

            return (
                dir.endswith(self.annotation_dir_suffix)
                and self.convert_annotation_path_to_h5ad(dir) in h5ad_paths
            )

        subdirs = [
            filepath
            for filepath, full_path in filepath_map.items()
            if os.path.isdir(full_path) and not is_annotation_dir(filepath)
        ]

        items = [
            self.make_fileitem_from_path(filename, subpath)
            for filename in h5ad_paths
        ]
        branches = None
        if len(subdirs) > 0:
            branches = [
                self.scan_directory(os.path.join(subpath, subdir))
                for subdir in subdirs
            ]
            # Exclude branches without files as leaves. Since traversal is
            # applied pre-order, branch.branches has already been processed and
            # we don't need to check deeper nesting
            branches = [
                branch for branch in branches if branch.items or branch.branches
            ]

        return ItemTree(subpath, items, branches)

    def create_annotation(self, item: FileItem, name: str) -> FileItem:
        """
        Create new annotation item for given .h5ad file item.

        Parameters:
        -----------
        item: FileItem
          Base .h5ad item to annotate.

        name: str
          Name of annotation file to create.

        Returns:
        --------
        annotation: FileItem
          New annotation item.
        """

        annotation = self.make_fileitem_from_path(
            name, self.get_annotations_subpath(item), is_annotation=True
        )
        item.annotations = (item.annotations or []).append(annotation)

        return annotation

    def update(self, item: FileItem) -> None:
        """
        Update an item. Currently no-op for file-based sources.

        Parameters:
        -----------
        None
        """
        pass

    def full_path(self, p):
        """
        Get absolute path for relative subpath.

        Parameters:
        -----------
        p: str
          Relative subpath from base.

        Returns:
        --------
        str
          Absolute path.
        """

        return os.path.join(self.base_path, p)

    def lookup_item(self, descriptor):
        """
        Look up file item by descriptor.

        Parameters:
        -----------
        descriptor: str
          Relative path to file.

        Returns:
        --------
        FileItem or None
          Corresponding file item, if found.
        """

        full_path = self.full_path(descriptor)
        if self.is_h5ad_file(full_path):
            return self.shallowitem_from_descriptor(descriptor)

    def is_authorized(self, descriptor):
        """
        Always returns True for local files (no access control).

        Parameters:
        -----------
        descriptor: str
          File descriptor.

        Returns:
        --------
        bool
          Always True.
        """

        return True

    def lookup(self, indescriptor: str) -> LookupResult:
        """
        Look up item (.h5ad or annotation) by descriptor.

        Parameters:
        -----------
        indescriptor: str
          Descriptor for file or annotation.

        Returns:
        --------
        LookupResult
          Contains .h5ad item and optionally annotation.

        Raises:
        -------
        None
          Returns None if item is not found.
        """

        descriptor = indescriptor.strip("/")
        if descriptor.endswith(self.annotation_file_suffix):
            annotation_item = self.shallowitem_from_descriptor(descriptor, True)
            h5ad_descriptor = self.convert_annotation_path_to_h5ad(
                annotation_item.subpath
            )
            item = self.lookup_item(h5ad_descriptor)
            if item is not None:
                dir_util.ensure_dir_exists(
                    self.full_path(annotation_item.subpath)
                )
                return LookupResult(item, annotation_item)
        else:
            item = self.lookup_item(descriptor)
            if item is not None:
                return LookupResult(item)

    def shallowitem_from_descriptor(self, descriptor, is_annotation=False):
        """
        Create FileItem from descriptor without scanning for annotations.

        Parameters:
        -----------
        descriptor: str
          File path descriptor.

        is_annotation: bool, optional
          Whether file is an annotation.

        Returns:
        --------
        FileItem
          Constructed file item.
        """

        filename = os.path.basename(descriptor)
        subpath = os.path.dirname(descriptor)

        return self.make_fileitem_from_path(
            filename,
            subpath,
            is_annotation,
            True,
        )

    def make_fileitem_from_path(
        self, filename, subpath, is_annotation=False, is_shallow=False
    ) -> FileItem:
        """
        Construct FileItem from file and path details.

        Parameters:
        -----------
        filename: str
          Name of file.

        subpath: str
          Directory subpath.

        is_annotation: bool, optional
          Whether file is an annotation.

        is_shallow: bool, optional
          If True, do not populate annotations.

        Returns:
        --------
        item: FileItem
          Constructed item.
        """

        if is_annotation and filename.endswith(self.annotation_file_suffix):
            name = filename[: -len(self.annotation_file_suffix)]
            ext = self.annotation_file_suffix
        else:
            name = filename
            ext = ""
        item = FileItem(
            subpath=subpath,
            name=name,
            ext=ext,
            type=ItemType.annotation if is_annotation else ItemType.h5ad,
        )

        if not is_annotation and not is_shallow:
            annotations = self.make_annotations_for_fileitem(item)
            item.annotations = annotations

        return item

    def make_annotations_for_fileitem(self, item: FileItem) -> List[FileItem]:
        """
        Create annotation items (including gene sets) for given .h5ad item.

        Parameters:
        -----------
        item: FileItem
          Base .h5ad file item.

        Returns:
        --------
        List[FileItem] or None
          List of annotation file items or None if no directory exists.
        """

        annotations_subpath = self.get_annotations_subpath(item)
        annotations_fullpath = self.full_path(annotations_subpath)
        if os.path.isdir(annotations_fullpath):
            sorted_files = sorted(os.listdir(annotations_fullpath))
            annotation_files = [
                self.make_fileitem_from_path(
                    annotation, annotations_subpath, True
                )
                for annotation in sorted_files
                if annotation.endswith(self.annotation_file_suffix)
                and not self.is_gene_set(annotation)
                and os.path.isfile(
                    os.path.join(annotations_fullpath, annotation)
                )
            ]

            # Catch gene sets without accompanying [annotations].csv
            gene_sets_files = [
                self.make_fileitem_from_path(
                    annotation[: -len(self.gene_set_file_suffix)] + ".csv",
                    annotations_subpath,
                    True,
                )
                for annotation in sorted_files
                if self.is_gene_set(annotation)
                and annotation[: -len(self.gene_set_file_suffix)]
                not in [a.name for a in annotation_files]
                and os.path.isfile(
                    os.path.join(annotations_fullpath, annotation)
                )
            ]

            return sorted(
                annotation_files + gene_sets_files, key=lambda x: x.name
            )
        else:
            return None
