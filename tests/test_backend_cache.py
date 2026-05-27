# Import utility modules
import unittest
from http import HTTPStatus
from unittest.mock import Mock, patch


# Import other functions from package
from cellxgene_gateway.backend_cache import BackendCache, is_port_in_use
from cellxgene_gateway.cache_entry import CacheEntryStatus
from cellxgene_gateway.cache_exception import CacheException


class TestIsPortInUse(unittest.TestCase):
    """
    Unit tests for `is_port_in_use` function.

    Mock socket interface to simulate different port states and verify that
    function correctly identifies whether port is in use.
    """

    @patch('socket.socket')
    def test_GIVEN_free_port_THEN_returns_true(self, socketMock):
        """
        Test that `is_port_in_use` returns True when port is in use.

        Parameters:
        -----------
        socketMock: unittest.mock.Mock
          Mocked socket class. Its instance simulates a successful connection
          via `connect_ex`, returning 0 to indicate port is in use.
        """

        connectMock = socketMock()
        connectMock.connect_ex.return_value = 0
        connectMock.__enter__.return_value = connectMock
        self.assertEqual(is_port_in_use(123), True)
        self.assertTrue(connectMock.__enter__.calledOnce)
        self.assertTrue(connectMock.__exit__.calledOnce)
        self.assertTrue(connectMock.connect_ex.calledOnceWith('a'))
        self.assertTrue(socketMock.calledOnceWith('a'))

    @patch('socket.socket')
    def test_GIVEN_used_port_THEN_returns_false(self, socketMock):
        """
        Test that `is_port_in_use` returns False when port is free.

        Parameters:
        -----------
        socketMock: unittest.mock.Mock
          Mocked socket class. Its instance simulates a failed connection
          via `connect_ex`, returning 1 to indicate port is available.
        """

        connectMock = socketMock()
        connectMock.__enter__.return_value = connectMock
        connectMock.connect_ex.return_value = 1
        self.assertTrue(connectMock.__enter__.calledOnce)
        self.assertTrue(connectMock.__exit__.calledOnce)
        self.assertTrue(connectMock.connect_ex.calledOnceWith('a'))
        self.assertTrue(socketMock.calledOnceWith('a'))
        self.assertEqual(is_port_in_use(123), False)


class TestBackendCacheInit(unittest.TestCase):
    """
    Unit tests for `BackendCache` initialisation.

    Verify that a new `BackendCache` instance starts with the expected
    default state.
    """

    def test_GIVEN_new_backend_cache_THEN_entry_list_is_empty(self):
        """
        Test that a newly created `BackendCache` has an empty entry list.
        """

        cache = BackendCache()
        self.assertEqual(cache.entry_list, [])


class TestBackendCacheGetPorts(unittest.TestCase):
    """
    Unit tests for `BackendCache.get_ports` method.

    Verify correct retrieval of port numbers from cache entries under
    various conditions.
    """

    def test_GIVEN_empty_cache_THEN_get_ports_returns_empty_list(self):
        """
        Test that `get_ports` returns an empty list when no entries exist.
        """

        cache = BackendCache()
        ports = cache.get_ports()
        self.assertEqual(ports, [])

    def test_GIVEN_cache_with_entries_THEN_get_ports_returns_all_ports(self):
        """
        Test that `get_ports` returns the port of every entry in the cache.
        """

        cache = BackendCache()

        # Create mock entries with different ports
        entry1 = Mock()
        entry1.port = 8000
        entry2 = Mock()
        entry2.port = 8001
        entry3 = Mock()
        entry3.port = 8002

        cache.entry_list = [entry1, entry2, entry3]

        ports = cache.get_ports()
        self.assertEqual(ports, [8000, 8001, 8002])

    def test_GIVEN_single_entry_THEN_get_ports_returns_single_port(self):
        """
        Test that `get_ports` correctly handles a cache with a single entry.
        """

        cache = BackendCache()
        entry = Mock()
        entry.port = 9000

        cache.entry_list = [entry]

        ports = cache.get_ports()
        self.assertEqual(ports, [9000])


