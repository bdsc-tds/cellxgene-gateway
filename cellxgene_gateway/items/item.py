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
from enum import Enum
from typing import List


class ItemType(Enum):
    """
    Enum class to represent possible item types

    Members:
    --------
    annotation: str
      Represents an annotation file.

    h5ad: str
      Represents an h5ad dataset file.
    """

    annotation = "annotation"
    h5ad = "h5ad"


class Item(ABC):
    """
    Abstract base class to represent data or annotation items.
    """

    def __init__(
        self, name: str, type: ItemType, annotations: List["Item"] = None
    ):
        """
        Initialise new Item.

        Parameters:
        -----------
        name: str
          Item name.

        type: ItemType
          Item type (e.g., h5ad or annotation).

        annotations: List[Item], optional
          List of annotation items linked to this item.

        Returns:
        --------
        None
        """

        self.name = name
        self.type = type
        self.annotations = annotations

    @property
    @abstractmethod
    def descriptor(self):
        """
        Placeholder for 'descriptor' method to be implemented by subclasses.
        """

        raise Exception('"descriptor" not implemented')


class ItemTree:
    """
    Class to represent tree structure of items and directories
    """

    def __init__(
        self,
        descriptor: str,
        items: List[Item] = None,
        branches: List["ItemTree"] = None,
    ):
        """
        Initialise new ItemTree node.

        Parameters:
        -----------
        descriptor: str
          Unique identifier for tree node (e.g., directory path).

        items: List[Item], optional
          List of items (files) at this tree level.

        branches: List[ItemTree], optional
          List of subtrees (subdirectories) under this node.
        """

        self.descriptor = descriptor
        self.items = items
        self.branches = branches
