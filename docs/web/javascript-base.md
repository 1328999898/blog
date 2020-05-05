# JavaScript基础

## 1. 对象拷贝
```js
// 1. 对象的拷贝
const a = {'a':1, 'b': {'c': 1}}
// 复制一个对象，assign拷贝的是属性值，如果属性值是引用，那么也指向那个引用
// 浅拷贝
const obj = Object().assign({}, a)
const obj = {...a}
// 深度拷贝
const obj = JSON.parse(JSON.stringify(a))
```

## 2. 数组的拷贝
```js
const a = [1,2,3,4,5]
// 浅拷贝
const b = a.slice()
const b = [...a]
const b = a.concat()
// 深拷贝
const b = JSON.parse(JSON.stringify(numbers))
```

## 3. 对象数组去重
```js
// 数据去重
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];
const res = responseList.reduce((acc, cur)=>{
  const ids = acc.map(item => item.id);
  return ids.includes(cur.id) ? acc : [...acc, cur]
}, [])
console.log(res)

// 数据去重
const a = [1,2,3,4,5,3,2,4,1];
const b = Array.from(new Set(a))
console.log(b)

// 数组内对象去重
var arr = [{'code': 'a'}, {'code': 'b'}, {'code': 'c'}, {'code': 'b'}]
res = arr.reduce((acc,cur) => {
  if (acc[1].indexOf(cur['code']) == -1){
    acc[0].push(cur)
    acc[1].push(cur['code'])
  }
  return acc
}, [[], []])[0]

// 查询数组中出现最多的元素和次数
var arr = [3, 5, 6, 5, 9, 8, 10, 5, 7, 7, 10, 7, 7, 7, 7, 10, 10, 10, 10, 10];
arr.reduce((acc,cur)=>{
    if (cur > acc[0]){
        acc[0] = cur
        acc[1] += 1
    }
    return acc
}, [0, 0])
```


## 3. Map复制
```js
var original = new Map([
  [1, 'one']
]);
var clone = new Map(original);
// Map合并
// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
var first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
var second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);
var merged = new Map([...first, ...second]);
```

## 4. 对象序列化
- [参考文档](https://www.cnblogs.com/craftsman-gao/p/5130567.html)
```js
// JSON.stringify(序列化的数组/对象，字符串属性的顺序， 介于1-10之前的数值 在每一层级的输出插入换行符和指定个数的空格)
> a = [{a: 11, b:2332}]
> JSON.stringify(a, ['b','a'], 4)
< "[
    {
        "b": 2332,
        "a": 11
    }
]"
```

## 其他
```js
let lang = navigator.language;  // 通常指浏览器的语言
location.search     // 捕获get方式请求的参数

var a= 10;
var obj = {
    a: 20,
    say: function(){
        console.log(this.a);
    }
}
obj.say() // 20
obj.say.call(this) // 10
var tt = obj.say
tt.say()    // 10

var obj = {
    a:20,
    say: () => {
        console.log(this.a);
    }
}
obj.say() // 10
```

