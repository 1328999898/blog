## express-jwt

- express-jwt是node的一个中间件，用于验证指定http请求的JsonWebTokens的有效性
- 如果有效：则将JsonWebTokens的值设置到req.user中，然后路由到响应的router

- express-jwt用于验证token，内部引用了JsonWebToken，对其封装引用
- JsonWebToken用于生成token给客户端

