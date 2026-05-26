# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


class CacheException(Exception):
    """
    Custom exception class to handle errors related to Cellxgene file cache.
    This exception is raised when there are issues with Cellxgene file access.
    """

    def __init__(self, message, http_status, context=None, filename=None):
        """
        Initialise CacheException with a message and an HTTP status.

        Parameters:
        -----------
        message: str
          Error message describing exception.

        http_status: int
          HTTP status code related to exception.

        context: str or None
          Optional hint for the error template (e.g. 'download').

        filename: str or None
          Optional filename that caused the error, for display in template.

        Returns:
        --------
        None
        """
        Exception.__init__(self)
        self.message = message
        self.http_status = http_status
        self.context = context
        self.filename = filename
