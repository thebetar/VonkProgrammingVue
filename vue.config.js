// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// 	.BundleAnalyzerPlugin;

const { VuetifyLoaderPlugin } = require('vuetify-loader');
const TerserLoaderPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css|html|svg|jpg|png|webp)$/
            }),
            new VuetifyLoaderPlugin()
        ],
        optimization: {
            minimize: true,
            minimizer: [new TerserLoaderPlugin()],
            usedExports: true,
            nodeEnv: 'production',
            splitChunks: {
                chunks: 'all'
            }
        },
        devtool: 'none'
    },
    transpileDependencies: ['vuetify']
};
