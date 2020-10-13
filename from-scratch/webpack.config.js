const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: path.join(__dirname, 'src'),
  entry: './index.tsx',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
    config.watch = false;
  }

  if (argv.mode === 'production') {
    config.devtool = 'source-map';
    config.watch = false;
  }

  return config;
}
