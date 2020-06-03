## map和reduce的区别

- Array.prototype.map()
- Array.prototype.reduce()

### 一、map

- 将数组的元素按照顺序依次作为函数的参数传入，每次传入一个，生成一个新的数组
- 回调函数可以使用三个参数：currentValue(当前处理的元素)，index(当前处理元素的索引)，array(调用map方法的数组)


### 二、reduce
- 将数组的元素按照顺序依次作为函数的参数传入，则回调函数第一次执行时有两种情况：
- 1）如果有初始值，则accumulator取值为initialValue，currentValue取值为数组中的第一个元素
- 2）如果没有初始值，则accumulator取值为数组中的第一个元素，currentValue为数组中的第二个元素
- 后续回调依次传入accumulator和下一个数组的元素
- 回调函数可以使用四个参数：accumulator(累计器累计回调的返回值)，currentValue(当前处理的元素)，index(当前处理元素的索引)，array(调用map方法的数组)



### 三、共同点

- 1. 都是对数组的处理
- 2. 都是将函数作为参数传入


### 四、区别

map
- 1. 生成的数据是一个新数组
- 2. 可以传入thisArg(执行 callback 函数时值被用作this。)

reduce
- 1. 返回累计的结果
- 2. 可以传入默认值


### 五、例子

```js
function add(cur, index, arr) {
  // 生成新数组元素的函数
  // console.log(this)
  console.log('add', cur, index, arr)
  return cur + 1;
}

function sum(acc, cur, index, arr) {
  console.log('sum', acc, cur, index, arr)
  return acc + cur;
}

const arr = [1, 2, 3];
const arr2 = [8,9,11];
const addRes = arr.map(add);
const addRes2 = arr.map(add, arr2);
const sumRes = arr.reduce(sum);
console.log(addRes); // [ 2, 3, 4 ]
console.log(sumRes); // 6
```
