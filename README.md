# rakib.dev — Portfolio

Personal portfolio website for **Rakibul Hasan**, a Software Engineer & Blockchain Developer based in Dhaka, Bangladesh. Built with dark mode, emerald accents, and terminal-inspired touches.

## Tech Stack

- **[Next.js 15](https://nextjs.org)** (App Router) — React framework with static prerendering and file-based routing
- **[React 19](https://react.dev)**
- **[Tailwind CSS 4](https://tailwindcss.com)** — utility-first styling
- **[TypeScript](https://www.typescriptlang.org)**

## Getting Started

```bash
# install dependencies
npm install

# start the dev server at http://localhost:3000
npm run dev

# create a production build and run it
npm run build
npm run start
```

## Pages & Routes

| Route      | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| `/`        | Home page: hero (with typing animation), about, skills, projects, experience, and a contact section |
| `/about`   | About page                                                             |
| `/contact` | Contact page with a message form and direct contact channels           |

All pages share a fixed navbar (with mobile hamburger menu) and a footer, defined in `src/app/layout.tsx`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: navbar, footer, fonts, metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind + custom styles (card, glow, reveal...)
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Fixed nav with active-link highlighting
│   ├── Hero.tsx            # Intro with typing animation
│   ├── About.tsx / Skills.tsx / Projects.tsx / Experience.tsx
│   ├── Contact.tsx         # Contact section on the home page
│   ├── ContactForm.tsx     # Contact form (opens a pre-filled email)
│   ├── Reveal.tsx          # Fade-up animation on scroll
│   ├── SectionHeading.tsx  # Numbered section headings
│   └── Footer.tsx
└── lib/
    └── data.ts             # ★ All portfolio content lives here
```

## Editing Content

Everything shown on the website comes from a single file: **`src/lib/data.ts`**. Edit it to update:

- **Profile** — name, role, specialty, location, email, LinkedIn, GitHub, tagline, and bio
- **Typing animation** — the lines cycled in the hero (`typedLines`)
- **Skills** — grouped under Blockchain / Frontend / Backend & Tools
- **Projects** — title, description, tech stack, and link
- **Experience** — period, title, organization, and details

The contact form currently has no backend — submitting it opens the visitor's email client with the message pre-filled (see `src/components/ContactForm.tsx`). To accept real submissions, wire it up to a service like [Resend](https://resend.com) or a Next.js API route.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com) (the creators of Next.js):

```bash
npx vercel
```

Or push this repo to GitHub and import it in the Vercel dashboard — zero config required, since the build output is fully static.

---

© 2026 Rakibul Hasan · Built with Next.js & Tailwind CSS
