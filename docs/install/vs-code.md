# VS Code

- [官方文档](https://code.visualstudio.com)

## 安装插件
- `Code Runner`: 运行代码
- `Code Spell Checker`: 基于驼峰式的代码拼写检查
- `Bracket Pair Colorizer`: 括号对彩色化
- `open in browser`：在浏览器中打开
- `koroFileHeader`:生成文件头部注释和函数注释，比`vscode-fileheader`功能更强大，如果安装`koroFileHeader`之前已经安装了`vscode-fileheader`，需要先卸载`vscode-fileheader`，否则使用函数注释时会出现`command 'extension.cursorTip' not found`的异常
- `REST Client`: 允许发送http请求
- `Markdown All in One`: `markdown`快捷键
- `Markdown Preview Enhanced`：`markdown`右侧预览
-` Markdown Pdf`：可以将`markdown`文件转为`pdf`、`html`、`png`、`jpeg`
- `Markdown Toc`：生成TOC
- `Vetur`
- `vue-helper`
- `VueHelper`
- `SQL Beautify`
- `Prettier - Code formatter`:
- `JavaScript (ES6) code snippets`
- `IntelliSense for CSS class names in HTML`
- `HTML CSS Support`

## 配置文件
> [vs code配置](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)
```json
{
    // 头部注释
    "fileheader.customMade": {
        // 头部注释默认字段
        "Author": "your name",
        "Date": "Do not edit", // 设置后默认设置文件生成时间
        "LastEditTime": "Do not edit", // 设置后，保存文件更改默认更新最后编辑时间
        "LastEditors": "your name", // 设置后，保存文件更改默认更新最后编辑人
        "Description": "",
        "FilePath": "Do not edit", // 设置后，默认生成文件相对于项目的路径
        // "custom_string_obkoro1": "可以输入预定的版权声明、个性签名、空行等"
    },
    // 函数注释
    "fileheader.cursorMode": {
        // 默认字段
        "description":"",
        "param":"",
        "return":""
    },
   // 函数注释
   "fileheader.cursorMode": {
      // 默认字段
      "description":"",
      "param":"",
      "return":""
   },
   // https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
   // 自动添加头部注释黑名单, 插件黑名单的参数接收的是文件后缀，当文件后缀匹配跟黑名单数组内的元素匹配时，该文件不会自动添加头部注释
   "fileheader.configObj": {
      "autoAdd": false,       // 取消 自动添加头部注释开启才能自动添加
      "autoAlready": false,   // 取消 自动添加头部注释
      "createHeader": false,  // 取消 新建文件自动添加头部注释
      // 禁止.json .md文件，自动添加头部注释
      // "prohibitAutoAdd": [ "json", "md", "html", "vue"]
   },
}
```
