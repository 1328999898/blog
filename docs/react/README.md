# React

## 概览
- React是Facebook创建的一个开源项目
- React是一个Javascript库，不是框架
- React是mvc模型中的view层
- React用于构建用户界面


## React应用程序的组成
1. 元素
2. 组件

## JSX
JSX是JavaScript中的一个语法扩展
即`JavaScript` + `XML`

JSX在编译时，会被babel转换为`React.createElement`方法

```js
const element = <h1>Hello, world!</h1>;
```

## React内部的模块
jsx => render => commit => DOM
1. render: 负责解析JSX对象，决定哪些节点最终需要渲染成DOM节点
2. commit: 把需要渲染的DOM节点渲染到页面上

## schedule阶段
schedule: 一种机制，处理更新的优先级，判断哪些更新应该被优先执行
jsx => schedule => render => commit => DOM
1. schedule: 当触发状态改变时，先判断触发的更新的优先级，然后通知render阶段接下来应该处理哪个更新
2. render: 收到schedule的通知，处理更新对应的jsx，决定哪些jsx最终是需要被渲染的
3. commit: 接收render需要被渲染的内容，渲染到页面上

## commit阶段解析
commit: 负责把需要渲染的元素渲染到页面上
不同平台的commit：
- ReactDOM: 渲染到浏览器端
- ReactNative: 渲染APP原生组件
- ReactTest: 渲染出纯JS对象，用于测试
- ReactArt: 渲染到Canvas、svg或VML(IE8)

## render的最小单元 - Fiber



深度遍历

## React16的架构
- Scheduler: 调度器 --- 调度任务的优先级，高优先、
- Reconciler: 协调器
- Renderer: 渲染器



React：没有编译时的优化手段

React的优化手段
由开发者来显式的告诉React哪些组件不需要重复计算、可以复用。
- 使用PureComponent或React.memo构建组件
- 使用shouldComponentUpdate生命周期钩子
- 渲染列表时使用key
- 使用useCallback和useMemo缓存函数和变量

响应自然
eg: 地址输入框中，输入字符时，会实时的显示地址匹配结果
如果输入过快，可能输入会变得不那么流畅，原因：下拉列表的更新会阻塞线程
通常是使用：debounce或throttle来减少输入内容时触发回调的次数来解决
响应自然：考虑的是，当输入字符时，用户是否在意下拉框能在一瞬间更新？事实是不在意
因此，可以通过稍稍延迟下拉框的更新时间，为浏览器留出时间渲染UI，使输入不卡顿
同步更新 =》可中断的异步更新
浏览器每一帧的时间中，预留一些时间给JS线程，React用这些时间更新组件


React Fiber
内部的一套状态更新机制。支持任务不同优先级、可中断与恢复、并且恢复后，可以复用之前的中间状态
每个任务更新单元为React Element对应的Fiber节点

Fiber：虚拟DOM

React15及以前：`Reconciler`采用递归的方式创建虚拟DOM，递归过程是不能中断的，如果组件树层级很深，递归会占用很多时间，造成卡顿。
React16：将递归的无法中断的更新 重构为 异步的可以中断的更新，于是出现了Fiber架构

Fiber的三层含义
1. 架构层面
  - React15的Reconciler: 数据保存在递归调用栈中，所以称为`stack Reconciler`
  - React16的Reconciler: 基于Fiber实现，因此称为 `Fiber Reconciler`
2. 静态数据结构层面
  - 每个`Fiber节点`对应一个`React Element`，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息
3. 动态工作单元
  - 每个`Fiber节点`保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）


Fiber树
Fiber节点
Fiber节点构成的Fiber树 就对应 DOM树







