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


# Import other functions from package
from cellxgene_gateway.items.item import Item


class FileItem(Item):
    """
    Class to represent file-based dataset or annotation item with path and
    optional extension.

    Inherits:
    ---------
    Item: Abstract base class defining core interface for data items.
    """

    def __init__(self, subpath: str, ext: str = '', *args, **kwargs):
        """
        Initialise FileItem. Item superclass expects 'name' and 'type'.

        Parameters:
        -----------
        subpath: str
          Relative path to file within data source.

        ext: str, optional
          File extension (e.g., '.h5ad' or '.csv').

        *args, **kwargs :
          Additional arguments passed to Item superclass.

        Returns:
        --------
        None

        Example:
        --------
        FileItem(subpath = subpath, name = filename, type = ItemType.h5ad)
        """

        super().__init__(*args, **kwargs)
        self.subpath = subpath
        self.ext = ext

    @property
    def descriptor(self) -> str:
        """
        Build relative file path for this item, combining subpath, name, and
        extension.

        Returns:
        --------
        str
          Item relative path.
        """

        return os.path.join(self.subpath, self.name + self.ext).strip('/')
