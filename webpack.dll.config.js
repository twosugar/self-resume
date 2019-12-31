const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      vendor: ['react-router', 'react-router-dom', 'react']
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('./dist', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};