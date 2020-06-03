# JavaScript的执行机制

- [JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

- javaScript是单线程语言，所有的多线程都是通过单线程模拟出来的
- js引擎存在monitoring process进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去Event Queue那里检查是否有等待被调用的函数。

## 基本概念
- 进程：CPU分配资源的最小单位
- 线程：CPU调度的最小单位（一个进程有多个线程）
- 浏览器：多进程的[浏览器进程架构的演化](https://juejin.im/post/5df1e10cf265da33f34b3243)
- js: 单线程


## 一、同步任务
> 在主线程上排队执行，前面的没有执行完，后面的任务会一直等待


## 二、异步任务
> 挂在一个任务队列中，等待主线程的所有任务执行完成之后，通知任务队列把可以执行的任务放到主线程执行。

- macrotask(宏任务)：包括整体代码script、setTimeout、setInterval
- microtast(微任务)：Promise、process.nextTick、Object.observe、MutationObserver
- 执行优先级：先执行宏任务，再执行微任务

```js
// 100ms后被放入任务列表中，等待事件循环
setTimeout(fn,100)
```

## 三、Event loop执行机制

- 1. 开始循环，首先进入整体代码（宏任务），按照顺序取，直到队列清空
- 1.1 如果遇到微任务，放到本轮循环的微任务中；
- 1.2 如果遇到宏任务，则放到宏任务的末尾，等待下一轮循环才会执行；
- 2. 如果发现本轮有未执行的微任务，则执行微任务，直到所有的微任务都执行完；
- 3. 结束本轮循环
- 4. 从宏任务开始下一轮循环...

```js
// 宏任务
// 浏览器	Node
setTimeout	√	√
setInterval	√	√
setImmediate	x	√
requestAnimationFrame	√	x

// 微任务
// 浏览器	Node
process.nextTick	x	√
MutationObserver	√	x
Promise.then catch finally	√	√
```