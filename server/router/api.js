const express = require('express')
const router = module.exports = express.Router()
const Book = require('../models/books')
const Slider = require('../models/sliders')

// 设置跨域请求头
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})

router.get('/sliders', (req, res) => {
    const books = Book.findAll()
    if(!books) {
        // 没有数据
        return res.status(404).send('没有该记录')
    }
    res.send(Slider)
})
router.get('/page', (req, res) => {
    const offset = parseInt(req.query.offset || 0)
    const pageSize = parseInt(req.query.pageSize || 5)
    const books = Book.findByPage(offset, pageSize)
    if(!books) {
        // 没有数据
        return res.status(404).send('没有该记录')
    }
    let hasMore = Book.findAll().length > (offset + pageSize)
    res.send({hasMore, books})
})
router.get('/book', (req, res) => {
    const books = Book.findAll()
    if(!books) {
        // 没有数据
        return res.status(404).send('没有该记录')
    }
    res.send(books)
})
router.get('/book/:id', (req, res) => {
    const id = parseInt(req.params.id || 0)
    if(!id) {
        return res.status(404).send('没有该记录')        
    }
    const book = Book.findOne(id)
    if(!book) {
        // 没有数据
        return res.status(404).send('没有该记录')
    }
    res.send(book)
})
router.get('/hotBooks', (req, res) => {
    const books = Book.findHot()
    if(!books) {
        // 没有数据
        return res.status(404).send('没有该记录')        
    }
    res.send(books)
})
