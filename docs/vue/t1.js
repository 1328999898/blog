// js 的setter和getter

// ## setter设置对象属性时调用的函数
// 1.
// const language = {
//   set current(name) {
//     this.log.push(name)
//   },
//   log: []
// }

// language.current = 'EN'
// language.current = 'FA'

// console.log(language)


// 2. Object.defineProperty 给已存在的对象添加setting
// const a = { m : 0 }
// Object.defineProperty(a, 'b', {
//   set: function(v) {
//     this.m = v/2
//   }
// })
// a.b = 10
// console.log(a)


// // 3.使用计算属性名
// const expr = "foo"
// const obj = {
//   baz: "baz",
//   set [expr](val) {
//     this.baz = val
//   }
// }
// obj.foo = 'test'
// console.log(obj)

// ## getter 查询属性时绑定的函数
// 1. 新对象初始化时定义getter
// const obj = {
//   log: ['a', 'b', 'c'],
//   get latest() {
//     if (this.log.length === 0) {
//       return undefined
//     }
//     return this.log[this.log.length - 1]
//   }
// }
// console.log(obj.latest)
// 2. 使用Object.defineProperty 在现有对象上定义getter
// var o = { a : 0 }
// Object.defineProperty(o, 'b', {
//   get: function() {
//     this.a +=1
//   }
// })
// console.log(o.a)

// 3. 使用计算属性

const expr = 'foo'

const obj = {
  get [expr]() {
    return 'bar'
  }
}
console.log(obj.foo)

