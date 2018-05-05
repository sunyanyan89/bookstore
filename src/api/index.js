import axios from 'axios'

// 增加默认的请求路径
// 每次axios发送请求时，会把 http://localhost:3000 自动加到请求前面
// 比如 axios.get('/sliders') 实际访问的是 http://localhost:3000/sliders
axios.defaults.baseURL = 'http://localhost:3000'

// 获取轮播图数据
export let getSliders = () => {
    // 返回一个promise
    return axios.get('/sliders')
}

// 获取图书数据
export let getHotBooks = () => {
    return axios.get('hotBooks')
}