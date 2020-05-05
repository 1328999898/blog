# scala基础
> 纯面向对象的语言，每个值都是对象

- [可变容器mutable](https://docs.scala-lang.org/zh-cn/overviews/collections/concrete-mutable-collection-classes.html)

## 一、基础
- 区分大小写
- 类名首字母大写，如果是几个单词组成的类名，则每个单词的首字母要大写
- 方法名首字母小写，如果是几个单词组成的方法名，则除首字母外，每个单词的首字母要大写
- 程序文件名应与对象名完全匹配
- def main(args: Array[String]) 是程序的入口，scala程序从main方法开始处理
- scala是面向行的语言，若一行里仅有一个语句，则分号可不写，若一行中有多条语句，则分号必须写

## 二、scala包
- 一个文件定义一个包
```scala
package 包名
class HelloWorld
```
- 一个文件定义多个包
```scala
package 包名 {
  class HelloWorld
}
```

## 三、引用
```scala
// import语句可以出现在任何地方
import java.awt.Color  // 引入Color
import java.awt._  // 引入包内所有成员
import java.awt.{Color, Font}   // 引入包中的几个成员
import java.util.{HashMap => JavaHashMap}   // 重命名成员
// 隐藏成员
import java.util.{HashMap => _, _} // 引入了util包的所有成员，但是HashMap被隐藏了
```

## 四、声明
```scala
// 声明变量 var
scala> var st:String = "MM"
st: String = MM
// 声明常量 val
scala> val dd:String ="aa"
dd: String = aa
```

## 五、函数
```scala
def functionName ([参数列表]) : [return type] = {
   function body
   return [expr]
}
// 如果函数没有返回值，可以返回为 Unit，这个类似于 Java 的 void, 实例如下：
def printMe( ) : Unit = {
  println("Hello!")
}
// 函数调用
functionName( 参数列表 )
```

## 六、闭包
```scala
/**
一个函数，返回值依赖于传入的一个或多个变量
**/
scala> val total = (i:Int) => (i*10)
scala> total(5)
res71: Int = 50
scala> val total_value = (i:Int,j:Int) =>(i*j)
scala> total_value(2,8)
res73: Int = 16
```

## 七、字符串
```scala
/**
scala中String是不可变的对象，因此不可以被修改，意味着：如果修改字符串就会产生新的字符串对象。如果需要创建可以修改的字符串，可以使用StringBuilder类
**/
scala> var buf = new StringBuilder
buf: StringBuilder =
scala> buf ++= "asdf"
res82: StringBuilder = asdf
scala> buf ++= "asdfdd23"
res84: StringBuilder = asdfasdfdd23
/**
字符串拼接:concat()或+
**/
scala> val aa = "sd"
aa: String = sd
scala> val bb= "www"
bb: String = www
scala> aa.concat(bb)
res85: String = sdwww
scala> aa + bb
res88: String = sdwww
// 格式化字符串
scala> printf("%d %s %f", 12, "sds", 123.23)
12 sds 123.230000
```

## 八、数组
```scala
// 声明长度为3的数组
var z = new Array[String](3)
// 遍历数组
scala> val mm = Array(1,2,4)
mm: Array[Int] = Array(1, 2, 4)
scala> for (i <- mm) { println(i)}
1
2
4
/**
多维数组
**/
scala> val dd = Array(Array(12,3), Array(33,454))
dd: Array[Array[Int]] = Array(Array(12, 3), Array(33, 454))
// 遍历多维数组
scala> for (i <- 0 to dd.length-1){ for (j<- 0 to dd(i).length-1) {println(dd(i)(j))}}
12
3
33
454
/**
创建区间数组
**/
scala> var myList1 = Range(10, 20, 2)
myList1: scala.collection.immutable.Range = Range(10, 12, 14, 16, 18)
scala> var myList2 = Range(10, 20)
myList1: scala.collection.immutable.Range = Range(10, 11, 12, 13, 14, 15, 16, 17, 18, 19)
// 数组合并
scala>  import Array._
import Array._
scala> concat(myList1, myList2)
res130: Array[Double] = Array(1.9, 2.9, 3.4, 3.5, 8.9, 7.9, 0.4, 1.5)
```
## 九、列表
```scala
// List
scala> val mm = List(1,3,4)
mm: List[Int] = List(1, 3, 4)
scala> val dd = List(2,3,4)
dd: List[Int] = List(2, 3, 4)
// 列表合并 :::或concat
scala> mm:::dd
res144: List[Int] = List(1, 3, 4, 2, 3, 4)
scala> mm.:::(dd)
res156: List[Int] = List(2, 3, 4, 1, 3, 4)
scala> List.concat(mm,dd)
res145: List[Int] = List(1, 3, 4, 2, 3, 4)
// 指定重复元素 List.fill
scala> List.fill(3)("aa")
res161: List[String] = List(aa, aa, aa)
// 二维列表
scala> val mm = List(List(1,2,4),List(2,3,5),List(5,8,9))
// 获取列表的第一个元素
scala> dd.head
res150: Int = 2
// 获取列表第一个元素之外的所有元素
scala> dd.tail
res151: List[Int] = List(3, 4)
// 判断列表是否为空，如果为空返回true，否则返回false
scala> dd.isEmpty
res152: Boolean = false
// 反转
scala> dd.reverse
res165: List[Int] = List(4, 3, 2)
// filter返回函数中返回结果为true的所有元素
scala> dd.filter(_%2 ==0)
res174: List[Int] = List(2, 4)
scala> dd.filter(s => s%2 ==0)
res176: List[Int] = List(2, 4)
scala> var tt = List("sss", "daw", "aa")
tt: List[String] = List(sss, daw, aa)
// 过滤长度为3的字符串，filter
scala> tt.filter(s => s.length ==3)
res177: List[String] = List(sss, daw)
// 通过给定函数创建列表
scala> List.tabulate(6)(n => n * n)
res162: List[Int] = List(0, 1, 4, 9, 16, 25)
scala> List.tabulate( 4,5 )( _ * _ )
res163: List[List[Int]] = List(List(0, 0, 0, 0, 0), List(0, 1, 2, 3, 4), List(0, 2, 4, 6, 8), List(0, 3, 6, 9, 12))
```

## 十、Set
```scala
/**
没有重复元素的对象的集合
分为可变对象和不可变对象，默认是不可变对象（scala.collection.immutable.Set）
可变对象：scala.collection.mutable.Set
对不可变Set操作，会产生一个新的Set，而对可变的Set操作，改变的是Set本身
**/
scala> var mm = Set(1,2,5)
mm: scala.collection.immutable.Set[Int] = Set(1, 2, 5)
scala> val ddd = mutable.Set(2,3,6)
ddd: scala.collection.mutable.Set[Int] = Set(2, 6, 3)

scala> ddd.add(8)
res219: Boolean = true

scala> ddd
res220: scala.collection.mutable.Set[Int] = Set(2, 6, 3, 8)

scala> ddd.remove(2)
res221: Boolean = true

scala> ddd
res222: scala.collection.mutable.Set[Int] = Set(6, 3, 8)

scala> ddd.remove(3)
res223: Boolean = true

scala> ddd
res224: scala.collection.mutable.Set[Int] = Set(6, 8)

scala> ddd += 5
res225: ddd.type = Set(5, 6, 8)

scala> ddd -=6
res226: ddd.type = Set(5, 8)

scala> ddd.head
res236: Int = 5

scala> ddd.tail
res237: scala.collection.mutable.Set[Int] = Set(8)

scala> ddd.isEmpty
res238: Boolean = false

scala> val ss = mutable.Set(4,6,5)
ss: scala.collection.mutable.Set[Int] = Set(5, 6, 4)

scala> ss ++ ddd
res241: scala.collection.mutable.Set[Int] = Set(5, 6, 4, 8)

scala> ss.++(ddd)
res242: scala.collection.mutable.Set[Int] = Set(5, 6, 4, 8)

scala> dd.max
res243: Int = 4

scala> dd.min
res244: Int = 2

scala> dd.size
res246: Int = 3

scala> dd.sum
res247: Int = 9
```
## 十一、 Map
```scala
/**
键值对（key:value），也叫哈希表
map分为可变对象和不可变对象，默认使用不可变Map
可变对象：Map
不可变对象：import scala.collection.mutable.Map
**/
scala> var mm = Map("a"->1, "b"->2)
mm: scala.collection.immutable.Map[String,Int] = Map(a -> 1, b -> 2)
scala> var ee = Map("a"->5, "e"->7)
ee: scala.collection.immutable.Map[String,Int] = Map(a -> 5, e -> 7)
// 添加Key-value
scala> mm += ("c" -> 4)
scala> mm
res195: scala.collection.immutable.Map[String,Int] = Map(a -> 1, b -> 2, c -> 4)
// 获取Map的键
scala> mm.keys
res196: Iterable[String] = Set(a, b, c)
// 获取Map的值
scala> mm.values
res197: Iterable[Int] = MapLike(1, 2, 4)
// 判断Map是否为空
scala> mm.isEmpty
res198: Boolean = false
// 判断Map的key是否存在，如果存在返回对应的value，否则返回默认值
scala> mm.getOrElse("a", 111)
res211: Int = 1
// Map合并
scala> mm ++ ee
res200: scala.collection.immutable.Map[String,Int] = Map(a -> 5, b -> 2, e -> 7)
scala> mm.++(ee)
res201: scala.collection.immutable.Map[String,Int] = Map(a -> 5, b -> 2, e -> 7)
// 循环输出Map的key-value
scala> mm.keys.foreach{i => println(i, mm(i)) }
(a,1)
(b,2)
```
## 十二、元组
```scala
// 元组是不可变的，可以包含不同类型的元素，目前 Scala 支持的元组最大长度为 22
// 创建元组
scala> var tup = (1, "aa")
tup: (Int, String) = (1,aa)
// Tuple2创建两个元素的元组，Tuple3：创建3个元素的元组
scala> val tup = new Tuple2(1,3)
tup: (Int, Int) = (1,3)
scala> val tup_test = (1,2,3,4,5)
tup_test: (Int, Int, Int, Int, Int) = (1,2,3,4,5)
// 获取元组的值，并计算，tup_test._1表示元组的第一个元素
scala> val total = tup_test._1 + tup_test._2 + tup_test._3 + tup_test._4 + tup_test._5
total: Int = 15
// 迭代输出元组的所有元素
scala> tup_test.productIterator.foreach(i=> println(i))
1
2
3
4
5
// 元组转换为字符串
scala> tup_test.toString()
res137: String = (1,2,3,4,5)
// 元素交换 swap
scala> val tt = ("aa", "dd")
tt: (String, String) = (aa,dd)
scala> tt.swap
res139: (String, String) = (dd,aa)
```
## 十三、option
```scala
/**
option
**/
scala> val x:Option[Int] = Some(5)
x: Option[Int] = Some(5)
```
## 十四、 Iterator
```scala
/**
迭代器：一种访问集合的方法
**/
scala> val tt = Iterator("a", "b","v")
tt: Iterator[String] = non-empty iterator
// 检测集合中是否还有元素
scala> tt.hasNext
res264: Boolean = true
// 返回迭代器的下一个元素，并更新迭代器的状态
scala> tt.next
res258: String = a

scala> tt.next
res259: String = b

scala> val tt = Iterator(1,3,5,2)
tt: Iterator[Int] = non-empty iterator

scala> tt.min
res270: Int = 1
```
## 十五、数据类型转换
```scala
// 注释
/**
Int类型转换为String类型
**/
scala> val x=42
x: Int = 42

scala> x.toString
res49: String = 42

scala> x
res50: Int = 42
```


## 测试
t1.scala
```scala
//scala行数统计
//➜  ~ cat test.txt
//a	1	0	0
//a	2	0	0
//a	3	0	0
//b	1	0	0
//b	2	0	0
//b	3	0	0

// sc:sparkContext
// 通过sc.textFile()创建一个叫做lines的RDD，此时不会把文件中的所有行读取并存储起来
val lines = sc.textFile("/Users/.../test.txt")
// 对行进行统计
// 驱动程序一般会管理多个执行器节点，如果我们在集群上运行count()操作，那么不同节点会统计文件的不同部分的行数
// 本地模式下运行spark shell，所有的工作会在单个节点上执行
lines.count()
// 在执行first()这种行动操作时，spark只需要扫描文件直到找到第一个匹配的行为止，不需要读取整个文件
lines.first()

// 过滤操作
// 筛选包含a的行
// filter这种基于函数的操作也会在集群中并行执行
val alines = lines.filter(line => line.contains("a"))
alines.count()
alines.first()

// 初始化sparkContext
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.SparkContext._
// 集群URL：告诉spark如何连接到集群上，local可以让spark运行在单机单线程上而无需连接到集群
// 应用名：例：My App，连接到集群时，可以帮助在集群管理器的页面找到对应的应用
val conf = new SparkConf().setMaster("local").setAppName("My App")
val sc = new SparkContext(conf)
// 关闭Spark
SparkContext.stop()
System.exit(0)
sys.exit()
```

wordcount.scala
```scala
import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.SparkContext._

val conf = new SparkConf().setAppName("wordCount")
val sc = new SparkContext(conf)
val input = sc.textFile("/Users/.../test.txt")
val words = input.flatMap(line => line.split("\t"))
val counts = words.map(words => (word, 1)).reduceByKey{case (x,y) => x+y}
counts.saveAsTextFile("/Users/.../wordCount.txt")
```