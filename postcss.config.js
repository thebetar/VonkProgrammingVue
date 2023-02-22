const IN_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      require('@fullhuman/postcss-purgecss')({
        content: [
          `./public/**/*.html`,
          `./src/**/*.vue`,
          `./src/**/*.js`,
          `./src/**/*.ts`,
          `./node_modules/vuetify/**/*.vue`,
          `./node_modules/vuetify/**/*.js`,
          `./node_modules/vuetify/**/*.ts`
        ],
        css: [
          `./src/**/*.css`,
          // `./src/**/*.scss`,
          `./node_modules/vuetify/**/*.css`
          // `./node_modules/vuetify/**/*.scss`
        ],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ''
          );

          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          );
        },
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          /^v-col/,
          /^offset/,
          /^v-btn/,
          /^v-card/,
          /^v-list/,
          /^v-alert/,
          /^v-timeline/,
          /^v-icon/,
          /^v-field/,
          /^v-label/,
          /^v-input/,
          /^v-form/
        ]
      })
  ]
};
