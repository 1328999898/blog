# hybrid优化总结


```
1. 尽量使用ds='2017-01-01',而不用ds=date('2017-01-01')
2. 采用事实表与维度表Join，会有较高的性能
3. Join的两张表尽量按一级分区键作为join key，会有较高的性能
4. 如果有非一级分区的列要join，那最好增加where条件减少参与join的数据量

right outer join尽量rewrite成left outer join
outer join的on和where作用域不同。on是作用于join的过程，where是作用于join之后的结果，所以应该将能在join的时候提前过滤的条件写在on上，也可以写在join表的子查询里，这样可以减少join原始表的数据量。
```
