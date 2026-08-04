# Orionpulse website

Static multi-page site: Home, Services, Proof Log (portfolio), Contact.
Plain HTML/CSS/JS — no build step, deploys directly on GitHub Pages.

## Before you publish — things marked `# edit:`

- **services.html** — placeholder tier names/prices (₹XX,XXX). Swap in your real rate card.
- **contact.html** — the form doesn't submit anywhere yet. Easiest fix: sign up at
  formspree.io (free tier), get a form endpoint, and set it as the form's `action`.
  Or replace the form with a simple `mailto:` link. Also swap the placeholder email.
- **assets/logo.svg** — simple placeholder wordmark. Replace with your real logo
  files (the ones from your brand kit) — keep the filename `logo.svg` or update
  the `<img>`/`<link rel="icon">` references across all four HTML files.
- **portfolio.html** — proof log entries use approximate dates from memory.
  Confirm/correct dates before publishing.

## Deploy on GitHub Pages

1. Create a new repository on GitHub — e.g. `orionpulse-site` (or
   `<your-username>.github.io` if you want it at the root of your GitHub domain).
2. Push these files to it:
   ```bash
   cd orionpulse-site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/orionpulse-site.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   then pick branch `main`, folder `/ (root)`, and save.
4. Your site goes live at:
   - `https://<your-username>.github.io/orionpulse-site/` (repo named anything else), or
   - `https://<your-username>.github.io/` (repo named `<your-username>.github.io`)
5. **Custom domain (optional):** if you own a domain, add a `CNAME` file to the
   repo root containing just the domain (e.g. `orionpulse.com`), then point your
   domain's DNS at GitHub Pages per GitHub's custom-domain docs.

## Local preview

Just open `index.html` in a browser, or run a quick local server:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Structure

```
orionpulse-site/
├── index.html
├── services.html
├── portfolio.html
├── contact.html
├── css/styles.css
├── js/nav.js
├── assets/logo.svg
└── README.md
```
