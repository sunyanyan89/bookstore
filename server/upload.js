const multer  = require('multer')
const path  = require('path')

// 选择diskStorage存储
const storage = multer.diskStorage({
    // 保存文件的文件夹
    destination: function (req, file, cb) { 
       cb(null, path.resolve('static/imgs/uploads'))
    },
    // 给上传文件重新命名 这里不更改
    filename: function (req, file, cb) {
       cb(null, file.originalname)
    }
})

// 添加配置文件到multer对象
const upload = multer({
    storage: storage
})

module.exports = upload