# Import utility modules
import tempfile
import unittest
from unittest.mock import patch


# Import other functions from package
from cellxgene_gateway.items.file.fileitem_source import FileItemSource


# Replace `path.join` with stub that concatenates paths using "/"
def stub_join(path):
    path.join = lambda x, y: x + '/' + y


class TestFileItemSource(unittest.TestCase):
    """
    Unit tests the `FileItemSource` class.

    Verify file and directory behavior for building item trees and creating
    `FileItem` instances based on local filesystem paths.
    """

    @patch('os.path')
    @patch('os.listdir')
    def test_list_items_GIVEN_no_subpath_THEN_checks_dir(self, listdir, path):
        """
        Test that `list_items` checks the base directory when no subpath is provided.

        Parameters:
        -----------
        listdir: unittest.mock.Mock
            Mocked `os.listdir` function.
        path: unittest.mock.Mock
            Mocked `os.path` module for intercepting filesystem checks.
        """

        stub_join(path)
        source = FileItemSource('/tmp/unittest', 'local')
        source.list_items()
        path.exists.assert_called_once_with('/tmp/unittest/')

    @patch('os.path')
    @patch('os.listdir')
    def test_list_items_GIVEN_subpath_THEN_checks_subpath(self, listdir, path):
        """
        Test that `list_items` checks specified subpath when provided.

        Parameters:
        -----------
        listdir: unittest.mock.Mock
            Mocked `os.listdir` function.
        path: unittest.mock.Mock
            Mocked `os.path` module for intercepting filesystem checks.
        """

        stub_join(path)
        source = FileItemSource('/tmp/unittest', 'local')
        source.list_items('foo')
        path.exists.assert_called_once_with('/tmp/unittest/foo')

    def test_make_fileitem_from_path_GIVEN_annotation_file_THEN_name_lacks_csv(
        self,
    ):
        """
        Test that `make_fileitem_from_path` correctly strips `.csv` from
        annotation filenames.
        """

        source = FileItemSource(tempfile.gettempdir(), 'local')
        item = source.make_fileitem_from_path(
            'customanno.csv', 'someh5ad_annotations', True
        )
        self.assertEqual(item.name, 'customanno')
        self.assertEqual(item.descriptor, 'someh5ad_annotations/customanno.csv')

    def test_make_fileitem_from_path_GIVEN_h5ad_file_THEN_returns_name(self):
        """
        Test that `make_fileitem_from_path` for `.h5ad` files returns full
        filename.
        """

        source = FileItemSource(tempfile.gettempdir(), 'local')
        item = source.make_fileitem_from_path('someanalysis.h5ad', 'studydir')
        self.assertEqual(item.name, 'someanalysis.h5ad')
        self.assertEqual(item.descriptor, 'studydir/someanalysis.h5ad')
