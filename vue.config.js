const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const { VuetifyLoaderPlugin } = require('vuetify-loader');
const TerserLoaderPlugin = require('terser-webpack-plugin');

module.exports = {
	configureWebpack: {
		plugins: [new BundleAnalyzerPlugin(), new VuetifyLoaderPlugin()],
		optimization: {
			minimize: true,
			minimizer: [new TerserLoaderPlugin()]
		}
	},
	transpileDependencies: ['vuetify']
};
