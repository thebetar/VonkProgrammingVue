// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// 	.BundleAnalyzerPlugin;

const { VuetifyPlugin } = require('webpack-plugin-vuetify');
const TerserLoaderPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },

    mode: 'production',
    plugins: [
      new VuetifyPlugin({
        autoImport: true
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|jpg|png|webp)$/
      })
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
    devtool: 'hidden-source-map'
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
};
