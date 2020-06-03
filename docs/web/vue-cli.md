# Vue CLI
> 基于vue.js进行快速开发的完整系统

- 交互式的脚手架
- 零配置原型开发
- 运行时依赖
- 官方插件集合
- 创建和管理vue.js的用户界面

系统的组件
- CLI
- CLI服务
- CLI插件


## 一、vue-cli-service

### serve
> - 启动一个开发服务器(基于 webpack-dev-server)，并附带模块热重载
> - 除了通过命令行参数，也可以使用`vue.config.js`里的`devServer`字段配置开发服务器

```js
用法：vue-cli-service serve [options] [entry]

选项：
  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
``` 

### build
> 打包
```js
用法：vue-cli-service build [options] [entry|pattern]

选项：
  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

### inspect
> 审查Vue CLI项目的webpack config[审查 webpack config](https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F)
```js
用法：vue-cli-service inspect [options] [...paths]

选项：

  --mode    指定环境模式 (默认值：development)
```

## 二、环境变量
> 根据文件配置环境变量
```sh
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

## 三、模式
> 可以通过传递`--mode`选项参数为命令行覆写默认的模式

默认有三种模式
- `development`: 用于`vue-cli-service serve`
- `production`: 用于`vue-cli-service build`和`vue-cli-service test:e2e`
- `test`: 用于`vue-cli-service test:unit`


## 其他

```js
// 查询vue-cli-service可用的命令
npx vue-cli-service help
```