# vue

## 参考文档

- [vuejs github](https://github.com/vuejs)
- [Vue官网](https://cn.vuejs.org/)
- [Vue CLI官网](https://cli.vuejs.org/zh/guide/mode-and-env.html)
- [Vue Router官网](https://router.vuejs.org/zh/guide/)
- [Vuex官网](https://vuex.vuejs.org/zh/guide/)
- [axios文档](https://www.kancloud.cn/yunye/axios/234845)
- [expressjs官网](https://expressjs.com/zh-cn/)
- [express-cluster](https://www.npmjs.com/package/express-cluster)
- [element-ui官网](https://element.eleme.cn/#/zh-CN/component/installation)
- [webpack官网](https://webpack.docschina.org/guides/getting-started/)
- [prismjs官网](https://prismjs.com/)

## 说明
- 用于构建用户界面的渐进式框架
- 可以自底向上逐层应用
- Vue 的核心库只关注视图层
- 易于上手，还便于与第三方库或既有项目整合


## 基础
```js
// prop: 大小写不敏感，即：驼峰命名法需要使用短横线分割
// 绑定prop时，prop必须在子组件中声明，可以用修饰符指定不同的绑定类型
// .sync 双向绑定，只能用于prop
// .once 单向绑定，只能用于prop
// .camel 将绑定的特性名字转换为驼峰名称，只能用于普通HTML特性绑定

// v-on 可以绑定多种类型的方法 click、change...
// 如果v-on绑定了一个或多个click事件，则只会绑定第一个click事件

// 计算属性：当依赖的属性值发生变化时，这个属性的值会自动更新，与之相关的DOM也会自动更新

// 组件之间的数据传递
// 1. props  父组件传给子组件
// 2. 组件通信
// 3. slot
```

## v-for的key

[参考文档](https://juejin.im/post/5aae19aa6fb9a028d4445d1a)

- 不推荐使用数组的下标作为keys
- Diff算法

