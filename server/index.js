const path = require('path')
const express = require('express')
const swig = require('swig')
const app = express()
const bodyParser = require('body-parser')
const indexRouter = require('./router/index.js')
const apiRouter = require('./router/api.js')

// 设置页面不缓存
swig.setDefaults({
    cache: false 
})
app.set('view cache', false)

app.set('views', path.join(__dirname, 'views')) // 设置模板文件所在文件夹
app.set('view engine', 'html')
app.engine('html', swig.renderFile)

// 解析 application/json
app.use(bodyParser.json())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// 经过bodyParser中间件处理后，就可以在所有路由处理器的req.body中访问请求参数

app.use('/', indexRouter)
app.use('/api', apiRouter)

app.listen(8181, function() {
    console.log('The server opens at localhost:8181')
})