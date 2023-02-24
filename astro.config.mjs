import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import compress from 'astro-compress';
import compressor from 'astro-compressor';

import viteVue from '@vitejs/plugin-vue';
import viteVuetify from 'vite-plugin-vuetify';

import purgecss from './src/utils/astro-purge.mjs';

import purgecssSafeList from './purgecss.safelist.mjs';
import purgecssBlocklist from './purgecss.blocklist.mjs';

export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/main'
    }),
    purgecss({
      safelist: purgecssSafeList,
      blocklist: purgecssBlocklist
    }),
    compress({
      css: false,
      js: false,
      png: true,
      jpg: true,
      webp: true,
      svg: true
    }),
    compressor({
      gzip: true,
      brotli: false
    })
  ],
  vite: {
    build: {
      minify: true,
      plugins: [viteVue(), viteVuetify()]
    }
  }
});
