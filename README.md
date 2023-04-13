# vonk-programming

## Introduction

Welcome to my website. This is the source code to my personal website that can be found on https://vonkprogramming.nl.
This website was build using `Vue2` was then migrated to `Vue3` and is now running on `@astro/vue`.
I have tried to get this website as optimised as possible using the right response Headers within my Apache server, using gzipped resources, reducing unused code and just leaving every feature that doesn't add value but increases the size of the project on the drawing table.
This has resulted in my website as of writing this readme (2023-03-27) has a score of 100 without any more advices that it can give me (aside from some small reduce amount of requests).
If you are looking for any best practises to improve your website's score feel free to take a look in this project, especially the `.htaccess` in the `public` folder or the `astro.config.mjs` file where much of the optimisations are happening.

To conclude this README I would like to mention what I've learned from creating this website and what I will most probably improve when making the next major version, is that a javascript framework for a portfolio website is a little `bloated`.
It was good when I started out creating this website because it has improved my experience with the framework but my next version will probably be made in pure `Astro` with just a CSS library like `Tailwind` which I will reduce in size using `PurgeCSS`.

## Best practises followed

Within this project I have tried to follow as much best practises as I know.
This includes `eslint`, `stylelint` and `commitlint`.
I started using commitlinting only in april of 2023 so my previous commits are not well structured sadly.
These linters are kicked off by `Husky`. I have added `commitlint` to the `commit-msg` hook and the `eslint` and `stylelint` actions to the `pre-push` hook.

I have created a pipeline that does the deploying of this website so there is a reduced risk of human error while doing this. This pipeline also checks the linting before deploying.

I have also decided to start including versioning with `standard-version` starting in April of 2023.

### Project setup

```
npm ci
```

#### Compiles and hot-reloads for development

```
npm run dev
```

#### Compiles and minifies for production

```
npm run build --production
```

#### Lints and fixes files

```
npm run lint
```

### Docs

-   Vue (https://vuejs.org/guide/introduction.html)
-   Astro (https://astro.build)
-   Vuetify (https://vuetifyjs.com)
