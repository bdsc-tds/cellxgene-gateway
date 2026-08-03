/**
 * Entry point for the self-hosted Vitessce spatial viewer.
 *
 * Vite bundles this file (with React, Vitessce and their dependencies) into a
 * single static asset under `cellxgene_gateway/static/vitessce/`, which
 * `templates/spatial_viewer.html` loads. Self-hosting replaces the previous
 * CDN-loaded Vitessce, so the deployed gateway serves the viewer code itself
 * and needs no outbound internet access.
 *
 * Reads the Vitessce view-config URL from the page's `?config=` query
 * parameter, fetches it, and mounts the viewer into `#root`.
 *
 * Build: `npm run build` in the `viewer-build` conda env (see HANDOFF.md).
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Vitessce } from 'vitessce';

// Read from the query string rather than server-side templating: this bundle
// is a static asset, so it cannot be rendered by Jinja.
const configUrl = new URLSearchParams(window.location.search).get('config') || '';
const root = createRoot(document.getElementById('root'));

function showMessage(text) {
  root.render(
    React.createElement('div', { id: 'message' }, text)
  );
}

// Configs store data URLs as root-relative paths (e.g. /spatial-data/…)
// so they stay host-independent. Vitessce's loaders call `new URL(url)`
// with no base, so resolve them against the current origin here.
function absolutizeUrls(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(absolutizeUrls);
  } else if (obj && typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      if (key === 'url' && typeof val === 'string'
          && val.startsWith('/')) {
        obj[key] = window.location.origin + val;
      } else {
        absolutizeUrls(val);
      }
    }
  }
}

async function main() {
  if (!configUrl) {
    showMessage('No config specified. Use ?config=<url>.');
    return;
  }
  try {
    const response = await fetch(configUrl);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const config = await response.json();
    absolutizeUrls(config);
    root.render(
      React.createElement(Vitessce, {
        config,
        theme: 'light',
        // Vitessce needs an explicit pixel height; it does not fill its parent.
        height: window.innerHeight,
      })
    );
  } catch (err) {
    showMessage(`Failed to load config from ${configUrl}: ${err}`);
  }
}

main();
