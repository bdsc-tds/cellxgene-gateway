# Copyright 2019 Novartis Institutes for BioMedical Research Inc. Licensed
# under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless
# required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, either express or implied. See the License for
# the specific language governing permissions and limitations under the License.


# Import utility modules
import logging
import subprocess
from http import HTTPStatus


# Import other functions from package
from cellxgene_gateway.cache_entry import CacheEntryStatus
from cellxgene_gateway.dir_util import make_annotations
from cellxgene_gateway.env import (
    cellxgene_args,
    enable_annotations,
    enable_backed_mode,
)
from cellxgene_gateway.cellxgene_exception import CellxgeneException


# Set up logger for logging messages within this module
logger = logging.getLogger(__name__)


class SubprocessBackend:
    """
    Backend class to launch Cellxgene datasets via subprocesses.
    """

    def __init__(self):
        """
        Initialise SubprocessBackend. No specific setup is required.

        Returns:
        --------
        None
        """
        pass

    def create_cmd(
        self, cellxgene_loc, file_path, port, scripts, annotation_file_path
    ):
        """
        Construct command to launch Cellxgene with optional annotations and
        scripts.

        Parameters:
        -----------
        cellxgene_loc: str
          Path to Cellxgene executable.

        file_path: str
          Path to dataset (.h5ad file).

        port: int
          Port number on which to launch server.

        scripts: list[str]
          List of paths to extra JavaScript files to inject into UI.

        annotation_file_path: str or None
          Path to annotation .csv file, if available.

        Returns:
        --------
        cmd: str
          Full shell command to run Cellxgene.
        """
        if enable_annotations and annotation_file_path is not None:
            if annotation_file_path == '':
                extra_args = f' --annotations-dir {make_annotations(file_path)}'
            else:
                extra_args = f' --annotations-file {annotation_file_path}'
                gene_sets_file_path = (
                    annotation_file_path[:-4] + '_gene_sets.csv'
                )
                extra_args += f' --gene-sets-file {gene_sets_file_path}'
        else:
            extra_args = ' --disable-annotations'
            extra_args += ' --disable-gene-sets-save'
        if enable_backed_mode:
            extra_args += ' --backed'
        if cellxgene_args is not None:
            extra_args += f' {cellxgene_args}'

        cmd = (
            f'yes | {cellxgene_loc} launch {file_path}'
            + f' --port {port}'
            + ' --host 127.0.0.1'
            + extra_args
        )

        for s in scripts:
            cmd += f' --scripts {s}'

        return cmd

    def launch(self, cellxgene_loc, scripts, cache_entry):
        """
        Launch Cellxgene process for given cache entry.

        Parameters:
        -----------
        cellxgene_loc: str
          Path to Cellxgene executable.

        scripts: list[str]
          List of script URLs or paths to inject.

        cache_entry: CacheEntry
          Entry describing dataset and launch parameters.

        Returns:
        --------
        None
        """
        cmd = self.create_cmd(
            cellxgene_loc,
            cache_entry.key.file_path,
            cache_entry.port,
            scripts,
            cache_entry.key.annotation_file_path,
        )
        logger.info(f'Launching {cmd}')
        process = subprocess.Popen(
            [cmd], stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True
        )

        while True:
            output = process.stdout.readline().decode()
            if output == '[cellxgene] Type CTRL-C at any time to exit.\n':
                break
            elif output == '':
                stderr = process.stderr.read().decode()
                if (
                    'Error while loading file' in stderr
                    or 'Could not open file' in stderr
                ):
                    message = 'File was invalid.'
                    http_status = HTTPStatus.BAD_REQUEST
                else:
                    message = 'Cellxgene failed to launch dataset.'
                    http_status = HTTPStatus.INTERNAL_SERVER_ERROR

                cache_entry.status = CacheEntryStatus.error
                cache_entry.set_error(message, stderr, http_status)

                raise CellxgeneException.from_cache_entry(cache_entry)
            else:
                cache_entry.append_output(output)

        cache_entry.set_loaded(process.pid)
        for output in process.communicate():
            logger.debug(f'cellxgene:{output}')
        logger.info(f'Exiting {cmd}')
