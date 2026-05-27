# Import utility modules
import unittest
from unittest.mock import patch


# Import other functions from package
from cellxgene_gateway.extra_scripts import get_extra_scripts


class TestExtraScripts(unittest.TestCase):
    """
    Unit tests for `get_extra_scripts` function.

    Validate how different values of the `GATEWAY_EXTRA_SCRIPTS` environment
    variable are parsed and handled.
    """

    @patch('cellxgene_gateway.env.extra_scripts', new='["abc","def"]')
    def test_GIVEN_two_scripts_THEN_returns_two_strings(self):
        """
        Test that two scripts in a valid JSON string are parsed into a list of
        strings.

        Environment:
        ------------
        GATEWAY_EXTRA_SCRIPTS = '["abc","def"]'

        Returns:
        --------
        ["abc", "def"]
        """

        self.assertEqual(get_extra_scripts(), ['abc', 'def'])

    @patch('cellxgene_gateway.env.extra_scripts', new='["abc", "def"]')
    def test_GIVEN_two_scripts_space_THEN_returns_two_strings(self):
        """
        Test that two scripts in a JSON string with spaces are correctly parsed.

        Environment:
        ------------
        GATEWAY_EXTRA_SCRIPTS = '["abc", "def"]'

        Returns:
        --------
        ["abc", "def"]
        """

        self.assertEqual(get_extra_scripts(), ['abc', 'def'])

    @patch('cellxgene_gateway.env.extra_scripts', new=None)
    def test_GIVEN_none_THEN_returns_empty_array(self):
        """
        Test that None value for environment variable returns empty list.

        Environment:
        ------------
        GATEWAY_EXTRA_SCRIPTS = None

        Returns:
        --------
        []
        """

        self.assertEqual(get_extra_scripts(), [])

    @patch('cellxgene_gateway.env.extra_scripts', new='[]')
    def test_GIVEN_empty_string_THEN_returns_empty_array(self):
        """
        Test that empty JSON array string returns empty list.

        Environment:
        ------------
        GATEWAY_EXTRA_SCRIPTS = '[]'

        Returns:
        --------
        []
        """

        self.assertEqual(get_extra_scripts(), [])

    @patch('cellxgene_gateway.env.extra_scripts', new="'asdf'")
    def test_GIVEN_bare_string_THEN_throws_Exception(self):
        """
        Test that malformed JSON string raises Exception.

        Environment:
        ------------
        GATEWAY_EXTRA_SCRIPTS = "'asdf'" (invalid JSON)

        Raises:
        -------
        Exception
          When JSON parsing fails due to invalid format.

        Message:
        --------
        'Error parsing GATEWAY_EXTRA_SCRIPTS, expected JSON array e.g.
        ["https://example.com/path/to/script.js"]'
        """

        with self.assertRaises(Exception) as context:
            self.assertEqual(get_extra_scripts(), [])
        self.assertEqual(
            'Error parsing GATEWAY_EXTRA_SCRIPTS, expected JSON array e.g. ["https://example.com/path/to/script.js"]',
            str(context.exception),
        )


# Entry point for running test suite
if __name__ == '__main__':
    unittest.main()
