# vue-cli升级问题
> `vue-cli`从`2.9.6`升级到`3`以上的版本

问题
```js
// 通过npm uninstall 和 npm install重新安装后，版本依然是2.9.6
npm uninstall -g vue-cli
npm install -g @vue/cli
```

原因
```js
// 查看会发现依然存在vue-cli目录vue文件
cd /usr/local/lib/node_modules
cd /usr/local/bin
cd /usr/local/Cellar/node/12.5.0/lib/node_modules
cd /usr/local/Cellar/node/12.5.0/bin
```

解决方式
```js
// 1. npm uninstall
npm uninstall -g vue-cli
// 2. 删除存在的vue文件和vue-cli目录
cd /usr/local/lib/node_modules
cd /usr/local/bin
cd /usr/local/Cellar/node/12.5.0/lib/node_modules
cd /usr/local/Cellar/node/12.5.0/bin
// 3. npm install
npm install -g @vue/cli
// 4. 查询版本
➜ vue -V
@vue/cli 4.5.4

```