# blog
My personal blog

## Development

From your terminal:

```sh
npm run dev
# or
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Docker

```sh
docker run -it --rm -v $(pwd):/blog -w /blog -p 3000:3000 node:lts-alpine sh
```

## Deployment

First, build your app for production:

```sh
npm run build
# or
yarn build
```

Then run the app in production mode:

```sh
npm start
# or
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
