# redis基础

## Introduction
redis(REmote Dictionary Server)远程字典服务器
，以字典结构存储数据，并允许其他应用通过TCP协议读写字典中的内容。redis数据库中的所有数据都存储在内存中，因此读写速度快于硬盘

1. 开源免费
2. C语言编写的
3. key-value 方式存储数据

特点：
1. 支持数据的持久化，可以将内存中的内容保持在磁盘中，机器重启的时候可以重新加载使用
2. 比memcached支持更多的数据类型，不仅仅支持key-value类型，还支持list、set、zset、hash等数据类型
   memcached更多的是key-string，string类型基本可以模拟所有数据类型
3. redis支持数据备份，即mater-slave模式的数据备份


redis支持异步将内存中的数据写到磁盘上，同时不影响服务



### 1、redis支持的键值类型
- 字符串类型
- 散列类型
- 列表类型
- 集合类型
- 有序集合类型

### 2、redis和memcached
- redis命令不区分大小写
- redis单线程
- memcached多线程
- redis可以限制数据占用的最大内存空间，数据达到空间限制后可以按照一定的规则自动淘汰不需要的键
- redis的列表类型的键可以用来实现队列，并且支持阻塞式读取
- redis是开源的

### 3、Redis版本
- 稳定版：次版本号（即第一个小数点后的数字）为偶数
- 非稳定版：次版本号为奇数

### 4、redis的可执行文件
- redis-server：redis服务器
- redis-cli：redis命令行客户端

### 5、redis命令
> 一个redis实例提供了多个用来存储数据的字典，客户端可以指定间数据存储在哪个字典中，可以将每个字典都理解成一个独立的数据库，每个数据库对外都是以一个从0开始的递增数字命名，redis默认支持16个数据库，可以通过配置参数databases来修改这一数字。客户端与redis建立连接之后会自动选择0号数据库，可以使用select命令更换数据库
> keys命令需要遍历redis中的所有键，当键的数量较多时会影响性能，不建议在生产环境中使用

```sh
# 正常停止redis，redis收到命令后会断开所有客户端连接，然后根据配置执行持久化，然后退出
$ redis-cli SHUTDOWN
# 通过kill redis 的pid也可以正常结束，效果同执行SHUTDOWN一样
# redis-cli执行是会自动按照默认配置（服务器地址：127.0.0.1，端口：6379）连接redis
$ redis-cli
127.0.0.1:6379>
# redis-cli也可以通过-h 服务器地址 -p 端口号 连接redis
$ redis-cli -h 127.0.0.1 -p 6379
127.0.0.1:6379>
# ping 用来测试连接是否正常，如果正常会输出PONG
127.0.0.1:6379> ping
PONG
# 更换为1号数据库
127.0.0.1:6379> select 1
OK
# 建立一个名为bar的键
127.0.0.1:6379[1]> set bar 1
OK
# 查询redis中所有的键
127.0.0.1:6379[1]> keys *
1) "bar"
# 查询ba开头的所有键
127.0.0.1:6379[1]> keys ba*
1) "bar"
# 查询键名为bar的键
127.0.0.1:6379[1]> keys bar
1) "bar"
```

- 判断键名是否存在、
```sh
# 判断键名为bar的键是否存在
127.0.0.1:6379[1]> exists bar
(integer) 1
127.0.0.1:6379[1]> exists noexists
(integer) 0
127.0.0.1:6379[1]> exists 111
(integer) 0
```

- 删除键
```sh
# 删除一个或者多个键，返回值是删除的键的个数
127.0.0.1:6379[1]> del bar
(integer) 1
127.0.0.1:6379[1]> keys *
(empty list or set)
# del命令不支持通配符，但是可以通过Linux的管道和xargs命令自己实现删除符合规则的键
# redis-cli del 性能更好
$ redis-cli del `redis-cli keys "a*"`
(integer) 3
$ redis-cli keys "a*" | xargs redis-cli del
(integer) 3
```

- 键值得数据类型
```sh
# type的返回值可能是string（字符串类型）、hash（散列类型）、list（列表类型）、set（集合类型）、zset（有序集合类型）
127.0.0.1:6379[1]> set a1 1
OK
# type命令用来获取键值的数据类型
127.0.0.1:6379[1]> type a1
string
# lpush：向指定的列表类型键中增加一个元素，如果键不存在则创建它(list的方法)
127.0.0.1:6379> lpush bar 1
(integer) 1
127.0.0.1:6379> type bar
list
```

## 字符串类型
> redis中最基本的数据类型，可以存储任何形式的字符串，一个字符串类型键允许存储的数据的最大容量为512MB

