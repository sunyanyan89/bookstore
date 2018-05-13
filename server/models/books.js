// 图书模型
class Book {
    /**
     * @param  {number}  id          唯一标识
     * @param  {string}  bookId      图书id
     * @param  {string}  bookName    书名
     * @param  {string}  bookImg     封面
     * @param  {string}  bookPrice   价格
     * @param  {string}  bookDesc    图书描述
     * @param  {string}  bookAuthor  作者信息
     * @param  {boolean} isHot       是否热门
     * @return {Book}               音乐对象
     */
    constructor(id, bookId, bookName, bookImg, bookPrice, bookDesc, bookAuthor, isHot) {
        this.id = id
        this.bookId = bookId
        this.bookName = bookName
        this.bookImg = '/static/imgs/books/'+bookImg
        this.bookPrice = bookPrice
        this.bookDesc = bookDesc
        this.bookAuthor = bookAuthor
        this.isHot = isHot
    }

    static findAll() {
        return books.slice(0)
    }

    static findHot() {
        return books.slice(0).filter(s => { return s.isHot })
    }

    static findOne(id) {
        return books.find(s => s.id === id)
    }

    static findByPage(offset, pageSize) {
        return books.slice(offset, offset+pageSize)
    }

    delete() {
        return books.splice(books.indexOf(this), 1)
    }

    add() {
        books.indexOf(this) === -1 && books.push(this)
        return true
    }

    update() {
        return true
    }
}

let books = [
    new Book(1, '000000', '半小时漫画世界史', '000000_cover.jpg', '19.99', '看半小时漫画，通五千年历史，脉络无比清晰，看完就能倒背', '陈磊', 1),
    new Book(2, '000001', '中国民族史话', '000001_cover.jpg', '4.09', '中国自古以来是一个统一的多民族国家，她经历了漫长的发展过程，始终保持着历史的延续性，是世界上**没有中断、一', '周茶仙', 1),
    new Book(3, '000002', '未来简史', '000002_cover.jpg', '26.99', '比尔·盖茨,扎克伯格热荐的《人类简史》作者尤瓦尔·赫拉利新作', '以色列］尤瓦尔·赫拉利', 0),
    new Book(4, '001000', '儿童心理学', '001000_cover.jpg', '9.99', '', '边玉芳', 0),
    new Book(5, '001001', '我的心里有个魔鬼', '001001_cover.jpg', '4.29', '心理医生、心理专家和社会问题研究者必备的资料实录。', '孙侃', 0),
    new Book(6, '002000', '规范刑法学（第二版）', '002000_cover.jpg', '4.29', '本书阐述的是一种内在于法条，依附于法条的法理，法条所承载的规范在本书中占据着中心的地位，从法条出发，并最终以法条为归宿，对刑法理论进行规范的审视。', '孙侃', 0),
    new Book(7, '002001', '环境资源法', '002001_cover.jpg', '9.87', '本书是应用型本科法学专业规划教材之一，从内容到形式都突出了应用型本科教学的基本特色，同时紧密联系我国环境资源法制建设的实践和环境资源法学研究的前沿领域，全面、系统地阐明环境资源法的基本理念、特点、原则、制度和其他内容', '浅水苗', 1),
    new Book(8, '100000', '海外生存英语36计', '100000_cover.jpg', '4.09', '近千个超常用词，辐射国外生存滴，餐出行，再不会因词受阻； 60多个高频场景会话，英语力全新升级，从此商旅神谈，', '刘丹妮 编著', 1),
    new Book(9, '101000', '成人高考英语核心词汇', '101000_cover.jpg', '18.29', '柴林艺和安逸编的这本《成人高考英语核心词汇》用全新的写作方式帮助读者学习和记忆成人高考英语核心词汇。', '柴林艺,安逸', 1),
]

module.exports = Book