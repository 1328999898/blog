# Luigi和sciluigi

## 参考文档
* [Luigi官方文档](http://luigi.readthedocs.io/en/stable/)
* [Luigi博客](http://www.cnblogs.com/dongdone/p/5710510.html)
* [Luigi文档github](https://github.com/spotify/luigi)
* [sciluigi文档](https://github.com/pharmbio/sciluigi)

```python
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import luigi
import sciluigi as sl
```

```py
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
'''
Luigi Parameter
'''
import luigi
import datetime


class DateTask(luigi.Task):
    date = luigi.DateParameter()


a = datetime.date(2014, 1, 21)
b = datetime.date(2014, 1, 21)
print a is b

c = DateTask(date=a)
d = DateTask(date=b)


print c is d
True
```