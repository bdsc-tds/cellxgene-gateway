# Import utility modules
import importlib
import os
import tempfile
import unittest
from unittest import mock

# Import other functions from package
from cellxgene_gateway import dataset_metadata_loader as dml
from cellxgene_gateway import env, flask_util, gateway


# Function to build os.environ replacement with keys removed and added
def _environ_without(unset, **overrides):
    """
    Build copy of os.environ with some keys removed and others set.

    Parameters:
    -----------
    unset: iterable of str
      Variable names to remove entirely, so code under test sees them as unset
      rather than empty.
    overrides: str
      Variable names and values to set.

    Returns:
    --------
    patched: dict
      Environment mapping suitable for mock.patch.dict(..., clear=True).
    """
    patched = {k: v for k, v in os.environ.items() if k not in unset}
    patched.update(overrides)

    return patched


class EnvReloadCase(unittest.TestCase):
    """
    Base case for tests that need env.py re-evaluated under a different
    environment. env.py reads os.environ at import time, so changing a variable
    afterwards has no effect until module is reloaded.
    """

    def reload_env(self, unset=(), **overrides):
        """
        Reload env module with patched environment, restoring both on test
        teardown.

        Parameters:
        -----------
        unset: iterable of str
          Variable names that reloaded module should see as unset.
        overrides: str
          Variable names and values that reloaded module should see.

        Returns:
        --------
        None
        """
        patcher = mock.patch.dict(
            os.environ, _environ_without(unset, **overrides), clear=True
        )
        patcher.start()
        self.addCleanup(importlib.reload, env)
        self.addCleanup(patcher.stop)
        importlib.reload(env)


class TestQcDataResolution(EnvReloadCase):
    """
    Pin behaviour of env.qc_data, which is already centralised and absolutised.
    This model should be followed by other data paths.
    """

    def test_GIVEN_qc_data_unset_THEN_default_is_absolute(self):
        """
        Test that analysis_qc default is absolutised, since Flask resolves
        relative directory against package dir rather than cwd.
        """
        self.reload_env(unset=['QC_DATA'])
        self.assertTrue(os.path.isabs(env.qc_data))
        self.assertTrue(env.qc_data.endswith('analysis_qc'))

    def test_GIVEN_qc_data_relative_THEN_absolutised(self):
        """
        Test that relative QC_DATA is expanded against working directory.
        """
        self.reload_env(QC_DATA='some_qc_dir')
        self.assertEqual(os.path.abspath('some_qc_dir'), env.qc_data)

    def test_GIVEN_qc_data_absolute_THEN_unchanged(self):
        """
        Test that absolute QC_DATA is passed through as given.
        """
        with tempfile.TemporaryDirectory() as tmp:
            self.reload_env(QC_DATA=tmp)
            self.assertEqual(tmp, env.qc_data)


