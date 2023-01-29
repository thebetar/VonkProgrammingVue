const IN_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        IN_PRODUCTION &&
            require('@fullhuman/postcss-purgecss')({
                content: [
                    `./public/**/*.html`,
                    `./src/**/*.vue`,
                    `./src/**/*.js`,
                    `./node_modules/vuetify/**/*.vue`,
                    `./node_modules/vuetify/**/*.js`
                ],
                css: [`./src/**/*.css`, `./node_modules/vuetify/**/*.css`],
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
                    /^col/
                ]
            })
    ]
};
