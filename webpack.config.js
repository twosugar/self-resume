let path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
      rules: [
        {
            test: /\.js[x]?$/,
            use: { loader: "babel-loader" }, //babel转意
            exclude: '/node_modules/'
        },
        {
          test: /\.(scss|css)$/,
          use: [{
              loader: "style-loader" // 将 JS 字符串生成为 style 节点
          }, {
              loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          }, {
              loader: "sass-loader" // 将 Sass 编译成 CSS
          }],
          exclude: '/node_modules/'
        }
      ]
  },

  devServer: {
    contentBase: path.join(__dirname, './dist'), //会寻找dist目录下的html文件
    compress: true,
    port: 8084 //监听端口
  },

  entry: './entry.js',

  output: {
        filename: "bundle.js",//打包后的文件名
        path: path.resolve('./dist') //打包后文件的路径
  },

  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dist/vendor-manifest.json')
    })
  ]
};