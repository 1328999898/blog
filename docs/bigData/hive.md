# hive

## 参考文档
* [hdfscli官方文档](http://hdfscli.readthedocs.io/en/latest/index.html)
* [impalaSQL](https://my.oschina.net/weiqingbin/blog/189413)
* [ORACLE/HIVE/impala的SQL比较](http://blog.csdn.net/mayp1/article/details/51415854)
* [hive函数](http://lxw1234.com/archives/2015/06/251.htm)
* [hive修改表分区](https://www.cnblogs.com/ggjucheng/archive/2013/01/03/2843393.html)
* [内部表和外部表的区别](http://www.aboutyun.com/thread-7458-1-1.html)
* [hive修改表或分区或路径](https://www.cnblogs.com/ggjucheng/archive/2013/01/03/2843393.html)
* [hive的DDL操作](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-AlterTable%2FPartitionStatements)
* [hive mapjoin](http://www.cnblogs.com/MOBIN/p/5702580.html)
* [数据库表创建加载](http://gaoxianwei.iteye.com/blog/2160558)
* [hive手册](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF)
* [参考函数](http://blog.csdn.net/mayp1/article/details/51415854)


## .hiverc文件
```
.hiverc文件是隐藏文件，可以用ls -a命令查看，启动Hive的时候会去加载这个文件中的内容
一般.hiverc文件在~/下
```

## HIVE交互shell
> Hive交互Shell指执行$HIVE_HOME/bin/hive之后，进入的有hive>提示符的交互式命令行

- quit:退出交互Shell
- exit:退出交互Shell

## HIVE常用命令行
```sh
# 定义变量，-d A=B
-d,–define <key=value>
# 在命令行中设置Hive的运行时配置参数
–hiveconf <property=value>
# 定义变量，同-define
–hivevar <key=value>
```

## hive的数据类型
- 基础数据类型：tinyint,smallint,int,bigint,float,double,boolean,string
- 复杂数据类型：struct,map,array

## 上传数据到hdfs
```sh
# ---------------------------------------------
# SQL语句
INSERT overwrite TABLE 表名 partition (ds='分区名')
SELECT 字段名
FROM 表名
WHERE 限制条件
# ---------------------------------------------
# 命令
$ hdfscli upload 文件名 /tmp                 # 上传文件
$ snakebite -n IP地址 ls '/tmp/'       # 查看文件
hive> load data inpath '/tmp/文件名' into table 数据库.表 partition(分区1='值1',分区2='值2');
```


## HIVE表
- 基础表：类似mysql的表结构，默认数据存储在在HDFS上的/user/hive/warehouse/文件夹下
- 外部表：更多是指数据的路径映射，使用EXTERNAL关键字，数据被移动到创建表时指定的目录
- 分区表：可以使用PARTITIONED BY进行一个或多个分区
```sql
# 创建外部表
CREATE EXTERNAL TABLE test_1(id INT, name STRING, city STRING) SORTED BY TEXTFILE ROW FORMAT DELIMITED‘\t’ LOCATION ‘hdfs://../../..’ 
# 创建分区表
CREATE EXTERNAL TABLE databasename.tablename(line1 string, line2 bigint) 
PARTITIONED BY (dt string)
ROW FORMAT DELIMITED
  FIELDS TERMINATED BY '\t'
  LINES TERMINATED BY '\n'
LOCATION
  's3://path/';
# 上传文件
load data local inpath '/path/test.txt' into table tablename;
```

- 添加分区
```sql
# 一次添加一个分区
ALTER TABLE tablename ADD IF NOT EXISTS PARTITION (dt='20180101') LOCATION 'path';
# 一次添加多个分区
ALTER TABLE tablename ADD PARTITION (dt='20180101') location 'path' PARTITION (dt='20180101') location 'path';
```

- 删除分区
```sql
ALTER TABLE tablename DROP IF EXISTS PARTITION (dt='20180101');
ALTER TABLE tablename DROP IF EXISTS PARTITION (dt='20180101', line1='aaa');
```

## 表结构修改
```sh
create database 数据库名 IF NOT EXISTS 数据库名;    # 创建数据库
# 建表
CREATE TABLE IF NOT EXISTS 数据库.表(
    字段名 数据类型 comment '备注'
    , 字段名 数据类型 comment '备注'
) PARTITIONED BY(分区名 数据类型)
ROW format delimited FIELDS TERMINATED BY '\t' stored AS textfile
# ---------------------------------------------
# 修改列名、类型、备注
alter table 表名 change column 老字段名 新字段名 新字段类型 comment '备注';
ALTER TABLE 表名  ADD COLUMNS (列名 数据类型 comment '备注');  # 增加列
ALTER TABLE 老表名 rename to 新表名;      # 表重命名
drop table raw_gem;                     # 删除表
create table 表名 like 复制前表名;        # 复制表结构和分区
# ---------------------------------------------
# 常用操作
ALTER TABLE name RENAME TO new_name
ALTER TABLE name ADD COLUMNS (col_spec[, col_spec ...])
ALTER TABLE name DROP [COLUMN] column_name
ALTER TABLE name CHANGE column_name new_name new_type
ALTER TABLE name REPLACE COLUMNS (col_spec[, col_spec ...])
# ---------------------------------------------
# 查询数据库、数据库中的表名
show create table table_name;
show databases;
show databases like '数据库*';
show tables;
show tables in 数据库名;
show columns in 表名;    # 查询列
show partitions 数据库.表;  # 查看表中存在的所有分区
desc 表名;               # 查询表结构
use 数据库;               # 使用数据库
truncate table 表名;      # 删除表中的数据
describe database test;     # 查询数据库所在文件位置目录
```

## 数据查询
```py
invalidate metadata;    # 刷新impala
hive -e "select * from 数据库名.表名 限制条件"   # hive一次执行命令
# 静默模式，可以在输出结果中去掉OK、Time taken等行，以及一些其他无关紧要的输出信息,并将查询到的信息存入文件
hive -S -e "select * from 数据库名.表名 限制条件" > 文件路径/文件名
# ---------------------------------------------
# 表生成函数：接受0个或多个输入，产生多列或多行输出
SELECT 字段,字段 from 表名 lateral view  explode(array(1,2,3)) subview as sub where 限制条件 ;
SELECT explode(array(1,2,3)) from 表名 where 限制条件;        # array函数的使用
to_date(日期)          # 生成日期格式
LENGTH(字段名)         # 计算字段长度
row_number() over(partition BY 字段名1 ORDER BY 字段名2 DESC) AS rn     # 排序
regexp_replace(substr(字段名,1,10),'-','')                             # 字符串操作
substr(字段名, start_index, num)          # 字符串截取，开始截取的位置(1开始)，截取的位数
select decode(条件值,值1,翻译值1,...值n,翻译值n,默认值)       # if条件值==值1，返回翻译值1，相当于case when
case when 条件 then 条件为真时的值 else 条件为假时的值 end
# nvl
select nvl(a,0) form tablename;
select nvl2(a,0,1) from tablename;
# nullif 如果a和b相等，则返回空，否则返回第一个值
select nullif(a, b);
# 返回表达式中的第一个非空表达式，所有表达式的类型必须相同
SELECT COALESCE(NULL,NULL,3,4,5) FROM tablename;

```

## hive中各种join的区别

### 1、原始数据表
```sql
> select * from aa;
+--------+----------+--+
| aa.id  | aa.name  |
+--------+----------+--+
| 1      | a        |
| 2      | b        |
+--------+----------+--+
> select * from bb;
+--------+----------+--+
| bb.id  | bb.name  |
+--------+----------+--+
| 1      | b        |
| 3      | c        |
+--------+----------+--+
```
### 2、left join
```sql
> select * from aa left join bb on aa.id =bb.id;
+--------+----------+--------+----------+--+
| aa.id  | aa.name  | bb.id  | bb.name  |
+--------+----------+--------+----------+--+
| 1      | a        | 1      | b        |
| 2      | b        | NULL   | NULL     |
+--------+----------+--------+----------+--+
```
### 3、left semi join
```sql
> select * from aa left semi join bb on aa.id =bb.id;
+--------+----------+--+
| aa.id  | aa.name  |
+--------+----------+--+
| 1      | a        |
+--------+----------+--+
```
### 4、left outer join
```sql
> select * from aa left outer join bb on aa.id =bb.id;
+--------+----------+--------+----------+--+
| aa.id  | aa.name  | bb.id  | bb.name  |
+--------+----------+--------+----------+--+
| 1      | a        | 1      | b        |
| 2      | b        | NULL   | NULL     |
+--------+----------+--------+----------+--+
```
### 5、right outer join
```sql
> select * from aa right outer join bb on aa.id =bb.id;
+--------+----------+--------+----------+--+
| aa.id  | aa.name  | bb.id  | bb.name  |
+--------+----------+--------+----------+--+
| 1      | a        | 1      | b        |
| NULL   | NULL     | 3      | c        |
+--------+----------+--------+----------+--+
```
### 6、join
```sql
> select * from aa join bb on aa.id =bb.id;
+--------+----------+--------+----------+--+
| aa.id  | aa.name  | bb.id  | bb.name  |
+--------+----------+--------+----------+--+
| 1      | a        | 1      | b        |
+--------+----------+--------+----------+--+
```


## 常用的日期处理函数
```sql
$ select fresh_time,create_time,DATEDIFF(fresh_time,create_time)  from a;
2015-07-01 19:16:57	    2015-03-20 16:57:02	    103
$ select fresh_time,day(fresh_time),dayofmonth(fresh_time) from a; 
2016-12-06 14:03:06	    6	    6
$ select fresh_time,dayname(fresh_time) from a; 
2016-12-06 14:03:06	    Tuesday
$ select fresh_time,DAYOFWEEK(fresh_time) from a; 
2016-12-06 14:03:06	    3
$ select fresh_time,HOURS_ADD(reg_time,1) from a; 
2016-12-06 14:03:06	    2016-12-06 15:03:06
$ select fresh_time,to_date(reg_time) from a; 
2016-12-06 14:03:06	    2016-12-06
```

| 函数 | 说明 |
| ---- | ---- |
| DATEDIFF | 两个日期间隔的天数 |
| day      | 返回该日期在月内的日 |
| dayofmonth | 返回该日期在月内的日 |
| dayname | 返回周的英文名,例（Tuesday） |
| DAYOFWEEK | 返回周的数字序号，1(Sunday)到7(Saturday) |
| DAYOFYEAR | 本年的第多少天 |
| HOUR | 返回字符串的小时 |
| HOURS_ADD | 指定日期加n小时 |
| HOURS_SUB | 指定日期减n小时 |
| month     | 返回日期的月份 |
| MONTHS_ADD | 指定日期加n月 |
| MONTHS_SUB | 指定日期减n月 |
| MONTHS_BETWEEN | 两个日期间相差的月数，返回浮点数 |
| to_date | 返回时间戳或字符串的日期部分 |

## hive命令
```sh
# 执行一次hive查询
hive -e "select * from tablename"
# 执行一次hive查询，不显示MR-job信息，只显示JOB结果
hive -S -e "select * from tablename"
# 执行test.sql，并将查询内容存储到test.txt文件
hive -f test.sql > test.txt
# 定义变量
hive -d key=value
hive -hivevar key=value
```

- 查询和杀死当前运行任务列表
```sh
# 查询yarn当前运行命令列表
yarn application -list
# 杀死某个job
yarn application -kill application-id
```

## Impala
cloudera 公司出品的另一个 SQL 引擎，功能是 Hive 的一个子集，与 Hive 的区别如下：

- 使用C++语言实现，基于内存计算而非hive那种转化为mr任务的模式，因此速度比hive快很多，方便用来做一些交互式的SQL查询
- 自身不负责元数据管理，依赖 Hive 存在
- 功能是Hive的子集，如hive可以通过 json serde 直接将json格式的文件转化为表，但impala不行。在我们的数据中，行为日志是以json格式存在的，因此，对于行为日志的分析只能通过 hive，其它大部分可以用 impala 替代
- 由于是基于内存的计算，当需要的内存超过已有的内存时会报错。而hive无此问题，因为中间数据会使用磁盘暂存。

在hue中选择impala editor即可使用，操作与hive一致。 由于impala自己不维护表结构信息，而是使用hive的信息，且该过程并非实时的。因此， 当hive中表结构发生改变时，需要先执行以下命令，使原来的元数据无效，然后重新获取。
```
invalidate metadata;
```
