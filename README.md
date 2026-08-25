# TechPick NG

A modern Nigerian technology affiliate website that helps people find worthwhile phones, laptops, earbuds, accessories and gaming products available in Nigeria (primarily via Jumia).

**Tagline:** Find Tech Worth Your Money

---

## How to Open / Run the Website

This is a pure **HTML + CSS + JavaScript** project. No build tools, no Node.js, no database required.

### Option 1 – Easiest (recommended for beginners)
1. Download or clone this repository.
2. Open the folder.
3. Double-click `index.html` (or right-click → Open with your browser).

The site works immediately.

### Option 2 – Local server (optional)
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

---

## Where Are the Jumia Affiliate Links?

All affiliate links are centralized in **one place**:

**File:** `js/script.js`

Look for this clearly marked section at the top:

```js
// ===============================
// JUMIA AFFILIATE LINKS
// Replace these placeholder URLs
// with your real affiliate links.
// ===============================
const AFFILIATE_LINKS = {
  itel_s24: "https://www.jumia.com.ng/catalog/?q=itel+s24",
  // ... more products
};
```

Replace the URLs with your real Jumia affiliate tracking links. All buttons using `data-affiliate="product_key"` will update automatically and open in a new tab.

---

## How to Change Product Names / Prices

- Article page: `article-best-phones-under-100k.html`
- Comparison table: `compare.html`
- Prices are labeled as **examples**. Always tell readers to check current price on Jumia.

---

## How to Add Another Product

1. Add a new key + URL in `AFFILIATE_LINKS` inside `js/script.js`.
2. Copy an existing product section in the article page.
3. Use: `<a href="#" class="btn btn-affiliate" data-affiliate="your_key">Check Price on Jumia →</a>`

---

## How to Add Another Article

1. Copy `article-best-phones-under-100k.html`.
2. Rename and update content.
3. Link it from `guides.html`, homepage, etc.

---

## Features

- Fully responsive (mobile hamburger menu)
- Search overlay + back-to-top
- Affiliate buttons (new tab)
- Affiliate disclosure
- Comparison table (horizontal scroll on mobile)
- Clean modern design matching the reference image
- No paid services or API keys needed

Built for easy editing by beginners.