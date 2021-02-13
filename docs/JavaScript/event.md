FIFO(First In First Out)队列：先进先出队列


JavaScript是单线程处理的
Node.js是单线程的

Node.js适合处理I/O型的应用，不适合CPU运算型的应用
在I/O型的应用中，只需要给每个输入输出定义一个回调函数即可，它们会自动加入到时间轮询的队列中
在I/O操作完成后，这个回调函数就会被触发

事件循环：Node.js处理非阻塞I/O操作的机制

process.nextTick()：定义一个动作，并且让这个动作在下一个事件轮询的时间点上执行
setTimeout：可以达到与process.nextTick()同样的效果

内部处理机制上process.nextTick和setTimeout是不同的



用法
```js
function foo() {
    console.error('foo');
}

process.nextTick(foo);
console.error('bar');
```