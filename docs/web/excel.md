# Excel导出

- [js-xlsx](https://github.com/SheetJS/sheetjs)

```js
let data = [
  {
    name: "测试1",
    value: "test1"
  },
  {
    name: "测试2",
    value: "test2"
  },
]
// 创建一个空的workbook
let book = xlsx.utils.book_new()
// 将数组转化为worksheets
let sheet = xlsx.utils.json_to_sheet(data)
// 将worksheet添加到workbook中
xlsx.utils.book_append_sheet(book, sheet, 'book')
// 导出Excels
let curDate = +new Date()
let bookName = `book${curDate}.xlsx`
xlsx.writeFile(book, bookName)
```