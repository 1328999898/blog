# webpack

## 一、webpack功能：
- 1.代码转换 比如:es6 -> es5, less/sass -> css
- 2.文件优化 比如:压缩代码体积、合并文件等
- 3.代码分割 比如:多页面应用时的公共模块的抽离、路由懒加载功能
- 4.模块合并 比如:多个模块合并成一个模块，按照功能分类
- 5.自动刷新 比如:代码变更时自动刷新页面、热更新等
- 6.代码校验 比如:校验代码是否符合规范
- 7.自动发布 比如:打包后的结果自动发布到服务器

## 二、webpack基本配置
- 安装本地的webpack
- webpack webpack-cli -D
(-D表示当前是开发依赖，上线不需要)

### 1. 安装过程
```sh
mkdir webpack-test
cd webpack-test
yarn init -y
yarn add webpack webpack-cli -D
```

### 2. webpack可以进行0配置
- 打包工具 -> 输出后的结果（默认打包js模块）
- 打包（默认支持js的模块化）

### 3. 打包
```sh
npx webpack
```
### 4. 安装webpack-dev-server
```sh
yarn add webpack-dev-server -D
```

