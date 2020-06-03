# flex(弹性布局)

## 参考文档

- [阮一峰 Flex 布局教程](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [阮一峰 Flex 布局教程(实例)](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

## 基本概念

- Flex 容器：采用 flex 布局的元素
- Flex 项目：Flex 容器的所有子元素
- 轴：水平的主轴(main axis)和垂直的交叉轴(cross axis)

## 一、容器的属性

### 1. flex-direction

```js
// 主轴方向
- row(默认值，水平，起点左)
- row-reverse(水平，起点右)
- column(垂直，起点上)
- column-reverse(垂直，起点下)
```

### 2. flex-wrap

```js
// 是否换行
- nowrap(默认值，不换行)
- wrap(换行，第一行在上)
- wrap-reverse(换行，第一行在下)
```

### 3. flex-flow

```js
// flex-flow属性是flex-direction属性和flex-wrap属性的简写形式
- flex-flow: <flex-direction> || <flex-wrap>
```

### 4. justify-content

```js
// 主轴的对齐方式
- flex-start(默认值，主轴起点对齐)
- flex-end(主轴终点对齐)
- center(居中)
- space-between(两端对齐，项目之间的间隔都相等)
- space-around(每个项目两侧的间隔相等)
```

### 5. align-items
```js
// 交叉轴对齐方式
- flex-start(交叉轴起点对齐)
- flex-end(交叉轴终点对齐)
- center(居中)
- baseline(项目的第一行文字的基线对齐)
- stretch(默认值，如果项目未设置高度或设为auto，将占满整个容器的高度)
```

### 6. align-content
```js
// 多根轴线的对齐方式
- flex-start(与交叉轴的起点对齐)
- flex-end(与交叉轴的终点对齐)
- center(与交叉轴的中点对齐)
- space-between(与交叉轴两端对齐)
- space-around(每根轴线两侧的间隔都相等)
- stretch(默认值，轴线占满整个交叉轴)
```

## 二、项目的属性
### 1.order
```js
// 定义项目的排列顺序，数值越小，排列越靠前，默认为0。
order: <integer>; /* default 0 */
```
### 2.flex-grow
```js
// 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-grow: <number>; /* default 0 */
```
### 3.flex-shrink
```js
// 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex-shrink: <number>; /* default 1 */
```
### 4.flex-basis
```js
// 项目占据的主轴空间（main size）,它的默认值为auto，即项目的本来大小。
flex-basis: <length> | auto; /* default auto */
```
### 5.flex
```js
// flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```
### 6.align-self
```js
// align-self属性允许单个项目有与其他项目不一样的对齐方式,可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```
