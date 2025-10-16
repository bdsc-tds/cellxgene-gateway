# Import utility modules
import unittest
from unittest.mock import MagicMock, patch


# Import other functions from package
from cellxgene_gateway.dir_util import (
    ensure_dir_exists,
    make_annotations,
    make_h5ad,
)


class TestMakeH5ad(unittest.TestCase):
    """
    Unit tests for `make_h5ad` function.

    Validate conversion from annotation directory names to corresponding .h5ad
    file names.
    """

    def test_GIVEN_annotation_dir_THEN_returns_h5ad(self):
        """
        Test that annotation directory name returns correct .h5ad filename.

        Input:
        ------
        "pbmc_annotations": str

        Returns:
        --------
        "pbmc.h5ad": str
        """

        self.assertEqual(make_h5ad("pbmc_annotations"), "pbmc.h5ad")


class TestMakeAnnotations(unittest.TestCase):
    """
    Unit tests for `make_annotations` function.

    Check conversion from .h5ad filenames to corresponding annotation directory
    names.
    """

    def test_GIVEN_h5ad_THEN_returns_annotations(self):
        """
        Test that .h5ad filename returns correct annotation directory name.

        Input:
        ------
        "pbmc.h5ad": str

        Returns:
        --------
        "pbmc_annotations": str
        """

        self.assertEqual(make_annotations("pbmc.h5ad"), "pbmc_annotations")


class TestEnsureDirExists(unittest.TestCase):
    """
    Unit tests for `ensure_dir_exists` function.

    Test whether function correctly creates directories only when they do not
    exist.
    """

    @patch("os.path.exists")
    @patch("os.makedirs")
    def test_GIVEN_existing_THEN_does_not_call_makedir(
        self, makedirsMock, existsMock
    ):
        """
        Test that no directory is created when path already exists.

        Parameters:
        -----------
        makedirsMock: unittest.mock.Mock
          Mocked version of os.makedirs to check if it is called.

        existsMock: unittest.mock.Mock
          Mocked version of os.path.exists to simulate path existence.

        Mocks:
        ------
        os.path.exists -> returns True
        os.makedirs -> should not be called
        """

        existsMock.return_value = True
        ensure_dir_exists("/foo")
        makedirsMock.assert_not_called()

    @patch("os.path.exists")
    @patch("os.makedirs")
    def test_GIVEN_not_existing_THEN_calls_makedir(
        self, makedirsMock, existsMock
    ):
        """
        Test that directory is created when path does not exist.

        Parameters:
        -----------
        makedirsMock: unittest.mock.Mock
          Mocked version of os.makedirs to verify it's called.

        existsMock: unittest.mock.Mock
          Mocked version of os.path.exists to simulate path absence.

        Mocks:
        ------
        os.path.exists -> returns False
        os.makedirs -> should be called once with given path
        """

        existsMock.return_value = False
        ensure_dir_exists("/foo")
        makedirsMock.assert_called_once_with("/foo")