- 赋值与取值
```sh
# set赋值
127.0.0.1:6379> set b2 1
OK
# get取值
127.0.0.1:6379> get b2
"1"
# incr递增数字，当键不存在时默认键值为0，当键值不是整数时，redis会报错
127.0.0.1:6379[1]> incr num
(integer) 1
# 增加指定的整数
127.0.0.1:6379[1]> incrby num 3
(integer) 6
# 减少指定的整数
127.0.0.1:6379[1]> decrby num 2
(integer) 4
# 减少一个整数
127.0.0.1:6379[1]> decr num
(integer) 3
# 增加指定浮点数
127.0.0.1:6379[1]> incrbyfloat num 3.3
"6.3"
127.0.0.1:6379[1]> incrbyfloat num 4E+2
"406.29999999999999999"
```

- 追加
```sh
127.0.0.1:6379[1]> set key hello
OK
127.0.0.1:6379[1]> get key
"hello"
# append追加键值
127.0.0.1:6379[1]> append key " world"
(integer) 11
127.0.0.1:6379[1]> get key
"hello world"
# strlen获取键值得长度
127.0.0.1:6379[1]> strlen key
(integer) 11
```

- 同时操作多个键值
```sh
# 同时设置多个键值
127.0.0.1:6379> mset a1 1 a2 2 a3 3
OK
# 同时获得多个键值
127.0.0.1:6379> mget a1 a2 a3
1) "1"
2) "2"
3) "3"
```

## 散列类型
> redis的数据类型不能嵌套其他的数据类型，一个散列类型的键可以包含2的32次幂-1个字段

- 赋值和取值
```sh
# 赋值
127.0.0.1:6379[1]> hset car price 500
(integer) 1
127.0.0.1:6379[1]> hset car name aa
(integer) 1
# 取值
127.0.0.1:6379[1]> hget car name
"aa"
127.0.0.1:6379[1]> hget car price
"500"
# 同时设置多个字段的值
127.0.0.1:6379[1]> hmset cat name cc color black
OK
# 同时取多个字段的值
127.0.0.1:6379[1]> hmget cat name color
1) "cc"
2) "black"
# 获取键中的所有字段和字段值
127.0.0.1:6379[1]> hgetall cat
1) "name"
2) "cc"
3) "color"
4) "black"
# 判断一个字段是否存在
127.0.0.1:6379[1]> hexists cat color
(integer) 1
# hsetnx当字段已经存在时，不执行操作，不存在时执行操作
127.0.0.1:6379[1]> hsetnx cat color yellow
(integer) 0
127.0.0.1:6379[1]> hsetnx cat age 3
(integer) 1
# 增加数字
127.0.0.1:6379[1]> hincrby cat age 5
(integer) 8
# 删除字段
127.0.0.1:6379[1]> hdel cat age
(integer) 1
# 获取键中的所有字段
127.0.0.1:6379[1]> hkeys cat
1) "name"
2) "color"
# 获取键值
127.0.0.1:6379[1]> hvals cat
1) "cc"
2) "yellow"
# 获取键对应的字段的数量
127.0.0.1:6379[1]> hlen cat
(integer) 2
```

## 列表类型
> 可以存储一个有序的字符串列表，常用操作是向列表两端添加元素，或者是获得列表的某一个片段，一个列表最多能容纳2的32次幂-1个元素

```sh
# 向列表左侧插入一个元素
127.0.0.1:6379[1]> lpush num 1
(integer) 1
# 向列表右侧插入一个元素
127.0.0.1:6379[1]> rpush num 0 -1
(integer) 4
# 向列表左侧先插入2，然后分别插入3、4
127.0.0.1:6379[1]> lpush num 2 3 4
(integer) 7
# 从列表左侧弹出一个元素，并返回被移除元素的值
127.0.0.1:6379[1]> lpop num
"4"
# 从列表右侧弹出一个元素，并返回被移除元素的值
127.0.0.1:6379[1]> rpop num
"-1"
# 获取列表中元素的个数
127.0.0.1:6379[1]> llen num
(integer) 5
# 获取列表片段
127.0.0.1:6379[1]> lrange num 2 3
1) "2"
2) "1"
# 删除列表中前2个值为1的元素
127.0.0.1:6379[1]> lrem num 2 1
(integer) 2
# 获得指定索引的元素的值
127.0.0.1:6379[1]> lindex num 0
"3"
# 将指定索引的元素进行赋值
127.0.0.1:6379[1]> lset num 1 5
OK
# 只保留列表指定片段
127.0.0.1:6379[1]> ltrim num 1 3
OK
# 将7插入2的后面
127.0.0.1:6379[1]> linsert num after 2 7
(integer) 6
# 将9插入到2的前面
127.0.0.1:6379[1]> linsert num before 2 9
(integer) 7
# 将元素从一个列表转到另一个列表
127.0.0.1:6379[1]> Rpoplpush num ddd
"2"
```

