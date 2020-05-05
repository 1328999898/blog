# Elasticsearch

## 参考文档
- [Es权威指南](https://elasticsearch.cn/book/elasticsearch_definitive_guide_2.x/)
- [参考文档](https://es.xiaoleilu.com/)

## ES SQL
```
http://host:port/_sql?sql=select field from table_name
```
### 一、CSV RESULT
```
http://IP:port/_sql?format=csv&sql=select aa,bb from table_name
aa,bb
1,1
2,5
```

### 二、字段
> 字段可以通过确切的字段名列出、也可以将通配符与包含和排除语法一起使用

```sql
1. 确切的字段
select col from table_name;
2. 查询aa开头的字段
select include('*aa') from table_name;
3. 查询开头为a，结尾不为n的字段
select include('*a'),exclude('*n') from table_name;
```

### 三、聚合函数

stats
```sql
select time,stats(dur) from table_name group by time
```
```json
"buckets": [
{
"key": 1516601731,
"doc_count": 44,
"stats(dur)": {
"count": 44,
"min": 0,
"max": 77.22,
"avg": 23.85,
"sum": 55.55
}
},]
```
extended_stats
```sql
select extended_stats(dur) as num from table_name;
```
```json
"aggregations": {
"extended_stats(dur)": {
"count": 31451,
"min": 0,
"max": 3134,
"avg": 21.31,
"sum": 21.424,
"sum_of_squares": 222,
"variance": 123.23,
"std_deviation": 123.123,
"std_deviation_bounds": {
"upper": 214.231,
"lower": -12313.1231
}}}
```
count
```sql
select count(*) as num from table_name
```
```json
"aggregations": {
"num": {
"value": 2324252
}
}
```
count group by
```sql
select time,count(*) as num from table_name group by time;
或
select count(*) as num from table_name group by time;
```
```json

"buckets": [
{
"key": 1516601731,
"doc_count": 31,
"num": {
"value": 31
}
},]
```
range
```sql
select count(dur) as num from table group by range(dur, 10,20,30)
```
```json
"aggregations": {
"range(dur,10,20,30)": {
"buckets": [
{
"key": "10.0-20.0",
"from": 10,
"to": 20,
"doc_count": 0
},
{
"key": "20.0-30.0",
"from": 20,
"to": 30,
"doc_count": 0
}]}
}
```
date
- date_histogram(当interval为2时，数据为第一日到第二日的数据汇总，日期显示为第一日的日期，以此类推)
```sql
select count(*) as num from table_name group by
date_histogram(field='datetime','interval'='1d','alias'='ds')
```
```json
"aggregations": {
"ds": {
"buckets": [
{
"key_as_string": "2018-01-18 00:00:00",
"key": 21214412,
"doc_count": 223412,
"num": {
"value": 223412
}
},
{
"key_as_string": "2018-01-19 00:00:00",
"key": 234322342,
"doc_count": 112233,
"num": {
"value": 112233
}
},]}}
```
IN_TERMS和TREMS(貌似都相当于in)
- IN_TERMS
```sql
select dur from table_name where dur=IN_TERMS('25.036')
```
```json
"hits": [
{
"dur": 25.036,
},]
```
```sql
select dur from table_name where dur=IN_TERMS('25.036','219.865')
```
```json
"hits": [
{
"dur": 25.036,
},{
"dur": 219.865,
},]
```
TERMS
```sql
select dur from table_name where dur=TERMS('25.036','219.865')
```
```json
"hits": [
{
"dur": 25.036,
},{
"dur": 219.865,
},]
```
in
```sql
select dur from table_name where dur in ('25.036','219.865')
```
```json
"hits": [
{
"dur": 25.036,
},{
"dur": 219.865,
},]
```



## 与Elasticsearch交互

- curl

> curl可以简单实现get/post请求，-X指定http请求的方法（例如：HEAD/GET/POST/PUT/DELETE）

```sh
# HTTP方法：GET, POST, PUT, HEAD, DELETE
# PORT Elasticsearch HTTP服务所在的端口，默认为9200
curl -XGET 'http://IP:port/_search'
# 索引：用来指向一个或者多个分片的逻辑命名空间
```

### 一、mapping
```sh
# 查询mapping
curl -XGET 'url/_mapping?pretty'
```

创建mapping的三种方式
- 1.直接插入数据：直接插入数据，es根据插入的数据格式自动识别创建mapping
- 2.创建index的时候直接指定mapping
- 3.已经创建了index，新增mapping

修改mapping
- mapping一旦创建之后，就无法修改，只能追加，如果要修改，就需要删除掉整个文档进行重建


### 二、文档
> 文档指最顶层结构或者根对象序列化成的Json数据（以唯一ID标识，并存储于es中）

文档元数据
- _index: 文档存储的地方（名字必须全部小写，不能以下划线开头，不能包含逗号）
- _type: 文档代表的对象的类（可以大写、可以小写、不能包含下划线或逗号）
- _id:  文档唯一的标识，仅仅是一个字符串，与_index和_type组合时，可以唯一标识一个文档

### 三、索引文档
> 文档通过index api被索引，使数据可以被存储和搜索，文档通过_index、_type、_id唯一确定

- 自定义ID
```json
PUT /{index}/{type}/{id}
{
  "field": "value",
  ... 
}
```

- 自增ID

> 将put方法（在这个URL中存储文档），变成 POST方法（在这个类型下存储文档），自动生成的ID有22个字符，也叫做uuids

```json
POST /website/blog/
{
  "title": "My second blog entry",
  "text":  "Still trying this out...",
  "date":  "2014/01/01"
}
```

- 检索文档
```sh
# pretty:用于美化json输出
# 获取index对应的数据，默认显示前10条
curl -XGET 'url/index/_search?pretty'
# 获取index、type、id对应的数据
curl -XGET 'url/index/type/id?pretty'
# curl 后加入-i 可以获得响应头
curl -i -XGET 'url/index/type/id?pretty'
# 只显示_source的内容
curl -XGET 'url/index/type/id?_source'
# 查询指定字段的内容
curl -XGET 'url/index/type/id?_source=line1,line2'
# 根据指定字段进行查询
curl -XGET 'url/index/_search?q=line:value'
# 返回 200 ok 说明文档存在，如果返回404 Not Found 说明文档不存在
curl -i -XHEAD 'url/index/type/id'
```

- 更新文档

> 文档再es中是不可变的，如果需要更新已经存在的文档，可以使用重建索引或者替换掉它，update API实际上是删除了就文档，索引了新文档，过程如下

```sh
1. 从旧文档中检索JSON
2. 修改它
3. 删除就文档
4. 索引新文档
```

- 创建新文档
```sh
# 由于index\type\id三者唯一确定一个文档，因此为了保证文档是新加入的，可以使用post方式让es自动生成唯一的id
POST /website/blog/
```

### 四、DSL
- 查询所有数据
```json
GET /test_111/test/_search
{
  "query": {
    "match_all": {}
  }
}
```
- 模糊查询
```json
GET /test_111/test/_search
{
  "query": {
    "match_phrase_prefix": {
      "name": "a"
    }
  }
}
```
- 精确查询
```json
GET /test_111/test/_search
{
  "query": {
    "term": {
      "name": {
        "value": "aa"
      }
    }
  }
}
```
- 包含关系
```json
GET /test_111/test/_search
{
  "query": {
    "constant_score": {
      "filter": {
        "terms": {
          "name": [
            "cc",
            "bb"
          ]
        }
      },
      "boost": 1.2
    }
  }
}
```
例子
```sh
PUT /index_name/xxx/_mapping
{
    "properties":{
        "test1":{
            "type":"keyword"
        },
        "test2":{
            "type":"long"
        },
        "create_dt":{
            "type":"date",
            "format":"yyyy-MM-dd HH:mm:ss||epoch_millis"
        }
    }
}
put /index_name
GET /index_name/_settings
DELETE /index_name/
PUT xxx/xxx/x
{
  "test1":"asdsfas",
  "test2":"2",
  "create_dt":"123123123112"
}
```
DSL查询例子
```json
{
    "size":1000,
    "query":{
        "bool":{
            "must":[
                {
                    "term":{
                        "field1":"value"
                    }
                },
                {
                    "term":{
                        "field2":"value"
                    }
                }
            ],
            "must_not":{
                "exists":{
                    "field3":"value"
                }
            },
            "filter":{
                "range":{
                    "field4":{
                        "gte":"value",
                        "lte":"value"
                    }
                }
            }
        }
    },
    "sort":{
        "field5":{
            "order":"desc"
        }
    }
}
```