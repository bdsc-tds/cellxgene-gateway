# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import utility modules
import time
import socket
from http import HTTPStatus
from threading import Thread
from typing import List


# Import other functions from package
from cellxgene_gateway import env
from cellxgene_gateway.cache_entry import CacheEntry, CacheEntryStatus
from cellxgene_gateway.cache_key import CacheKey
from cellxgene_gateway.cellxgene_exception import CellxgeneException
from cellxgene_gateway.subprocess_backend import SubprocessBackend


# Instantiate process backend
process_backend = SubprocessBackend()


def is_port_in_use(port):
    """
    Check if a given port is already in use.

    Parameters:
    -----------
    port: int
      Port number to check.

    Returns:
    --------
    bool
      True if port is in use, otherwise False.
    """
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(("localhost", port)) == 0


class BackendCache:
    """
    Class to manage backend processes and associated resources such as ports.
    """

    def __init__(self):
        """
        Initialise BackendCache with an empty list of entries.

        Returns:
        --------
        None
        """
        self.entry_list = []

    def get_ports(self):
        """
        Retrieve list of ports currently in use by cache entries.
        """
        contents = self.entry_list
        return [c.port for c in contents]

    def check_path(self, source, path):
        """
        Check if given path matches any entry in cache for a specific source.

        Parameters:
        -----------
        source: object
          Represents source of the cache entry, typically containing metadata
          such as name of the source
        path: str
          Path to be checked against cache entries. It is used to determine if
          it starts with the descriptor of any cache entry.

        Returns:
        --------
        CacheEntry, CellxgeneException or None: object or None
          Returns matching cache entry if one is found, raises an exception
          if multiple matches are found, and returns None if no matches exist.
        """
        contents = self.entry_list
        matches = [
            c
            for c in contents
            if c.key.source.name == source.name
            and path.startswith(c.key.descriptor)
            and c.status != CacheEntryStatus.terminated
        ]

        if len(matches) == 0:
            return None
        elif len(matches) == 1:
            return matches[0]
        else:
            raise CellxgeneException(
                HTTPStatus.INTERNAL_SERVER_ERROR,
                "Found " + str(len(matches)) + " for " + path,
            )

    def check_entry(self, key):
        """
        Check if specific key matches any entry in the cache.

        Parameters:
        -----------
        key: CacheKey
          Key to be checked against cache entries. It typically contains metadata
          such as source and descriptor of cache entry.

        Returns:
        --------
        CacheEntry, CellxgeneException or None: object or None
          Returns matching cache entry if one is found, raises an exception
          if multiple matches are found, and returns None if no matches exist.
        """
        contents = self.entry_list
        matches = [
            c
            for c in contents
            if c.key.equals(key) and c.status != CacheEntryStatus.terminated
        ]

        if len(matches) == 0:
            return None
        elif len(matches) == 1:
            return matches[0]
        else:
            raise CellxgeneException(
                HTTPStatus.INTERNAL_SERVER_ERROR,
                "Found " + str(len(matches)) + " for " + key.dataset,
            )

    def create_entry(self, key: CacheKey, scripts: List[str]):
        """
        Create a new cache entry for a given key and a list of scripts. Finds an
        available port, launches background thread to start process, and adds
        new entry to cache.

        Parameters:
        -----------
        key: CacheKey
          Unique key representing cache entry.
        scripts: List[str]
          List of script paths to be executed as part of the backend process.

        Returns:
        --------
        CacheEntry: object
          Newly created cache entry.
        """
        port = 8000
        existing_ports = self.get_ports()

        while (port in existing_ports) or is_port_in_use(port):
            port += 1

        entry = CacheEntry.for_key(key, port)
        background_thread = Thread(
            target=process_backend.launch,
            args=(env.cellxgene_location, scripts, entry),
        )
        background_thread.start()
        self.entry_list.append(entry)
        time.sleep(1)  # Automatic refresh is too fast, needs a second to pause

        return entry

    def prune(self, process):
        """
        Remove a process from cache and terminate it.

        Parameters:
        -----------
        process: CacheEntry
          Cache entry representing the process to be removed and terminated.

        Returns:
        --------
        None
        """
        self.entry_list.remove(process)
        process.terminate()
