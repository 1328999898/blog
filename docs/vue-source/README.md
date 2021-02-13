# VUE源码解读
> [vue git源码](https://github.com/vuejs/vue.git) version 2.6.11
> [flow类型检查](https://zhenyong.github.io/flowtype/docs/quick-reference.html#_)

## 一、源码目录

- dist 打包的文件
- examples 示例
- src 源码
  - compiler 模板编译
  - core 核心代码

## 二、入口

- 位置 src/core/instance/index.js

```js
function Vue (options) {
  // 判断是否是线上环境，以及是否是通过new创建的对象
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化 调用的是initMixin中的定义的_init方法
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```


