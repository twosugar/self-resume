基于react，实现在线个人简历，并部署到服务器，地址：[www.sugarfish.top](http://www.sugarfish.top)
### 安装webpack webpack-cli
本项目使用的是webpack4

新建文件夹， npm init 初始化package.json

```
npm install -D webpack webpack-cli
```
### 安装react react-dom
```
npm i react react-dom -D
```
### 安装webpack-dev-server
用于启动我们本地开发的服务器
```
npm i webpack-dev-server -D

 "scripts": {
    "server": "webpack-dev-server --open"
  }
```
### 安装 @babel/core、@babel/preset-env、@babel/preset-react
注意这里安装的都是基于babel@7.x 依赖开头都是@babel，注意于6.x版本的区分
### 预编译
```
npm install style-loader css-loader sass-loader webpack --save-dev
```
### 安装antd
```
npm install antd --save
```
### 根目录下新建一个.babelrc的文件
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}
```
### 配置webpack.config.js
```
let path = require('path');

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
  }
};

```
### 打包优化,防止bundle.js太大
新建webpack.dll.config.js
```
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
```
webpack.config.js配置新增
```
plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dist/vendor-manifest.json')
    })
  ]
```
package.json
```
"build:dll": "webpack --mode development --config webpack.dll.config.js"
```
先npm run build:dll， 生成vendor.dll.js，再npm run build

index.html 先引入vendor.dll.js， 再引入bundle.js
### 其他
dist目录下新建index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
    <script src="http://localhost:8084/bundle.js"></script>
</body>
<body>
```
引入的是本地服务器生成的资源，每次更改index.js 都能及时刷新
### 启动
```
npm run server
```