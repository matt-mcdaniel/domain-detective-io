# React/Redux Skeleton with Production Build
An opinionated React/Redux application sitting on a Node/Express server. This build uses JSPM for module loading and building for production. It uses Sass for styling (with style injection during development) as well as hot-reloading during development.

## Setup
```
npm install && jspm install
```
Note: jspm must first be installed globally (`npm install -g jspm`)

## Development
``` 
npm run dev
```

Run a server on `localhost:3001` with hot-reloading and live sass injection.

## Production
```
npm run build
```

Build all imported modules into a single-file bundle in `public/`. Build all sass into a single CSS file in `public/`. 
