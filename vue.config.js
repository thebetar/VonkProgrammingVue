// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// 	.BundleAnalyzerPlugin;

const { VuetifyLoaderPlugin } = require('vuetify-loader');
const TerserLoaderPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// TODO fix CSS purge
// const path = require('path');
// const glob = require('glob');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const PurgeCSSPlugin = require('purgecss-webpack-plugin');

// const srcPath = path.resolve(__dirname, 'src');

module.exports = {
    configureWebpack: {
        plugins: [new CompressionPlugin(), new VuetifyLoaderPlugin()],
        optimization: {
            minimize: true,
            minimizer: [new TerserLoaderPlugin()],
            usedExports: true
        }
    },
    transpileDependencies: ['vuetify']
};
