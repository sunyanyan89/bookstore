/*
node.js模拟后端返回接口
*/
let http = require('http')
let fs = require('fs')
let url = require('url')
let path = require('path')

// 获取轮播图接口 /sliders
// 服务端用nodejs 只能用commonJS语法
// import sliders from './books.json' 这是ES6语法 这里不能用
let sliders = require('./sliders')

function read(callback) {
    // 把books.json变成绝对路径
    fs.readFile(path.resolve('server/books.json'), 'utf8', function(err, data) {
        if(err || data.length === 0) {
            callback([]) // 如果有错误或者数据为空
        }else {
            callback(JSON.parse(data)) // 将读出来的内容转化为对象
        }
    })
}
// function 读取成功后的回调函数
// data 读出的内容
// read(function(data) {})

function write(data, callback) {
    fs.writeFile(path.resolve('server/books.json'), JSON.stringify(data), (err, data) => {
        callback(data)
    })
}
// param1: 要写入的数据 若是对象需要先转成字符串
// param2: 写入成功后的回调函数
// write({data, function() {})

http.createServer((req, res) => {
    // node 跨域请求头
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*' //可以是*，也可以是跨域的地址
    })
    // 让options请求快速返回
    if(req.method === 'OPTIONS') return res.end()

    let {pathname, query} = url.parse(req.url, true) // true 把query转成对象
    if(pathname === '/') {
        return res.end('./html/index.html')
    }
    if(pathname === '/sliders') {
        // 下面两种写法都可以
        // res.writeHead(200, {'Content-Type':'application/json;chraset=utf8'})
        // res.setHeader('Content-Type','application/json;chraset=utf8')
        return res.end(JSON.stringify(sliders))
    }
    if(pathname === '/hotBooks') {
        read(books => {
            books = books.filter(book => book.isHot === "1")
            setTimeout(()=>{
                res.end(JSON.stringify(books)) // 此时读出来的就是json数据
            },300)
        })
        return
    }
    if(pathname === '/page') {
        let offset = parseInt(query.offset)
        let pageSize = parseInt(query.pageSize)
        read(books => {
            let result = books.reverse().slice(offset,offset+pageSize)
            let hasMore = books.length > (offset + pageSize)
            res.end(JSON.stringify({hasMore, books: result}))
        })
    }
    if(pathname === '/book') {
        // let id = parseInt(query.id)
        let id = query.id
        switch (req.method) { // ?id=1
            case 'GET':
                if(id) { // 取某一本
                    read(books => {
                       books = books.find(book => book.bookId === id)
                       if(!books) books = {} // 如果没找到 返回undefined
                       res.end(JSON.stringify(books)) 
                    })
                } else{ // 取所有图书
                    read(books => res.end(JSON.stringify(books.reverse())))
                }
                break;
            case 'POST':
                let str = ''
                req.on('data', chunk => str += chunk)
                req.on('end', () => {
                    let newBook = JSON.parse(str)
                    read(books => {
                        newBook.bookId = books.length?books[books.length-1].bookId + 1:1
                        newBook.bookId = newBook.bookId + ''
                        books.push(newBook)
                        write(books, () => {
                            res.end('{}')
                        })
                    })
                })
                break;
            case 'PUT':
                if(id) {
                    let str = ''
                    req.on('data', chunk => str += chunk )
                    req.on('end', () => { 
                        let curBook = JSON.parse(str)
                        read(books => {
                            books = books.map(book => {
                                if(book.bookId === id) {
                                    return curBook
                                }
                                return book
                            })
                            write(books, () => { // 将数据写回books.json
                                res.end('{}')
                            })
                        })
                    })
                }
                break;
            case 'DELETE':
                read(books => {
                    books = books.filter(book => book.bookId !== id)
                    write(books, () => {
                        res.end('{}') // 删除返回空对象
                    })
                })
                break;
        }
        return
    }
}).listen(3000)

console.log('bookstore server is running at port:3000')