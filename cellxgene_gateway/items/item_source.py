# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import utility modules
from abc import ABC, abstractmethod
from typing import List


# Import other functions from package
from cellxgene_gateway.items.item import Item


class LookupResult:
    """
    Class to hold Lookup result containing h5ad and optional annotation items.
    """

    def __init__(self, h5ad_item: Item, annotation_item: Item = None):
        """
        Initialise LookupResult.

        Parameters:
        -----------
        h5ad_item: Item
          Primary h5ad data item.

        annotation_item: Item, optional
          Associated annotation item, if available.

        Returns:
        --------
        None
        """

        self.h5ad_item = h5ad_item
        self.annotation_item = annotation_item


class ItemSource(ABC):
    """
    Abstract base class to manage and interact with data item sources.
    """

    @abstractmethod
    def list_items(self, filter: str = None) -> List[Item]:
        """
        List all items, optionally filtered by a string.

        Parameters:
        -----------
        filter: str, optional
          Filter string to limit listed items.

        Returns:
        --------
        None

        Raises:
        -------
        Exception
          Placeholder for 'list_items' method to be implemented by subclasses.
        """
        raise Exception('"list_items" unimplemented')

    @abstractmethod
    def get_local_path(self, item: Item) -> str:
        """
        Get local filesystem path for given item.

        Parameters:
        -----------
        item: Item
          Item for which path is requested.

        Returns:
        --------
        None

        Raises:
        -------
        Exception
          Placeholder for 'local_path' method to be implemented by subclasses.
        """
        raise Exception('"local_path" unimplemented')

    @abstractmethod
    def get_annotations_subpath(self, item) -> str:
        """
        Get subpath for annotations associated with given item.

        Parameters:
        -----------
        item: Item
          Item for which annotations path is requested.

        Returns:
        --------
        None

        Raises:
        -------
        Exception
          Placeholder for 'annotations_path' method to be implemented by
          subclasses.
        """
        raise Exception('"annotations_path" unimplemented')

    @abstractmethod
    def create_annotation(self, item: Item, name: str) -> Item:
        """
        Create new annotation for given item.

        Parameters:
        -----------
        item: Item
          Base item to annotate.

        name: str
          Name of new annotation.

        Returns:
        --------
        None

        Raises:
        -------
        Exception
          Placeholder for 'annotation' method to be implemented by subclasses.
        """
        raise Exception('"annotation" unimplemented')

    @abstractmethod
    def update(self, item: Item) -> None:
        """
        Update metadata or content of item.

        Parameters:
        -----------
        item: Item
          Item to update.

        Returns:
        --------
        None

        Raises:
        -------
        Exception
          Placeholder for 'update' method to be implemented by subclasses.
        """
        raise Exception('"update" unimplemented')

    @abstractmethod
    def is_authorized(self, descriptor: str) -> bool:
        """
        Check if user is authorized to access resource identified by descriptor.

        Parameters:
        -----------
        descriptor: str
          Descriptor such as URI or ID representing a resource.

        Returns:
        --------
        None

        Raises:
        -------
        Exception
          Placeholder for 'is_authorized' method to be implemented by
          subclasses.
        """
        raise Exception('"is_authorized" unimplemented')

    @abstractmethod
    def lookup(self, descriptor: str) -> LookupResult:
        """
        Look up item and optional annotation based on descriptor.

        Parameters:
        -----------
        descriptor: str
          String representing item to look up.

        Returns:
        --------
        None

        Raises:
        -------
        Exception
          Placeholder for 'lookup' method to be implemented by
          subclasses.
        """
        raise Exception('"lookup" unimplemented')

    @property
    @abstractmethod
    def name(self):
        """
        Get name of item source.

        Returns:
        --------
        None
          Need to be implemented by a subclass.
        """
        pass
