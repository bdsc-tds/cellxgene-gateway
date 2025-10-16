# Import utility modules
import unittest
from unittest.mock import MagicMock, patch


# Import other functions from package
from cellxgene_gateway.backend_cache import is_port_in_use


class TestIsPortInUse(unittest.TestCase):
    """
    Unit tests for `is_port_in_use` function.

    Mock socket interface to simulate different port states and verify that
    function correctly identifies whether port is in use.
    """

    @patch("socket.socket")
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
        self.assertTrue(connectMock.connect_ex.calledOnceWith("a"))
        self.assertTrue(socketMock.calledOnceWith("a"))

    @patch("socket.socket")
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
        self.assertTrue(connectMock.connect_ex.calledOnceWith("a"))
        self.assertTrue(socketMock.calledOnceWith("a"))
        self.assertEqual(is_port_in_use(123), False)
