/**
 * Vite build config for the self-hosted Vitessce viewer bundle.
 *
 * Builds main.js in library mode so the output is a single ES module plus one
 * stylesheet, written directly into the Flask app's static directory
 * (cellxgene_gateway/static/vitessce/) where templates/spatial_viewer.html
 * loads them via url_for('static', ...).
 *
 * Vitessce and its Zarr/loader dependencies reference Node globals such as
 * Buffer and process, which do not exist in the browser, so
 * vite-plugin-node-polyfills supplies browser shims for them.
 *
 * Run `npm run build` in the `viewer-build` conda env (Node pinned there).
 */

import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [nodePolyfills()],
  build: {
    outDir: '../cellxgene_gateway/static/vitessce',
    emptyOutDir: true,
    // Single stylesheet rather than per-chunk CSS, so the template has one
    // predictable file to link.
    cssCodeSplit: false,
    lib: {
      entry: 'main.js',
      formats: ['es'],
      fileName: () => 'spatial-viewer.js',
    },
  },
});
