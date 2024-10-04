[![Netlify Status](https://api.netlify.com/api/v1/badges/bd04c851-6b2b-40f1-9730-331a3a7fcc83/deploy-status)](https://app.netlify.com/sites/remix-ssg/deploys)

This repository demonstrates how to generate static pages using the Remix Run framework. A step-by-step guide to setting up a Remix project, creating static pages, pre-rendering them at build time, and deploying them on platforms like Netlify found on this Link [https://habibhinn.com/blog/how-to-generate-a-static-site-using-remix-run-framework](https://habibhinn.com/blog/how-to-generate-a-static-site-using-remix-run-framework).

The project showcases how Remix can be used for static site generation (SSG) to deliver fast, SEO-optimized websites with minimal server overhead.

# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
