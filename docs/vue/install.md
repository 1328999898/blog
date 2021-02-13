# Vue Cli项目搭建 （基于Vue cli 3）

## 一、创建项目
```js
// 项目名称: test
sudo vue create test
```

## 二、启动项目
```js
cd test
npm run serve
```


## 问题解决
### 一、创建后的项目无法编辑
> 原因是：使用root创建后，文件拥有者变成root了，修改root用户的文件需要root权限才可以，为了能够在当前用户下修改文件，只需要将文件的拥有者改为系统当前的用户就可以了
```sh
# 查询文件权限，会发现文件拥有者是root
➜ ll test
total 968
#            文件拥有者 所属组
-rw-r--r--    1 root  staff   316B 11  2 14:59 README.md
-rw-r--r--    1 root  staff    73B 11  2 14:58 babel.config.js
drwxr-xr-x  812 root  staff    27K 11  2 14:59 node_modules
-rw-r--r--    1 root  staff   469K 11  2 14:59 package-lock.json
-rw-r--r--    1 root  staff   849B 11  2 14:58 package.json
drwxr-xr-x    4 root  staff   136B 11  2 14:58 public
drwxr-xr-x    6 root  staff   204B 11  2 14:58 src
# 查询当前用户名，eg: ttt
➜ $USER
zsh: command not found: ttt
# 修改文件拥有者 为当期用户名 ttt
➜ sudo chown -R ttt:staff ./test/*
# 查看是否修改成功了
➜ ll test
total 968
-rw-r--r--    1 ttt  staff   316B 11  2 14:59 README.md
-rw-r--r--    1 ttt  staff    73B 11  2 14:58 babel.config.js
drwxr-xr-x  812 ttt  staff    27K 11  2 14:59 node_modules
-rw-r--r--    1 ttt  staff   469K 11  2 14:59 package-lock.json
-rw-r--r--    1 ttt  staff   849B 11  2 14:58 package.json
drwxr-xr-x    4 ttt  staff   136B 11  2 14:58 public
drwxr-xr-x    6 ttt  staff   204B 11  2 14:58 src
# 成功后，文件就可以正常编辑了
# ================================其他==========================
# 查询当前用户名
➜ $USER
# 查看当前用户所属组
➜ groups
# 查询指定用户所属组
➜ groups user_name
# 查询指定用户的详细信息
➜ id -a ttt
```