## 集合类型
> 集合中的元素唯一且无序，一个集合（set）键最多可以存储2的32次幂-1个字符串

```sh
# 增加一个或多个元素，返回值是成功加入的元素的个数
127.0.0.1:6379[1]> sadd tt 1 2 4
(integer) 1
# 获取集合中的所有元素
127.0.0.1:6379[1]> smembers tt
1) "3"
2) "4"
3) "5"
# 删除一个或多个元素
127.0.0.1:6379[1]> srem tt 2 3
(integer) 1
# 判断元素是否在集合中
127.0.0.1:6379[1]> sismember tt 4
(integer) 1
127.0.0.1:6379[1]> sadd t1 1 2 3
(integer) 3
127.0.0.1:6379[1]> sadd t2 2 3 5 7
(integer) 4
# sdiff 差集：t1-t2
127.0.0.1:6379[1]> sdiff t1 t2
1) "1"
# sinter 交集：
127.0.0.1:6379[1]> sinter t1 t2
1) "2"
2) "3"
# sunion 并集 t1 + t2
127.0.0.1:6379[1]> sunion t1 t2
1) "1"
2) "2"
3) "3"
4) "5"
5) "7"
# 获得集合中元素个数
127.0.0.1:6379[1]> scard t1
(integer) 3
# 将t1和t2的交集存储在t3中
127.0.0.1:6379[1]> sinterstore t3 t1 t2
(integer) 2
# 随机获取一个集合中的元素
127.0.0.1:6379[1]> srandmember t1
"2"
# 随机获取一个集合中的2个元素，当值为正数的时候，返回对应个数的不重复元素，当值为负数的时候返回对应个数的元素（不考虑是否重复）
127.0.0.1:6379[1]> srandmember t1 2
1) "2"
2) "3"
# 从集合中弹出一个元素
127.0.0.1:6379[1]> spop t1
"3"
```

## 有序集合
> 有序的集合，要比列表类型更耗费内存

```sh
# 增加集合
127.0.0.1:6379[1]> zadd score 1 a1 2 a2 3 a3 5 a4 4 a5
(integer) 2
# 修改集合
127.0.0.1:6379[1]> zadd score 7 a1
(integer) 0
# 增加正无穷
127.0.0.1:6379[1]> zadd score +inf a7
(integer) 1
# 增加负无穷
127.0.0.1:6379[1]> zadd score -inf a8
(integer) 1
# 获取指定元素的值
127.0.0.1:6379[1]> zscore score a1
"7"
# 获取排名在某个范围的元素列表
127.0.0.1:6379[1]> zrange score 2 5
1) "a3"
2) "a5"
3) "a4"
4) "a1"
# 获取排名在某个范围的元素列表，并显示元素对应的分数
127.0.0.1:6379[1]> zrange score 2 5 WITHSCORES
1) "a3"
2) "3"
3) "a5"
4) "4"
5) "a4"
6) "5"
7) "a1"
8) "7"
# 获取指定分数范围的元素 及 对应的分数
127.0.0.1:6379[1]> zrangebyscore score 2 4 withscores
1) "a2"
2) "2"
3) "a3"
4) "3"
5) "a5"
6) "4"
# (4 不包含4
127.0.0.1:6379[1]> zrangebyscore score 2 (4 withscores
1) "a2"
2) "2"
3) "a3"
4) "3"
# 获取负无穷到正无穷的元素
127.0.0.1:6379[1]> zrangebyscore score -inf +inf  withscores
 1) "a8"
 2) "-inf"
 3) "a2"
 4) "2"
 5) "a3"
 6) "3"
 7) "a5"
 8) "4"
 9) "a4"
10) "5"
11) "a1"
12) "7"
13) "a7"
14) "inf"
127.0.0.1:6379[1]> zrange score 0 -1 withscores
 1) "a8"
 2) "-inf"
 3) "a2"
 4) "2"
 5) "a3"
 6) "3"
 7) "a5"
 8) "4"
 9) "a4"
10) "5"
11) "a1"
12) "7"
13) "a7"
14) "inf"
# 获取分数大于2的，从第0个人开始的2个人
127.0.0.1:6379[1]> zrangebyscore score 2 +inf limit 0 2 withscores
1) "a2"
2) "2"
3) "a3"
4) "3"
# 获取分数小于3的从0开始的2个人
127.0.0.1:6379[1]> zrevrangebyscore score 3 0 limit 0 2 withscores
1) "a3"
2) "3"
3) "a2"
4) "2"
# 增加某个元素的分数
127.0.0.1:6379[1]> zincrby score 2 a3
"5"
# 获得集合中元素的数量
127.0.0.1:6379[1]> zcard score
(integer) 7
# 获取指定分数范围内的元素个数
127.0.0.1:6379[1]> zcount score 0 2
(integer) 1
# 删除一个或多个元素
127.0.0.1:6379[1]> zrem score a8 a2
(integer) 2
# 按照排名范围删除元素
127.0.0.1:6379[1]> zremrangebyrank score 0 2
(integer) 3
# 删除分数范围内的元素
127.0.0.1:6379[1]> zremrangebyscore score 1 2
(integer) 2
# 获取分数从小到大的排名（从0开始）
127.0.0.1:6379[1]> zrank score a2
(integer) 0
# 按照分数从大到小排名(从0开始)
127.0.0.1:6379[1]> zrevrank score a2
(integer) 1
# 计算多个有序集合的交集，并将结果存入scorestore中，默认进行sum计算
# zunionstore:并集，zinterstore:交集
127.0.0.1:6379[1]> zinterstore scorestore 2 sc1 sc2
(integer) 1
# 返回交集结果的最小值
127.0.0.1:6379[1]> zinterstore scorestore 2 sc1 sc2 aggregate min
(integer) 1
# 返回交集结果的最大值
127.0.0.1:6379[1]> zinterstore scorestore 2 sc1 sc2 aggregate max
(integer) 1
# 每个交集参与计算时，元素的分数*该集合的权重
127.0.0.1:6379[1]> zinterstore scorestore 2 sc1 sc2 weights 1 0.1
(integer) 1
```

