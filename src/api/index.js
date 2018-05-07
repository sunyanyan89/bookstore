import axios from 'axios'

// 增加默认的请求路径
// 每次axios发送请求时，会把 http://localhost:3000 自动加到请求前面
// 比如 axios.get('/sliders') 实际访问的是 http://localhost:3000/sliders
axios.defaults.baseURL = 'http://localhost:3000'
// 拦截器 拦截结果 把结果处理成res的data数据
axios.interceptors.response.use((res) => {
    return res.data
})
// 获取轮播图数据
export let getSliders = () => {
    // 返回一个promise
    return axios.get('/sliders')
}

// 获取热门图书
export let getHotBooks = () => {
    return axios.get('/hotBooks')
}

// 获取所有图书
export let getAllBooks = () => {
    return axios.get('/book')
}

// 获取某一本图书
export let getOneBook = id => {
    return axios.get('/book?id='+id)
}

// 删除某一本图书
export let deleteBook = id => {
    // return axios.delete(`/book?id=${id}`)
    return axios.delete('/book?id=' + id)
}

// 修改某一本图书
export let updateBook = (id, data) => {
    return axios.put('/book?id='+id, JSON.stringify(data))
}

// 新增某一本图书
export let addBook = (data) => {
    console.log(data)
    return axios.post('/book', JSON.stringify(data))
}

export let getAll = () => {
    return axios.all([getSliders(), getHotBooks()])
}