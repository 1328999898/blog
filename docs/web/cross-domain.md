# 跨域解决方案

## 浏览器的同源策略
> 同源:协议+域名+端口完全相同（注：不同域名指向的IP地址相同，不算同源）

- 同源策略：1995年由Netspace公司引入浏览器
- 目的：保证用户信息的安全性

非同源情况下，受限的行为：
1. `Cookie`、`LocalStorage`、`IndexDB`无法读取
2. `DOM`无法获得
3. `AJAX`请求无法发送

## 常用的跨域解决方案

## 1. CORS
[MDN HTTP访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
::: tip
- CORS跨域资源共享(Cross-Origin-Resource-Sharing)
- 实现原理：通过自定义HTTP头部，决定浏览器和服务器的沟通
- CORS预检请求:对于复杂请求，会在真正的跨域请求之前，发送一个`OPTIONS`请求，用于询问服务器是否允许接下来的跨域请求。这个请求是浏览器主动发送的。
:::

- IE浏览器不能低于IE10，其他浏览器都可以正产使用
- 需要服务端支持，前端正常发送请求就可以
- `Access-Control-Allow-Origin`设置为`*`后，无法携带`cookie`
- 复杂请求，会进行`OPTIONS`预检

### 简单请求
> 不会触发CORS预检请求，浏览器会直接发送请求，同时会增加一个`Origin`表明自己的来源，服务器根据这个值，检查`Access-Control-Allow-Origin`，根据检查结果决定是否同意该请求
- 请求方法: `GET`、`POST`、`HEAD`
- 请求头: `Accept`、`Accept-Language`、`Content-Language`、`Content-Type`、`Last-Event-ID`
- `Content-Type`: `application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`

### 复杂请求
> 发送真正的请求之前会进行`OPTIONS`预检请求
- 请求方法: `PUT`、`DELETE`、`OPTIONS`、`PATCH`、`TRACE`、`CONNECT`
- 请求头: 简单请求规定之外的请求头
- `Content-Type`: 简单请求规定之外的`Content-Type`
 

### 配置项(服务器端)
::: tip
- `Access-Control-Allow-Origin`: 允许访问的域名，`*`或者指定的域名，注:携带`cookie`时，需要配置为指定的域名
- `Access-Control-Allow-Methods`: 允许的请求方式
- `Access-Control-Allow-Headers`: 允许的请求头
- `Access-Control-Allow-Credentials`: 允许写到`cookie`
- `Access-Control-Max-Age`: `OPTIONS`预检请求结果的缓存时长，缓存有效期内不会再出发预检
:::


## 2. Proxy方式
> 原理:浏览器和服务器通信会存在跨域，服务器间不存在跨域

::: tip
本地测试时可以通过`webpack`的`webpack-dev-server`起一个web服务，
线上可以通过apache/nginx/node进行配置
:::

- `webpack-dev-server`配置
  
可供参考：
[vue cli proxy](https://cli.vuejs.org/zh/config/#devserver-proxy)
[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#proxycontext-config)
```js
  // 本地请求会通过/path转发到对应的地址
  devServer: {
    proxy: {
      ['/path']: {
        target: 'http://121.232.33.33:8888',    // 转发地址
        changeOrigin: true,
        pathRewrite: {    // 请求地址中替换/path
          ['^' + 'path']: ''
        }
      },
    }
  },
```

- nginx配置
```sh
# 本地请求会通过/path转发到对应的地址
location /path {
    rewrite ^/path/(.*)$ /$1 break;  # 请求地址中替换/path
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass http://121.232.33.33:8888;  # 转发地址
}
```

## 3. JSONP
> 实现原理：利用script不存在跨域限制，通过`<script>`向服务器发送请求，需要`callback`参数指定回调函数名称，服务器接收请求后，将加工后的数据封装成`回调函数(数据)`的格式返回给前端，前端会自动调用回调函数。

- 发送请求时，需携带一个`callback`参数，用于指定回调函数的名称
- 需要服务端支持
- 只能GET，不能POST
- 不安全

eg:
- node服务
```js
var express = require('express');
var app = express();

app.get('/test' , function(req, res) {
  const params = req.query;
  const fn = params.callback;
  const data = {"a":"1", "b":"2"};
  res.end(`${fn}(${JSON.stringify(data)})`);
})

app.listen(8888, function() {
  console.log('the app listen on port 8888')
})
```
- jquery请求 - 方法1
```js
<script type="text/javascript">
// 回调函数
function getCallback (result) {
  console.log(result);
}
</script>
<script src="http://127.0.0.1:8888/test?callback=getCallback"></script>
```
- jquery请求 - 方法2
```js
$.ajax({
  type: "get",
  url: "http://127.0.0.1:8888/test",
  dataType:"jsonp", // 指定为jsonp类型
  jsonpCallback: "getCallback", // 用于指定回调函数，非必须配置项
  success: function (data) {  // 成功后的回调函数
    console.log('success', data)
  },
  error: function(xhr,textStatus){
    console.log(xhr, textStatus)
  }
})
// 配置dataType:"jsonp"即可
// jsonpCallback和success同时存在时，会先执行jsonpCallback，后执行success
// 每次都会随机生成一个回调函数名称
// eg: Request URL: http://127.0.0.1:8888/test?callback=jQuery22403473317583188915_1591672640204&_=1591672640205
// 
```

## 4. 修改本地HOST
