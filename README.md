# SOLVEX Engineering FZ LLC — Website

Premium corporate website built with Next.js (App Router), React, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: this sandbox environment has no outbound access to fonts.googleapis.com, so the build
> here was verified with the Google Fonts (`next/font/google`) import temporarily swapped out.
> On any machine with normal internet access (local dev, Vercel, etc.) `npm run dev` / `npm run build`
> will fetch Poppins & Inter automatically — no changes needed.

## Structure

- `app/page.tsx` — Homepage (hero, trust bar, about, why-cards, industries, services, products,
  projects, process, testimonial, final CTA)
- `app/about`, `/services`, `/products`, `/industries`, `/projects`, `/leadership`, `/contact` —
  inner pages
- `app/sitemap.ts`, `app/robots.ts` — auto-generated `sitemap.xml` / `robots.txt`
- `components/` — Header, Footer, WhatsAppFloat, Reveal (scroll-in animation), PageHero, ContactForm
- Organization schema.org JSON-LD is injected in `app/layout.tsx`
- Open Graph / Twitter metadata set per-page via the `metadata` export

## Before launch

- Replace all Unsplash placeholder imagery with licensed/owned photography (see brief's image guidelines)
- Replace placeholder phone numbers, WhatsApp number, email, and map embed with real details
- Wire the contact form (`components/ContactForm.tsx`) to a real backend / email service (e.g. Resend, Formspree, or a serverless API route)
- Add real project, leadership, and brand-partner content
- Add a real `logo.png` for the Organization schema and OG image
- Finalize Privacy Policy and Terms of Use copy
