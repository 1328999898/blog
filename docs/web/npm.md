# npm命令
> 内容为网页复制

## npm install moduleName
```sh
1. 安装模块到项目node_modules目录下。
2. 不会将模块依赖写入devDependencies或dependencies 节点。
3. 运行 npm install 初始化项目时不会下载模块。
```

## npm install -g moduleName
```sh
1. 安装模块到全局，不会在项目node_modules目录中保存模块包。
2. 不会将模块依赖写入devDependencies或dependencies 节点。
3. 运行 npm install 初始化项目时不会下载模块。
```

## npm install -save moduleName 命令
```sh
1. 安装模块到项目node_modules目录下。
2. 会将模块依赖写入dependencies 节点。
3. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
4. 运行npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中。
```

## npm install -save-dev moduleName
```sh
1. 安装模块到项目node_modules目录下。
2. 会将模块依赖写入devDependencies 节点。
3. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
4. 运行npm install --production或者注明NODE_ENV变量值为production时，不会自动下载模块到node_modules目录中
```

## 其他说明
```
devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。
```

## 1. 语义化版本号

- npm默认所有的node包都使用语义化版本号
- 默认情况下，`npm install --save`下载的都是最新版本，并且会在`package.json`中登记一个最优版本号(标记+版本号数字)

`package.json`的最优版本号
- ^1.0.0:`^`表示下载的包可能会有更高的次版本号或者修订版本号
- ~1.0.0:`~`表示可能会有更高的修订版本号


语义化版本
格式：主版本号.次版本号.修订号
- 主版本号：无法兼容前一版本时
- 次版本号：向下兼容的功能性新增时
- 修订号：向下兼容的问题修正时


## 2. 安装包控制
> `npm shrinkwrap`

- [美团 使用 npm shrinkwrap 来管理项目依赖](https://tech.meituan.com/2015/10/23/npm-shrinkwrap.html)

用法
```sh
# 生成或更新npm-shrinkwrap.json文件
npm shrinkwrap
npm shrinkwrap --dev
```

问题
- 防止npm安装包内容更新后，安装包不一致的问题
- package.json中的包，可能还会依赖于其他包，因此无法通过写死package.json的方式控制

`npm-shrinkwrap.json`记录当前项目所形成的npm资源树
- 版本号
- 资源地址
- 依赖项
- ...

什么时候更新`npm-shrinkwrap.json`文件【更新`package.json`或者`node_modules`时】
eg:
- `npm install`
- `npm update`
- `npm uninstall`

优先级: `npm-shrinkwrap.json` > `package-lock.json` > `package.json`
`package-lock.json`:会在修改`pacakge.json`或者`node_modules`时就会自动产生或更新

## 3. `yarn.lock`
> 准确存储每个安装的依赖版本，类似于`npm`的`npm-shrinkwrap.json`

- [yarn.lock](https://classic.yarnpkg.com/zh-Hans/docs/yarn-lock/)
