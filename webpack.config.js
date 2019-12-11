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
  entry: {
      hello: './src/index.js'
  },
  output: {
        filename:"bundle.js",//打包后的文件名
        path: path.resolve('./dist') //打包后文件的路径
  }
};