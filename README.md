# vonk-programming

## Introduction

Welcome to my website. This is the source code to my personal website that can be found on https://vonkprogramming.nl.
This website was build using Vue.js 2 and will soon be rebuild using Nuxt.js 3 or AstroJS (still busy choosing which one i prefer).
Furthermore I have tried to get this website as optimised as possible using the right response Headers within my Apache server, using gzipped resources, reducing unused code and just leaving every feature that doesn't add value but increaese the size of the project on the drawing table.
This has resulted in my website as of writing this readme (2023-01-30) has a score of 100 without any more advices that it can give me (aside from some small reduce amount of requests).
If you are looking for any best practises to improve your website's score feel free to take a look in this project, especially the `.htaccess` in the `public` folder or the `vue.config.js` and `postcss.config.js` file where much of the optimisations are happening.

Furthermore here are the default Vue.js instructions to get you started:

### Project setup
```
npm ci
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build --production
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
