# RESTful API
::: tip
`RESTful API`(英文名`Representational State Transfer`，直译:表现层状态转移)， 可以认为是一套设计规范/设计思想/设计模式，主要用于`WEB` `API`设计，首次出现在2000年`Roy Fielding`的博士论文中。
:::

- 如果一个架构符合REST原则，就称它为RESTful架构
- 资源：一个具体的信息。eg：文本、图片等，每种资源对应一个特定的URI
- 表现层：即资源的表现层，资源的表现形式。eg: 文本的表现形式可以是txt、HTML、json等
- 表现层状态转化：客户端让服务器发生`状态转化`的手段(即：HTTP协议的操作方法，eg:`GET`、`POST`...)


## 解释
使用URI定位资源，HTTP动词操作资源

## 特征
- 以资源为基础
- 通过重表达的客户端可以管理资源
- 返回信息足够描述自己
- 超媒体是应用状态的引擎
  - 无状态
  - 可缓存
  - 客户端-服务器分离模式
  - 分层的系统
  - 按需代码

## 6种设计原则
- 1. 客户端-服务端分离：数据存储在服务端，客户端只负责使用
  - 提高客户端的可移植性
  - 提升服务端的可扩展性
  - 两端单独开发，互补干扰
- 2. 无状态：服务器不能保存客户端的信息，客户端的每次请求都需要携带所有必须的状态信息
  - 提升服务端的健壮性、可扩展性
  - 缺点：每次带上重复的信息，会造成传输数据的冗余，但相对于性能和使用来说，这个缺点可以忽略不计
- 3. 缓存：客户端可以缓存页面的响应内容
  - 良好的缓存机制可以减少客户端-服务器之间的交互，进一步提了高性能和可扩展性
- 4. 统一接口：REST API的核心
  - 简化了系统架构
  - 减少了耦合性
  - 各模块可以独立开发
- 5. 分层系统：客户端无法知道连接的是不是最终服务器
  - 中间服务器可以通过负载均衡和共享缓存的机制提高系统的可扩展性
  - 便于安全策略的部署
- 6. 按需代码：服务器可以发送一些代码给客户端执行
  - 定制或扩展客户端的某些功能


## 设计方式

### 1. 版本
两种方式
1. 放在URL中
```js
http://www.example.com/v.0.0.1/
```
2. 放在header中[eg:github](https://developer.github.com/v3/media/#request-specific-version)
```js
// application/vnd.github[.version].param[+json]
Accept: application/vnd.github.v3.full+json
```

### 2. 命名规范
- API: 只能有名词，不能有动词。URL尽量使用`-`，而不是`_`
- 参数: 通常使用`_`分割

### 3. HTTP操作资源的方式
- GET: 获取资源
- POST: 创建资源
- DELETE: 删除资源
- PUT: 更新整个资源
- PATCH: 更新资源的一部分
- HEAD: 获取资源的元数据
- OPTIONS: 获取信息，关于资源的哪些属性是客户端可以改变的

### 4. API请求及结果返回
```js
GET http://www.example.com/v.0.0.1/resource     // 获取资源，返回数组
GET http://www.example.com/v.0.0.1/resource/id  // 获取指定资源，返回对象
POST http://www.example.com/v.0.0.1/resource     // 创建资源，返回创建资源的对象
PUT http://www.example.com/v.0.0.1/resource/id   // 修改资源，返回完整的资源对象
PATCH http://www.example.com/v.0.0.1/resource/id  // 修改资源，返回完整的资源对象
DELETE http://www.example.com/v.0.0.1/resource/id  // 删除资源，返回空文档

// 过滤通常使用传参格式
?limit=10
```

### 5. http状态码
- 1**: 请求未成功
- 2**: 请求成功
- 3**: 重定向
- 4**: 客户端错误
- 5**: 服务端错误


## 其他

CRUD：即增删改查
```
C(create)
R(READ)
U(UPDATE)
D(DELETE)
```