## 事务
> Redis中的事务是一组命令的集合，事务同命令一样，都是redis的最小的执行单位，一个事务中的命令，要么都执行，要么都不执行，可以保证事务中的命令依次执行不被其他命令插入

```sh
# 一个事务
# multi：事务开始，暂存事务;exce:事务结束，开始执行事务
127.0.0.1:6379[1]> MULTI
OK
127.0.0.1:6379[1]> sadd "user:1:following" 2
QUEUED
127.0.0.1:6379[1]> sadd "user:2:followers" 1
QUEUED
127.0.0.1:6379[1]> exec
1) (integer) 1
2) (integer) 1
# 语法错误处理：只要有一条命令错误，执行exec命令后redis会直接返回错误命令，语法正确的也不会执行。（2.6.5之前的版本会忽略有语法错误的命令，执行语法正确的命令）
127.0.0.1:6379[1]> multi
OK
127.0.0.1:6379[1]> set key value
QUEUED
127.0.0.1:6379[1]> errorcommand key
(error) ERR unknown command 'errorcommand'
127.0.0.1:6379[1]> exec
(error) EXECABORT Transaction discarded because of previous errors.
# 运行错误处理：命令执行时出现的错误，如果一条命令出错，redis会执行未出错的任务，且无法提供回滚功能
127.0.0.1:6379[1]> multi
OK
127.0.0.1:6379[1]> set aaa 1
QUEUED
127.0.0.1:6379[1]> sadd aaa 2
QUEUED
127.0.0.1:6379[1]> set aaa 5
QUEUED
127.0.0.1:6379[1]> exec
1) OK
2) (error) WRONGTYPE Operation against a key holding the wrong kind of value
3) OK
```

- watch命令

> 先获得一条命令的返回值，然后再通过这个值执行下一条命令

```sh
# 过期时间
127.0.0.1:6379[1]> set session:111 124
OK
# 设置过期时间，单位秒，必须为整数
127.0.0.1:6379[1]> expire session:111 60
(integer) 1
# pexpire的单位是毫秒
127.0.0.1:6379[1]> pexpire aaa 60000
(integer) 1
127.0.0.1:6379[1]> get session:111
"124"ser
# 获取剩余多久被删除
127.0.0.1:6379[1]> ttl session:111
(integer) 30
# 当键不存在时，ttl命令返回-2
127.0.0.1:6379[1]> ttl session:111
(integer) -2
# pttl查询剩余毫秒
127.0.0.1:6379[1]> pttl aaa
(integer) 49514
# 如果没有为键值设置过期时间（默认永久存在），则ttl返回-1
127.0.0.1:6379[1]> ttl key
(integer) -1
# =====================================================
127.0.0.1:6379[1]> set aaa 1
OK
127.0.0.1:6379[1]> expire aaa 20
(integer) 1
# persist清除过期时间
127.0.0.1:6379[1]> persist aaa
(integer) 1
127.0.0.1:6379[1]> ttl aaa
(integer) -1
# 使用set或者getset也会清除过期时间，其他（如incr/lpush/hset/zrem）均不会影响键的过期时间
127.0.0.1:6379[1]> set aaa 18
OK
127.0.0.1:6379[1]> ttl aaa
(integer) -1
# 使用时间戳作为过期的时刻（秒）
127.0.0.1:6379[1]> expireat aaa 1526562000
(integer) 1
127.0.0.1:6379[1]> ttl aaa
(integer) 181
# 使用时间戳作为过期的时刻（毫秒）
127.0.0.1:6379[1]> pexpireat aaa 1526562000000
(integer) 1
127.0.0.1:6379[1]> pttl aaa
(integer) 148785
```

