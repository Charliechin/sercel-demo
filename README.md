This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Steps

- 1. Created next app
- 2. Add Chakra UI
- 3. Add Amplify
- 3a. Configuring Amplify in \_app.js
- 3b. In Amplify Studio we configured (https://eu-west-1.admin.amplifyapp.com/admin/d643qy7ckusvz/dev/auth) the password policy
- 3c. In index we added amplify form to log in
  (We can check this in our browser, localstorage)
- 4. We have created a protected route that it is only accessible if a user has been successfully authorized
