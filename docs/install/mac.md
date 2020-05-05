# MAC软件安装

## 参考文档
- [navicat premium 已损坏解决方案](https://www.jianshu.com/p/3d47a1675f69)
- [mac下安装rz和sz](http://xfhnever.com/2015/09/04/mac-rzsz/)
- [items2快捷键](https://cnbin.github.io/blog/2015/06/20/iterm2-kuai-jie-jian-da-quan/)

## 常用快捷键

### 1、ITERM

| 快捷键 | 说明 |
| ---- | ---- |
| 新建标签 | command + t | 
| 关闭标签 | command + w | 
| 切换标签 | command + 数字 command + 左右方向键 | 
| 切换全屏 | command + enter | 
| 切换全屏 | command + enter | 
| 查找 | command + f | 
| 垂直分屏 | command + d | 
| 水平分屏 | command + shift + d | 
| 切换屏幕 | command + [ 或 command + ] | 
| 查看历史命令 | command + ; | 
| 查看剪贴板历史 | command + shift + h | 
| 清除当前行 | ctrl + u | 
| 到行首 | ctrl + a | 
| 到行尾 | ctrl + e | 
| 前进后退 | ctrl + f/b (相当于左右方向键) | 
| 上一条命令 | ctrl + p | 
| 搜索命令历史 | ctrl + r | 
| 删除当前光标的字符 | ctrl + d | 
| 删除光标之前的字符 | ctrl + h | 
| 删除光标之前的单词 | ctrl + w | 
| 删除到文本末尾 | ctrl + k | 
| 交换光标处文本 | ctrl + t | 
| 清屏 | command + r | 

### 2、vi快捷方式

| 快捷键 | 说明 |
| ---- | ---- |
| 数字0 | 切换到行首 | 
| $ | 切换到行尾 | 
| dd | 删除当前行 | 
| o | 进入插入模式后，从目前光标所在位置的下一行行首开始输入文字 | 
| a | 进入插入模式后，从目前光标所在位置的下一个位置开始输入文字 | 
| ?DATA | 向前搜索字符DATA | 
| :q! | 不保存文件，强制退出vi | 

### 3、锁屏快捷键
```
Ctrl+Shift+Power: 关闭屏幕
Cmd+Opt+Power: 睡眠 (sleep)
Cmd+Ctrl+Power: 重启 (restart)
Cmd+Ctrl+Opt+Power: 关机 (shutdown)
```

## 常用命令
```sh
1.查询端口占用
lsof -i:端口号
2.关闭指定端口
kill -9 PID
```

## Homebrew

> Homebrew简称brew，是Mac OSX上的软件包管理工具，相当于Red hat有yum，Ubuntu有apt-get

* [Homebrew官网](https://brew.sh/index_zh-cn.html)
* [Mac Office 2016 破解](http://jingyan.baidu.com/article/ce09321b7478072bff858f03.html)

### 1、安装

将下列命令粘贴至终端
```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2、常用命令

- 搜索软件
```sh
brew search 软件名
```
- 安装软件
```sh
brew install 软件名
```
- 卸载软件
```sh
brew remove 软件名
```

## node和npm

### 1、安装
```sh
brew node
# 查看安装版本
node -v
npm -v
```

## autojump（一键直达目录）

> [autojump用法参考文档](https://linux.cn/article-3401-1.html)

### 1、安装
```sh
$ brew install autojump
$ vim ~/.zshrc
plugins=(git autojump)
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh
$ source ~/.zshrc
```
### 2、使用
```sh
$ aotojump 目录名称或目录名称的一部分
$ j 目录名称或目录名称的一部分
```