- sort命令
```sh
127.0.0.1:6379[1]> lpush mylist 1 2 4 3 8 6
(integer) 6
# sort命令可以对列表类型、集合类型、有序集合键进行排序
127.0.0.1:6379[1]> sort mylist
1) "1"
2) "2"
3) "3"
4) "4"
5) "6"
6) "8"
# 降序排序
127.0.0.1:6379[1]> sort tt desc
1) "10"
2) "8"
3) "5"
4) "4"
5) "3"
6) "2"
# sort可以按照字段顺序排列非数字元素
127.0.0.1:6379[1]> sort score alpha
1) "a1"
2) "a2"
3) "a3"
4) "a4"
5) "a5"
6) "a7"
# 如果不写alpha的话，sort默认会转换成双精度浮点数
127.0.0.1:6379[1]> sort score
(error) ERR One or more scores can\'t be converted into double
# 跳过之前的1个元素，获取之后的3个元素
127.0.0.1:6379[1]> sort tt desc limit 1 3
1) "8"
2) "5"
3) "4"
# by参数 - 根据参考键进行排序
127.0.0.1:6379[1]> set itemscore:1 50
OK
127.0.0.1:6379[1]> set itemscore:2 100
OK
127.0.0.1:6379[1]> set itemscore:3 -10
OK
127.0.0.1:6379[1]> lpush sortbylist 2 1 3
(integer) 3
127.0.0.1:6379[1]> sort sortbylist by itemscore:* desc
1) "2"
2) "1"
3) "3"
```

# 任务队列
```sh
# 任务队列
127.0.0.1:6379[1]> brpop queue 0
1) "queue"
2) "task"
127.0.0.1:6379[1]> lpush queue task
(integer) 1
# 优先级任务队列，blpop接收多个键，其中有一个键（从左到右顺序）有元素就会从该键中弹出元素
127.0.0.1:6379[1]> lpush queue2 task
(integer) 1
127.0.0.1:6379[1]> lpush queue1 tt
(integer) 1
127.0.0.1:6379[1]> blpop queue1 queue2 queue3 0
1) "queue1"
2) "tt"
# 发布和订阅模式，publish发布， subscribe订阅
127.0.0.1:6379[1]> subscribe channel1
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "channel1"
127.0.0.1:6379[1]> publish channel1 hello
(integer) 1
# 按照规则订阅，会匹配channel.1等，但是不会匹配channel.
127.0.0.1:6379[1]> psubscribe channel.?*
Reading messages... (press Ctrl-C to quit)
1) "psubscribe"
2) "channel.?*"
127.0.0.1:6379[1]> publish channel.9 nihao
(integer) 1
```

## 编码格式

```sh
# 获取redis内部编码方式
127.0.0.1:6379[1]> set foo bar
OK
127.0.0.1:6379[1]> object encoding foo
"embstr"
```
## python与redis
```py
import redis
# 默认连接地址，127.0.0.1 6379
r = redis.StrictRedis()
# 指定连接地址
r = redis.StrictRedis(host='127.0.0.1', port=6379, db=1)
# get命令
r.get('foo')    # 'bar'
# 字典用法
r.hmset('dict', {'name':'aa'})
r.hgetall('dict')
# 事务
r.pipeline().set("foo","bar").get('foo').execute()
# 管道
r.pipeline(transaction=False).set("foo","bar").get('foo').execute()
```

- redis.Redis和redis.StrictRedis
```
StrictRedis:用于实现大部分官方的命令，并使用官方的语法和命令
Redis:是StrictRedis的子类，用于向后兼容旧版本的redis-py
官方推荐使用StrictRedis
连接redis，加上decode_responses=True，写入的键值对中的value为str类型，不加这个参数写入的则为字节类型。
```

