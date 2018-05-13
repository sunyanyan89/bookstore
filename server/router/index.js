const express = require('express')
const router = module.exports = express.Router()
const upload = require('../upload')
const Book = require('../models/books')

router.get('/', (req, res) => {
    res.redirect('/list')
})
router.get('/list', (req, res) => {
    const books = Book.findAll()
    if(!books) {
        // 没有数据
        return res.status(404).send('没有该记录')
    }
    res.render('index', {
        title: '首页',
        books: books.reverse()
    })
})
router.get('/detail/:id', (req, res) => {
    const id = parseInt(req.params.id || 0)
    if(!id) {
        return res.status(404).send('没有该记录')
    }
    const book = Book.findOne(id)
    if(!book) {
        // 没有数据
        return res.status(404).send('没有该记录')
    }
    res.render('detail', {
        title: '图书详情',
        book: book
    })
})
router.get('/hot', (req, res) => {
    const books = Book.findHot()
    if(!books) {        
        // 没有数据
        return res.status(404).send('没有该记录')        
    }
    res.render('hotList', {
        title: '热门图书',
        books: books
    })
})
router.get('/add', (req, res) => {
    res.render('add', {
        title: '添加图书'
    })
})
router.post('/add', upload.single('image'), (req, res) => {
    let data = req.body
    if(req.file) { // 文件上传成功
        const img = req.file
        // 遍历当前图书列表 把id设为当前Book最大的id 之后再+1
        let id = 0
        Book.findAll().forEach(m => { if(m.id > id) id = m.id })
        const book = new Book(
            id + 1, 
            '',
            data.name,
            img.filename,
            data.price,
            data.desc,
            data.author,
            parseInt(data.isHot)
        )
        book.add()
        res.redirect('/list')
    }
})

router.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id || 0)
    if(!id) {
        // 不合法的id
        return res.status(404).send('没有该记录')
    }
    const book = Book.findOne(id)
    if(!book) {
        // 不存在该条数据
        return res.status(404).send('没有该记录')
    }
    res.render('edit', {
        title: '编辑图书',
        book: book
    })
})
router.post('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id || 0)
    if(!id) {
        // 不合法的id
        return res.status(404).send('没有该记录')
    }
    const book = Book.findOne(id)
    if(!book) {
        // 不存在该条数据
        return res.status(404).send('没有该记录')
    }
    book.bookName = req.body.name
    book.bookAuthor = req.body.author
    book.bookPrice = req.body.price
    book.bookDesc = req.body.desc
    book.isHot = parseInt(req.body.isHot)
    res.redirect('/list')
})

router.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id || 0)
    if(!id) {
        // 不合法的id
        return res.status(404).send('没有该记录')
    }
    const book = Book.findOne(id)
    if(!book) {
        // 不存在这条数据
        return res.status(404).send('没有该记录')
    }
    book.delete()
    res.redirect('/list')
})