class TestCellxgeneDataResolution(EnvReloadCase):
    """
    Check CELLXGENE_DATA is resolved in one place (env.py) and that every
    consumer agrees with it whether or not variable is set.
    """

    def _effective_loader_data_dir(self):
        """
        Capture data directory used by metadata loader when its caller passes
        none.

        Returns:
        --------
        data_dir: str
          Value forwarded by loader to find_annotations_for_file.
        """
        with tempfile.TemporaryDirectory() as tmp:
            tsv_path = os.path.join(tmp, 'datasets.tsv')
            with open(tsv_path, 'w', newline='') as tsv:
                tsv.write('dataset_id\tfile_path\nx\tx.h5ad\n')
            with mock.patch.object(
                dml, 'find_annotations_for_file', return_value=([], [])
            ) as find:
                dml.load_dataset_metadata_tsv(tsv_path, data_dir=None)

            return find.call_args[0][1]

    def _effective_gateway_base_path(self):
        """
        Capture base path handed by gateway to its local item source.

        Returns:
        --------
        base_path: str
          Value passed as FileItemSource's base_path.
        """
        # initialise_data_sources mutates three globals; restore all of them or
        # unrelated tests inherit item sources set up here
        saved_sources = list(gateway.item_sources)
        saved_default = gateway.default_item_source
        saved_in_url = flask_util.include_source_in_url
        self.addCleanup(
            setattr, flask_util, 'include_source_in_url', saved_in_url
        )
        self.addCleanup(setattr, gateway, 'default_item_source', saved_default)
        self.addCleanup(gateway.item_sources.extend, saved_sources)
        self.addCleanup(gateway.item_sources.clear)
        gateway.item_sources.clear()
        # Patched at its source module: gateway imports it inside function
        with mock.patch(
            'cellxgene_gateway.items.file.fileitem_source.FileItemSource'
        ) as source:
            gateway.initialise_data_sources()

        return source.call_args[0][0]

    def test_GIVEN_unset_THEN_env_module_uses_none(self):
        """
        Test that env module leaves value as None when variable is unset, which
        is what keeps 'unset' distinguishable from configured directory.
        """
        self.reload_env(unset=['CELLXGENE_DATA'])
        self.assertIsNone(env.cellxgene_data)

    def test_GIVEN_unset_THEN_loader_takes_fallback_from_env(self):
        """
        Test that metadata loader has no default of its own and reads resolved
        value from env module instead.
        """
        self.reload_env(unset=['CELLXGENE_DATA'])
        with mock.patch.object(env, 'cellxgene_data', '/sentinel/data'):
            self.assertEqual(
                '/sentinel/data', self._effective_loader_data_dir()
            )

    def test_GIVEN_relative_path_THEN_env_module_absolutises_it(self):
        """
        Test that relative directory is made absolute, since Flask resolves
        relative directories against package directory rather than working one.
        """
        self.reload_env(CELLXGENE_DATA='relative_data')
        self.assertEqual(os.path.abspath('relative_data'), env.cellxgene_data)

    def test_GIVEN_unset_and_no_bucket_THEN_gateway_raises(self):
        """
        Test that gateway refuses to start with neither data directory nor
        bucket. Its None default is what makes this check reachable, so any
        unification must keep 'unset' distinguishable from 'set'.
        """
        self.reload_env(unset=['CELLXGENE_DATA', 'CELLXGENE_BUCKET'])
        with self.assertRaises(ValueError) as raised:
            self._effective_gateway_base_path()
        self.assertIn('CELLXGENE_DATA', str(raised.exception))

    def test_GIVEN_set_THEN_all_three_consumers_agree(self):
        """
        Test that env, metadata loader and gateway resolve same directory when
        CELLXGENE_DATA is set.
        """
        with tempfile.TemporaryDirectory() as tmp:
            self.reload_env(CELLXGENE_DATA=tmp)
            self.assertEqual(tmp, env.cellxgene_data)
            self.assertEqual(tmp, self._effective_loader_data_dir())
            self.assertEqual(tmp, self._effective_gateway_base_path())

    def test_GIVEN_unset_THEN_all_three_consumers_agree(self):
        """
        Test that no consumer invents data directory when variable is unset.
        Loader coerces None to '' because its path joins would otherwise raise
        TypeError into an exception handler that hides it.
        """
        self.reload_env(unset=['CELLXGENE_DATA'])
        self.assertIsNone(env.cellxgene_data)
        self.assertEqual('', self._effective_loader_data_dir())


class TestDataPathRoutes(EnvReloadCase):
    """
    Guard routes that serve files off disk. These previously 404'd because
    Flask resolves a relative directory against package directory rather than
    working directory, and nothing covered them.
    """

    def setUp(self):
        """
        Create data directory and QC directory, each holding one file, and point
        environment at both.

        Returns:
        --------
        None
        """
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.data_dir = os.path.join(self.tmp.name, 'data')
        self.qc_dir = os.path.join(self.tmp.name, 'analysis_qc', 'ds1')
        os.makedirs(self.data_dir)
        os.makedirs(self.qc_dir)
        with open(os.path.join(self.data_dir, 'sample.h5ad'), 'wb') as h5ad:
            h5ad.write(b'not really an h5ad')
        with open(os.path.join(self.qc_dir, 'plot.png'), 'wb') as png:
            png.write(b'not really a png')
        self.reload_env(
            CELLXGENE_DATA=self.data_dir,
            QC_DATA=os.path.join(self.tmp.name, 'analysis_qc'),
        )

    def test_GIVEN_existing_file_THEN_download_serves_it(self):
        """
        Test that /download returns file rather than 404.
        """
        with gateway.app.test_request_context('/download/sample.h5ad'):
            response = gateway.download_file('sample.h5ad')
        self.addCleanup(response.close)
        self.assertEqual(200, response.status_code)

    def test_GIVEN_no_data_directory_THEN_download_returns_404(self):
        """
        Test that `/download` refuses cleanly when only bucket is configured,
        rather than failing on None directory.
        """
        self.reload_env(unset=['CELLXGENE_DATA'])
        with (
            gateway.app.test_request_context('/download/sample.h5ad'),
            self.assertRaises(Exception) as raised,
        ):
            gateway.download_file('sample.h5ad')
        self.assertIn('404', str(getattr(raised.exception, 'http_status', '')))

    def test_GIVEN_existing_image_THEN_qc_image_serves_it(self):
        """
        Test that /qc-image returns figure rather than 404.
        """
        with gateway.app.test_request_context('/qc-image/ds1/plot.png'):
            response = gateway.qc_image('ds1', 'plot.png')
        self.addCleanup(response.close)
        self.assertEqual(200, response.status_code)

    def test_GIVEN_traversal_THEN_qc_image_rejected(self):
        """
        Test that path traversal attempt is refused rather than served.
        """
        with (
            gateway.app.test_request_context('/qc-image/ds1/x'),
            self.assertRaises(Exception) as raised,
        ):
            gateway.qc_image('ds1', '../../etc/passwd')
        self.assertIn('400', str(getattr(raised.exception, 'http_status', '')))


if __name__ == '__main__':
    unittest.main()
