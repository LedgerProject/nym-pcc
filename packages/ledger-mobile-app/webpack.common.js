const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackFavicons = require('webpack-favicons');

module.exports = {
  entry: {
    index: {
      import: './src/bootstrap.ts',
    },
    // content: {
    //   import: './src/content/index.js',
    // },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', './webpack/plugins/mdx-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|md)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: 'asset',
      },
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      },
    ],
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
    extensions: ['.tsx', '.ts', '.js', '.wasm'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      // fs: 'empty', // see https://mdxjs.com/getting-started/webpack
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        mode: 'write-references',
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),

    new WebpackFavicons({
      src: 'static/favicon.png',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  experiments: {
    syncWebAssembly: true,
  },
};
