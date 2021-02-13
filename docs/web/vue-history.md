# Vue模式及配置

## 参考文档
- [Vue Router HTML5 History 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- [两种模式的区别](https://juejin.im/post/5a61908c6fb9a01c9064f20a)

## 两种模式
- hash: 默认，hash模式(地址栏中会有`#`号)，使用URL的hash模拟一个完整的URL，当URL改变时，页面不会重新加载
- history: 可以利用`history.pushState`API来完成URL跳转而无需重新加载页面

## history模式配置(基于nginx)

Vue Router文档【基础配置】
```sh
location / {
  try_files $uri $uri/ /index.html;
}
```
- 问题：访问`/`页面是没有问题的，进而访问其他页面也没有问题，但是直接通过URL地址访问其他页面就会出现404
- 原因：访问的资源(即目录/文件)在服务器找不到，vue-router配置的路由地址并不存在，但被当做了真实地址，实际上vue-router的资源都是在js中渲染的
- 解决方式【增加vue-router的跳转配置】
```sh
  # Vue Router文档：你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页
  location / {
      root   /项目路径/dist;
      try_files $uri $uri/ @router;
      index  index.html index.html;
  }

  location @router {
      rewrite ^.*$ /index.html last;
  }
```
- 重启nginx
```sh
# 配置完成后需要重新启动nginx
service nginx restart
```