# Python环境搭建

> [参考文档](https://github.com/cloudera/impyla)

## yum安装
- gcc-c++
- cyrus-sasl-devel 
- cyrus-sasl-plain

## pip安装

- thrift_sasl
- sasl
- impyla
- ipython
- pymysql
- pyhive
- SQLAlchemy
- pandas
- numpy
- thrift==0.9.3

## pip批量安装
```sh
pip freeze > requirements.txt   # 输出本地安装包至文件
pip install -r requirements.txt # 根据文件自动安装包
# ----------------------------------------------------
pip freeze比pip list的包少的原因：
因为pip , wheel , setuptools 等包，是自带的而无法(un)install的。考虑到pip freeze的用途，所以这些包并没有显示。
如果一定要用pip freeze来显示所有包，可以加上参数-all，即pip freeze -all
```


## MAC环境变量配置
```sh
# 查找当前pyhton的site-packages目录
$ python -c 'import site; print site.getsitepackages()[0]'
//anaconda/lib/python2.7/site-packages
# 进入项目根目录下(/Users/kaiqigu/Documents/scripts/bi_scripts)执行以下命令
$ echo `pwd` > //anaconda/lib/python2.7/site-packages/bi.pth
# 使用以下命令查看当前目录是否在输出中
$ python -c 'import sys; print sys.path'
# ---------------------------------------------
# 删除环境变量中的内容
$ sys.path.remove('/Users/kaiqigu/Downloads/bi_scripts')
```

## 各种问题
- 问题一
```sh
问题场景：pip install sasl时遇到问题
error: command 'gcc' failed with exit status 1
解决办法：yum install -y cyrus-sasl-devel cyrus-sasl-plain
```
- 问题二
```sh
问题场景：执行impala的查询语句时
AttributeError: 'TBufferedTransport' object has no attribute 'trans'
解决办法：thrift版本问题，pip install thrift=0.9.3
```
- 问题三
```sh
问题场景：ImportError: No module named pkg_resources
解决方案：重新安装setuptools，命令如下：
$ sudo wget https://pypi.python.org/packages/source/s/setuptools/setuptools-0.6c11.tar.gz#md5=7df2a529a074f613b509fb44feefefe74e
$ tar -zxvf setuptools-0.6c11.tar.gz
$ cd setuptools-0.6c11/
$ sudo python setup.py build
$ sudo python setup.py install
$ sudo pip install --upgrade setuptools
```
- 问题四
```sh
问题场景：安装MySQL-python时报错：EnvironmentError: mysql_config not found
解决方案：安装mysql-devel
$ yum install mysql-devel
```

## 常用的安装命令
```sh
安装指定版本：pip install 包名==版本号
升级到指定版本：pip install -U 包名==版本号
```

## 设置默认启动的python版本（MAC环境下）

```sh
## 使用了bash情况下
$ vim .bash_profile
export PATH="/Users/.../anaconda/bin:$PATH"
$ source .bash_profile

## 使用了zsh情况下
$ vim .zshrc
export PATH="/Users/.../anaconda/bin:$PATH" 
$ source .zshrc
```

## 其他配置
```py
# 获取主机IP地址
>>> import socket
>>> socket.gethostbyname(socket.gethostname())
socket.gaierror: [Errno -2] Name or service not known
# 原因
/etc/hosts中没有hostname的主机名
# 解决方法 - 通过hostname查询主机名后，存入/etc/hosts后即可
$ hostname
$ vim /etc/hosts
IP地址 hostname
```
