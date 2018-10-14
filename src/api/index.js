import axios from 'axios'
//增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3000';
// 路由拦截器
axios.interceptors.response.use((res)=>{
  return res//在这里统一拦截结果，把结果处理成res.data
})
// 获取轮播图数据,返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders')
}
// 获取图书接口
export let getHotBook = () => {
  return axios.get('/hot')
}
// 获取全部图书
export let getBooks = () =>{
  return axios.get('/book')
}
// 删除某一本图书
export let removeBook = (id) =>{
  return axios.delete(`/book?id=${id}`)
}
// 获取谋一本书
export let findOneBook = (id) =>{
  return axios.get(`/book?id=${id}`)
}
// 修改图书
export let updateBook = (id,data) =>{
  return axios.put(`/book?id=${id}`,data)
}
// 添加图书
export let addBook = (data) =>{
  return axios.post('/book',data)
}
// export let getAll = () =>{
//   return axios.all([getSliders(),getHotBook()])
// }
