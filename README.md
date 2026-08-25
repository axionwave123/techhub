# TechPick NG

**Find Tech Worth Your Money**

A clean, modern Nigerian technology affiliate website for phones, laptops, audio, accessories and more. Built with pure HTML, CSS and JavaScript — easy for beginners.

## How to Open / Run the Website

### Option 1 – Easiest (Double-click)
1. Download or clone this repository.
2. Open the folder on your computer.
3. Double-click `index.html`.
   - It will open in your browser.

### Option 2 – Local Server (Recommended)
1. Install [VS Code](https://code.visualstudio.com/) + the free **Live Server** extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.

That’s it. No build step, no npm install, no database.

## Project Structure

```
techhub/
├── index.html                      → Homepage
├── phones.html                     → Smartphones category
├── laptops.html                    → Laptops category
├── audio.html                      → Audio category
├── accessories.html                → Accessories category
├── gaming.html                     → Gaming category
├── guides.html                     → All guides
├── reviews.html                    → Reviews listing
├── compare.html                    → Phone comparison table
├── best-phones-under-100k.html     → Full article / review page
├── how-to-choose-laptop.html       → Buying guide page
├── about.html                      → About + Contact + Newsletter
├── privacy.html                    → Privacy Policy
├── terms.html                      → Terms of Use
├── css/
│   └── style.css                   → All styles
├── js/
│   └── script.js                   → Interactive features + affiliate links
└── assets/
    └── images/                     → Place for your own product images
```

## Where to Put Your Jumia Affiliate Links (VERY IMPORTANT)

Open `js/script.js` and look for this clearly marked section:

```js
// ===============================
// JUMIA AFFILIATE LINKS
// Replace these placeholder URLs
// with your real affiliate links.
// ===============================
const AFFILIATE_LINKS = {
  itel_s24: "https://www.jumia.com.ng/catalog/?q=itel+s24",
  tecno_spark_20_pro: "https://www.jumia.com.ng/catalog/?q=tecno+spark+20+pro",
  // ... etc
};
```

Just replace the URLs with your real Jumia affiliate tracking links.  
Every “Check Price on Jumia →” button will automatically use the new links.

All affiliate buttons open in a new tab.

## How to Change Product Names / Prices

- Go to the relevant HTML page (e.g. `best-phones-under-100k.html`).
- Search for the product name or the example price.
- Edit the text. Prices are clearly marked as examples.

## How to Add Another Product

1. Copy an existing product card section in the article page.
2. Change the image, name, specs and the affiliate key.
3. Add the new key + URL in `js/script.js` under `AFFILIATE_LINKS`.

## How to Add Another Article / Guide

1. Copy `best-phones-under-100k.html` and rename it.
2. Update the title, content, breadcrumb and meta tags.
3. Add a link to it from the homepage or guides page.

## Images

- Product images currently use high-quality external placeholders with proper fallbacks.
- To use your own images, put them in `assets/images/` and update the `src` attributes.
- Always keep the `alt` text for SEO and accessibility.

## Design Notes

- Dark navy hero sections + white content areas
- Green primary accent + yellow/orange affiliate buttons
- Fully responsive (mobile hamburger menu, scrollable comparison table)
- Clean, professional tech-publication look
- No fake claims, no invented current prices

## License

© 2026 TechPick NG. All rights reserved.

---

Built for easy editing by beginners. Enjoy promoting great tech in Nigeria!
