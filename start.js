/*
 * @Description: 使用node方式启动项目
 * @Date: 2021-08-30 14:24:25
 * @FilePath: /self-resume/start.js
 * @LastEditTime: 2021-08-30 14:48:01
 */
const express = require('express');
const ejs = require('ejs');
const path = require('path')

app = express();
//设置渲染文件的目录
app.set('views', './views');
//设置html模板渲染引擎
app.engine('html', ejs.__express);
//设置渲染引擎为html
app.set('view engine', 'html');

//调用路由，进行页面渲染
app.get('/', function (request, response) {
    //调用渲染模板
    response.render('index', {
        //传参
        title: '首页', content: 'Render template'
    });

});

app.use('/dist', express.static(path.join(__dirname, 'dist'))) //设置dist目录为静态资源目录
app.listen(8084);
console.log('http://127.0.0.1:8084');