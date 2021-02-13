# 正则表达式

## replace
::: tip
将指定值或者正则表达式，替换为新字符
:::

```js
// 使用方法
// .replace(匹配的内容, 替换的内容)
// 匹配的内容：字符串或者正则表达式
// 替换的内容：字符串或者函数
// 简单用法
let a = 'a,b,c,d';
a.replace(/,/g, ';'); // => "a;b;c;d"
// 函数
// 函数的参数
// 1. match，匹配的字符串
// 2. p1,p2, ... 正则表达式的第n个括号，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+
// 3. offset, 匹配到的子字符串在原字符串中的偏移量
// 4. string, 被匹配的原字符串。
// eg
let b = "{a}, {b}, {c}";
b.replace(/{([abc]+)}/g, function(match, value, offset, str) {
  console.log(match, value, offset, str);
  return value;
});
// => 输出过程
// {a} a 0 {a}, {b}, {c}
// {b} b 5 {a}, {b}, {c}
// {c} c 10 {a}, {b}, {c}
// => 返回值
// "a, b, c"
```