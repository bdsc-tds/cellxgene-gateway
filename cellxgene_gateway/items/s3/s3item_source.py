# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import utility modules
import flask
import os
import s3fs
from os.path import basename, dirname
from typing import List


# Import other functions from package
from cellxgene_gateway import dir_util
from cellxgene_gateway.items.item import ItemTree, ItemType
from cellxgene_gateway.items.item_source import ItemSource, LookupResult
from cellxgene_gateway.items.s3.s3item import S3Item


def truthy(val: str):
    """
    Evaluate whether string represents truthy value.

    Parameters:
    -----------
    val: str
      Input string to evaluate.

    Returns:
    --------
    bool
      True if string is "true" or "1" (case-insensitive), otherwise False.
    """

    return val.lower() in ['true', '1']


class S3ItemSource(ItemSource):
    """
    Class to represent S3 based dataset or annotation item source with path and
    optional extension.

    Inherits:
    ---------
    ItemSource: Abstract base class to manage and interact with file-based data
    item sources.
    """

    def __init__(
        self,
        bucket,
        name=None,
        h5ad_suffix=dir_util.h5ad_suffix,
        annotation_dir_suffix=dir_util.annotations_suffix,
        annotation_file_suffix='.csv',
    ):
        """
        Initialise S3ItemSource.

        Parameters:
        -----------
        bucket: str
          Name of S3 bucket (without 's3://' prefix).

        name: str, optional
          Optional name to identify source.

        h5ad_suffix: str
          File suffix used to identify .h5ad files.

        annotation_dir_suffix: str
          Directory suffix for annotations.

        annotation_file_suffix: str
          Suffix used for annotation files (default: '.csv').

        Returns:
        --------
        None
        """

        self._name = name
        enable_cache = os.environ.get(
            'S3_ENABLE_LISTINGS_CACHE', 'false'
        ).lower()
        assert enable_cache in ['0', '1', 'false', 'true']
        self.use_listings_cache = truthy(enable_cache)
        self.s3 = s3fs.S3FileSystem(use_listings_cache=self.use_listings_cache)
        if bucket.startswith('s3://'):
            raise Exception(
                f'Bucket name should not include s3:// prefix, got {bucket}'
            )
        self.bucket = bucket
        self.h5ad_suffix = h5ad_suffix
        self.annotation_dir_suffix = annotation_dir_suffix
        self.annotation_file_suffix = annotation_file_suffix

    def url(self, key):
        """
        Construct full S3 URL from key.

        Parameters:
        -----------
        key: str
          S3 object key.

        Returns:
        --------
        str
          Full S3 URL (e.g., 's3://bucket/key').
        """

        return 's3://' + self.bucket + '/' + key

    def remove_bucket(self, filepath):
        """
        Remove bucket prefix from full S3 path.

        Parameters:
        -----------
        filepath: str
          Full S3 path (e.g., 'bucket/key').

        Returns:
        --------
        str
          Relative key without bucket name.
        """

        return filepath[len(self.bucket) :].lstrip('/')

    @property
    def name(self):
        """
        Name of S3-based source.

        Returns:
        --------
        str
          Source name or default representation based on base path.
        """
        return self._name or f'Items:{self.url("")}'

    def is_h5ad_url(self, s3url: str) -> bool:
        """
        Check if S3 URL points to .h5ad file.

        Parameters:
        -----------
        s3url: str
          Full S3 URL.

        Returns:
        --------
        bool
          True if URL ends with .h5ad suffix and exists in S3, otherwise False.
        """

        return s3url.endswith(self.h5ad_suffix) and self.s3.exists(s3url)

    def convert_annotation_key_to_h5ad(self, s3key):
        """
        Convert annotation directory key to corresponding .h5ad key.

        Parameters:
        -----------
        s3key: str
          S3 key for annotation directory.

        Returns:
        --------
        str
          S3 key for corresponding .h5ad file.
        """

        return s3key[: -len(self.annotation_dir_suffix)] + self.h5ad_suffix

    def convert_h5ad_key_to_annotation(self, s3key):
        """
        Convert .h5ad file key to corresponding annotation directory key.

        Parameters:
        -----------
        s3key: str
          S3 key for .h5ad file.

        Returns:
        --------
        str
          S3 key for annotation directory.
        """

        return s3key[: -len(self.h5ad_suffix)] + self.annotation_dir_suffix

    def get_local_path(self, item: S3Item) -> str:
        """
        Get full S3 URL for given item.

        Parameters:
        -----------
        item: S3Item
          Item for which path is requested.

        Returns:
        --------
        str
          Full S3 URL for item.
        """
        return self.url(item.descriptor)

    def get_annotations_subpath(self, item) -> str:
        """
        Get annotation subpath for given item.

        Parameters:
        -----------
        item: S3Item
          Item for which annotations are requested.

        Returns:
        --------
        str
          S3 key for annotation directory.
        """

        return self.convert_h5ad_key_to_annotation(item.descriptor)

    def list_items(self, filter: str = None) -> ItemTree:
        """
        List all items in S3 bucket under given filter path, optionally
        filtered.

        Parameters:
        -----------
        filter: str, optional
          Prefix path to filter S3 items.

        Returns:
        --------
        item_tree: ItemTree
          Tree structure of items and directories.
        """

        item_tree = self.scan_directory('' if filter is None else filter)
        return item_tree

    @property
    def refresh(self):
        """
        Determine whether to force-refresh S3 listings.

        Returns:
        --------
        bool
          True if cache should be bypassed, otherwise False.
        """

        return (
            truthy(flask.request.args.get('refresh', default='false'))
            or not self.use_listings_cache
        )

    def scan_directory(self, directory_key='') -> dict:
        """
        Recursively scan S3 directory and build ItemTree.

        Parameters:
        -----------
        directory_key: str, optional
          S3 prefix path to scan.

        Returns:
        --------
        ItemTree(directory_key, items, branches): ItemTree
          Tree of items and subdirectories.
        """

        url = self.url(directory_key)

        if not self.s3.exists(url):
            raise Exception(f"S3 url '{url}' does not exist.")

        s3key_map = dict(
            (self.remove_bucket(filepath), 's3://' + filepath)
            for filepath in sorted(self.s3.ls(url, refresh=self.refresh))
        )

        def is_annotation_dir(dir_s3key):
            """
            Check if directory is annotation directory with corresponding
            .h5ad file.

            Parameters:
            -----------
            dir_s3key: str
              S3 key representing  directory to check.

            Returns:
            --------
            bool
              True if directory matches annotation suffix and corresponding
              .h5ad file exists.
            """

            return (
                dir_s3key.endswith(self.annotation_dir_suffix)
                and self.convert_annotation_key_to_h5ad(dir_s3key) in h5ad_keys
            )

        h5ad_keys = [
            filepath
            for filepath, item_url in s3key_map.items()
            if self.is_h5ad_url(item_url)
        ]

        subdir_keys = [
            filepath
            for filepath, item_url in s3key_map.items()
            if self.s3.isdir(item_url) and not is_annotation_dir(filepath)
        ]

        items = [
            self.make_s3item_from_key(basename(key), key) for key in h5ad_keys
        ]
        branches = None
        if len(subdir_keys) > 0:
            branches = [self.scan_directory(key) for key in subdir_keys]
            branches = [
                branch for branch in branches if branch.items or branch.branches
            ]

        return ItemTree(directory_key, items, branches)

    def create_annotation(self, item: S3Item, name: str) -> S3Item:
        """
        Create new annotation item for given .h5ad S3 item.

        Parameters:
        -----------
        item: S3Item
          Base .h5ad item to annotate.

        name: str
          Name of annotation file to create.

        Returns:
        --------
        annotation: S3Item
          New annotation item.
        """

        annotation = self.make_s3item_from_key(
            name, self.get_annotations_subpath(item), is_annotation=True
        )
        item.annotations = (item.annotations or []).append(annotation)
        return annotation

    def update(self, item: S3Item) -> None:
        """
        Update an item. Currently no-op for S3-based sources.

        Parameters:
        -----------
        None
        """
        pass

    def is_authorized(self, descriptor):
        """
        Always returns True for S3 files (no access control).

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

    def lookup_item(self, descriptor):
        """
        Look up shallow S3 item by descriptor.

        Parameters:
        -----------
        descriptor: str
          Relative S3 key.

        Returns:
        --------
        S3Item or None
          item if found, else None.
        """

        full_path = self.url(descriptor)
        if self.is_h5ad_url(full_path):
            return self.shallowitem_from_descriptor(descriptor)

    def lookup(self, indescriptor: str) -> LookupResult:
        """
        Look up .h5ad or annotation item by descriptor.

        Parameters:
        -----------
        indescriptor: str
          S3 key of item to look up.

        Returns:
        --------
        LookupResult or None
          Result with item and optional annotation.
        """

        descriptor = indescriptor.strip('/')
        if descriptor.endswith(self.annotation_file_suffix):
            annotation_item = self.shallowitem_from_descriptor(descriptor, True)
            if not self.s3.exists(self.url(annotation_item.s3key)):
                with self.s3.open(self.url(annotation_item.s3key), 'w') as f:
                    f.write('')
            h5ad_descriptor = self.convert_annotation_key_to_h5ad(
                dirname(annotation_item.s3key)
            )
            item = self.shallowitem_from_descriptor(h5ad_descriptor)
            return LookupResult(item, annotation_item)
        else:
            item = self.lookup_item(descriptor)
            if item is not None:
                return LookupResult(item)

    def shallowitem_from_descriptor(self, descriptor, is_annotation=False):
        """
        Create shallow S3Item from descriptor.

        Parameters:
        -----------
        descriptor: str
          S3 key.

        is_annotation: bool, optional
          Whether item is an annotation.

        Returns:
        --------
        S3Item
          Constructed S3 item.
        """

        return self.make_s3item_from_key(
            basename(descriptor), descriptor, is_annotation, True
        )

    def make_s3item_from_key(
        self, name, s3key, is_annotation=False, is_shallow=False
    ) -> S3Item:
        item = S3Item(
            s3key=s3key,
            name=name,
            type=ItemType.annotation if is_annotation else ItemType.h5ad,
        )

        if not is_annotation and not is_shallow:
            annotations = self.make_annotations_for_fileitem(item)
            item.annotations = annotations

        return item

    def make_annotations_for_fileitem(self, item: S3Item) -> List[S3Item]:
        """
        Construct S3Item from key details.

        Parameters:
        -----------
        name: str
          File name.

        s3key: str
          S3 key (path within bucket).

        is_annotation: bool, optional
          Whether item is an annotation.

        is_shallow: bool, optional
          If True, annotations won't be loaded.

        Returns:
        --------
        S3Item
          Constructed item.
        """

        annotations_subpath = self.get_annotations_subpath(item)
        annotations_fullpath = self.url(annotations_subpath)
        if self.s3.isdir(annotations_fullpath):
            return [
                self.make_s3item_from_key(
                    basename(annotation), self.remove_bucket(annotation), True
                )
                for annotation in sorted(
                    self.s3.ls(annotations_fullpath, refresh=self.refresh)
                )
                if annotation.endswith(self.annotation_file_suffix)
                and self.s3.isfile('s3://' + annotation)
            ]
        else:
            return None
