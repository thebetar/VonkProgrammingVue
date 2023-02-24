module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.astro',
    './node_modules/vuetify/**/*.vue',
    './node_modules/vuetify/**/*.js',
    './node_modules/vuetify/**/*.ts'
  ],
  css: [
    './src/**/*.css',
    './src/**/*.scss',
    './node_modules/vuetify/**/*.css',
    './node_modules/vuetify/**/*.scss'
  ],
  defaultExtractor(content) {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      ''
    );

    return (
      contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    );
  },
  safelist: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /data-v-.*/,
    /^v-col/,
    /^v-card/,
    /^v-list/,
    /^v-alert/,
    /^v-timeline/,
    /^v-icon/,
    /^v-form/,
    /^v-field/,
    /^v-label/,
    /^v-input/
  ]
};
