# Import utility modules
import unittest
# from flask import Flask


# Import other functions from package
from cellxgene_gateway import flask_util
from cellxgene_gateway.cache_entry import CacheEntry, CacheEntryStatus
from cellxgene_gateway.cache_key import CacheKey
from cellxgene_gateway.gateway import app
from cellxgene_gateway.items.file.fileitem import FileItem
from cellxgene_gateway.items.file.fileitem_source import FileItemSource
from cellxgene_gateway.items.item import ItemType


# Create CacheKey instance using FileItem representing an .h5ad file and
# FileItemSource pointing to local directory
key = CacheKey(
    FileItem("/czi/", name="pbmc3k.h5ad", type=ItemType.h5ad),
    FileItemSource("/tmp", "local"),
)


class TestRenderEntry(unittest.TestCase):
    """
    Unit tests for `CacheEntry` rendering and URL rewriting logic.

    Test how static asset paths in HTML/CSS content are rewritten, depending on
    configuration.
    """

    def setUp(self):
        """
        Set up Flask test client and application context.

        Executed before each test to initialize Flask `test_request_context` and
        client used for simulating requests.
        """

        self.app = app
        self.app_context = self.app.test_request_context()
        self.app_context.push()
        self.client = self.app.test_client()

    def test_GIVEN_key_and_port_THEN_returns_loading_CacheEntry(self):
        """
        Test that creating `CacheEntry` with key and port returns an entry with
        status set to `CacheEntryStatus.loading`.
        """

        entry = CacheEntry.for_key("some-key", 1)
        self.assertEqual(entry.status, CacheEntryStatus.loading)

    def test_GIVEN_absolute_static_url_THEN_include_path(self):
        """
        Test that absolute CSS `url()` path is rewritten to include cache entry
        path when `include_source_in_url` is False.
        """

        flask_util.include_source_in_url = False
        actual = CacheEntry.for_key(key, 8000).rewrite_text_content(
            "src:url(/static/assets/"
        )
        expected = "src:url(/view/czi/pbmc3k.h5ad/static/assets/"
        self.assertEqual(actual, expected)

    def test_GIVEN_absolute_src_THEN_include_path(self):
        """
        Test that HTML `<link>` with absolute static URL is rewritten to include
        cache entry path when `include_source_in_url` is False.
        """

        flask_util.include_source_in_url = False
        actual = CacheEntry.for_key(key, 8000).rewrite_text_content(
            '<link rel="shortcut icon" href="/static/assets/favicon.ico">'
        )
        expected = '<link rel="shortcut icon" href="/view/czi/pbmc3k.h5ad/static/assets/favicon.ico">'
        self.assertEqual(actual, expected)

    def test_GIVEN_absolute_static_url_include_source_THEN_include_path(self):
        """
        Test that absolute CSS `url()` path is rewritten to include source path
        when `include_source_in_url` is True.
        """

        flask_util.include_source_in_url = True
        actual = CacheEntry.for_key(key, 8000).rewrite_text_content(
            "src:url(/static/assets/"
        )
        expected = "src:url(/source/local/view/czi/pbmc3k.h5ad/static/assets/"
        self.assertEqual(actual, expected)

    def test_GIVEN_absolute_src_include_source_THEN_include_path(self):
        """
        Test that HTML `<link>` with absolute static URL is rewritten to include
        source path when `include_source_in_url` is True.
        """

        flask_util.include_source_in_url = True
        actual = CacheEntry.for_key(key, 8000).rewrite_text_content(
            '<link rel="shortcut icon" href="/static/assets/favicon.ico">'
        )
        expected = '<link rel="shortcut icon" href="/source/local/view/czi/pbmc3k.h5ad/static/assets/favicon.ico">'
        self.assertEqual(actual, expected)


# Entry point for running test suite
if __name__ == "__main__":
    unittest.main()
