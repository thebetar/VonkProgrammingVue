// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// 	.BundleAnalyzerPlugin;

const { VuetifyLoaderPlugin } = require('vuetify-loader');
const TerserLoaderPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    configureWebpack: {
        mode: 'production',
        plugins: [
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css|html|svg|jpg|png|webp)$/
            }),
            new VuetifyLoaderPlugin()
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new TerserLoaderPlugin({
                    extractComments: true,
                    terserOptions: {
                        compress: true,
                        ecma: 6,
                        ie8: false,
                        mangle: true,
                        safari10: false,
                        sourceMap: false
                    }
                })
            ],
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
