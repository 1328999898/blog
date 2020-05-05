# flex(弹性布局)

## 参考文档

- [阮一峰Flex布局教程](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [阮一峰Flex布局教程(实例)](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

## 基本概念
- Flex容器：采用flex布局的元素
- Flex项目：Flex容器的所有子元素
- 轴：水平的主轴(main axis)和垂直的交叉轴(cross axis)

## 一、容器的属性

```js
- flex-direction: row(默认，水平，起点左) | row-reverse(水平，起点右) | column(垂直，起点上) | column-reverse(垂直，起点下)
- flex-wrap: nowrap(默认，不换行) | wrap(换行，第一行在上) | wrap-reverse(换行，第一行在下)
- flex-flow(flex-direction属性和flex-wrap属性的简写): <flex-direction> || <flex-wrap>
- justify-content: flex-start | flex-end | center | space-between | space-around
```