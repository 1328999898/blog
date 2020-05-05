# Sublime Text 安装

* [官方下载地址](http://www.sublimetext.com/3)
* [设置详细说明](http://www.cnblogs.com/pdq-phper/p/5093486.html)
* [常用快捷键-1](http://blog.csdn.net/cywosp/article/details/31791881)
* [常用快捷键-2](http://www.codesec.net/view/219715.html)
* [Emmet：HTML/CSS代码快速编写神器](http://www.iteye.com/news/27580)
* [常用的前端开发插件-推荐](http://www.cnblogs.com/hykun/p/sublimeText3.html)
* [Emmet官方文档](https://docs.emmet.io/)
* [Emmet官方速查表](https://docs.emmet.io/cheat-sheet/)

## 常用操作
```sh
# 查询已安装的插件
Preferences -> Browse Packages
# 显示目录树(即左侧文件和文件夹)
view -> Side Bar -> Show Side Bar
```

## 常用设置

> Preferences -> settings

```json
{
	"color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
	"default_line_ending": "unix",
	"ensure_newline_at_eof_on_save": true,
	"font_size": 22,
	"ignored_packages":
	[
		"Vintage"
	],
	"tab_size": 4,
	"translate_tabs_to_spaces": true,
	"trim_trailing_white_space_on_save": true
}
```

## 常用插件

```sh
# 安装插件流程
Ctrl + shift + P 调用命令面板 -> 输入install Package -> 插件名 -> 回车
```

- Package Ctrl  （包管理器，用于安装其他的插间）
- ChineseLocalizations  （汉化插件）
- SqlBeautifier     (SQL格式化，CTRL+K+F => 格式化所选SQL)
- BracketHighlighter    (类似于代码匹配，可以匹配括号，引号等符号内的范围)
- Anaconda  （python的轻量级IDE，格式检查和自动纠错）
- PyYapf    (python代码格式化)
- Alignment （自动对齐代码，包括PHP、CSS、JavaScript语言）
- SublimeLinter （代码检查插件，支持十多种开发语言）
- Color Schemes (配色方案，包括各种主题)
- MarkdownEditing （Markdown语法高亮）
- OmniMarkupPreviewer   (用来预览markdown编辑的效果,渲染代码高亮)
- git （git版本库管理）
- autopep8
- html5
- emment  (HTML/CSS代码快速编写神器)

## 前端常用插件

- Emmet 	(使编写HTML代码简单高效)
- JsFormat	(快捷键Ctrl+Alt+F对JS进行格式化)
- SideBarEnhancements 	(右键菜单增强插件)
- TrailingSpaces  		(高亮显示多余的空格和Tab)

## 常用快捷键
```sh
Ctrl + P                    # 查找文件
Ctrl + R                    # 跳转标记（查找方法）
Ctrl + L                    # 选中整行
# ctrl+l 选中整行，继续操作则继续选择下一行，效果和 shift+↓ 效果一样
# ==========================================================
# Markdown快捷键
command + option + k    # 插入链接（或输入"mdl + tab"）
command + shift + k     # 插入图片（或输入"mdi + tab"）
Command +Option +O      # 在浏览器中预览
Command+Option+X        # 导出HTML
Ctrl+Alt+C              # HTML标记拷贝至剪贴板
```

| 快捷键 | 说明 |
| ---- | ---- |
| commend+alt+2  | 分为两屏显示 | 
| commend+alt+3  | 分为三屏显示 | 
| commend+alt+/  | 快捷注释 | 
| Tab  | 向右缩进 | 
| Shift+Tab  | 向左缩进 | 
| command + shift + l |  | 



## 查看包名:删除插件:更新插件
```sh
查看包名：Perferences->package settings
删除插件：Ctrl+Shift+P调出命令面板，输入remove，调出Remove Package选项并回车，选择要删除的插件即可
更新插件：upgrade packages
```

## 遇到过的问题

### 问题一
```sh
Error: 404 Not Found

Sorry, the requested URL 'http://127.0.0.1:51004/view/54' caused an error:

'buffer_id(54) is not valid (closed or unsupported file format)'

**NOTE:** If you run multiple instances of Sublime Text, you may want to adjust
the `server_port` option in order to get this plugin work again.
```
解决方案
```sh
1. 打开配置文件：Sublime Text > Preferences > Package Settings > OmniMarkupPreviewer > Settings - User
2. 将下面代码拷贝到配置文件中
{
    "renderer_options-MarkdownRenderer": {
        "extensions": ["tables", "fenced_code", "codehilite"]
    }
}
```
