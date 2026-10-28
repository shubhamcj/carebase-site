# CareBase website

Static site (HTML/CSS/JS, no build step) modeled on the structure of an AI care-management product site, with original design, copy and illustrations. Domain: **carebase.cloud**.

## Preview locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder.

## Publish with GitHub Pages
1. Create a new GitHub repo (e.g. `carebase-site`) and push this folder's contents to `main`.
2. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main` / `(root)`.
3. In **Pages → Custom domain**, enter `carebase.cloud` and tick **Enforce HTTPS** once the certificate is issued. (`CNAME` is already included.)

## DNS at GoDaddy (carebase.cloud → DNS)
| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<your-github-username>.github.io` |

DNS can take from a few minutes up to 24 hours to propagate.

## Contact form
GitHub Pages has no backend. Create a free form at formspree.io and replace `YOUR_FORM_ID` in `contact.html` with your form ID. Until then the form shows a demo-mode message.

## TODO
- Portal login links (`href="#"`) are placeholders.
- Add real imagery or screenshots when available.
