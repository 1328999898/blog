# Python

## 参考文档
- [中文 Python 笔记]https://github.com/lijin-THU/notes-python?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io
- [参考文档](https://my.oschina.net/zyzzy/blog/115096)
- [Python-copy()与deepcopy()区别](http://blog.csdn.net/qq_32907349/article/details/52190796)
- [hashlib-md5](https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/0013868328251266d86585fc9514536a638f06b41908d44000)
- [python排序](https://www.cnblogs.com/65702708/archive/2010/09/14/1826362.html)

## Counter计数器(统计字符出现的个数)

```py
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
from collections import Counter

print Counter('aabbccdser')
print Counter('aabbccdser')['a']
```

## zip

```python
x = [1, 2, 3]
y = [4, 5, 6]
z = [7, 8, 9]
print zip(x, y, z)
结果：[(1, 4, 7), (2, 5, 8), (3, 6, 9)]
print zip(x, u)
结果：[(1, 4), (2, 5), (3, 6)]
print zip(x)
结果：[(1,), (2,), (3,)]
print zip()
结果：[]
print zip(*zip(x, y, z))
结果：[(1, 2, 3), (4, 5, 6), (7, 8, 9)]
print zip(* [x] * 3)
结果：[(1, 1, 1), (2, 2, 2), (3, 3, 3)]
```

## lambda

```python
格式：lambda 一个或多个参数: 一个表达式
square_root = lambda x: math.sqrt(x)    # def square_root(x): return math.sqrt(x)
sum = lambda x, y:   x + y     # def sum(x,y): return x + y
dd = lambda x: x if x > 100 else 0      # 如果x>100,返回x，否则返回0
print sum(2,3)
结果：5
print square_root(4)
结果：2
print dd(101)
结果：101
print dd(99)
结果： 0
# =============================================
lambda表达式常用来编写行为的列表或字典
L = [(lambda x: x**2),  
    (lambda x: x**3),  
    (lambda x: x**4)]  
print L[0](2),L[1](2),L[2](2)  

D = {'f1':(lambda: 2+3),  
    'f2':(lambda: 2*3),  
    'f3':(lambda: 2**3)}  
print D['f1'](),D['f2'](),D['f3']() 
# =============================================
map函数可以在序列中映射函数进行操作
def inc(x): return x+1 
L = [1,2,3,4]  
print map(inc,L)  
print map((lambda x: x+1),L) 
结果：[2, 3, 4, 5]
# =============================================
列表解析可以实现map函数同样的功能，而且往往比map要快
print [x**2 for x in range(10)]  
print map((lambda x: x**2), range(10))  
```

## os.walk()

> * 获取指定文件夹下的文件名

```python
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import os  
for dirpath, dirname, filename in os.walk(path):  
    print dirpath #当前目录路径  
    print dirname #当前路径下所有子目录  
    print filename #当前路径下所有非目录子文件
```

## os.listdir()

> * 获取指定文件夹下的文件名，os.listdir()函数得到的是仅当前路径下的文件名

```python
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import os  
print os.listdir(path):
```

## 字符串操作

```python
# 字符串替换：str.replace(替换前的值，替换后的值)
print 'abcda'.replace('a','e')
结果：ebcde
# 字符串是否以某个或几个字符开始：str.startswith('start_str'),结果以True或者False返回
print 'raw_sss'.startswith('raw_')
结果：True
print 'raw_sss'.startswith('dis_')
结果：False
# 字符串是否以某个或几个字符结束：str.endswith('start_str'),结果以True或者False返回
print 'aa.py'.endswith('.py')
结果：True
print 'aa.py'.endswith('.md')
结果：False
# 字符串连接
print '\t'.join(map(str,['a','b','c'])) + '\n'
结果：a	b	c
# 字符串分割
print 'as@123'.split('@')
结果：['as', '123']
# 移除字符串头尾指定的字符（默认为空格）
print ' ddd '.strip()
结果： 'ddd'
print 'a234a'.strip('a')
结果： '234'
```

## 日期操作

```python
# 当天日期
print datetime.date.today()
结果：datetime.date(2017, 4, 25)
# 日期加减
print datetime.date.today() + datetime.timedelta(days=1)
结果：datetime.date(2017, 4, 26)
print datetime.date.today() - datetime.timedelta(days=1)
结果：datetime.date(2017, 4, 24)
# 获取当时的时间
print time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
结果：2017-04-25 16:50:27
```

## 文件操作(os.path)

```python
print os.path.join('/usr/aa','bb','cc','dd.py')     # 返回文件名
结果： '/usr/aa/bb/cc/dd.py'
local_path='/home/data/aa/bb_20170101'
print os.path.basename(local_path)      # 返回文件名
结果：bb_20170101
print os.path.sep
结果：'/'
```

| 加工方法  |  说明   |
| ----     |  ----  |
| os.path.abspath(path)   |  返回绝对路径  |
| os.path.basename(path)   |  返回文件名  |
| os.path.commonprefix(list)   |  返回list(多个路径)中，所有path共有的最长的路径。  |
| os.path.dirname(path)   |  返回文件路径  |
| os.path.exists(path)    |  路径存在则返回True,路径损坏返回False  |
| os.path.lexists    |  路径存在则返回True,路径损坏也返回True  |
| os.path.expanduser(path)    |  把path中包含的"~"和"~user"转换成用户目录  |
| os.path.expandvars(path)    |  根据环境变量的值替换path中包含的”$name”和”${name}”  |
| os.path.getatime(path)    |  返回最后一次进入此path的时间。  |
| os.path.getmtime(path)    |  返回在此path下最后一次修改的时间。  |
| os.path.getctime(path)    |  返回path的大小  |
| os.path.getsize(path)    |  返回文件大小，如果文件不存在就返回错误  |
| os.path.isabs(path)    |  判断是否为绝对路径  |
| os.path.isfile(path)    |  判断路径是否为文件  |
| os.path.isdir(path)    |  判断路径是否为目录  |
| os.path.islink(path)    |  判断路径是否为链接  |
| os.path.ismount(path)    |  判断路径是否为挂载点（）  |
| os.path.join(path1[, path2[, ...]])    |  把目录和文件名合成一个路径  |
| os.path.normcase(path)    |  转换path的大小写和斜杠  |
| os.path.normpath(path)    |  规范path字符串形式  |
| os.path.realpath(path)    |  返回path的真实路径  |
| os.path.relpath(path[, start])    |  从start开始计算相对路径  |
| os.path.samefile(path1, path2)    |  判断目录或文件是否相同  |
| os.path.sameopenfile(fp1, fp2)    |  判断fp1和fp2是否指向同一文件  |
| os.path.samestat(stat1, stat2)    |  判断stat tuple stat1和stat2是否指向同一个文件  |
| os.path.split(path)    |  把路径分割成dirname和basename，返回一个元组  |
| os.path.splitdrive(path)     |  一般用在windows下，返回驱动器名和路径组成的元组  |
| os.path.splitext(path)    |  分割路径，返回路径名和文件扩展名的元组  |
| os.path.splitunc(path)    |  把路径分割为加载点与文件  |
| os.path.walk(path, visit, arg)    |  遍历path，进入每个目录都调用visit函数，visit函数必须有  |
| os.path.supports_unicode_filenames    |  设置是否支持unicode路径名  |

## execfile

> * execfile(filename [,globals [,locals ]])函数可以用来执行一个文件

```sh
$ vim aa.py
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
print 3+4
In [56]: execfile(r'/Users/kaiqigu/aa.py')
7
```

## dict.items()

```py
In [60]: a = {'a':1,'b':2}
In [61]: a.items()
Out[61]: [('a', 1), ('b', 2)]
```

## str()和repr()
```
函数str() 用于将值转化为适于人阅读的形式，而repr() 转化为供解释器读取的形式
epr()函数得到的字符串通常可以用来重新获得该对象，通常情况下 obj==eval(repr(obj)) 这个等式是成立的。
repr()绝大多数情况下（不是所有）可以通过求值运算（内建函数eval()）重新得到该对象。
str()则不同，它生成一个对象的可读性好的字符串表示，结果通常无法用eval()求值，但适合print输出搜索。
```

## 字典
```
card_shangzheng_pos = set(range(1, 10, 1))
```

## map

map(function, iterable, ...)    #对可迭代函数'iterable'中的每一个元素应用‘function’方法，将结果作为list返回

```py
In [48]: def add100(x):
   ....:         return x + 100
   ....:
In [49]: list1 = [11,22,33]
In [50]: map(add100,list1)
Out[50]: [111, 122, 133]
In [51]: [add100(i) for i in list1]
Out[51]: [111, 122, 133]
# ------------------------------------------
>>> def abc(a, b, c):
...     return a*10000 + b*100 + c
>>> list1 = [11,22,33]
>>> list2 = [44,55,66]
>>> list3 = [77,88,99]
>>> map(abc,list1,list2,list3)
[114477, 225588, 336699]
# ------------------------------------------
'\t'.join(map(str, [user_id, server, account, coin))
'\t'.join(map(str, ['1','2','3']))
```


```py
In [84]: print c
[1, 2, 4, 6, 3, 7]
# 列表推导式
In [85]: [i for i in c if i%2==0]
Out[85]: [2, 4, 6]
In [154]: a = [2,4,6]
In [155]: b = [1,3,9]
In [158]: [i * j for i in a for j in b]
Out[158]: [2, 6, 18, 4, 12, 36, 6, 18, 54]
# [i * j for i in a for j in b] 等价于下列for循环
for i in a:
    for j in b:
        print i*j
# 遍历字典
In [168]: for name ,value in a.items():
   .....:     print name,value
```

## 数据结构

- 列表： 可重复，可修改，字符串和元组不可修改，[]
- 元组： 可重复，不可修改，(,)
- 集合： 无序不重复，用于消除重复元素和检测成员，set()
- 字典： 键值对的结合，且键不可重复，dict()，{}

## str、repr、 ``

str()函数和repr()函数都是将任意数据类型转换为字符串类型，repr等价于``

```py
In [30]: str(`5`)
Out[30]: '5'

In [31]: repr(`5`)
Out[31]: "'5'"

In [38]: str('asd')
Out[38]: 'asd'

In [39]: repr('asd')
Out[39]: "'asd'"

In [43]: `'asd'`
Out[43]: "'asd'"

In [42]: str("'asd'")
Out[42]: "'asd'"

In [40]: `"'asd'"`
Out[40]: '"\'asd\'"'

In [41]: repr("'asd'")
Out[41]: '"\'asd\'"'
```

- 使用 Anaconda
```sh
# 可以看已经安装好的python第三方工具包
➜  ~ conda list
# 查看 conda 的信息
➜  ~ conda info
```

- array
```sh
In [45]: from numpy import array

In [46]: a = array([1,2,3,4])

In [47]: a
Out[47]: array([1, 2, 3, 4])

In [48]: a + a
Out[48]: array([2, 4, 6, 8])

In [49]: a + 2
Out[49]: array([3, 4, 5, 6])
```

- 列表推导式
```sh
In [53]: a = '1 2 3 4 5'
In [57]: sum([int(i) for i in a.split()])
Out[57]: 15
```

- 整数
```sh
import sys
# 获得整数的最大值
sys.maxint
Out[23]: 9223372036854775807
整型数字的最大最小值：
在 32 位系统中，一个整型 4 个字节，最小值 -2,147,483,648(-2**(32-1))，最大值 2,147,483,647。
在 64 位系统中，一个整型 8 个字节，最小值 -9,223,372,036,854,775,808(-2**(64-1))，最大值 9,223,372,036,854,775,807。

# 获得浮点数的信息
sys.float_info
```

## Ipython
> IPython 是一个 python 的交互式 shell，优点：数据执行记录，便于调试代码
* [参考文档](http://www.cnblogs.com/zzhzhao/p/5295476.html)
- %env显示环境变量
- %hist 或 %history显示历史记录
- %time statement计算一段代码的执行时间
- %bg function把 function 放到后台执行，例如: %bg myfunc(x, y,z=1)，之后可以用jobs将其结果取回。myvar = jobs.result(5) 或 myvar =jobs[5].result。另外，jobs.status() 可以查看现有任务的状态。
- %pwd显示当前目录
- %pycat filename用语法高亮显示一个 python 文件(不用加.py后缀名)
- 另外，ipython 中用 ! 表示执行 shell 命令，用 $ 将 python 的变量转化成shell 变量。通过这种两个符号，我们就可以做到和 shell命令之间的交互，可以非常方便地做许多复杂的工作。比如你可以很方便地创建一组目录:s
```sh
# 查看所有的magic命令
In [1]: %lsmagic
# 查看当前的变量空间
In [4]: %whos
# 重置当前变量空间
In [6]: %reset -f
In [7]: %whos
Interactive namespace is empty.
# 查看历史命令
In [8]: %hist
# 使用？查看函数的帮助
In [9]: sum?
# 使用 _ 使用上个cell的输出结果
In [13]: A=12
Out[13]: 12
In [14]: _
Out[14]: 12
In [15]: _+13
Out[15]: 25
# 使用！执行一些系统命令
In [20]: !ping baidu.com
```


## mac安装MySQL-python遇到的问题

```sh
$ python manage.py runserver
django.core.exceptions.ImproperlyConfigured: Error loading MySQLdb module: dlopen(//anaconda/lib/python2.7/site-packages/_mysql.so, 2): Library not loaded: libssl.1.0.0.dylib
  Referenced from: //anaconda/lib/python2.7/site-packages/_mysql.so
  Reason: image not found.
Did you install mysqlclient or MySQL-python?
```

解决方式：
```sh
pip install psycopg2
brew install --upgrade openssl
brew unlink openssl && brew link openssl --force
```