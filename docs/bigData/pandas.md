# pandas

## 参考文档
* [官方文档](http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy)
* [pandas的pdf文档](http://pandas.pydata.org/pandas-docs/version/0.19.2/pandas.pdf)
* [参考文档](https://docs.scipy.org/doc/numpy/reference/generated/numpy.isinf.html)
* [pandas的git文档](https://github.com/pandas-dev/pandas)
* [Pandas参考文档](http://blog.csdn.net/cbbing/article/details/50721468)
* [日期时间处理](http://www.jianshu.com/p/96ea42c58abe)

## 常用导入包
```py
In [24]: import numpy as np
In [24]: import pandas as pd
In [24]: from pandas import Timestamp
In [24]: from decimal import Decimal
```

## 技术整合

- 创建DataFrame

```py
# 创建DataFrame
In [26]: df = pd.DataFrame(np.random.randn(6, 4), columns=['one', 'two', 'three','four'],index=list('abcdef'))
Out[27]:
        one       two     three      four
a -0.844883 -0.227276  0.061315 -0.731842
b -0.381648 -0.146314 -0.741698  0.105474
c -0.368688 -0.125157  0.257138 -0.942163
d -0.397223 -1.019062  1.426528 -0.147622
e -0.002957  1.182453  0.290078  0.905151
f -1.861510 -0.382731  0.173068  1.403485

# 创建DataFrame
In [62]: df = pd.DataFrame([('a', 1), ('b', 2)], columns=['name', 'value'])
Out[62]:
  name  value
0      a          1
1      b          2
```

## 获取DataFrame的基础信息
```py
df.values      # 获取DataFrame的数据
df.columns     # 获取DataFrame的列名
df.index       # 获取DataFrame的索引名
```

## 遍历DataFrame
```py
for _,row in df.iterrows():
    print _,row,row.get('字段名',默认值)
```

## 字段重命名
```py
In [35]: df.rename(columns={'name' : 'nick', 'value' : 'score'})
Out[35]:
  nick  score
0    a      1
1    b      2
```

## 字符串处理
```py
# 字符串截取
user_df['month_dt'] = user_df['dt'].str[:4]
# 字符串替换
result['month_dt'] = result['UPDATED_MONTH'].str.replace('-', '')
```


## 修改列的数据类型
```py
# 注无法将object转化为字符串
# astype方式很多时候无效，原因未知
bowl_df['num'] = bowl_df['num'].astype('int')
------
# 同时将多列的数据类型转化为对应的类型，pd.to_numeric为数值类型
type_column = ['spend_gold', 'total_diamond']
day_result[type_column] = day_result[type_column].apply(pd.to_numeric)
# 将整个DataFrame进行数值类型转换，如遇到不能转换的(字符串、日期)列，将被单独保留，errors='coerce'：将非数字列转换为NaN
df.apply(lambda x: pd.to_numeric(x, errors='ignore'))
------
# 强制将整个DataFrame的object的数据类型转化为更合适的数据类型，目前已被废弃
df.convert_objects(convert_numeric=True).dtypes
```

## 值替换

```py
df.fillna({'列名': '值'})   # 指定列填充缺失值
df.fillna(填充后的值)        # df中所有为空的字段都填充值
df.replace({'列名':{替换前的值:替换后的值}})    # 值替换,is_new_pay
df.replace({np.inf:0})  # 将inf替换为0
np.isinf(np.inf)    # 判断是否是inf
```

## 计算
```python
df.pivot_table('times', ['ds', 'plat'], 'sort')                 # 行转列
# 通过agg计算
result_df.groupby(['col1', 'col2']).agg({
        'col3': 'count', 
        'col4': 'nunique',   # uid去重并计算总数
        'col5': 'sum',
        'col6': 'sum'
    }).reset_index()
result_df = df1[~df1['col1'].isin(df2.col1.values)]             # 排除df1中的col1与df2的col1相同的数据
result_df['col'] = len(set(df1.loc[df1.col1 == 'value'].col2.tolist()))         # 通过集合计算总数
result_df['col'] = result_df['col1'].map(lambda s: eval(str(s))['value'][0])    # 处理指定列的每一行数据
df['col1'] = df['col2'].map(lambda s: s if s < 0 else 0)        # 处理指定列的每一行数据
df2['col1'] = df2['col2'].map(lambda x: x.get(col3, 0))         # 处理指定列的每一行数据
pub_result_df = result_df[result_df.col1 == 'value']                                # 取指定的数据
result_df['col1'] = result_df['col2'].div(result_df['col3'],fill_value=0)           # 列的除法运算
df = df.sort_values(by=column, ascending=False)         # 排序
df.列名.str.replace('-', '')              # 操作一列数据
df.列名.str[:4]                           # 操作一列数据
df.round(2)                              # 保留两位小数
df.round({'A': 0, 'C': 2})               # 指定列保留小数位数
```

## map cut filter
```py
# map函数：map()的两个参数一个是函数名，另一个是列表或元组。
In [120]: a = [1,2,3,4,5]
In [121]: map(lambda x:x+3,a)
In [121]: df['col1'] = df['col2'].map(lambda s: s if s < 0 else 0)
Out[121]: [4, 5, 6, 7, 8]
# filter（）函数包括两个参数，分别是function和list。该函数根据function参数返回的结果是否为真来过滤list参数中的项，最后返回一个新列表
Out[122]: a = [1, 2, 3, 4, 5]
In [124]: filter(lambda x:x>3,a)
Out[124]: [4, 5]
df.groupby(['col3',pd.cut(df.col1,[1,3,5]])]).count().col2.reset_index()        # cut统计
pd.cut(assist_df.order_money,ranges).cat.categories                             # categories
```

## 获取季度时间
```py
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
from pandas import Timestamp

print Timestamp('2012Q2')
print Timestamp('2012Q1')
```

## 文件读写
```py
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import pandas as pd

pd.read_excel('path/filename.xlsx', 'sheet_name')                        # 读取Excel文件
result_df.to_excel('path/filename.xlsx',sheet_name='sheet_name')         # 写入文件到Excel
pd.read_csv('foo.csv')                                                   # 读取CSV文件
result_df.to_csv('path/filename', sep = '\t', index = False, header = False)  # 写入文件到CSV
```

## 遍历DataFrame
```py
import pandas as pd
def get_data():
    for _, row in df.iterrows():
        return [row.字段1, row.字段2]

# 生成DataFrame
column = ['字段1', '字段2']
df = pd.DataFrame(get_data(), columns=column)
```
