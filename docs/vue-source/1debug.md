# Vue源码调试
> 本地调试可以协助更好的理解Vue源码

## 一、项目克隆和安装
```sh
# 1. 克隆代码
git clone https://github.com/vuejs/vue.git
# 2. 进入目录，安装
cd vue
npm install
```

## 二、本地调试
- 在`dist`目录下存放的是打包后的文件
- 在`examples`文件夹下，会有很多子文件夹，用于测试
- 我们在调试的时候，只需要根据自己的需要，选择一个`examples`文件夹下的子文件夹的index.html，将`vue.min.js`的引用改为`vue.js`，通过浏览器打开这个HTML文件即可进行代码调试

eg: 修改/examples/commits/index.html
```html
<!-- 将`vue.min.js`的引用改为`vue.js` -->
<!-- <script src="../../dist/vue.min.js"></script> -->
<script src="../../dist/vue.js"></script>
```

## Vue2是使用flow进行类型检测的
