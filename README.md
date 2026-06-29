# Bella Hair Studio — website

A fast, free-to-host website for a hairdressing business. Built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), with a
no-code editor ([Sveltia CMS](https://github.com/sveltia/sveltia-cms)) so you
can change text, prices and photos yourself.

Everything here is free: GitHub (code), Vercel (hosting), Sveltia (editing).

---

## Editing your site (the easy way)

Once it's deployed (see below), go to **`your-site.vercel.app/admin`** and log
in with GitHub. You can change:

- **Services** — names, prices, durations, descriptions
- **Gallery photos** — upload new photos, reorder, remove
- **Site settings** — business name, phone, email, address, opening hours,
  social links, and an optional online-booking link

Click **Save** / **Publish** and your live site updates automatically in about
a minute.

> Prefer to edit text directly? The content lives in plain files:
> `src/content/services/`, `src/content/gallery/`, and `src/data/site.json`.

---

## Run it on your computer

Node.js is required (already installed on this machine at
`C:\Program Files\nodejs`).

```bash
npm install      # first time only
npm run dev      # start a local preview at http://localhost:4321
npm run build    # produce the final site in dist/
```

---

## Put it online (free) — one-time setup

1. **Create a GitHub repo** and push this folder to it.
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/OWNER/REPO.git
   git push -u origin main
   ```
2. **Deploy on Vercel:** go to [vercel.com](https://vercel.com) → *Add New
   Project* → import your GitHub repo. Vercel auto-detects Astro — just click
   **Deploy**. You'll get a free `your-site.vercel.app` URL.
3. **Turn on the editor:** open `public/admin/config.yml` and replace
   `OWNER/REPO` with your GitHub username/repo. Then connect Sveltia to GitHub
   by following the one-time auth setup here:
   <https://github.com/sveltia/sveltia-cms#getting-started> (uses a free GitHub
   OAuth app or the Sveltia auth helper — no server needed).
4. (Optional) **Custom domain:** buy one (~$10/yr) and add it in Vercel →
   *Settings → Domains*. Update `site:` in `astro.config.mjs` to match.

---

## Making it yours

- **Colours & fonts:** `src/styles/global.css` (the `@theme` block at the top).
- **Replace placeholder photos:** swap the files in `public/images/` (the hero
  and `gallery-*.svg`) — or just upload real photos via `/admin`.
- **Business details:** `src/data/site.json` (or edit in `/admin`).
