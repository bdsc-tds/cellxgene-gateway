# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import other functions from package
from cellxgene_gateway.items.item import Item


class S3Item(Item):
    """
    Class to represent S3-based dataset or annotation item with path and
    optional extension.

    Inherits:
    ---------
    Item: Abstract base class defining core interface for data items.
    """

    def __init__(self, s3key: str, *args, **kwargs):
        """
        Initialise S3Item. Item superclass expects 'name' and 'type'.

        Parameters:
        -----------
        s3key: str
            Full key (path) of object in S3 bucket.

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
        self.s3key = s3key

    @property
    def descriptor(self) -> str:
        """
        Return unique descriptor for item.

        Returns:
        --------
        str
          S3 key for object.
        """

        return self.s3key