class TestBackendCacheCheckPath(unittest.TestCase):
    """
    Unit tests for `BackendCache.check_path` method.

    Verify correct matching of cache entries by source and path, including
    filtering by entry status.
    """

    def setUp(self):
        """
        Set up a fresh `BackendCache` instance before each test.
        """

        self.cache = BackendCache()

    def test_GIVEN_no_matching_path_THEN_check_path_returns_none(self):
        """
        Test that `check_path` returns None when no entry matches the path.
        """

        source = Mock()
        source.name = 'test_source'

        cache_entry = Mock()
        cache_entry.status = CacheEntryStatus.loaded
        cache_entry.key = Mock()
        cache_entry.key.source.name = 'other_source'
        cache_entry.key.descriptor = '/some/path'

        self.cache.entry_list = [cache_entry]

        result = self.cache.check_path(source, '/test/path')
        self.assertIsNone(result)

    def test_GIVEN_terminated_entry_THEN_check_path_ignores_it(self):
        """
        Test that `check_path` ignores entries with terminated status.
        """

        source = Mock()
        source.name = 'test_source'

        cache_entry = Mock()
        cache_entry.status = CacheEntryStatus.terminated
        cache_entry.key = Mock()
        cache_entry.key.source.name = 'test_source'
        cache_entry.key.descriptor = '/data'

        self.cache.entry_list = [cache_entry]

        result = self.cache.check_path(source, '/data/file.txt')
        self.assertIsNone(result)

    def test_GIVEN_single_matching_entry_THEN_check_path_returns_it(self):
        """
        Test that `check_path` returns the entry when exactly one matches.
        """

        source = Mock()
        source.name = 'test_source'

        cache_entry = Mock()
        cache_entry.status = CacheEntryStatus.loaded
        cache_entry.key = Mock()
        cache_entry.key.source.name = 'test_source'
        cache_entry.key.descriptor = '/data'

        self.cache.entry_list = [cache_entry]

        result = self.cache.check_path(source, '/data/file.txt')
        self.assertIs(result, cache_entry)

    def test_GIVEN_path_that_does_not_start_with_descriptor_THEN_check_path_returns_none(
        self,
    ):
        """
        Test that `check_path` returns None when the path does not start with
        the entry's descriptor.
        """

        source = Mock()
        source.name = 'test_source'

        cache_entry = Mock()
        cache_entry.status = CacheEntryStatus.loaded
        cache_entry.key = Mock()
        cache_entry.key.source.name = 'test_source'
        cache_entry.key.descriptor = '/data'

        self.cache.entry_list = [cache_entry]

        result = self.cache.check_path(source, '/other/file.txt')
        self.assertIsNone(result)

    def test_GIVEN_multiple_matching_entries_THEN_check_path_raises_exception(
        self,
    ):
        """
        Test that `check_path` raises `CacheException` when more than one
        entry matches the source and path.
        """

        source = Mock()
        source.name = 'test_source'

        cache_entry1 = Mock()
        cache_entry1.status = CacheEntryStatus.loaded
        cache_entry1.key = Mock()
        cache_entry1.key.source.name = 'test_source'
        cache_entry1.key.descriptor = '/data'

        cache_entry2 = Mock()
        cache_entry2.status = CacheEntryStatus.loaded
        cache_entry2.key = Mock()
        cache_entry2.key.source.name = 'test_source'
        cache_entry2.key.descriptor = '/data'

        self.cache.entry_list = [cache_entry1, cache_entry2]

        with self.assertRaises(CacheException) as context:
            self.cache.check_path(source, '/data/file.txt')

        self.assertIn('Found 2', context.exception.message)
        self.assertEqual(
            context.exception.http_status, HTTPStatus.INTERNAL_SERVER_ERROR
        )

    def test_GIVEN_mixed_entries_THEN_check_path_returns_only_matching_active_entry(
        self,
    ):
        """
        Test that `check_path` filters correctly by source, path, and status,
        returning only the single active matching entry.
        """

        source = Mock()
        source.name = 'target_source'

        # Terminated entry - should be ignored
        terminated_entry = Mock()
        terminated_entry.status = CacheEntryStatus.terminated
        terminated_entry.key = Mock()
        terminated_entry.key.source.name = 'target_source'
        terminated_entry.key.descriptor = '/data'

        # Different source - should be ignored
        other_source_entry = Mock()
        other_source_entry.status = CacheEntryStatus.loaded
        other_source_entry.key = Mock()
        other_source_entry.key.source.name = 'other_source'
        other_source_entry.key.descriptor = '/data'

        # Matching entry - should be returned
        matching_entry = Mock()
        matching_entry.status = CacheEntryStatus.loaded
        matching_entry.key = Mock()
        matching_entry.key.source.name = 'target_source'
        matching_entry.key.descriptor = '/data'

        self.cache.entry_list = [
            terminated_entry,
            other_source_entry,
            matching_entry,
        ]

        result = self.cache.check_path(source, '/data/file.txt')
        self.assertIs(result, matching_entry)


