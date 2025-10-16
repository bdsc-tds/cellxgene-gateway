# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.

# There are three kinds of CacheKey:
# 1) somedir/dataset.h5ad: a dataset
#    in this case, descriptor == dataset == 'somedir/dataset.h5ad'
# 2) somedir/dataset_annotations/my_annotations.csv: an actual annotations file
#    in this case, descriptor == 'somedir/dataset_annotations/my_annotations.csv', dataset == 'somedir/dataset.h5ad'
# 3) somedir/dataset_annotations: an annotation directory. The corresponding h5ad must exist, but the directory may not
#    in this case, descriptor == 'somedir/dataset_annotations', dataset == 'somedir/dataset.h5ad'


# Import other functions from package
from cellxgene_gateway import flask_util
from cellxgene_gateway.items.item import Item
from cellxgene_gateway.items.item_source import ItemSource, LookupResult


class CacheKey:
    """
    Class to represent a unique identifier for cached data, including h5ad item,
    optional annotation item, and data source.
    """

    def __init__(
        self, h5ad_item: Item, source: ItemSource, annotation_item: Item = None
    ):
        """
        Initialise new CacheKey with provided parameters.

        Parameters:
        -----------
        h5ad_item: Item
          h5ad item associated with cache key.

        source: ItemSource
          Source associated with cache key.

        annotation_item: Item or None
          Optional annotation item associated with cache key.

        Returns:
        --------
        None
        """
        assert h5ad_item is not None
        assert source is not None
        self.h5ad_item = h5ad_item
        self.annotation_item = annotation_item
        self.source = source

    @property
    def descriptor(self):
        """
        Get descriptor of cache key.

        Returns:
        --------
        *.annotation_item.descriptor: str
          If annotation item exists, returns descriptor of annotation item,
          otherwise return descriptor of h5ad item.
        """
        if self.annotation_item is None:
            return self.h5ad_item.descriptor
        else:
            return self.annotation_item.descriptor

    @property
    def file_path(self):
        """
        Get file path for h5ad item associated with cache key.

        Returns:
        --------
        str
          Local file path of h5ad item.
        """
        return self.source.get_local_path(self.h5ad_item)

    @property
    def annotation_file_path(self):
        """
        Get file path for annotation item associated with cache key.

        Returns:
        --------
        str or None
          Local file path of annotation item, or None if no annotation item
          exists.
        """
        if self.annotation_item is None:
            return None
        else:
            return self.source.get_local_path(self.annotation_item)

    def relaunch_url(self):
        """
        Generate URL to relaunch cache key based on descriptor and source name.

        Returns:
        --------
        str
          URL to relaunch cache key.
        """
        return flask_util.relaunch_url(self.descriptor, self.source_name)

    def gateway_basepath(self):
        """
        Get base path for gateway associated with cache key.

        Returns:
        --------
        *.view_url: str
          Base URL of gateway associated with cache key.
        """
        return self.view_url + "/"

    @property
    def view_url(self):
        """
        Get view URL for cache key based on descriptor and source name.

        Returns:
        --------
        str
          View URL of cache key.
        """
        return flask_util.view_url(self.descriptor, self.source_name)

    @property
    def source_name(self):
        """
        Get name of source associated with cache key.

        Returns:
        --------
        *.source.name: str
          Name of source associated with cache key.
        """
        return self.source.name

    @property
    def annotation_descriptor(self):
        """
        Get descriptor of annotation item.

        Returns:
        --------
        *.annotation_item.descriptor: str or None
          Descriptor of annotation item, or None if no annotation item exists.
        """
        if self.annotation_item is None:
            return None
        else:
            return self.annotation_item.descriptor

    def equals(self, other):
        """
        Compare two CacheKey objects for equality.

        Parameters:
        -----------
        other: CacheKey
          Other CacheKey object to compare.

        Returns:
        --------
        bool
          True if two CacheKey objects are equal, otherwise False.
        """
        return (
            (self.source.name == other.source.name)
            and (self.h5ad_item.descriptor == other.h5ad_item.descriptor)
            and (self.annotation_descriptor == other.annotation_descriptor)
        )

    @classmethod
    def for_lookup(cls, source: ItemSource, lookup: LookupResult):
        """
        Create CacheKey for lookup result.

        Parameters:
        -----------
        source: ItemSource
          Source associated with the cache key.

        lookup: LookupResult
          Lookup result containing h5ad item and optional annotation item.

        Returns:
        --------
        CacheKey
          New CacheKey created from lookup result.
        """
        return CacheKey(lookup.h5ad_item, source, lookup.annotation_item)
