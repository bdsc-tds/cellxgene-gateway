# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


class ProcessException(Exception):
    """
    Custom exception class to handle dataset process failures
    """

    def __init__(self, message, stdout, stderr, http_status, key):
        """
        Initialise ProcessException with process output and metadata.

        Parameters:
        -----------
        message: str
          Error message describing failure.

        stdout: str
          Standard output from failed process.

        stderr: str
          Standard error from failed process.

        http_status: int
          HTTP status code associated with failure.

        key: CacheKey
          Cache key identifying dataset or process.

        Returns:
        --------
        None
        """
        Exception.__init__(self)
        self.message = message
        self.stdout = stdout
        self.stderr = stderr
        self.http_status = http_status
        self.key = key

    @classmethod
    def from_cache_entry(cls, cache_entry):
        """
        Create ProcessException from CacheEntry.

        Parameters:
        -----------
        cache_entry: CacheEntry
          Cache entry containing information about failed process.

        Returns:
        --------
        ProcessException
          New ProcessException initialised with cache entry's data.
        """
        return cls(
            cache_entry.message,
            cache_entry.all_output,
            cache_entry.stderr,
            cache_entry.http_status,
            cache_entry.key,
        )
