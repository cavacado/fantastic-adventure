This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Google analytics testing:

- using @next/third-parties
- testing for enhanced measurements:
  - page_view
  - scroll
  - click
  - view_search_results
  - video_start
  - video_progress
  - video_complete
  - file_download
  - form_start
  - form_submit
- testing for recommended events: (predefined dimensions)
  - login
- testing for custom events: (no predefined dimensions)
  - custom event
