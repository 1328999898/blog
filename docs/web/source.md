# 同源/跨域解决方案

（全局刷新）
知其历史、知其原理、有思想、有见解的处理

## AJAX的意义
- 局部刷新

## 区别
- ajax：自己写，自己简易封装，串行(回调地域)
- $.ajax：基于回调函数封装的，回调地域问题
- axios：基于promise封装的
- fetch：axios基于promise封装的ajax库

异步解决方案
ES6 promise
ES7 async await

## 跨域方案
很早以前没有跨域
跨域：协议+域名+端口只要有一个不一样就会跨域

- 修改本地HOST
- JSONP：利用script不存在跨域限制，不安全，只能GET，无法POST，需要服务器端支持
- CORS：跨域资源共享，
  - 很多源 向同一个后台发送请求
  - 设置为*后，无法携带cookie
- Proxy
  - webpack-dev-server 起一个web服务
  - apache/nginx/node
- postMessage: 通常应用于H5和APP应用

