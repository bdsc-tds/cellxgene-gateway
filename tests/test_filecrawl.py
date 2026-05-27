# Import utility modules
import unittest
from collections import defaultdict
from unittest.mock import patch


# Import other functions from package
from cellxgene_gateway.filecrawl import (
    render_item,
    render_item_source,
    render_item_tree,
)
from cellxgene_gateway.items.file.fileitem import FileItem
from cellxgene_gateway.items.file.fileitem_source import FileItemSource
from cellxgene_gateway.items.item import ItemTree, ItemType


# Initialise FileItemSource pointing to /tmp directory
source = FileItemSource('/tmp')


def make_entry(subpath='somepath', annotations=None):
    """
    Create mock FileItem representing an .h5ad file.

    Parameters:
    -----------
    subpath: str, optional
        Subpath under which file is located. Default is "somepath".

    annotations: list, optional
        Optional list of annotations associated with FileItem.

    Returns:
    --------
    FileItem
        FileItem instance with given path and type set to .h5ad.
    """

    return FileItem(
        subpath=subpath,
        name='entry',
        ext='.h5ad',
        type=ItemType.h5ad,
        annotations=annotations,
    )


class TestRenderEntry(unittest.TestCase):
    """
    Unit tests for `render_item` to verify correct rendering of paths with
    different subpath formats (slashes at start/end).

    Ensure that paths with varying leading and trailing slashes in subpath are
    normalized correctly, resulting in a consistent URL with exactly one slash
    separating components.
    """

    def test_GIVEN_path_both_slash_THEN_view_has_single_slash(self):
        """
        Test rendering when subpath has both leading and trailing slashes.
        """

        entry = make_entry(subpath='/somepath/')
        rendered = render_item(entry, source)
        self.assertIn("view/somepath/entry.h5ad/'", rendered)

    def test_GIVEN_path_starts_slash_THEN_view_has_single_slash(self):
        """
        Test rendering when subpath starts with a leading slash only.
        """

        entry = make_entry(subpath='/somepath')
        rendered = render_item(entry, source)
        self.assertIn("view/somepath/entry.h5ad/'", rendered)

    def test_GIVEN_path_ends_slash_THEN_view_has_single_slash(self):
        """
        Test rendering when subpath ends with a trailing slash only.
        """

        entry = make_entry(subpath='somepath/')
        rendered = render_item(entry, source)
        self.assertIn("view/somepath/entry.h5ad/'", rendered)

    def test_GIVEN_path_no_slash_THEN_view_has_single_slash(self):
        """
        Test rendering when subpath has no slashes.
        """

        entry = make_entry(subpath='somepath')
        rendered = render_item(entry, source)
        self.assertIn("view/somepath/entry.h5ad/'", rendered)


class TestRenderAnnotation(unittest.TestCase):
    """
    Unit tests for `render_item` function to verify correct rendering of
    annotations.

    Test focus on rendering behavior when annotations are enabled.
    """

    @patch('cellxgene_gateway.filecrawl.enable_annotations', new=True)
    def test_GIVEN_no_annotation_THEN_new_alone(self):
        """
        Test rendering when no annotations are present.
        """

        entry = make_entry(annotations=None)
        rendered = render_item(entry, source)
        self.assertIn(
            "> | annotations: <a class='new' href='/source/Files:/tmp/view/somepath/entry_annotations'>new</a></li>",
            rendered,
        )

    @patch('cellxgene_gateway.filecrawl.enable_annotations', new=True)
    def test_GIVEN_annotation_THEN_new_before(self):
        """
        Test rendering when at least one annotation exists.
        """

        annotation = FileItem(
            subpath='somepath/entry_annotations',
            name='annot',
            ext='.csv',
            type=ItemType.annotation,
        )
        entry = make_entry(annotations=[annotation])
        rendered = render_item(entry, source)
        self.assertIn(
            "> | annotations: <a class='new' href='/source/Files:/tmp/view/somepath/entry_annotations'>new</a>,"
            " <a href='/source/Files:/tmp/view/somepath/entry_annotations/annot.csv/'>annot</a></li>",
            rendered,
        )

    @patch('cellxgene_gateway.filecrawl.enable_annotations', new=True)
    def test_GIVEN_annotation_THEN_escaped(self):
        """
        Test rendering when annotation names include characters requiring HTML
        escaping.
        """

        annotation = FileItem(
            subpath='somepath/entry_annotations',
            name='hot&cold',
            ext='.csv',
            type=ItemType.annotation,
        )
        entry = make_entry(annotations=[annotation])
        rendered = render_item(entry, source)
        self.assertIn(
            "> | annotations: <a class='new' href='/source/Files:/tmp/view/somepath/entry_annotations'>new</a>,"
            " <a href='/source/Files:/tmp/view/somepath/entry_annotations/hot&cold.csv/'>hot&amp;cold</a></li>",
            rendered,
        )


