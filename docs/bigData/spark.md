# Spark

快如闪电的集群计算，是快速和通用的大规模集群技术。

* [apache官网](http://www.apache.org)
* [spark官网](http://spark.apache.org)
* [SparkSession](https://www.iteblog.com/archives/1673.html)
* [JSON API](https://github.com/alibaba/fastjson/wiki/JSON_API_cn)
* [Spark开发指南](http://colobu.com/2014/12/08/spark-programming-guide/#%E7%AE%80%E4%BB%8B)
* [石山园](http://www.cnblogs.com/shishanyuan/category/719232.html)


## 速度(speed)
- 在内存中执行mr作业比Hadoop快100倍
- 在磁盘上比Hadoop快10倍
- spark有DAG(有向无环图)执行引擎，支持高数据流和内存计算。

## 易于使用
- 支持多种语言：Java、Scala、python、R
- 提供了80多种高级操作用于并行APP，可以使用脚本语言进行交互式编程。

## 常规性
- 合成SQL语句
- 流计算
- 复杂分析
- MLIB(机器学习类库)
- GraphX(图形计算)
- spark数据流

## 运行环境
- 可运行环境：Hadoop、Mesos、standalone、cloud
- 可访问的数据源：HDFS、Cassandra、Hbase、S3(亚马逊的分布式文件系统)

## 在Hadoop之上构建的Spark

> Yarn（资源调度框架）

spark部署的三种模式：
- standalone（独立模式）
    - 在hdfs之上分配空间，spark和mr同时运行，覆盖到所有的job
- Hadoop Yarn（Hadoop v2.x）
    - 在yarn上运行
    - 不需要预安装或者要求root访问
    - 有助于spark和Hadoop生态系统进行集成（Hadoop栈），也允许其他组件在栈之上运行
- spark in mapreduce（Hadoop v1.x）




## 其他
- spark有自己的集群管理机制，基于Hadoop mr模型并且扩展了Hadoop mr模型用于高效计算
- 包括交互式查询和流计算
- 主要特性：内存的集群计算（内存一定要足够大）
- 可以使用一些单独的工具，减少维护的成本
- spark使用Hadoop有2种方式：1.存储，2.处理
- 由于spark有自己的集群管理，所以使用Hadoop只是为了存储。


## 总结
- RDD(弹性分布式数据集，resilient distributed dataset)，有容错机制并可以被并行操作的元素集合。
- 共享变量（两种）：1）广播变量：可以在内存的所有节点上缓存变量。 2）累加器：只能用于做加法（例如：计数、求和）

## 一、弹性分布式数据集RDD
- 并行集合（parallielized collections）
    并行集合：在已存在的scala集合，通过调用SparkContext的parallelize方法创建的可以被并行操作的分布式数据集。
```scala
/**
创建分布式数据集
**/
val data=Array(1,2,3,4,5)
val DisData = sc.parallelize(data)
/**
并行操作分布式数据集：进行相加操作
**/
DisData.reduce((a,b)=> a+b)
/**
sc.parallelize(data, slices)，其中slices表示数据集切分的分数，默认Spark会根据集群的状况自动设定slices的数目。也可以手动传入slices设置
**/
val DisData = sc.parallelize(data, 5)
```
- 外部数据集（External Datasets）
  通过Hadoop支持的文件系统创建数据集，文件包括：本地文件、hdfs、cassandra、hbase、s3等，文件格式：TextFile、SequenceFiles等。文件输入法包括：textFile、文件夹、压缩文件和通配符。
```scala
/**
TextFile的RDD可以通过SparkContext的textFile方式创建，但是数据集并没有加载到内存中，只是指向文件的索引
**/
val distFile = sc.textFile("/path/filename")
/**
数据集操作：将所有数据行的长度相加，lineLengths：定义行长度，行长度由于惰性设计并没有立即计算；reduce：运行reduce时，Spark将计算分解成运行在各个节点的任务，每个节点运行它的map以及本地的reduction，并将结果返回给驱动城区
**/
val lineLengths = distFile.map(s => s.length)
val totalLength = lineLengths.reduce((a, b) => a + b)
```
## 二、RDD操作
- 转换：从现有数据集创建一个新的数据集（例如：map，传递数据集的每个元素并返回新的分布式数据集表示结果）
- 动作：在数据集上运行计算后，返回一个值给驱动程序(例如：reduce，通过一些函数将所有元素叠加起来，并将最终结果返回给Driver程序。reduceByKey，返回分布式数据集)

## 三、共享变量
- 广播变量
  广播变量允许程序员保留一个只读的变量，缓存在每一台机器上
```scala
/**
广播变量的创建，对象v不能在广播后修改，这样可以保证所有节点收到的广播值一致
**/
scala> val v=Array(1,2,3)
v: Array[Int] = Array(1, 2, 3)
scala> var broadvalue = sc.broadcast(v)
broadvalue: org.apache.spark.broadcast.Broadcast[Array[Int]] = Broadcast(8)

/**
广播变量的调用
**/
scala> var mm = broadvalue.value
mm: Array[Int] = Array(1, 2, 3)
```
- 累计器
  通过关联操作进行加操作的变量，可以高效并行支持
```scala
/**
创建累加器，并赋初始值10
**/
scala> val accum = sc.accumulator(10, "aa")
warning: there were two deprecation warnings; re-run with -deprecation for details
accum: org.apache.spark.Accumulator[Int] = 10
/**
使用累加器相加
**/
scala> sc.parallelize(v).foreach(x=>accum+=x)
scala> accum.value
res68: Int = 21
```

## SparkSession
> SparkSession是spark2.0引入的新概念，早期的版本中SparkContext是spark的主要入口点，RDD是主要的API，通过SparkContext来创建和操作RDD，对于每个其他的API我们都需要使用不同的context，如：StreamingContext、sqlContext、hiveContext
> 在spark2.0中，引入SparkSession作为DataSet和DataFrame API的新的入口点，SparkSession封装了SparkConf、SparkContext、SQLContext、HiveContext

- 创建SparkSession
```scala
/**
使用local创建SparkContext，并包装它的SQLContext,
**/
val sparkSession = SparkSession.builder.master("local").appName("spark session example").getOrCreate()
/**
使用spark会话从csv读取数据
**/
val df = sparkSession.read.option("header","true").csv("src/main/resources/sales.csv")
/**
使用textFile加载文件创建RDD
**/
val lines = sc.textFile('path')
```
- mutable.HashMap
```scala
/**
相当于字典
**/
scala> val map = scala.collection.mutable.HashMap.empty[Int,String]
map: scala.collection.mutable.HashMap[Int,String] = Map()
scala> map += (1 -> "make a web site")
res42: map.type = Map(1 -> make a web site)
scala> map += (3 -> "profit!")
res43: map.type = Map(1 -> make a web site, 3 -> profit!)
scala> map(1)
res44: String = make a web site
scala> map contains 2
res46: Boolean = false
scala> map.getOrElse(3, "444")
res43: String = profit!
scala> tt.getOrElse(5, "444")
res44: String = 444
```


## RDD的两种计算方式

- 转换：返回值是一个RDD
- 操作：返回值不是一个RDD

## shuffle操作实例
```sh
scala> val kv1 = sc.parallelize(List(("A",1), ("B",2), ("C",3),("A", 4), ("B",5)))
kv1: org.apache.spark.rdd.RDD[(String, Int)] = ParallelCollectionRDD[17] at parallelize at <console>:24

scala> kv1.sortByKey().collect()
res33: Array[(String, Int)] = Array((A,1), (A,4), (B,2), (B,5), (C,3))

scala> kv1.groupByKey().collect()
res34: Array[(String, Iterable[Int])] = Array((A,CompactBuffer(1, 4)), (B,CompactBuffer(2, 5)), (C,CompactBuffer(3)))

scala> kv1.reduceByKey(_+_).collect()
res35: Array[(String, Int)] = Array((A,5), (B,7), (C,3))
```

- distinct、union、
```sh
scala> val kv2=sc.parallelize(List(("A",4),("A",4),("C",3),("A",4),("B",5)))
kv2: org.apache.spark.rdd.RDD[(String, Int)] = ParallelCollectionRDD[23] at parallelize at <console>:24

scala> kv2.distinct.collect()
res36: Array[(String, Int)] = Array((A,4), (B,5), (C,3))

scala> kv1.union(kv2).collect()
res38: Array[(String, Int)] = Array((A,1), (B,2), (C,3), (A,4), (B,5), (A,4), (A,4), (C,3), (A,4), (B,5))

scala> val kv3=sc.parallelize(List(("A",10),("B",20),("D",30)))
kv3: org.apache.spark.rdd.RDD[(String, Int)] = ParallelCollectionRDD[28] at parallelize at <console>:24

scala> kv1.join(kv3).collect()
res42: Array[(String, (Int, Int))] = Array((A,(1,10)), (A,(4,10)), (B,(2,20)), (B,(5,20)))

scala> kv1.cogroup(kv3).collect()
res44: Array[(String, (Iterable[Int], Iterable[Int]))] = Array((D,(CompactBuffer(),CompactBuffer(30))), (A,(CompactBuffer(1, 4),CompactBuffer(10))), (B,(CompactBuffer(2, 5),CompactBuffer(20))), (C,(CompactBuffer(3),CompactBuffer())))

```

- yarn：资源调度框架


## spark读书笔记

- [spark应用提交指南](http://colobu.com/2014/12/09/spark-submitting-applications/)

spark三大优点：
1. 笔记本电脑就可以开发spark应用
2. 速度快，支持交互是使用和复杂算法
3. 是一个通用引擎，可以用来完成各种各样的运算（SQL查询、文本处理、机器学习等）

spark运行方式：
1. 本地模式运行：即非分布式模式
2. mesos
3. yarn
4. spark发行版自带的独立调度器

```
获取帮助
spark-submit --help

spark操作：
创建RDD
转化已有RDD
调用RDD操作进行求值

spark SQL:结构化数据
spark streaming:实时计算
MLIB：机器学习
GraghX:图计算

RDD:弹性分布式数据集（resilient distributed dataset）
RDD是spark对分布式数据和计算的基本抽象

每个spark应用都是由一个驱动器程序来发起集群上的各种并行操作
驱动器程序通过一个SparkContext对象来访问spark，这代表对计算集群的一个连接
shell启动时自动创建了一个SparkContext对象，叫做sc

支持的语言
Java
scala
python
...


独立使用spark
shell 不需要自行初始化SparkContext
非shell 需要自行初始化SparkContext

Java和scala，需要给应用添加一个对于spark-core的工件的maven依赖


创建RDD
1.读取外部数据集
2.驱动器程序里分发驱动器程序中的对象集合


RDD操作
1.转化操作：一个RDD生成一个新的RDD
2.行动操作：对RDD计算出一个结果，并把结果返回到驱动器程序中，或者把结果存储到外部存储系统


RDD.persist() 缓存RDD，用于多个行动中重用同一个RDD
cache()与使用默认存储级别调用persist()是一样的

```

spark或shell会话的工作方式
1. 从外部数据创建输入RDD
2. 使用诸如filter()这样的转化操作对RDD进行转化，以定义新的RDD
3. 告诉Spark对需要被重用的中间结果RDD执行persist()操作
4. 使用行动操作（例如count()和first()等）来出发一次并行计算，Spark会对计算进行优化后再执行


创建RDD
1. 将程序中已有的集合传给sc.parallelize()方法
val lines = sc.parallize(List("aa", "dsds"))
2. 从外部存储中读取数据
val lines = sc.textFile("/path/file")


RDD操作
1. 转化操作：返回RDD
map(), filter()
filter操作不会改变已有的RDD中的数据，该操作会返回一个全新的RDD
union合并两个RDD
val alines = lines.filter(line => line.contains("a"))
val aaRDD = inputRDD.union(input)
2. 行动操作：返回其他数据类型
count(): 计数
first(): 获取第一行数据
take(2): 获取前两条数据
collect(): 返回整个RDD中的数据，只有整个数据集能在单台机器的内存中放得下时，才能使用collect()
saveAsTextFile()、saveAsSequenceFile() : 保存数据


Spark惰性求值
```
在被调用行动操作之前Spark不会开始计算
Spark的惰性求值，可以把一些操作合并到一起来减少计算数据的步骤
Hadoop MapReduce系统中，开发者常常需要花大量时间考虑如何把操作组合到一起，以减少MapReduce的周期数
```

常用的转化操作
```
map(): 接收一个函数，对RDD中的每个元素进行操作，将函数的返回结果作为结果RDD中的值
filter(): 接收一个函数，将RDD中满足该函数的元素放入新的RDD中返回
val nums = sc.parallelize(List(1,2,3,4))
val result = nums.map(x => x*x).collect().mkString(",")
// 输出结果： String = 1,4,9,16

flatMap(): 把行数据切分成单词
val lines = sc.parallelize(List("hello world", "hi"))
val words = lines.flatMap(line => line.split(" "))
// 输出结果：Array[String] = Array(hello, world, hi)


// 伪集合操作
// union 并集
scala> val RDD1 = sc.parallelize(List(1,3,4,5))
scala> val RDD2 = sc.parallelize(List(1,3,7,9))
scala> RDD1.union(RDD2).collect()
res14: Array[Int] = Array(1, 3, 4, 5, 1, 3, 7, 9)
// intersection 交集
scala> RDD1.intersection(RDD2).collect()
res15: Array[Int] = Array(1, 3)
// distinct 去重
scala> val mm = RDD1.union(RDD2)
scala> mm.distinct().collect()
res17: Array[Int] = Array(1, 9, 3, 4, 5, 7)
// subtract 差集
scala> RDD1.subtract(RDD2).collect()
// cartesian 返回所有可能的笛卡尔积对
scala> RDD1.cartesian(RDD2).collect()
res20: Array[(Int, Int)] = Array((1,1), (1,3), (1,7), (1,9), (3,1), (3,3), (3,7), (3,9), (4,1), (4,3), (4,7), (4,9), (5,1), (5,3), (5,7), (5,9))

// 行动函数
// 返回元素中的所有元素
scala> RDD1.collect()
res30: Array[Int] = Array(1, 3, 4, 5)
// count 返回元素的个数
scala> RDD1.count()
res29: Long = 4
// take 返回RDD中的n个元素
scala> RDD1.take(2)
res26: Array[Int] = Array(1, 3)
// 按照顺序返回最前面的n个元素
scala> RDD1.takeOrdered(2)
res31: Array[Int] = Array(1, 3)
// 返回任意n个元素
scala> RDD1.takeSample(false, 2)
res33: Array[Int] = Array(3, 5)
// top() 获取前n个元素
scala> RDD1.top(2)
res25: Array[Int] = Array(5, 4)
// countByValue 各元素在RDD中出现的次数
scala> mm.countByValue()
res27: scala.collection.Map[Int,Long] = Map(5 -> 1, 1 -> 2, 9 -> 1, 7 -> 1, 3 -> 2, 4 -> 1)
```

不同RDD类型间转换
```
数值RDD：mean()、variance()
键值对RDD：join()
scala中将RDD转为有特定功能的RDD是由隐式转换自动处理的：import org.apache.spark. SparkContext._

// 根据值筛选
scala> RDD1.filter(x => x < 4).collect()
res47: Array[Int] = Array(1, 3)

scala> val data = Seq(("a", 3), ("b", 4), ("a", 1))
data: Seq[(String, Int)] = List((a,3), (b,4), (a,1))
// reduceByKey
scala> sc.parallelize(data).reduceByKey((x, y) => x + y).collect()
res49: Array[(String, Int)] = Array((a,4), (b,4))
```

spark支持多种数据源
```
spark可以通过Hadoop MapReduce所使用的inputFormat和OutputFormat接口访问数据
支持的存储系统：s3、hdfs、Cassandra、HBASE等
支持的文件类型：json、sequenceFile、protocol buffer
可以连接的数据库：Cassandra、HBASE、elasticsearch、jdbc
```

# spark支持的四种运行方式
1. 本地单机模式
2. 集群单机模式
3. 基于Mesos
4. 基于YARN

# spark集群的两类构成程序
1. 驱动程序
2. 多个执行程序

spark中RDD的容错性：当某个节点或任务失败时(非用户代码错误引起，如硬件故障、网络不通等)，RDD或在余下的其他节点上自动重建、以便任务能最终完成


分布式存储系统
cassandra dynamodb tair
CDN：内容分发网络
