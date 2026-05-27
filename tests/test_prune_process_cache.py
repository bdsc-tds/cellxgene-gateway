# Import utility modules
import unittest
from unittest.mock import patch, seal


# Import other functions from package
from cellxgene_gateway.backend_cache import BackendCache
from cellxgene_gateway.cache_key import CacheKey
from cellxgene_gateway.items.file.fileitem import FileItem
from cellxgene_gateway.items.file.fileitem_source import FileItemSource
from cellxgene_gateway.items.item import ItemType


# Create CacheKey instance using FileItem representing an .h5ad file and
# FileItemSource pointing to local directory
key = CacheKey(
    FileItem('/czi/', name='pbmc3k.h5ad', type=ItemType.h5ad),
    FileItemSource('/tmp', 'local'),
)


class TestPruneProcessCache(unittest.TestCase):
    """
    Unit tests for `PruneProcessCache`, which handles removing expired entries
    from backend cache based on a configured expiration time.

    Ensure that only expired entries are pruned and non-expired entries are
    preserved.
    """

    @patch('cellxgene_gateway.util.current_time_stamp', new=lambda: 0)
    @patch('cellxgene_gateway.env.expire_seconds', new=10)
    @patch('cellxgene_gateway.cache_entry.CacheEntry')
    @patch('cellxgene_gateway.cache_entry.CacheEntry')
    def test_GIVEN_one_old_one_new_THEN_prune_old(self, old, new):
        """
        Test pruning logic when cache contains both expired and active entries.

        Ensures that:
        - Entries older than `expire_seconds` are removed from the cache.
        - Non-expired entries remain.
        - Expired entries have their `terminate()` method called.

        Parameters:
        -----------
        old: Mocked CacheEntry
            Represents expired cache entry with timestamp far in the past.

        new: Mocked CacheEntry
            Represents recent (non-expired) cache entry.
        """
        from cellxgene_gateway.prune_process_cache import PruneProcessCache

        cache = BackendCache()
        old.timestamp = -100
        old.foo = 12
        old.pid = 1
        old.key = key
        old.terminate.return_value = None
        seal(old)
        new.key = key
        cache.entry_list.append(old)
        new.timestamp = -5
        seal(new)
        cache.entry_list.append(new)
        self.assertEqual(len(cache.entry_list), 2)
        ppc = PruneProcessCache(cache)
        ppc.prune()
        self.assertEqual(len(cache.entry_list), 1)
        self.assertEqual(cache.entry_list[0], new)
        self.assertEqual(cache.entry_list[0], new)
        self.assertTrue(old.terminate.called)


# Entry point for running test suite
if __name__ == '__main__':
    unittest.main()
