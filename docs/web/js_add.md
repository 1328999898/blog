# JS进阶

- 函数的执行
  - 函数的执行过程
  - 执行上下文
  - 变量对象
  - 作用域
  - 作用域链
  - 闭包
  - this指向
  - 原型及原型链
- 事件循环

## JavaScript代码的整体执行过程
- 编译阶段（编译器）
  - 词法分析
  - 语法分析
  - 可执行代码生成
  - 作用域规则确定
  - ...
- 代码执行阶段（JavaScript引擎）
  - 执行上下文创建
  - 代码执行
  - 垃圾回收
  - ...

## 函数执行过程
1. 确定执行环境
2. 创建阶段
  - 生成变量对象
  - 建立作用域链
  - 确定this指向
3. 执行阶段
  - 变量赋值
  - 函数引用
  - 执行其他代码
4. 执行完毕，等待被回收
  - 浏览器的垃圾回收机制

## 执行上下文
- 类型
  - 全局执行上下文
  - 函数执行上下文
  - eval执行上下文
- 