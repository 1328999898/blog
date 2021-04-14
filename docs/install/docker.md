# Docker
> 基于Mac

## 参考文档
- [Docker文档](https://docs.docker.com/get-started/overview/)
- [Docker从入门 到实践](https://yeasy.gitbook.io/docker_practice/)
- [docker-compose CLI说明文档](https://docs.docker.com/compose/reference/overview/)
- [Django-Docker本地部署](https://zhuanlan.zhihu.com/p/85655851)
- [django-docker部署](https://zhuanlan.zhihu.com/p/145364353)
- [Docker 部署](https://learnku.com/articles/36436)

## 初识Docker
> Docker 的整个生命周期由三部分组成：镜像（image）+ 容器（container）+ 仓库（repository）。

- 容器是由镜像实例化而来，这有点像面向对象的概念：镜像就是类，容器是类实例化之后的对象。
- 镜像是一个只读的模板，它包括了运行容器所需的数据。镜像可以包含一个完整的 Linux 操作环境，里面仅安装了 Python 或者其他用户需要的程序。
- 容器是由镜像创建出来的实例，类似虚拟机，里面可以运行特定的应用，并且容器与容器是相互隔离的。
- 仓库概念与 Git 和 Github 类似，如果你用过它们就非常容易理解。Docker 使用的默认仓库是由官方维护的 Docker hub 公共仓库，从中上传、拉取的操作类似 Git。

## MacOS Docker 安装
```sh
# 安装docker
$ brew install --cask --appdir=/Applications docker
...
==> Installing Cask docker
==> Moving App 'Docker.app' to '/Applications/Docker.app'
🍺  docker was successfully installed!
# 出现docker was successfully installed!，表示docker安装成功
# 在Applications中会出现一个小鲨鱼的docker
# 打开Applications中的docker，中间可能需要输入Mac用户的登录密码，按步骤输入即可

# 完成后，会看到这个提示，在终端中输入以下命令，运行一个容器
# Try running a container: Copy and paste this command into your terminal and then come back
docker run -d -p 80:80 docker/getting-started
# 容器运行成功后，可以
http://localhost/tutorial/
```

## 常用命令
```sh
# 查询docker版本
$ docker --version
Docker version 20.10.5, build 55c4c88
# 查询正在运行的容器
$ docker ps -a
CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS          PORTS                NAMES
da0bfbfde8f7   docker/getting-started   "/docker-entrypoint.…"   36 minutes ago   Up 36 minutes   0.0.0.0:80->80/tcp   kind_ptolemy
# 获取容器ID
$ docker ps
# 查询本地已有的镜像
$ docker images
docker rmi [images ID]  # 删除此 ID 的镜像
docker container stop [container ID]  # 停止此 ID 的容器
docker container start [container ID]  # 启动此 ID 的容器
docker container rm [container ID]  # 删除此 ID 的容器


# 查询docker-compose版本
$ docker-compose --version
docker-compose version 1.28.5, build c4eb3a1f
# 在后台运行容器
$ docker-compose up -d
# 重新构建镜像
$ docker-compose build
# 启动已有容器
$ docker-compose start
# 停止已有容器
$ docker-compose stop

# 从镜像中运行一个新的容器
# docker run {images_name} {command}
$ docker-compose run web
$ docker-compose run -p 127.0.0.1:8000:8000 web
$ docker-compose run web django-admin.py startproject composeexample .
```



## docker-compose.yml
> 通常不会将项目的所有组件都放到通过一个容器中，通常会把独立的功能装进单独的容器中，这样方便复用
> 同一个项目可能运行着多个容器，
> docker-compose可以将启动容器的命令统一写到docker-compose.yms中
> 每次启动这一组容器的时候，只需要`docker-compose up`即可

```yml
# docker-compose.yml的版本
version: "3"
services:
  # 定义了一个名称为db的容器
  db:
    image: daocloud.io/mysql:5.7
    environment:
      - MYSQL_DATABASE=数据库名称
      - MYSQL_ROOT_PASSWORD=密码
    volumes:
      - ./deployment/mysql/data:/var/lib/mysql
      - ./deployment/mysql/conf/my.cnf:/etc/mysql/my.cnf
      - ./deployment/mysql/init:/docker-entrypoint-initdb.d/
    # 定义了宿主机和容器的端口映射
    # 将宿主机的 3306 端口映射到容器的 3306 端口
    ports:
      - "3306:3306"
    # 除正常工作外，容器会在任何时候重启，比如遭遇 bug、进程崩溃、docker 重启等情况。
    restart: always

  # 定义了一个名称为web的容器
  web:
    # 指定一个包含Dockerfile的路径，并通过此Dockerfile构建容器镜像
    # . 代表当前目录
    build: .
    # 将端口暴露给其他容器，但是不暴露给主机
    expose:
      - "8000"
    # 容器和宿主机完全隔离，但是有些时候需要连通，比如项目代码更新
    # 卷：定义了宿主机和容器之间的映射，
    # . 表示宿主机的当前目录
    # : 后面的/DataAnalyzePlatform表示容器中的目录
    # 即当前宿主机和容器的/DataAnalyzePlatform目录是连通的，当宿主机中的代码更新时，容器中的代码也会响应的更新
    volumes:
      - .:/项目根目录名称
      - /tmp/logs:/tmp
    # 容器运行时需要执行的命令
    command: bash start.sh
    # 将容器互联起来
    links:
      - db
    # 依赖关系
    depends_on:
      - db
    ports:
      - "8000:8000"
    # 除正常工作外，容器会在任何时候重启，比如遭遇 bug、进程崩溃、docker 重启等情况。
    restart: always
```
