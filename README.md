[![CircleCI](https://circleci.com/gh/r-park/angular2-aot.svg?style=shield&circle-token=dff73ad8ab0943424a01639d1707ff748a5b10ac)](https://circleci.com/gh/r-park/angular2-aot)


# Angular2 Ahead-of-Time (AoT) Compilation

A minimal example using the Angular2 compiler cli to pre-compile component templates.


Files & Directories
-------------------

```
build/           // contains results of AoT compilation
dist/            // contains final minified production artifacts
src/
 |__app/
 |__home/
 |__index.html
 |__main.aot.ts  // entry point for production (AoT) builds
 |__main.jit.ts  // entry point for development (JiT) builds
 |__polyfills.ts
```


Generating Production Artifacts
-------------------------------

Executing `npm run build` will:

1. Pre-compile the component templates using `ngc`, and output the results to the **./build** folder
2. Bundle and minify the app sources – including the output from `ngc` – to the **./dist** folder


NPM Commands
------------

|Command|Description|
|---|---|
|npm start|Start the webpack development server @ **localhost:3000**|
|npm run build|Sequentially calls `npm run build:ngc` and `npm run build:webpack`|
|npm run build:ngc|Pre-compile component templates into **./build** folder|
|npm run build:webpack|Bundle and minify production artifacts into **./dist** folder|
|npm run server|Serve the production artifacts from **./dist** folder @ **localhost:3000**|
