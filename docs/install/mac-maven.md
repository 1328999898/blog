# 安装apache Maven(MAC)


## 安装并配置环境变量
1.下载安装包
- [apache-maven-3.5.3-bin.tar.gz安装包](https://maven.apache.org/download.cgi)
2.安装并配置环境变量
```sh
# 解压
$ tar -zxvf apache-maven-3.5.3-bin.tar
# 配置环境变量
$ pwd
/path/apache-maven-3.5.3
$ vim ~/.zshrc
export M2_HOME="/path/apache-maven-3.5.3"
export PATH="$PATH:$M2_HOME/bin"
# 使环境变量生效
$ source ~/.zshrc
# 检测是否安装成功
$ mvn -v
Apache Maven 3.5.3 ...
```

## 打包
```sh
mvn clean package
```
