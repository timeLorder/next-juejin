//通过爬虫实现ssr
const express = require("express")
const Proxy = require("http-proxy-middleware")

const app = express()

app.use("*", (req, res, next)=>{
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

const proxy = Proxy({
  target: "https://extension-ms.juejin.im",
  changeOrigin: true,
  onError: function (err, req, res) {
    // 监听proxy的onerr事件
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
   
    res.end('Something went wrong. And we are reporting a custom error message.');
  }
})

app.use("*", proxy)

app.listen(9091, ()=>{
  console.log('proxy server start')
})