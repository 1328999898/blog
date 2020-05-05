# scala和spark的安装(MAC)

> 注意：Scala是基于java之上，大量使用java的类库和变量，必须使用Scala之前必须先安装Java JDK（>1.5版本）。

## 一、下载安装包

- [java JDK8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [scala-2.12.5.tgz](http://www.scala-lang.org/download/)
- [spark-2.3.0-bin-hadoop2.7.tgz](https://www.apache.org/dyn/closer.lua/spark/spark-2.3.0/spark-2.3.0-bin-hadoop2.7.tgz)
- [scala编辑器](https://www.jetbrains.com/idea/download/#section=mac)

## 二、安装并配置scala的环境变量
1.安装Java SDK8
```sh
# 安装jdk-8u171-nb-8_2-macosx-x64.dmg
# 检测是否安装了Java
$ java -version
# 检测是否安装了Java编译器
$ javac -version
```
2.解压文件
```sh
$ tar -zxvf scala-2.12.5.tgz
```
3.配置环境变量
```sh
# 如果未安装zsh，编辑~/.bash_profile文件，如果安装了zsh，编辑~/.zshrc文件
$ vim .zshrc
export SCALA_HOME="/path/scala-2.12.5"
export PATH="$PATH:$SCALA_HOME/bin"
# 使配置文件生效
$ source ~/.zshrc
# 测试 - 输入scala进入命令行, :q或:quit退出命令行
$ scala
```

## 三、安装并配置spark的环境变量
1.解压文件
```sh
# 解压文件
$ tar -zxvf spark-2.3.0-bin-hadoop2.7.tgz
```
2.配置环境变量
```sh
$ vim .zshrc
export SPARK_HOME="/path/spark-2.3.0-bin-hadoop2.7"
export PATH="$PATH:$SPARK_HOME/bin"
# 使配置文件生效
$ source ~/.zshrc
```
3.修改spark-env.sh
```sh
# 默认conf文件下只有spark-env.sh.template
$ cd conf
$ cp spark-env.sh.template spark-env.sh
# 修改spark的环境变量
$ vim spark-env.sh
export SCALA_HOME=/path/scala-2.12.5
export SPARK_MASTER=localhost
export SPARK_WORKER_MEMORY=1g
# 检测是否安装成功
$ spark-shell
```