class TestRenderItemSource(unittest.TestCase):
    """
    Unit tests for `render_item_source` function.

    Verify that rendered HTML output for a given `ItemSource` includes correct
    headings and structure based on provided filter and source name.
    """

    @patch('cellxgene_gateway.items.file.fileitem_source.FileItemSource')
    def test_GIVEN_some_filter_THEN_includes_filterpart_in_heading(
        self, item_source
    ):
        """
        Test rendering of item source when filter is applied.

        Parameters:
        -----------
        item_source: Mock
            Mocked instance of FileItemSource, with name and dummy item tree.
        """

        item_source.name = 'FakeSource'
        item_source.list_items.return_value = ItemTree('rootdir', [], [])
        rendered = render_item_source(item_source, 'some_filter')
        self.assertEqual(
            rendered,
            "<h6><a href='/filecrawl?source=FakeSource'>FakeSource</a>:some_filter</h6><li><a href='/filecrawl/rootdir?source=FakeSource'>rootdir</a><ul></ul></li>",
        )


class TestRenderItemTree(unittest.TestCase):
    """
    Unit tests for `render_item_tree` function.

    Verifies correct rendering of nested file and directory structures into HTML,
    based on `ItemTree` and the behavior of associated item sources.
    """

    def setUp(self):
        """
        Set up Flask test client and application context.

        Executed before each test to initialize Flask `test_request_context` and
        client used for simulating requests.
        """

        from cellxgene_gateway.gateway import app

        self.app = app
        self.app_context = self.app.test_request_context()
        self.app_context.push()

    @patch('cellxgene_gateway.items.file.fileitem_source.FileItemSource')
    def test_GIVEN_deep_nested_dirs_THEN_includes_dirs_in_output(
        self, item_source
    ):
        """
        Test that deeply nested directories are correctly included in rendered
        output.

        Parameters:
        -----------
        item_source: Mock
            Mocked FileItemSource instance with fixed name and annotation path
            behavior.
        """

        item_source.name = 'FakeSource'
        item_source.get_annotations_subpath = lambda _: 'FakeAnnotations'
        file_item = FileItem(
            subpath='foo/bar/baz', name='file.h5ad', type=ItemType.h5ad
        )
        item_tree = ItemTree('foo/bar/baz', [file_item], [])
        rendered = render_item_tree(item_tree, item_source)
        self.assertEqual(
            rendered,
            "<li><a href='/filecrawl/foo/bar/baz?source=FakeSource'>baz</a><ul>"
            "<li> <a href='/source/FakeSource/view/foo/bar/baz/file.h5ad/'>file.h5ad</a>"
            ' </li></ul></li>',
        )

    @patch(
        'os.listdir',
        side_effect=lambda parent: defaultdict(
            list, {'tmp': ['foo'], 'tmp/foo': ['bar']}
        )[parent],
    )
    @patch('os.path.exists', return_value=True)
    def test_GIVEN_dirs_without_h5ad_THEN_excludes_dirs_in_output(
        self, listdir, exists
    ):
        """
        Test that directories without .h5ad files are excluded from rendered
        output.

        Test directory structure:
        - tmp
          - foo
            - bar (no h5ad files)

        Parameters:
        -----------
        listdir: Mock
            Mocked version of `os.listdir` returning nested directory contents.

        exists: Mock
            Mocked version of `os.path.exists` returning True for all paths.
        """

        item_source = FileItemSource('tmp', name='local')
        item_tree = item_source.list_items('foo')
        rendered = render_item_tree(item_tree, item_source)
        self.assertEqual(
            rendered,
            "<li><a href='/filecrawl/foo?source=local'>foo</a><ul></ul></li>",
        )
