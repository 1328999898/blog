# screen (Linux)
> -r:恢复回话的运行，-d：在远程登录的程序正常运行的情况下，暂时挂起（detach）

- 安装
```sh
$ yum -y install screen
```

- 用法
```sh
screen -S yourname -> 新建一个叫yourname的session
screen -ls -> 列出当前所有的session
screen -r yourname -> 回到yourname这个session
screen -d yourname -> 远程detach某个session
screen -d -r yourname -> 结束当前session并回到yourname这个session
ctrl + a + d    #快速退出
screen -X -S session编号 quit  -> 删除指定编号的session
```
