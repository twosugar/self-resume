let path = require('path');

module.exports = {
  module: {
      rules: [
        {
            test: /\.js[x]?$/,
            use: { loader: "babel-loader" },
            exclude: '/node_modules/'
        }
      ]
  },

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8084
  },

  entry: {
      hello: './entry.js'
  },

  output: {
        filename: "bundle.js",//打包后的文件名
        path: path.resolve('./dist'), //打包后文件的路径
  }
};