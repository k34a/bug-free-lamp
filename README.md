
# The website for the Larry Rowbs Foundation
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and designed using tailwind.

You may view the website live on [https://larryrowbsfoundation.org](https://larryrowbsfoundation.org)

## Getting Started (Dev)

Required installations of dependencies
```
npm install
```

Create environment variables in a ```.env``` file. Here is a template.

```
# Tokens for Google Recaptcha V2
NEXT_PUBLIC_RECAPTCHA_CLIENT=<>
RECAPTCHA_SERVER=<>

# Tokens for a Notion client (read and write separately. write token used to save data for forms)
NOTION_TOKEN=<>
NOTION_DATABASE_ID=<>
NOTION_WRITE_TOKEN=<>
NOTION_CONTACTUS=<>
NOTION_SUBSCRIBE<>
NOTION_JOINUS=<>

# Stripe account for donations (product price keys and client key)
NEXT_PUBLIC_MONTHLY_25=<>
NEXT_PUBLIC_MONTHLY_50=<>
NEXT_PUBLIC_MONTHLY_100=<>
NEXT_PUBLIC_ONETIME_200=<>
NEXT_PUBLIC_ONETIME_100=<>
NEXT_PUBLIC_ONETIME_50=<>
NEXT_PUBLIC_STRIPE_KEY=<>
```

Now, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing any page by modifying the `.js` in `src/pages` directory. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Contributing to this repository

Whenever you are done with the changes, create a new pull request, and assign it to any of the contributors.
