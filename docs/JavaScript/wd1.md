# 网道ES5阅读笔记

- [JavaScript教程 - ES5](https://wangdoc.com/javascript/)

## 简介
- JavaScript是一种轻量级的脚本语言(脚本语言：不具备开发操作系统的能能力)
- JavaScript也是一种嵌入式语言。JavaScript本身不提供任何与I/O相关的API，都要靠宿主环境提供
- JavaScript也是一种对象模型语言

### JavaScript的宿主环境
- 浏览器
- 服务器(Node环境)

### JavaScript的核心语法
- 1. 基本的语法构造(操作符、控制结构、语句和标准库[Array、Date、Math等])
- 2. 各种宿主环境提供的API

### 浏览器提供的API
- 浏览器控制类：操作浏览器
- DOM类：操作DOM
- WEB类：实现互联网的各种功能
  
### 服务器提供的API
- 文件操作API
- 网络通信API

## JavaScript与Java的关系

- JavaScript的基本语法和对象体系是模仿Java设计的
- JavaScript没有采用Java的静态模型
- JavaScript语言的函数是一种独立的数据类型，采用基于原型对象的原型链(prototype)
- Java需要编译
- JavaScript运行时由解释器直接执行

## JavaScript与ECMAScript的关系
- ECMAScript只用来标准化JavaScript这种语言的基本语法结构
- DOM的标准由W3C制定

## JavaScript引擎的工作方式
变量提升：所有的变量声明语句，都被提升到代码的头部
1. 解析代码
2. 获取所有被声明的变量
3. 一行一行的运行
  
### 基本语法
JavaScript的执行单位：行
- 语句：以分号结尾
- 表达式：为了得到返回值的计算式
- 变量：对值的具名引用；变量名区分大小写；变量的声明和赋值是分开的两个步骤；变量的类型没有限制；
- 变量提升：所有变量的声明语句，都会被提升到代码的头部
- 标识符：用来识别各种值的合法名称(eg:变量名、函数名)
- 注释：被JavaScript引擎忽略的部分
- 区块：使用大括号将多个相关的语句组合在一起(特殊说明：对于var命令，区块不构成单独的作用域)
- 条件语句：满足条件才会执行相应的语句
  
## 数据类型
1. 数值型
2. 字符串
3. 布尔值
4. undefined
5. null
6. 对象
7. Symbol (Es6引入)

原始类型（不能再细分）：数值、字符串、布尔、Symbol
对象类型（合成类型）：狭义的对象（object）、数组（array）、函数（function）
特殊值：undefined、null

## 确定数据类型的方法
1. typeof
2. instanceof
3. Object.prototype.toString

- typeof
原始数据类型
```js
typeof 123    //"number"
typeof "123" // "string"
typeof true  // "boolean"
typeof Symbol()  // "symbol"
```
特殊数据类型
```js
typeof undefined  // "undefined"
typeof null       // "object"
// typeof null是object的原因：1995年JavaScript设计的第一版没有null类型，只把它当做object的一种特殊值。后来null独立出来作为一种单独的数据类型，但是为了兼容以前的代码，typeof null返回object就无法改变了
```
对象类型
```js
typeof function() {}  // "function"
typeof {}   // "object"
typeof []   // "object"
```
其他情况
```js
v // v未定义
typeof v  // "undefined"
// typeof 未定义的变量不会报错，而是返回undefined

typeof window   // "object"
```


### Error实例对象
JavaScript提供Error构造函数，所有抛出的错误都是这个对象的实例

Error的属性
1. message：错误提示信息
2. name：错误名称（非标准属性）
3. stack：错误的堆栈（非标准属性）

Error的6中派生对象
1. SyntaxError对象是解析代码时发生的语法错误
2. ReferenceError对象是引用一个不存在的变量时发生的错误
3. RangeError对象是一个值超出有效范围时发生的错误
4. TypeError对象是变量或参数不是预期类型时发生的错误
5. URIError对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数
6. eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留

自定义错误
```js
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError'
}
UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
```


