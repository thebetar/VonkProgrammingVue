import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import purgecss from './src/utils/astro-purge.mjs';
import compress from 'astro-compress';
import compressor from 'astro-compressor';

import viteVue from '@vitejs/plugin-vue';
import viteVuetify from 'vite-plugin-vuetify';

export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/main'
    }),
    purgecss({
      safelist: [
        /^fade-/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /data-v-.*/,
        /^v-col/,
        /^v-btn--variant-flat/,
        /^v-btn--variant-outlined/,
        /^v-btn--variant-text/,
        /^v-btn--size-large/,
        /^v-btn--size-default/,
        /^v-btn--density-default/,
        /^v-btn__/,
        /^v-card/,
        /^v-list/,
        /^v-alert/,
        /^v-timeline/,
        /^v-icon/,
        /^v-field/,
        /^v-label/,
        /^v-input/,
        /^v-form/,
        /^scrolled/
      ],
      blocklist: [
        /^v-autocomplete/,
        /^v-badge/,
        /^v-bottom-navigation/,
        /^v-breadcrumbs/,
        /^v-carousel/,
        /^v-chip/,
        /^v-color/,
        /^v-combobox/,
        /^v-dialog/,
        /^v-expansion-panel/,
        /^v-message/,
        /^v-overlay/,
        /^v-parallax/,
        /^v-progress/,
        /^v-radio/,
        /^v-rating/,
        /^v-sheet/,
        /^v-slide/,
        /^v-snackbar/,
        /^v-switch/,
        /^v-select/,
        /^v-tabs/,
        /^v-tab/,
        /^v-tooltip/,
        /^v-timeline--horizontal/
      ]
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
      plugins: [
        viteVue({
          include: [/\.vue$/],
          isProduction: true
        }),
        viteVuetify()
      ]
    }
  }
});
