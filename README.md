# Sunspectrum Enterprises

A Next.js website for Sunspectrum Enterprises featuring solar, water treatment, pumping, and EPC services.

## Run
```bash
npm install
npm run dev
```

## Routes
- `/` home
- `/about` company information
- `/faq` FAQ
- `/products` catalogue
- `/products/[slug]` product detail

## Notes
- The app uses the existing assets under `public/images`.
- Product and project imagery is loaded from those paths automatically.
- If an image is missing, the product detail page shows a fallback state instead of a broken image.
