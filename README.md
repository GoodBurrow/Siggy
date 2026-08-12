<img src="https://raw.githubusercontent.com/barryanders/Siggy/main/assets/icons/siggy-red-panda.png" alt="Siggy app icon" width="256" height="256">

# Siggy

<p><strong>Build a professional email signature you can copy into Gmail, Outlook, or Apple Mail.</strong></p>
<p>
A free, local-first email signature builder for creating polished HTML email signatures for Gmail, Outlook, Apple Mail, and other email clients.<br>
It runs as a standalone web app, stores your drafts in your browser, and gives you copy-ready signature HTML for clients that accept formatted paste.
</p>
<p>
  <a href="https://goodburrow.github.io/Siggy/">Open Siggy</a>
</p>
<p><sub>free to use · local-first · no account · no subscription · no ads · no tracking</sub></p>
<p>
  <a href="https://goodburrow.github.io/">From Good Burrow</a>
</p>

## Email Signature Cards

Siggy helps you design reusable email signatures with a card-based look. It is built for people who want something more distinctive than a plain name/title footer while still keeping the generated HTML practical for Gmail, Outlook, Apple Mail, and other email clients.

Use Siggy to build signatures for executives, sales teams, support teams, HR, legal, healthcare, education, real estate, finance, creators, nonprofits, hospitality, trades, and themed personal signatures.

## Privacy-First

Siggy stores your signature settings in your own browser on your own computer. Your name, title, contact information, image URL, colors, saved cards, and hidden designs are not uploaded to a Siggy cloud account.

Because browser storage is local, download backup copies of important signatures. Backups make it easy to restore your setup later or move it to another browser.

## Features

- 54 curated email signature card designs
- Searchable visual design library
- Hide included designs and restore them from tucked-away library options
- Editable name, title, company, email, phone, website, location, tagline, logo/text, image URL, colors, borders, typography, spacing, and width
- Safe size presets plus advanced design controls
- 48 built-in 3D avatar choices for quick previews
- Drag-and-drop local image previews with browser-only compression
- Saved card library with previews, load, duplicate, and delete
- Shuffle generator that preserves manually edited fields
- Table-based inline HTML output for email-client compatibility
- Copy formatted signature, copy raw HTML, download HTML, and download image
- JSON backup/import for local data
- No account
- No subscription
- No analytics
- No ads
- No tracking
- No cloud signature library

## Email Client Reality

Email clients handle signature HTML differently. Siggy uses inline styles, table layouts, explicit image dimensions, and no external CSS for signature output, but Gmail, Outlook, Apple Mail, mobile clients, and corporate email systems may still adjust spacing, images, links, or dark-mode behavior.

Before using a signature widely:

1. Copy the formatted signature.
2. Paste it into your actual email client's signature settings.
3. Send test messages to Gmail, Outlook, Apple Mail, and a phone if those audiences matter.
4. Confirm links, images, dark mode, and mobile width.

Local image uploads are only for previewing layout in this browser. Use an HTTPS-hosted image URL before installing the signature in a real email client.

## Run Locally

No build step is required.

```bash
python3 -m http.server 4174
```

Then open:

```text
http://localhost:4174/
```

You can also open `index.html` directly in a browser.

## Export Notes

- **Copy signature** copies rich HTML when the browser supports it.
- **Copy HTML** copies the raw email-safe HTML.
- **HTML file** downloads the current signature as a standalone `.html` file.
- **Image file** tries to download PNG and falls back to SVG when browser rendering or image security rules block canvas export.
- **Backup** stores app state, saved cards, and hidden designs as JSON.

## Why Siggy Exists

Most email signature generators produce the same few corporate layouts. Siggy focuses on distinctive card-style signatures: professional enough for real work, flexible enough for different industries, and local-first so your contact details and drafts stay in your browser.

## Author

<a href="https://barryanders.github.io" rel="nofollow">
  <img alt="Barry Anders" src="https://avatars.githubusercontent.com/u/91902180?v=4&amp;s=200" width="100" height="100">
</a>

[Barry Anders](https://barryanders.github.io)

## License

MIT
