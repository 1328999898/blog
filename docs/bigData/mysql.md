# MySql

## 参考文档
* [MYSQL数据导入导出](http://blog.chinaunix.net/uid-16844903-id-3411118.html)

## SQL分类

> SQL语言共分为四大类：数据查询语言DQL，数据操纵语言DML，数据定义语言DDL，数据控制语言DCL
- 数据查询语言DQL:数据查询语言DQL基本结构是由SELECT子句，FROM子句，WHERE
- 数据操纵语言DML:主要有三种形式：插入：INSERT，更新：UPDATE， 删除：DELETE
- 数据定义语言DDL:创建数据库中的各种对象--表、视图、索引、同义词、聚簇等如：CREATE TABLE/VIEW/INDEX/SYN/CLUSTER
- 数据控制语言DCL：用来授予或回收访问数据库的某种特权，并控制数据库操纵事务发生的时间及效果，对数据库实行监视等。如：GRANT：授权, ROLLBACK [WORK] TO [SAVEPOINT]：回退到某一点。

## DDL
```sql
show index from 表名;     # 查询索引
alter table 表名 add 列名 数据类型;     # 添加列
alter table 表名 change 老列名 新列名 新数据类型;     # 修改列
alter table 表名 modify column 列名 新数据类型;      # 修改列数据类型
alter table 表名 add index 索引名 (字段1,字段2);     # 添加索引（多列）
ALTER TABLE table_name DROP INDEX index_name;     # 删除索引
create table 复制后表名 as select * from 复制前表名 限制条件;  # 复制表结构和数据
```

## DQL
```sql
reverse(substring(reverse(user_id), 8)) AS server
regexp_replace(substr(act_time,1,10),'-','')
substr(uid,1,1)
```

## 类型转换 - 字符串转换为数值类型

```
CAST(xxx  AS   类型), CONVERT(xxx,类型)
类型必须用下列的类型:
    二进制,同带binary前缀的效果 : BINARY    
    字符型,可带参数 : CHAR()     
    日期 : DATE     
    时间: TIME     
    日期时间型 : DATETIME     
    浮点数 : DECIMAL      
    整数 : SIGNED     
    无符号整数 : UNSIGNED
```

## 数据库/表导入导出
```sql
# mysql快速复制数据库
mysqldump -h IP地址 -u用户名 -p'密码' 数据库名 --add-drop-table | mysql -h IP地址 -u用户名 -p'密码' 数据库名
```

## 数据类型

- 日期和时间

| MySQL数据类型	| 含义 |
| ----	| ---- |
| date	|	3字节，日期，格式：2014-09-18	|
| time	|	3字节，时间，格式：08:42:30	|
| datetime	|	8字节，日期时间，格式：2014-09-18 08:42:30	|
| timestamp		|4字节，自动存储记录修改的时间	|
| year		|1字节，年份 	|

- 数值数据类型 - 整型

| MySQL数据类型 | 	含义（有符号） |
| ----	| ---- |
| tinyint | 	1字节，范围（-128~127）|
| smallint | 	2字节，范围（-32768~32767）|
| mediumint | 	3字节，范围（-8388608~8388607）|
| int	| 4字节，范围（-2147483648~2147483647）|
| bigint	| 8字节，范围（+-9.22*10的18次方）|

- 数值数据类型 - 浮点型

| MySQL数据类型	 | 含义 |
| ----	| ---- |
| float(m, d)	 | 4字节，单精度浮点型，m总个数，d小数位 |
| double(m, d)	 | 8字节，双精度浮点型，m总个数，d小数位 |
| decimal(m, d)	 | decimal是存储为字符串的浮点数 |

- 字符串数据类型

MySQL数据类型	| 	含义	|
| ----	| ---- |
| char(n)	| 	固定长度，最多255个字符	|
| varchar(n)	| 	可变长度，最多65535个字符	|
| tinytext	| 	可变长度，最多255个字符	|
| text		| 可变长度，最多65535个字符	|
| mediumtext		| 可变长度，最多2的24次方-1个字符	|
| longtext		| 可变长度，最多2的32次方-1个字符	|

```
说明
1.char（n）和varchar（n）中括号中n代表字符的个数，并不代表字节个数，所以当使用了中文的时候(UTF8)意味着可以插入m个中文，但是实际会占用m*3个字节。
2.同时char和varchar最大的区别就在于char不管实际value都会占用n个字符的空间，而varchar只会占用实际字符应该占用的空间+1，并且实际空间+1<=n。
3.超过char和varchar的n设置后，字符串会被截断。
4.char的上限为255字节，varchar的上限65535字节，text的上限为65535。
5.char在存储的时候会截断尾部的空格，varchar和text不会。
6.varchar会使用1-3个字节来存储长度，text不会。
```



## 更改权限

远程访问某台机器的某个数据库

```sql
grant all privileges on 库名.表名 to '用户名'@'用户地址' identified by '密码' with grant option;
flush privileges;
# 注：所有的数据库使用“*”，所有表使用“*”
# 用户地址可以是localhost、ip地址、机器名字、域名，也可以用'%'表示从任何地址连接
# 权限：select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file等14个权限。
# 当使用all privileges或者all代替，表示赋予用户全部权限。
```


## MySQL安装（Centos7）

- [brew安装MySQL](http://www.cnblogs.com/xueweihan/p/5143066.html)

### 一、通过官网下载安装MySQL
```sh
# wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
# rpm -ivh mysql-community-release-el7-5.noarch.rpm
# yum install mysql-community-server
# service mysqld restart        # 重启mysql服务
# service mysqld status         # 查看MySQL的运行状态
```
安装完成后，配置字符集，重启MySQL，初次启动MySQL时root无密码，可通过```mysql```或者```mysql -uroot```启动
```sql
set password for root@localhost =password('密码');   # 设置密码
```

### 二、安装mariadb

安装MySQL的常用安装方法，但是在Centos7中mysql-server安装失败，原因：CentOS7版本将MySQL用mariadb代替了
```sh
# yum install mysql
# yum install mysql-server
# yum install mysql-devel
```
安装mariadb，并配置字符集
```sh
# yum install mariadb-server mariadb 
# systemctl start mariadb       # 启动MariaDB
# systemctl stop mariadb        # 停止MariaDB
# systemctl restart mariadb     # 重启MariaDB
# systemctl enable mariadb      # 设置开机启动
# systemctl start mariadb       # 所以先启动数据库
```


## MySql实现rank排序

- 普通降序排序
```sql
select name, id, @currank := @currank + 1 as rank from mm , (select @currank := 0) as a ORDER BY id DESC
# 结果
+------+------+------+
| name | id   | rank |
+------+------+------+
| a    |    3 |    1 |
| b    |    3 |    2 |
| a    |    2 |    3 |
| b    |    2 |    4 |
| a    |    1 |    5 |
| b    |    1 |    6 |
+------+------+------+
6 rows in set (0.00 sec)
```

- 并列降序排序
```sql
select name, id, 
case 
WHEN @prevrank = id then @currank
when @prevrank:= id then @currank := @currank + 1 
end 
as rank 
from mm , (select @currank := 0, @prevrank := NULL) as a ORDER BY id DESC;
# 结果
+------+------+------+
| name | id   | rank |
+------+------+------+
| a    |    3 |    1 |
| b    |    3 |    1 |
| a    |    2 |    2 |
| b    |    2 |    2 |
| a    |    1 |    3 |
| b    |    1 |    3 |
+------+------+------+
6 rows in set (0.00 sec)
```

- 高级排序
```sql
select name, id , rank from 
(select name, id, 
@currank := if(@prevrank = id, @currank, @numrank) as rank,
@numrank := @numrank + 1,
@prevrank := id
from mm , (select @currank := 0, @prevrank := NULL, @numrank:=0) as a ORDER BY id DESC) as dd ;
# 结果
+------+------+------+
| name | id   | rank |
+------+------+------+
| a    |    3 | 0    |
| b    |    3 | 0    |
| a    |    2 | 2    |
| b    |    2 | 2    |
| a    |    1 | 4    |
| b    |    1 | 4    |
+------+------+------+
6 rows in set (0.00 sec)
```


## MySQL存储引擎

- [MySQL存储引擎](http://www.cnblogs.com/gbyukg/archive/2011/11/09/2242271.html)


**1. MySQL引擎类型**
- MyISAM
- InnoDB
- Memory
- CSV
- Archive

**2. 查询默认数据存储引擎**
```sql
show variables like 'default_storage_engine';   # 查看当前数据库到默认引擎。
show engines;                                   # 当前数据库所支持的引擎
show variables like 'have%';                    # 当前数据库所支持的引擎，其中Value显示为disabled的表示数据库支持此引擎
```

**3. 查看文件的存储路径**
> 以下均根据Centos7系统统计
```sh
# vim /etc/my.cnf
datadir=/var/lib/mysql      # 数据文件的存储位置
```

## 一、MyISAM引擎
引擎文件
- .myd : 表数据文件
- .myi : 索引文件
- .log : 日志文件


## 二、InnoDB
> InnoDB采用表空间（tablespace）来管理数据，存储表数据和索引
> Innodb存储引擎管理主要基于两个文件：表空间数据文件和日志文件。

引擎文件
- ibdata1、ibdata2等 : 系统表空间，存储InnoDB系统信息、用户数据库表和索引，所有表共用
- .ibd : (表名.ibd)单个表空间文件，每个表使用一个表空间文件，存放用户数据表数据和索引，默认存储位置在MySQL数据存储目录中数据库目录下
- ib_logfile1、ib_logfile2 : 日志文件

**存储文件查询**
```sh
# cd /var/lib/mysql
# ls
auto.cnf  ibdata1  ib_logfile0  ib_logfile1  mysql  mysql.sock  performance_schema  test
# cd test
# ls
aa.frm  aa.ibd  bb.frm  bb.ibd  db.opt
```

```
1. 行锁定（innodb）
2. 表锁定（myisam）
```

## MySQL用户创建及授权

### 1、创建用户与删除用户

创建用户
```sql
create user 用户名@host identified by 密码;
注：host可以是指定的登陆的主机IP或者本地的localhost，或者允许任意主机可以登陆的%
```
删除用户
```sql
drop user 用户名@主机名;
```

### 2、授权与撤销授权

授权
```sql
grant all pivileges on 数据库名.表名 to 用户名@主机名 identified by 密码;
# 注：all表示所有权限，也可单独指定select、insert等权限
```
撤销授权
```sql
revoke all pivileges on 数据库名.表名 to 用户名@主机名 identified by 密码;
# 注：all表示所有权限，也可单独指定select、insert等权限
```

### 3、设置或者更改用户密码
```sql
set password for 用户名@主机名 = password('新密码');
```


## MYSQL优化
> 空间换时间、时间换空间

### 1、表的优化
1. 定长和变长字段相分离
    - 如果每个字段的字节数是固定的，每一行的字节数就是固定的，如果想查第n行，跳过前n行的字节数即可，因此查询速度会快很多。
    - varchar、text、blob等这种变长字段，适合单独存储为一张表，用主键与核心表关联
2. 常用字段和不常用字段分离
    - 结合业务分析字段的查询场景，查询频率低的字段单独拆分出来
3. 在需要关联统计的字段上添加冗余字段
4. 列选择原则
    - 字段类型优先级：整型 > date、time > enum、char > varchar > blob、text
    
    列的特点：
    - 整型：没有国家、地区之分，没有字符集的差异
    ```sh
    比如：tinyint 1、2、3、4、5 和 char(1) a、b、c、d、e
    空间上都占1个字节，但是order by排序前者快，原因是后者需要考虑字符集和校队集(默认是排序规则)
    ```
    - time:定长，运算快，节省时间，考虑时区写SQL不方便，where >= '2005-10-12'，建议用时间戳存储(int unsgined not null)
    - enum:能起到约束值的目的，内部用整型来存储，但与char联查时，内部需要经历字符串与值的转化
    - char：定长，需要考虑字符集和排序校对集
    - varchar：不定长，要考虑字符集的转换和排序时的校对集，速度慢
    - text、blob：无法使用内存临时表（排序等操作只能在磁盘上进行）
    

5. 索引优化
    - 查询频繁
    - 区分度高
    - 长度小
    - 尽量覆盖常用查询字段
    - 索引顺序
    - 可以通过(区分度/长度)获取一个平衡值


6. 独立索引：同时只能用上一个
7. 联合索引是有顺序的


索引作用：
1. 提高查询速度
2. 提高排序速度
3. 提高分组速度


## MySQL的备份恢复
[mysqldump参考文档](http://www.cnblogs.com/wxb-km/p/3610594.html)

### 一、MySQL的常用备份方式
MYSQL官方将MySQL的备份方式主要划分为以下三类：
- 热备份：备份过程中MYSQL实例始终是运行的，所有用户的读写请求都不会受到影响
- 冷备份：备份前需要先停止MySQL的实例运行，整个备份过程中用户均无法访问数据库
- 温备份：备份过程中MYSQL实例是运行的，但是为了保证数据的一致性，允许用户通过加锁的方式来方式可能的更新或者修改操作。备份过程中数据是只读的，所有的写请求都会被阻塞

### 二、mysqldump备份和恢复
> MySQL自带的备份工具，是当前主流的备份软件之一，通过SQL语句将数据库中的数据导出成.sql文件，并且该文件是可读的，因此称之为逻辑备份

```sh
$ mysqldump -u用户名 -p密码 -h主机 数据库 表 --where "sql条件" 参数 > 路径/文件名.sql       # 备份
$ mysqldump -u用户名 -p密码 -h主机 数据库 表 < 路径/文件名.sql       # 恢复
$ mysqldump -h 主机IP -u用户名 -p密码 -t 数据库名 > 文件名.sql      # 例如: 只导出数据，不导出建表语句：
```

### 三、参数说明
- -P (--port) : 指定连接的端口号
- -d (--no-data)  : 不导出任何数据，指导出表结构
- -t (--no-create-info): 只导出数据，不导出建表语句
- -q (--quick): 用于转储大表，它强制mysqldump每次从服务器检索一行(不是所有行)并在输出前将它缓存到内存中
- --default-character-set=charset : 指定字符集(utf8)
- -R (--routines) : 转储存储程序(函数和程序)

## mysql隔离级别
[explain](https://www.cnblogs.com/ggjucheng/archive/2012/11/11/2765237.html)

- repeatable-read(可重复读):开启事务、读数据、读数据...，只要这个事务没结束，读取的数据都是一致的
- read-commited(提交读):只要事务提交了，就能读到提交的数据
- autocommit:是否开启自动提交事务模式，值为1表示每次提交SQL，事务都会自动提交，值为0表示必须使用commit提交和rollback回滚事务，事务不会自动提交


## 分组排序

### 1、同row_number等价的方法
通过name分组降序排序，取最后一条数据
```sql
mysql> select * from mm;
+------+------+
| name | id   |
+------+------+
| a    |    1 |
| a    |    2 |
| a    |    3 |
| b    |    1 |
| b    |    2 |
| b    |    3 |
+------+------+
6 rows in set (0.00 sec)
mysql> select * from mm as a left join mm as b on a.name = b.name and a.id < b.id  where b.id is null;
+------+------+------+------+
| name | id   | name | id   |
+------+------+------+------+
| a    |    3 | NULL | NULL |
| b    |    3 | NULL | NULL |
+------+------+------+------+
2 rows in set (0.00 sec)
```


## MySQL索引
  共两种索引
- 1、btree索引
- 2、hash索引


## mysql优化 - 笔记2

```sql
少取字段、建立合理的索引
具体方式：

批量插入数据
1. 每条数据用";"分割
   mysql> insert into t1 (id, value) values (5, 8);
2. 一次性插入多个value
   mysql> insert into t1 (id, value) values (5, 8), (3,5), (9, 8);


mysql> explain select * from t5 where a= 4 and b=5 and c=6  and d=2;
+----+-------------+-------+------------+------+---------------+-------+---------+-------------------------+------+----------+-------------+
| id | select_type | table | partitions | type | possible_keys | key   | key_len | ref                     | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+-------+---------+-------------------------+------+----------+-------------+
|  1 | SIMPLE      | t5    | NULL       | ref  | c1234         | c1234 | 4       | const,const,const,const |    1 |   100.00 | Using index |


select_type=SIMPLE   # 简单类型的查询
table=t5             # 查询的表
type=range           # 用到了索引，范围类查询
key_len=4            #


innodb:
主键索引：既存储主键值，又在叶子中存储行的数据（称为聚簇索引）
如果没有主键，则unique key做主键
如果没有unique，则系统生成一个内部的rowid做主键

myisam: 非聚簇索引

聚簇索引：
优势：不用回行，因为数据就在索引底下
劣势：遇到不规则的数据时，容易造成页分裂

索引覆盖：如果查询的列恰好是索引的一部分，那么查询只需要在索引文件上执行，不需要回行到磁盘再找数据
```