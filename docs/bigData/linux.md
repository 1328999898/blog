# Linux基础

## 参考文档
- [Linux命令大全](http://man.linuxde.net)
- [鸟哥的linux私房菜](http://linux.vbird.org/new_linux.php)
- [VIM常用操作命令梳理](https://zhuanlan.zhihu.com/p/27232184?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
- [centos7分区](http://blog.csdn.net/huangxiang360729/article/details/52639673)
- [关机重启参考文档](http://www.centoscn.com/CentOS/help/2013/0725/559.html)
- [Linux进程状态](http://www.cnblogs.com/itech/p/3208261.html)
- [ssh初步配置](http://www.ruanyifeng.com/blog/2014/03/server_setup.html)
- [Linux工具](http://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/index.html)

## 常用的YUM和RPM命令

```sh
1. 查询安装了哪些mysql包
rpm -qa | grep mysql
2. 查询可安装哪些mysql56-server包
yum list mysql56-server
```

## 查看已安装的软件版本
```sh
# 查询软件包：
rpm -qa          查询系统中安装的所有RPM软件包
rpm -q 软件名    查询指定的软件包是否被安装    
rpm -qi 软件名    查询系统中已安装的软件包的详细信息
rpm -ql 软件名    查询已安装软件包包含的文件
rpm -qf 文件名    查询指定的文件所属的软件包是哪个

# 如你要查你的mysql的版本可以用下面的命令：
rpm -qa | grep mysql
# 然后下面就会出来一些mysql的软件，你就可以看到它的版本。
```

## SSH配置
```sh
ssh-copy-id root@IP
```

## 常用的文件处理
```sh
chown -R root:root .  # 更改所有目录的所属用户和用户组
chown root:root 文件名 # 更改指定文件或目录的所属用户和用户组
touch dd          # 创建空文件
cp -f dd ee       # 复制文件(是否覆盖不提醒)
cp -u dd ee       # 文件变更时复制
stat dd           # 查看文件统计信息
cat dd            # 查看整个文件(-n加上行号，-s压缩到单个空白行，-T去掉制表符)
more dd           # more命令:每页的数据内容(space 翻页,z 翻页,q 退出,= 行号,/ 查询内容 查找匹配)
less dd           # 和more基本差不多，是more的升级版本
tail -n 10 dd     # 查看部分文件（tail）(-n 最后n行)
tail -10 dd       # 查看部分文件（tail）(-n 最后n行)
tail -f dd        # 动态显示文件的末尾数据 
tail -10 dd       # 查看部分文件(head)(开始n行)
cp -arf /home/  /backup/    # 复制文件（如果复制到的目录存在相同）
# -a  保持目录或文件的所有属性
# -r  递归持续复制，用于目录的复制
# -f  强制复制，不需要询问
```

## sed
> sed全名叫stream editor，流编辑器，用程序的方式来编辑文本

- [sed简明教程](https://coolshell.cn/articles/9104.html)
- 基本用法
```sh
# nl 显示行号
# 在mm.txt文件的第四行后添加一行newline，并存入dd.txt文件
nl mm.txt | sed -e 4a\newline mm.txt > dd.txt
# 删除第2到3行的数据，d表示删除
nl mm.txt | sed '2,3d'
cat mm.txt | sed '2,3d'
# 删除第3行至文件末的数据
nl mm.txt |  sed '3,$d'
# 2a : 在第二行末（即第三行）加上 drink tea
nl mm.txt| sed '2a drink tea'
# 2i : 在第二行前加上 drink tea
nl mm.txt| sed '2i drink tea'
# 第2到5行用asdfg替换
nl mm.txt | sed '2,5c asdfg'
# 将mm.txt文件中的aa用dd替换
# s表示替换命令，/aa/表示匹配aa，/dd/表示把匹配替换成dd，/g表示一行上的替换所有的匹配）
sed "s/aa/dd/g" mm.txt
# -i 修改文件内容为替换后的文件
sed -i 's/ss/ll/g' mm.txt
```

- 用到的正则表达式
```
^ 表示一行的开头。如：/^#/ 以#开头的匹配。
$ 表示一行的结尾。如：/}$/ 以}结尾的匹配。
\< 表示词首。 如：\<abc 表示以 abc 为首的詞。
\> 表示词尾。 如：abc\> 表示以 abc 結尾的詞。
. 表示任何单个字符。
* 表示某个字符出现了0次或多次。
[ ] 字符集合。 如：[abc] 表示匹配a或b或c，还有 [a-zA-Z] 表示匹配所有的26个字符。如果其中有^表示反，如 [^a] 表示非a的字符
```

## 进程
查看进程
```sh
ps          # 查看进程
ps -ef      # 查看所有进程
pstree -p   # 进程树
```
结束进程
```sh
kill 进程号      # 根据进程号结束进程
killall http*   # 根据进程名批量结束进程
```
## 磁盘空间
```sh
df
df -h   # 用M、G
du      # 当前目录下的所有文件的空间使用情况，-s每个参数的总计，-h用M、G统计
```
## 排序
```sh
sort aa     # 按字符排序
sort -n aa  # 按数字排序
sort -M aa  # 按月份排序
```
## 搜索数据（grep）
```sh
-n  # 所在行号
-c  # 匹配的行数
[]  # 正则表达式
```
## 输入/输出重定向
```sh
# 输出重定向（>）
date > ss
who >aa
# 注：重定向操作创建文件并将命令的输出重定向到文件中，如果文件已存在，则会用新文件覆盖原文件
# 追加重定向文件（当不想文件覆盖时使用）(<<)
who >> ss
# ---------------------------------------------
# 输入重定向(<)
[root@localhost test]# wc ss
  7  36 341 ss
[root@localhost test]# wc < ss
  7  36 341
# 注：wc:文本的行数、词数、字节数，输出重定向将内容指向命令
# 内联输入重定向(<<)(注：开始和结尾必须一致)
# ---------------------------------------------
[root@localhost test]# wc << EOF
> dfsa
> dfs
> ss
> EOF
 3  3 12
```

## 计算列的和
```sh
[root@localhost home]# cat aa
1   3   5
2   4   6
4   6   9
[root@localhost home]# cat aa | awk '{sum1+= $1}END{print sum1}'
7
[root@localhost home]# cat aa | awk '{sum1+= $2}END{print sum1}'
13
[root@localhost home]# cat aa | awk '{sum1+= $3}END{print sum1}'
20
第一列和第二列的平均值：
cat aa | awk '{sum1+=$1;sum2+=$2;count++}END{print sum1/count,sum2/count}'
```

## 编写脚本
- if-then
```sh
if date
then
    echo date
fi
```

- if-then-else
```sh
if false
then
    date
else
    echo "it false"
fi
```

- if-then-elif
```sh
if false
then
    date
elif date
then
    echo "it dt"
fi
```

- 数值比较
```sh
# -eq   # 相等
# -ge   # 大于等于
# -gt   # 大于
# -le   # 小于等于
# -lt   # 小于
# -ne   # 不等于
val=10
if [ $val -eq 10 ]
then
    echo "it's equal"
fi
```

- 字符串比较(=,!=,<,>,-n str1,-z str1)
```sh
# -n和-z：用于检查字符串变量是否含有数据
# -n str1   #检查str1的长度是否非0
# -z str1   #检查str1的长度是否为0
val1=aa
val2=aa
if [ $val1 = $val2 ]
then
    echo "it's equal"
fi
# ----------------
val1=aa
val2=aa
if [ -n $val1 ]
then
    echo "it's not 0"
fi
```

## 基本命令
```sh
echo 'cc' >> a.txt      # 以追加形式向文件中添加内容
echo 'cc' > a.txt       # 重新写入文件
echo `date +%Y-%m-%d`   # 格式化日期
echo `date +%Y%m%d`     # 格式化日期
```

## 其他命令
```sh
# 改变用户对一些命令的权限
sudo -i
# 查看当前文件夹下文件大小
du -sh *
```
整数计算命令
```sh
$ nginx echo $[1 + 2]
3
$ echo `expr 1 + 2`
3
```

## for的使用
```sh
$ for i in {1..5};do echo ${i};done
1
2
3
4
5
```

## 简单的传参脚本
```sh
#!/bin/sh
DATE=$1
echo $DATE
```

## 通过进程名查看占用端口
```sh
# 查看进程pid
ps -ef | grep nginx（进程名）
# 通过进行pid查询占用端口
netstat -nap | grep 8796（端口号）
```

## crontab定时执行任务
```
一般用命令：crontab -l
crontab命令简介：
crontab命令常见于Unix和类Unix的操作系统之中，用于设置周期性被执行的指令。该命令从标准输入设备读取指令，并将其存放于“crontab”文件中，以供之后读取和执行。
使用时可用参数：
-e [UserName]: 执行文字编辑器来设定时程表，内定的文字编辑器是 VI，如果你想用别的文字编辑器，则请先设定 VISUAL 环境变数来指定使用那个文字编辑器(比如说 setenv VISUAL joe)
-r [UserName]: 删除目前的时程表
-l [UserName]: 列出目前的时程表
-v [UserName]:列出用户cron作业的状态
```
```sh
# 切换为root用户
sudo su
# 定时任务文件
cat /etc/crontab
```
一、基本格式
```
*　　*　　*　　*　　*　　command 
分　时　日　月　周　命令 
第1列表示分钟1～59 每分钟用*或者 */1表示 
第2列表示小时1～23（0表示0点） 
第3列表示日期1～31 
第4列表示月份1～12 
第5列标识号星期0～6（0表示星期天） 
第6列要运行的命令 
```

二、Crontab的用法
```sh
crontab -l          # 查看当前用户的cron配置
crontab -e          # 编辑当前用户的cron配置
crontab -r          # 删除当前用户的cron配置
# 以root身份查看/编辑/删除某用户的cron配置，在命令后加上 -u USERNAME
# 配置系统级的任务，编辑/etc/crontab 文件
```

## 查看系统运行的进程
若需要查看系统当前运行的所有进程，就需要用如下命令：
``` 
ps auxw 
```
其中参数a表示显示系统中所有用户的的进程；u表示输出进程用户所属信息； x表示也
显示没有控制台的进程；若显示行太长而被截断则可以使用f参数；

## 系统监听的服务
```
netstat -ln
```
l表示显示当前系统监听的端口信息；n表示端口按照端口号来显示，而不转换为
service文件中定义的端口名；若希望了解各个端口都是由哪些进程监听则可以使用p参数。
若发现不需要的服务， 可以使用linuxconf或ntsysv命令来关闭这些服务在系统启动时自
启动，然后重新启动系统则这些服务将在运行。
有些服务是由inetd超级服务器来监控的，则需要标记/etc/inetd.conf来关闭这些服务。

## 关机重启

```
shutdown命令的部分参数如下：
[-t] 指定在多长时间之后关闭系统
[-r] 重启系统
[-k] 并不真正关机，只是给每个登录用户发送警告信号
[-h] 关闭系统（halt）
```

- halt
```
halt是最简单的关机命令，其实际上是调用shutdown -h命令。halt执行时，杀死应用进程，文件系统写操作完成后就会停止内核。
halt命令的部分参数如下：
[-f] 没有调用shutdown而强制关机或重启
[-i] 关机或重新启动之前，关掉所有的网络接口
[-p] 关机时调用poweroff，此选项为缺省选项
```
- reboot
```
reboot的工作过程与halt类似，其作用是重新启动，而halt是关机。其参数也与halt类似。
```
- init
```
init是所有进程的祖先，其进程号始终为1。init用于切换系统的运行级别，切换的工作是立即完成的。init 0命令用于立即将系统运行级别切换为0，即关机；init 6命令用于将系统运行级别切换为6，即重新启动。
```


## rsync
- unix/linux下同步文件的一个高效算法
- 由Andrew Tridgell(一个澳大利亚的程序员)发明的算法

```sh
/usr/bin/rsync -av --progress \
    --exclude=".git" \
    --exclude=".gitignore" \
    --exclude=".idea" \
    --exclude="deploy.sh" \
    --exclude="updatecode.sh" \
    ./ root@IP地址:/data/
```

## SHELL基础

### 一、日期处理
- [日期格式](http://blog.csdn.net/ithomer/article/details/7872905)
- [BASH_SOURCE](https://blog.csdn.net/zhaozhencn/article/details/21103367)

- BASH_SOURCE
```sh
# 得到shell脚本文件所在完整路径,且不改变shell的当前目录。
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $DIR
```

- date
```sh
$ date
Thu Dec 21 03:49:29 UTC 2017
$ date -d "today" +%Y-%m-%d 
2017-12-21
$ date -d "yesterday" +%Y-%m-%d
2017-12-20
$ date -d "-1 day" +%Y-%m-%d
2017-12-20
$ date -d "1 days ago" +%Y-%m-%d
2017-12-20
$ date -d "2 days ago" +%Y-%m-%d 
2017-12-19
$ date -d'+1 month' +%Y-%m-%d
2018-01-21
$ date -d'-1 month' +%Y-%m-%d 
2017-11-21
$ date +"Today is %A."
Today is Thursday.
$ date +"%Y-%m-%d %H:%M:%S"
2017-12-21 04:09:49
$ date +"%Y年%m月%d日"
2017年12月21日
```

### 二、shell文件包含
```
# 包含外部脚本
. filename   # 注意点号(.)和文件名中间有一空格
或
source filename
```

### 三、Vim命令
```sh
===在下一行开始插入===
o
===跳转到文件第n行===
2行：在插入模式下按2G
3行：在插入模式下按3G，以此类推
===删除文件的全部内容===
1. 在插入模式下按ggdg（说明：gg:跳转到文件首行，dg删除包括当前行在内的下面的所有数据）
2. 在命令模式下输入%d
```

## tree命令
> 以树状图和带颜色的形式显示当前目录下的各级目录和文件

### 一、安装
```sh
yum -y install tree
```

### 二、命令说明

| 参数       | 说明 |
| ----      | ---- |
| -a        | 显示所有目录和文件 |
| -C        | 显示所有目录和文件，目录是带颜色的 |
| -d        | 显示所有目录(包括目录下的目录)  |
| -D        | 显示所有目录和文件及其最终变更的时间    |
| -f        | 显示所有文件的相对路径   |
| -g        | 显示所有文件和目录的群组名(如没有对应的名称，则显示群组的ID)  |
| -i        | 显示所有文件和目录，不使用阶梯的形式  |
| -s        | 显示所有文件和目录的大小  |
| -u        | 显示所有文件和目录的拥有者(如没有对应的名称，则显示拥有者的ID)  |
| -L n级    | 显示前n级的目录和文件  |

例如：
```sh
$ tree          # 显示所有目录和文件       
$ tree -L 2     # 显示前2级的目录和文件
$ tree -C -L 2  # 以带颜色的形式显示前2级的目录和文件
$ tree -d       # 显示所有目录(包括目录下的目录)
```

## Linux正则表达式
> sed编辑器、gawk程序
### 1. 纯文本
正则表达式区分大小写，使用标准文本字符串过滤数据
+ 匹配字符
```sh
# 用标准文本字符串过滤数据
# sed编辑器、gawk程序用他们各自的print命令打印匹配该正则表达式的所有行
echo "this is Test"| sed -n '/test/p'   # 不成立，Test和test不一致，区分大小写
echo "this is Test"| sed -n '/Test/p'   # 成立
echo "the books" | sed -n '/book/p'     # 成立
echo "the book" | sed -n '/books/p'     # 不成立
echo "this number 1" | sed -n '/ber 1/p'    #成立
```
+ 匹配文本
```sh
[root@localhost test]# cat aa
this is aa
this  is aa
[root@localhost test]# sed -n '/  /p' aa    #成立，可匹配多个空格
this  is aa
```
### 2. 特殊字符
+ 特殊字符
```sh
# 正字表达式识别的特殊字符
.*[]^{}\+?|()
# 转义字符:反斜线(\),用于特定字符的使用
```
+ 用法
```sh
[root@localhost test]# cat bb
this $4.00
[root@localhost test]# sed -n '/\$/p' bb
this $4.00
```
+ 注意(斜线(/)的使用)
```sh
# 尽管斜线不是特殊字符，但也需转义，否则会报错
[root@localhost test]# echo "3 / 2" | sed -n '/\//p'
3 / 2
```
### 3. 锚字符
+ 锁定在行首（脱字符：^）
```sh
[root@localhost test]# echo "this is aa" | sed -n '/^this/p'
this is aa
[root@localhost test]# echo "this is aa" | sed -n '/^is/p'
```
+ 锁定在行尾（美元符：$）
```sh
[root@localhost test]# echo "this is aa" | sed -n '/aa$/p'
this is aa
[root@localhost test]# echo "this is aa" | sed -n '/is$/p'
```
+ 组合锚点(行首行尾一起使用)
```sh
# 特殊用法：过滤文本中的空白行
# 说明：sed编辑器用d命令删除匹配正则表达式的行
[root@localhost test]# cat bb
aa
bb
dd


ff
[root@localhost test]# sed '/^$/d' bb
aa
bb
dd
ff
```
### 4. 点字符(.)
```sh
# 点字符的位置的位置必须匹配一个字符，如果在.的位置没有字符，则模式不成立
# (即匹配的字符不能在行首，注：空格会被当做字符)
[root@localhost test]# echo "this cat" |sed -n '/.at/p'
this cat
[root@localhost test]# echo "at a" |sed -n '/.at/p'
[root@localhost test]# echo " at" |sed -n '/.at/p'
 at
```
### 5. 字符组(方括号,包含指定字符)
```sh
# 方括号中包含想要在该组中包含的任何字符
[root@localhost test]# echo "yes" | sed -n '/[Yy]es/p'
yes
[root@localhost test]# echo "Yes" | sed -n '/[Yy]es/p'
Yes
[root@localhost test]# echo "YEs" | sed -n '/[Yy][Ee]s/p'
YEs
[root@localhost test]# echo "452" | sed -n '/[123456789]/p'
452
```
```sh
# 限定指定位数的字符串
[root@localhost test]# echo "abdca" | sed -n '/[abcd][abcd][abcd][abcd]/p'
abdca
[root@localhost test]# echo "abdca" | sed -n '/^[abcd][abcd][abcd][abcd]$/p'
[root@localhost test]# echo "abdc" | sed -n '/^[abcd][abcd][abcd][abcd]$/p'
abdc
```
### 6. 排除字符
```sh
# 在字符组开头加个脱字符(^),用于寻找组中没有的任意字符
sed -n '/[^ch]at/p' data6
# 注：没理解
```
### 7. 使用区间
```sh
[root@localhost test]# echo "123" | sed -n '/[0-9]/p'
123
[root@localhost test]# echo "acc" | sed -n '/[a-z]/p'
acc
[root@localhost test]# echo "ac" | sed -n '/[a-z][h-m]/p'
# a~c,h~m中的字母必须出现在at之前，并且这区间不允许出现d~g之间的字母
[root@localhost test]# echo "the cat" |sed -n '/[a-ch-m]at/p'
the cat
[root@localhost test]# echo "the eat" |sed -n '/[a-ch-m]at/p'
```
### 8. 特殊字符组
```sh
[[:alpha:]]     # 匹配任意字母，不区分大小写
[[:alnum:]]     # 匹配任意字母数字字符0-9、a-z、A-Z
[[:blank:]]     # 匹配空格或制表符
[[:digit:]]     # 匹配数字
[[:lower:]]     # 匹配小写字母a-z
[[:print:]]     # 匹配任意可打印字符
[[:punct:]]     # 匹配标点符号
[[:space:]]     # 匹配任意空白字符：空格、制表符、NL、FF、VT、CR
[[:upper:]]     # 匹配任意大写字母字符A-Z
[root@localhost test]# echo "aSd" | sed -n '/[[:alpha:]]/p'
aSd
```
### 9. 星号
```sh
# 星号前面的字符可以出现0次或多次
[root@localhost test]# echo 'color' |sed -n '/colou*r/p'
color
[root@localhost test]# echo 'colour' |sed -n '/colou*r/p'
colour
```
扩展正则表达式
### 1. 问号
```sh
# 问号前面的字符可以出现0次或1次
[root@localhost test]# echo "beet" | gawk '/be?t/{print $0}'
[root@localhost test]# echo "bet" | gawk '/be?t/{print $0}'
bet
```
### 2. 加号
```sh
# 加号前面的字符可以出现1次或多次
```
### 3. 花括号
```sh
# {m}   # 准确出现m次
# {m,n} # 至少出现m次，最多出现n次
[root@localhost test]# echo "bet" | gawk --re-interval '/b[ae]{1,2}t/{print $0}'
bet
[root@localhost test]# echo "beet" | gawk --re-interval '/b[ae]{1,2}t/{print $0}'
beet
[root@localhost test]# echo "beeet" | gawk --re-interval '/b[ae]{1,2}t/{print $0}'
[root@localhost test]# echo "beeet" | gawk --re-interval '/b[ae]{3}t/{print $0}'
beeet
```
### 4. 管道符(|)
```sh
相当于OR，任何一个匹配成功就通过
正则表达式和管道符之间不能有空格，否则会加到正则表达式中
```
### 5. 聚合表达式(括号)
```sh
# 正则表达式也可以用圆括号聚合起来
[root@localhost test]# echo "cat" | gawk '/(c|b)at/{print $0}'
cat
[root@localhost test]# echo "ebt" | gawk '/(c|b)(a|b)t/{print $0}'
[root@localhost test]# echo "bat" | gawk '/(c|b)at/{print $0}'
bat
[root@localhost test]# echo "bbt" | gawk '/(c|b)(a|b)t/{print $0}'
bbt
```
其他
```sh
# 查看PATH环境变量，并用空格替换冒号(;)
[root@localhost test]# echo $PATH | sed 's/:/ /g'
/usr/local/sbin /usr/local/bin /sbin /bin /usr/sbin /usr/bin /root/bin
```
