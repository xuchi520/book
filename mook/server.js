let http = require('http')
let fs = require('fs')
let url = require('url')

//获取轮播图 /sliders
let sliders = require('./sliders')

function read(cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length === 0) {
      cb([])
    } else {
      cb(JSON.parse(data)) // JSON.parse 将字符串转换为对象
    }
  })
}

function write(data, cb) { // 写入内容
  fs.writeFile('./book.json', JSON.stringify(data), cb)
}
let pageSize = 5 // 每一页显示5个
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == 'OPTIONS') return res.end();
  let {pathname, query} = url.parse(req.url, true) // true把query转化为对象
  if (pathname === '/sliders') {
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    setTimeout(()=>{
      return res.end(JSON.stringify(sliders))
    },2000)
  }
  if (pathname === '/hot') {
    read(function (books) {
      res.setHeader("Content-Type", "application/json;charset=utf-8");
      let hot = books.reverse().slice(0, 6);
      setTimeout(()=>{
        res.end(JSON.stringify(hot)) // stringify 原有的对象换换成字符串
      },2000)
    })
    return
  }
  if (pathname === '/book') { //对书的增删改查
    let id = parseInt(query.id) // 取出的是字符串
    switch (req.method) { // ?id=1
      case 'GET':// 如果是空对象需要跳转回列表页
        if (!isNaN(id)) { // 查询一个
          read(function (books) {
            let book = books.find(item=>item.bookId===id)
            if(!book) book= {}
            res.setHeader("Content-Type", "application/json;charset=utf-8");
            res.end(JSON.stringify(book))
          })
        } else { // 获取所有图书
          read(function (books) {
            res.setHeader("Content-Type", "application/json;charset=utf-8");
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break
      case 'POST':
        let str = ''
        req.on('data',(chunk)=>{
          str+=chunk
        })
        req.on('end',()=>{
          let book = JSON.parse(str) // 字符串转对象
          read(function (books) { // 添加id
            book.bookId = books.length?books[books.length-1].bookId+1:1
            books.push(book)
            write(books,function () { // 将数据放到books中,books在内存中
              res.end(JSON.stringify(book))
            })
          })
        })
        break
      case 'PUT':
        if(id){// 获取了当前要修改的id
          let str = ''
          req.on('data',(chunk)=>{
            str+=chunk
          })
          req.on('end',()=>{
            let book = JSON.parse(str) //book要改成什么样子
            read(function (books) {
              books = books.map(item=>{
                if(item.bookId === id){ // 找到id相同的那一本
                  return book
                }
                return item //其他书正常返回
              })
              write(books,function () { // 将数据写回json中
                res.end(JSON.stringify(book))
              })
            })
          })
        }
        break
      case 'DELETE':
        read(function (books) {
          res.setHeader("Content-Type", "application/json;charset=utf-8");
          books = books.filter(item=>item.bookId !==id)
          write(books,function () {
            res.end(JSON.stringify({})) //删除返回空对象
          })
        })
        break
    }
    return
  }
}).listen(3000)

