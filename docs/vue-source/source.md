# 响应式原理
- 核心`Object.defineProperty`
- 重新定义属性，收集依赖
- initData(src/core/instance/state.js) => new Observer => this.walk => defineReactive => Object.defineProperty
  
# 检测数组变化
- 使用函数劫持，重写了数组的方法
- 进行原型链重写，指向了自己定义的数组原型方法，调用数组API时，可以通知依赖更新，如果数组中包含着引用类型，会对数组中定义的引用类型再次进行监控
- initData => new Observer => protoAugment(value, arrayMethods) => 对数组的原型方法进行重写/observeArray

# 异步渲染原理
- 为了性能考虑，防止一改动数据，就更新视图
- dep.notufy() => subs[i]update() => queueWatcher => nextTick()

# nextTick实现原理
- 只要使用了宏任务和微任务，定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列，这个nextTick方法就是异步方法
- nextTick => callbacks => timerFunc => 返回Promise
- timerFunc：
- 1. 尝试采用Promise回调
- 2. 尝试采用MutationObserver回调
- 3. 尝试采用setImmediate回调
- 4. 最终采用setTimeout回调


# Computed的特点
- 计算属性有缓存
- 具备缓存
- initComputed => new Watcher => defineComputed => createComputedGetter => 当用户取值时 => 
- dirty=false:返回上次计算的结果
- dirty=true:watcher：evaluate

# Computed、Watch、method的区别
- Computed和watch的区别：内部都使用watcher

# watch中的deep：true的实现


