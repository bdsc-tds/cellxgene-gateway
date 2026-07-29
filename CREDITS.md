# Credits

Third-party assets bundled in this repository.

## Images

| File | Source | Licence |
| --- | --- | --- |
| `cellxgene_gateway/static/cell.jpg` | [Magnific — Résumé fond design low poly](https://www.magnific.com/fr/photos-gratuite/resume-fond-design-low-poly_2115024.htm) | Free |

The homepage background is served at 2000x1500 (downscaled from the 5000x3750 original, which remains in git history). Re-encoding dropped the file's EXIF, IPTC and ICC data; none of it carried creator, credit or copyright fields.

## Front-end libraries

Vendored under `cellxgene_gateway/static/vendor/` so no third-party CDN is contacted at runtime. Versions are in the filenames.

| Library | Version | Licence |
| --- | --- | --- |
| Bootstrap (CSS + JS) | 5.3.3 | MIT |
| jQuery | 3.7.1 | MIT |
| Popper | 2.9.2 | MIT |

`cellxgene_gateway/static/vitessce/` holds a built bundle of [Vitessce](https://vitessce.io) 4.0.1 (MIT), produced from `spatial_viewer_src/`.