class TestBackendCacheCheckEntry(unittest.TestCase):
    """
    Unit tests for `BackendCache.check_entry` method.

    Verify correct matching of cache entries by key equality, including
    filtering by entry status.
    """

    def setUp(self):
        """
        Set up a fresh `BackendCache` instance before each test.
        """

        self.cache = BackendCache()

    def test_GIVEN_no_matching_entry_THEN_check_entry_returns_none(self):
        """
        Test that `check_entry` returns None when no entry matches the key.
        """

        key = Mock()

        cache_entry = Mock()
        cache_entry.status = CacheEntryStatus.loaded
        cache_entry.key = Mock()
        cache_entry.key.equals.return_value = False

        self.cache.entry_list = [cache_entry]

        result = self.cache.check_entry(key)
        self.assertIsNone(result)

    def test_GIVEN_terminated_entry_THEN_check_entry_ignores_it(self):
        """
        Test that `check_entry` ignores entries with terminated status even
        when the key matches.
        """

        key = Mock()

        cache_entry = Mock()
        cache_entry.status = CacheEntryStatus.terminated
        cache_entry.key = Mock()
        cache_entry.key.equals.return_value = True

        self.cache.entry_list = [cache_entry]

        result = self.cache.check_entry(key)
        self.assertIsNone(result)

    def test_GIVEN_single_matching_entry_THEN_check_entry_returns_it(self):
        """
        Test that `check_entry` returns the entry when exactly one matches
        the key.
        """

        key = Mock()

        cache_entry = Mock()
        cache_entry.status = CacheEntryStatus.loaded
        cache_entry.key = Mock()
        cache_entry.key.equals.return_value = True

        self.cache.entry_list = [cache_entry]

        result = self.cache.check_entry(key)
        self.assertIs(result, cache_entry)

    def test_GIVEN_multiple_matching_entries_THEN_check_entry_raises_exception(
        self,
    ):
        """
        Test that `check_entry` raises `CacheException` when more than
        one active entry matches the key.
        """

        key = Mock()
        key.dataset = 'test_dataset'

        cache_entry1 = Mock()
        cache_entry1.status = CacheEntryStatus.loaded
        cache_entry1.key = Mock()
        cache_entry1.key.equals.return_value = True

        cache_entry2 = Mock()
        cache_entry2.status = CacheEntryStatus.loaded
        cache_entry2.key = Mock()
        cache_entry2.key.equals.return_value = True

        self.cache.entry_list = [cache_entry1, cache_entry2]

        with self.assertRaises(CacheException) as context:
            self.cache.check_entry(key)

        self.assertIn('Found 2', context.exception.message)
        self.assertEqual(
            context.exception.http_status, HTTPStatus.INTERNAL_SERVER_ERROR
        )

    def test_GIVEN_mixed_entries_THEN_check_entry_returns_only_matching_active_entry(
        self,
    ):
        """
        Test that `check_entry` filters correctly by key equality and status,
        returning only the single active matching entry.
        """

        key = Mock()

        # Terminated entry - should be ignored
        terminated_entry = Mock()
        terminated_entry.status = CacheEntryStatus.terminated
        terminated_entry.key = Mock()
        terminated_entry.key.equals.return_value = True

        # Non-matching entry - should be ignored
        non_matching_entry = Mock()
        non_matching_entry.status = CacheEntryStatus.loaded
        non_matching_entry.key = Mock()
        non_matching_entry.key.equals.return_value = False

        # Matching entry - should be returned
        matching_entry = Mock()
        matching_entry.status = CacheEntryStatus.loaded
        matching_entry.key = Mock()
        matching_entry.key.equals.return_value = True

        self.cache.entry_list = [
            terminated_entry,
            non_matching_entry,
            matching_entry,
        ]

        result = self.cache.check_entry(key)
        self.assertIs(result, matching_entry)


class TestBackendCachePrune(unittest.TestCase):
    """
    Unit tests for `BackendCache.prune` method.

    Verify that pruning correctly removes the target entry from the cache
    and terminates it, without affecting other entries.
    """

    def test_GIVEN_entry_in_cache_THEN_prune_removes_it(self):
        """
        Test that `prune` removes the entry from the cache's entry list.
        """

        cache = BackendCache()

        entry_mock = Mock()
        cache.entry_list = [entry_mock]

        cache.prune(entry_mock)

        self.assertEqual(len(cache.entry_list), 0)
        self.assertNotIn(entry_mock, cache.entry_list)

    def test_GIVEN_entry_in_cache_THEN_prune_terminates_it(self):
        """
        Test that `prune` calls `terminate` on the removed entry.
        """

        cache = BackendCache()

        entry_mock = Mock()
        cache.entry_list = [entry_mock]

        cache.prune(entry_mock)

        entry_mock.terminate.assert_called_once()

    def test_GIVEN_multiple_entries_THEN_prune_removes_only_target_entry(self):
        """
        Test that `prune` removes and terminates only the specified entry,
        leaving all other entries untouched.
        """

        cache = BackendCache()

        entry1 = Mock()
        entry2 = Mock()
        entry3 = Mock()

        cache.entry_list = [entry1, entry2, entry3]

        cache.prune(entry2)

        self.assertEqual(len(cache.entry_list), 2)
        self.assertIn(entry1, cache.entry_list)
        self.assertNotIn(entry2, cache.entry_list)
        self.assertIn(entry3, cache.entry_list)

        # Verify only entry2 was terminated
        entry1.terminate.assert_not_called()
        entry2.terminate.assert_called_once()
        entry3.terminate.assert_not_called()

    def test_GIVEN_empty_cache_THEN_prune_raises_value_error(self):
        """
        Test that `prune` raises `ValueError` when the entry is not in the
        cache.
        """

        cache = BackendCache()

        entry_mock = Mock()

        with self.assertRaises(ValueError):
            cache.prune(entry_mock)
