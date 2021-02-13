# vue路由传参

## 1. 
```js
// 路由配置
{
  path: '/test/:name',
  name: 'Test',
  component: Test,
}
// 跳转方式
this.$router.push({
  path: `/test/${name}`
})
// 或
this.$router.push({
  name: 'Test',
  params: {
    name: 'ttt'
  }
})
// 获取数据方式
this.$router.params.name
```

## 2.
```js
// query传递方式或通过?name=传递参数
// 路由配置
{
  path: '/test',
  name: 'Test',
  component: Test,
}
// 跳转方式
this.$router.push({
  name: 'Test',
  query: {
    name: 'ttt'
  }
})
// 获取数据方式
this.$router.query.name
```