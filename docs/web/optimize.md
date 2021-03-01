# 前端性能优化

CRP：是一种思想，相当于在关键节点上做一些优化

HSTS
DNS解析：一般20~120ms

一、DOM解析优化
1. 标签语义化
2. 避免多级嵌套，最好在3-4级
二、加载CSS
注意：style不发送http请求
1. 选择器层级问题
2. 尽可能少写选择器层级

```js
// 回流和重绘

// 选择器都是从右向左的
// css预编译器
// sass：问题  很多人滥用层级嵌套
// 预编译期的层级嵌套要慎用
// link是发送一个HTTP请求，异步发送请求
// 主线程是自上而下请求
// http 可以同时发送6-7个请求
// DOM树优于CSS加载
// @import是同步发送请求
// 真实项目中应该减少@import这种同步请求，尽可能不用
// style的css 是和第一次拿到html的时候一起拿回来的
// style会比link更好一点，前提是style的样式不多，如果多的时候，会影响DOM树的拉取时间
// link需要写到头部

js默认都是阻塞的
js 放到body底部
// script 默认是阻塞的
// script async 拉回来之后立即渲染,不关注依赖
// script defer 渲染完DOM之后，统一渲染script，关注依赖

// 如果以后，我们修改了元素的位置和结构等，我们需要重新计算视口的位置和大小
// 元素的样式改变：

// 减少回流，减少DOM操作
dns解析
本地解析 => 其他地方解析
// dns提前预解析
// 内存缓存 更快
// 硬盘缓存 存储东西多

// 强缓存和协商缓存 都是针对文件的


// 服务器主动推送，可以在不刷新页面的情况下更新页面
```