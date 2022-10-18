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
docker run -it --rm -v $(pwd):/blog -w /blog -p 3000:3000 -p 8002:8002 --name=Blog node:lts-alpine yarn dev
```

Port 3000 is the webserver  
Port 8002 is for live reload

> Put CHOKIDAR_USEPOLLING=true in .env to live reload within WSL2

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
