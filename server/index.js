/*
node.js模拟后端返回接口
*/
let http = require('http')
let fs = require('fs')
let url = require('url')

// 获取轮播图接口 /sliders
// 服务端用nodejs 只能用commonJS语法
// import sliders from './books.json' 这是ES6语法 这里不能用
let sliders = require('./sliders')
let books = require('./books')

http.createServer((req, res) => {
    // node 跨域请求头
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*' //可以是*，也可以是跨域的地址
    })
    let {pathname, query} = url.parse(req.url)
    if(pathname === '/') {
        res.end('./html/index.html')
    }else if(pathname === '/sliders') {
        // 下面两种写法都可以
        // res.writeHead(200, {'Content-Type':'application/json;chraset=utf8'})
        // res.setHeader('Content-Type','application/json;chraset=utf8')
        res.end(JSON.stringify(sliders))
    }else if(pathname === '/books') {
        res.end(JSON.stringify(books))
    }
}).listen(3000)

console.log('bookstore server is running at port:3000')