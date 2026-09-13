# Tanmay Gejapati: personal website

A plain HTML and CSS site. No build step, packages, or JavaScript.

## Edit

- `index.html`: biography, research descriptions, and links.
- `style.css`: layout, colours, and typography.
- `assets/`: portrait and favicon.

## Photo

The portrait is `assets/profile.jpeg`. CSS scales it without cropping or changing its aspect ratio.

## Preview

Run from this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765.

## GitHub Pages

Publish to a public repository named `tanmay4269.github.io` under the `tanmay4269` account.
In Settings → Pages, select **Deploy from a branch**, **main**, and **/ (root)**.
The site address will be https://tanmay4269.github.io/ once GitHub finishes deploying.

Commit only site files; keep private drafts and source documents out of this repository.
Google Docs and resume links stay at their existing URLs. Check that visitors can open them without signing in.
