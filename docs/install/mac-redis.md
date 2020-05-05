# redis安装(MAC)

> [redis安装参考文档](https://blog.csdn.net/pingpangbing0902/article/details/47104545)

```sh
# 安装
$ brew install redis
# 开机启动redis命令
$ ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
# 使用launchctl启动redis server
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```
