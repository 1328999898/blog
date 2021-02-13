# vue定时器销毁处理
::: tip
当在一个页面中使用了定时器，然后跳转到另一个页面时，定时器依然在执行，并不会自动销毁
:::

## 定时器销毁方法1(更好的解决方案)

```js
mounted(){
  const timer = setInterval(function() {
    // ...
  }, 1000)
  // $once(event, callback)
  // 监听一个自定义事件，但是只触发一次，一但触发，监听器就会被移除
  this.$once('hook:beforeDestroy', () => {
    clearInterval(timer)
  })
}
```

## 定时器销毁方法2

```js
data() {
  timer: null
},
mounted() {
  this.timer = setInterval(function() {
    // ...
  }, 1000)
},
beforeDestroy() {
  clearInterval(this.timer)
  this.timer = null
}
```