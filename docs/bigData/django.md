# Django

> Django 是用 Python 编写的一组类库,可以运行在任何Python可以运行的环境，于2003年诞生，最初用于开发新闻网站
> Django 代码向后兼容，例：1.1写的应用，适用于1.2、1.3等之后的版本，但不一定适用于2.0以后的版本

* [Python安装包](https://www.python.org/downloads/)
* [Django安装包](https://www.djangoproject.com/download/)
* [mysql-python安装包](https://sourceforge.net/projects/mysql-python/)
* [django的auth](http://www.cnblogs.com/Finley/p/5575305.html)
* [Django分页](https://docs.djangoproject.com/en/1.11/topics/pagination/)
* [django官方文档](http://djangobook.py3k.cn/2.0/)
* [参考文档](http://www.ziqiangxuetang.com/django/django-tutorial.html)
* [常用的admin配置](http://yshblog.com/blog/87)


## 一、MVC 设计模式
> MVC 是一种软件开发的方法，它把代码的定义和数据访问的方法（模型）与请求逻辑 （控制器）还有用户接口（视图）分开来
 
- mode.py : 模型，用Python类来描述数据表，可以通过简单的Python代码来创建、检索、更新、删除数据库的记录，不需要写SQL
- views.py : 视图，页面的业务逻辑，通过Python函数来实现
- urls.py : 控制器，指出不同的URL调用不同的视图
- xxx.html ：html模板，描述了页面的设计

## 二、Django安装
```sh
$ python -V   # 查新当前的Python版本，确保当前环境已经安装了Python
$ yum -y install python-setuptools  
$ easy_install pip
$ pip install django
```

## 三、创建第一个项目
创建项目
```sh
$ django-admin.py startproject test_pro     # 创建项目
$ chmod +x django-admin.py      # 如果权限拒绝，运行此命令
$ django-admin startapp app1    # 创建应用
$ python manage.py runserver    # 启动服务，默认访问127.0.0.1:8000/url/
# 项目存放位置最好是根目录(root)之外的位置，因为放到根目录有使人通过网络看到源代码的风险
```
配置视图(app.views.py)
```py
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello World")
```
配置URL(pro.urls.py)
```py
from django.conf.urls import url
# from app.views import hello
from app import views

urlpatterns = [
    # url(r'^hello/$', hello),
    url(r'^hello/'$, views.hello_world),         # 称作URLpattern
    # url(r'^hello/\d{1,2}/$', views.hello_world),    
]
```

## 四、URL说明
> 松耦合：更新一个模块不会影响其他模块的改变

pro下的URL
```py
from django.conf.urls import url
from django.conf.urls import include
# from app.views import hello
from app import views

urlpatterns = [
    # url(r'^hello/', hello),
    url(r'^hello/$', views.hello_world),         # 称作URLpattern
    url(r'^app/', include('app.urls')),          # 映射对应项目的URL
]

# -----------------说明----------------
1. URLpattern是一个Python的元组，元组中第一个元素是模式匹配字符串（正则表达式）；第二个元素是那个模式将使用的视图函数
2. Django在检查URL模式前，移除每一个申请的URL开头的斜杠(/)，这意味着为/hello/写URL模式不用包含斜杠(/)
```
app应用下的URL
```py
from django.conf.urls import url
from app import views

urlpatterns = [
    # url(r'^$', views.index), 
    url(r'^index/$', views.index),
    url(r'^get_user/$', views.get_user),
    url(r'^get_user1/$', views.get_user1),
    url(r'^get_user2/$', views.get_user2),
]
```

## 五、settings文件说明
```py
# Django通过在ROOT_URLCONF配置来决定根URLconf
ROOT_URLCONF = 'pro.urls'
# LANGUAGE_CODE用于指定翻译语言,翻译语言文件存放位置：site-packages/django/conf/locale
# zh_Hans:中文简体，zh_Hant：中文繁体
LANGUAGE_CODE = 'zh-hans'
# 设置时区，北京常用'Asia/Shanghai'，也有用'PRC'的
TIME_ZONE = 'Asia/Shanghai'
# debug 模式 设为False，原因见下面说明
DEBUG = False
# 修改模板文件路径 为 项目目录下的templates目录(pro/templates)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
temp_dir = os.path.join(BASE_DIR, 'templates')
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [temp_dir],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

```
**关闭Debug模式**
```py
Django 服务器在开启时默认运行在 debug 模式，Django 出错信息仅在 debug 模式下才会显现
settings.py文件中的DEBUG默认设置为True，表示DEBUG模式开启，此时会导致如下几个问题：
1.所有的数据库查询将被保存在内存中，以django.db.connection.queries的形式.会很吃内存。
2.任何404错误都将呈现Django的包含敏感信息的页面，而不是普通的404页面。
3.应用中任何未捕获的异常、错误的python语法、错误的模板语法等都会返回包含敏感信息的Django错误页面。
```

## 六、Model中的Meta
> Meta是Django的一个内部类，用于定义Django模型层的元数据（数据库表名，数据默认排序方式等）

```py
sex_choices = (('f', 'famale'), ('m', 'male'),)

class User(models.Model):
    name = models.CharField(max_length=30)
    sex = models.CharField(max_length=1, choices=sex_choices)

    class Meta:
        verbose_name = u"用户信息表"
        verbose_name_plural = u"用户信息表"

    def __unicode__(self):
        return self.name

注：
verbose_name: 给模型类定义一个可读性的单数模型名称，若果未设置，会自动使用模型的分词形式，例如：UserTest，被转换为user tests
verbose_name_plural: 指定模型类的复数形式名称，如不指定，Django会自动在模型名称后加一个s 
```

## 七、常用的字段参数
```sh
null：定义是否允许相应的数据库字段为NULL，默认为False
blank：定义字段是否可以为空，null是数据库中的非空约束，blank用于字段的HTML表单验证，即判断用户是否可以不输入数据
choices：定义字段的可选值，二维元素的元组，值1表示实际存储的值，值2表示HTML页面中进行选择时显示的值
default：设定默认值
help_text：HTML页面中输入控件的帮助字符串
primary_key：定义字段是否为主键，（True或False）
unique：是否为字段定义的唯一约束
name = models.CharField(verbose_name=u"用户名", max_length=30)    # 定义HTML的标签
```

## 八、基本查询
```py
from app.models import User
obj = User.objects.all()                 # 查询User模型的所有数据
obj = User.objects.filter(ds__day=18)    # 查询User模型的符合筛选条件的数据集，filter
obj = User.objects.exclude(ds__day=18)   # 查询User模型的不符合筛选条件的数据集，exclude
obj = User.objects.get(id__exact=1)      # 查询单条ID为1的记录
obj = User.objects.all()[:10]            # 查询User模型的前10条数据，相当于limit
obj = User.objects.all()[10:20]          # 查询User模型的第10到20条数据
obj = User.objects.all()[1]              # 查询User模型的第2条数据（index从0开始记录）
obj = User.objects.order_by('ds')        # 查询User模型的所有数据,并按照ds列排序
```
筛选条件的格式
```sh
字段名称_谓词         # 字段名称+双下划线+谓词
```
Django谓词表
| 谓词    |   说明  |   示例      | 等价的SQL  |
| ----   | ----    | ----       | ----       |
| exact | 精确等于  | .filter(id__exact=1)       | where id = 1   |
| iexact    | 大小写不敏感的等于 | .filter(st__iexact='you')  | where upper(st) like 'you' |
| contains  | 模糊匹配      | .filter(st__contains="abc")    |   where st like '%abc%'    |
| in        | 包含         | .filter(id__in=[1,2,3])       | where id in (1,2,3)   |
| gt        | 大于        | .filter(id__gt=10)             | where id >10          |
| gte       | 大于等于     | .filter(id__gte=10)            | where id>=10           |
| lt        | 小于        | .filter(id__lt=10)             | where id <10            | 
| lte       | 小于等于     | .filter(id__lte=10)            | where id <=10          | 
| startswith | 以...开头    | .filter(st__startswith=="aa")  | where st like 'aa%'   |
| endswith   | 以...结尾   | .filter(st__endswith=="aa")    | where st like '%aa'     |
| range      | 在...范围内  | .filter(id__range=(1,5))       | where id between 1 and 5  |
| year       | 年          | .filter(ds__year=2017)         |             |
| month      | 月          | .filter(ds__month=12)          |             |
| day        | 日          | .filter(ds__day=20)            |             |
| weekday    | 星期几       | .filter(ds__weekday=1)        |             |
| isnull     | 是否为空     | .filter(ds__isnull=True)        |  where ds is null       |


## 九、数据的增删改
```py
from app.models import Test
# 存入数据 - 方法一
t = Test()
t.name = 'wang'
t.save()
# 存入数据 - 方法二
t = Test(name='Tom')
t.save()
# 存入数据 - 方法三
Test.objects.create(name='Li')
# 删除id为1的数据
Test.objects.filter(id__exact = 1).delete()
# 修改id为3的数据
t = Test.objects.get(id=3)
t.save()
# ==============说明=========================
save：用于增加和修改
delete：用于删除记录，既可以用于数据集，也可以用于单条记录
```

## 十、关系操作
说明
```sh
account = models.OneToOneField(Account)         # 一对一关系
account = models.ForeignKey(Account)            # 一对多关系(主外键)
account = models.MoneyToMoneyField(Account)     # 多对多关系
account = models.OneToOneField(Account, on_delete=models.CASCADE)   # on_delete用于被关联的记录删除时，本记录也随之删除
```
例子：主外键(一对多)
```py
class Blog(models.Model):
    name = models.CharField(max_length=20)
    te = models.ForeignKey(Entry)

    def __unicode__(self):
        return self.name
```
数据存储和查询
```py
In [1]: from app.models import Entry, blog
In [4]: entry1 = Entry.objects.create(name = 'aa')
In [5]: entry2 = Entry.objects.create(name='Max')
In [6]: entry3 = Entry.objects.create(name='carl')
In [9]: blog1 = blog.objects.create(name='aa',te=entry1)
In [11]: blog1.te_id
Out[11]: 1L
In [12]: blog1.te
Out[12]: <Entry: aa>
In [13]: entry1.id
Out[13]: 1L
In [14]: entry1.name
Out[14]: 'aa'
In [16]: entry1.blog_set.all()
Out[16]: <QuerySet [<blog: aa>]>
```

## 十一、类继承
> - 抽象类继承：父类继承models.Model，但是不会再数据库中生成相应的数据表，子类将父类的列存储在子类的数据表中，用于多个表含有相同字段时，抽象类的定义需要通过模型中的Meta中 abstract = True实现
> - 多表继承：父类继承models.Model，父类和子类均在数据库中生成相应的数据表，子类不会将父类的字段存储在子类的数据表中，且可直接引用父类的字段，父类无需定义模型中的Meta中abstract
> - 代理模型继承：父类继承models.Model，父类在数据库中生成相应的数据表，子类不生成数据表，只是通过子类的Meta管理父类的数据(例：排序)，子类的定义需要通过模型中的Meta中 proxy = True实现

抽象类
```py
class Grap(models.Model):

    name = models.CharField(verbose_name=u'名称', max_length=30)
    class Meta:
        # 定义为抽象父类
        abstract = True


class Square(Grap):
    length = models.IntegerField(verbose_name=u'长')
    width = models.IntegerField(verbose_name=u'宽')
    height = models.IntegerField(verbose_name=u'高')

    class Meta:
        verbose_name = u'正方体'
        verbose_name_plural = u'正方体'

    def __unicode__(self):
        return self.name
```
多表继承
```py
class GrapOne(models.Model):
    name = models.CharField(verbose_name=u'名称', max_length=30)

class SquareOne(GrapOne):
    length = models.IntegerField(verbose_name=u'长')
    width = models.IntegerField(verbose_name=u'宽')
    height = models.IntegerField(verbose_name=u'高')

    class Meta:
        verbose_name = u'正方体'
        verbose_name_plural = u'正方体'

    def __unicode__(self):
        return self.name
```
代理模型继承
```py
class GrapTwo(models.Model):
    name = models.CharField(verbose_name=u'名称', max_length=30)
    length = models.IntegerField(verbose_name=u'长')
    width = models.IntegerField(verbose_name=u'宽')
    height = models.IntegerField(verbose_name=u'高')


class SquareTwo(GrapTwo):
    class Meta:
        proxy = True
        ordering = ['length']
        verbose_name = u'正方体'
        verbose_name_plural = u'正方体'

    def __unicode__(self):
        return self.name
```

## 十二、模板 - 过滤器
> 模板中放置在变量后用于控制变量的显示格式

格式
```
{{ 变量 | 过滤器 }}
```
常用的过滤器
| 过滤器   | 说明    |   例子  |
| ----    | ----    |   ----    |
| default   | 如果值不存在，则指定默认值    |    ```{{ value | default:'1' }} ```  |
| floatformat   | 转换为指定位数的小数，默认保留1位 |   ```{{ value | floatformat:2 }} ```   |
| default_if_none   | 如果值为None，则指定默认值   |  ```{{ value | default:'1' }}```  |
| lower     |  字符串转换为小写         | ```{{ value | lower }}```           |
| upper     |  字符串转换为大写         | ```{{ value | upper }}```          |
| date      |  格式化日期              | ```{{ value | date }}```        |
| change_date      |  格式化日期       | ```{{ value | change_date }}```           |


## 十三、Admin管理模板
修改admin管理页面标题
```py
# 修改admin.py
from django.contrib import admin

class MyAdminSite(admin.AdminSite):
    site_header = '测试网站'            # 设置标题内容
    site_title = '测试'                # 设置浏览器窗口显示的页面名称

admin_site = MyAdminSite()              # 实例化子类
admin_site.register(User, UserAdmins)   # 用子类实例注册需要管理的模板类

# 修改URL.py
from app.admin import admin_site

urlpatterns = [
    url(r'^admin/', admin_site.urls),
    url(r'^app/', include('app.urls')),
]
```
## 十四、auth模块
> - auth模块是Django提供的标准权限管理系统，可以提供用户身份认证、用户组和权限管理

用户操作
```py
# 新增用户 - 用户密码通过hash值存储，不存储明文
from django.contrib.auth.models import User
user = User.objects.create_user(username, email, password)
user.save()
# 认证用户 - 认证用户的密码是否有效，如有效，则返回用户的User对象，无效则返回None
from django.contrib.auth import authenticate
user = authenticate(username=username, password=password)
# 修改密码（set_password）,需配合authenticate使用
user = auth.authenticate(username=username, password=old_password)
if user is not None:
    user.set_password(new_password)
    user.save()
# 登陆 - login向session中添加SESSION_KEY, 便于对用户进行跟踪，login向session中添加SESSION_KEY, 便于对用户进行跟踪
from django.contrib.auth import login
user = authenticate(username=username, password=password)
if user is not None:
    if user.is_active:
        login(request, user)
# 退出登陆 - logout会移除request中的user信息, 并刷新session
from django.contrib.auth import logout
def logout_view(request):
    logout(request)
# 只允许登录的用户访问 - @login_required修饰器修饰的view函数会先通过session key检查是否登录, 已登录用户可以正常的执行操作, 未登录用户将被重定向到login_url指定的位置，若未指定login_url参数, 则重定向到settings.LOGIN_URL
from django.contrib.auth.decorators import login_required
@login_required(login_url='/accounts/login/')
def my_view(request):
    ...
```

## 十五、其他查询
values和values_list的区别，以及annotate计算
```py
In [1]: from app.models import User
In [24]: from django.db.models import Sum
In [25]: from django.db.models import Count

In [4]: users =  User.objects.values('id')
In [5]: users
Out[5]: <QuerySet [{'id': 1L}, {'id': 2L}, {'id': 3L}, {'id': 4L}]>

In [6]: users_1 =  User.objects.values_list('id')
In [7]: users_1
Out[7]: <QuerySet [(1L,), (2L,), (3L,), (4L,)]>

In [9]: users_2 =  User.objects.values_list('id',flat=True)
In [10]: users_2
Out[10]: <QuerySet [1L, 2L, 3L, 4L]>

In [19]: users_1 =  User.objects.values_list('id').first()
In [22]: users_1
Out[22]: (1L,)

In [46]: num = User.objects.values_list('id', 'sex')
In [47]: num
Out[47]: <QuerySet [(1L, u'm'), (2L, u'f'), (3L, u'm'), (4L, u'm')]>

In [40]:  num = User.objects.values_list('id').annotate(Sum('id'),Count('name'),)
In [41]: num
Out[41]: <QuerySet [(1L, Decimal('1'), 1), (2L, Decimal('2'), 1), (3L, Decimal('3'), 1), (4L, Decimal('4'), 1)]>

# ==============说明===========
values方法用于获取number字段的字典列表。
values_list用于获取number的元组列表。
values_list方法加个参数flat=True用于获取number的值列表。
```

-----

## 说明一、Django支持的数据库
- [PostgreSQL](http://www.postgresql.org/)
- [SQLLite 3](http://www.sqlite.org/)
- [MySQL](http://www.mysql.com/)
- [Oracle](http://www.oracle.com/)

## 说明二、正则表达式
| 符号	    |  匹配    |
| ----	    |  ----    |
| . (dot)    | 	任意单一字符  |
| \d	    |   任意一位数字  |
| [A-Z]	    |   A 到 Z中任意一个字符（大写）    |
| [a-z]	    |   a 到 z中任意一个字符（小写）    | 
| [A-Za-z]	|   a 到 z中任意一个字符（不区分大小写）    |
| +	        |   匹配一个或更多 (例如, \d+ 匹配一个或 多个数字字符)  |
| [^/]+	    |   一个或多个不为‘/’的字符   |
| *	        |   零个或一个之前的表达式（例如：\d? 匹配零个或一个数字）|
| *	        |   匹配0个或更多 (例如, \d* 匹配0个 或更多数字字符)      |
| {1,3}	    |   介于一个和三个（包含）之前的表达式（例如，\d{1,3}匹配一个或两个或三个数字）   |



## widthratio

> widthratio 通常用来显示图表，比例时用的，一个数字占了多少百分比等

```
乘法 A*B: {% widthratio A 1 B %}
除法 A/B: {% widthratio A B 1 %}

计算 A^2: {% widthratio A 1 A %}
计算 (A+B)^2: {% widthratio A|add:B 1 A|add:B %}
计算 (A+B) * (C+D): {% widthratio A|add:B 1 C|add:D %}
```

## 清理cache缓存(Django Cache)
```sh
$ python manage.py shell
>> from django.core.cache import cache
>> cache.clear()
```

## CGI
CGI(Common Gateway Interface) 是外部应用程序（CGI程序）与WEB服务器之间的接口标准，是在CGI程序和Web服务器之间传递信息的过程。CGI规范允许Web服务器执行外部程序，并将它们的输出发送给Web浏览器，CGI将Web的一组简单的静态超媒体文档变成一个完整的新的交互式媒体。

## 处理步骤编辑
1. 通过Internet把用户请求送到web服务器
2. web服务器接收用户请求并交给CGI程序处理
3. CGI程序把处理结果传送给web服务器
4. web服务器把结果送回到用户

## MVC 设计模式

- models.py (the database tables)
> 主要用一个 Python 类来描述数据表。 称为 模型(model) 。 运用这个类，你可以通过简单的 Python 的代码来创建、检索、更新、删除 数据库中的记录而无需写一条又一条的SQL语句
```py
from django.db import models

class Book(models.Model):
    name = models.CharField(max_length=50)
    pub_date = models.DateField()
```

- views.py (the business logic)
> 包含了页面的业务逻辑。 latest_books()函数叫做视图
```py
from django.shortcuts import render_to_response
from models import Book

# latest_books()函数叫做视图
def latest_books(request):
    book_list = Book.objects.order_by('-pub_date')[:10]
    return render_to_response('latest_books.html', {'book_list': book_list})
```

- urls.py (the URL configuration)
> 指出了什么样的 URL 调用什么的视图。 在这个例子中 /latest/ URL 将会调用 latest_books() 这个函数。 换句话说，如果你的域名是example.com，任何人浏览网址http://example.com/latest/将会调用latest_books()这个函数
```py
from django.conf.urls.defaults import *
import views

urlpatterns = patterns('',
    (r'^latest/$', views.latest_books),
)
```

- latest_books.html (the template)

> html 模板，它描述了这个页面的设计是如何的。 使用带基本逻辑声明的模板语言，如{% for book in book_list %}

```html
<html><head><title>Books</title></head>
<body>
<h1>Books</h1>
<ul>
{% for book in book_list %}
<li>{{ book.name }}</li>
{% endfor %}
</ul>
</body></html>
```

## 部署Django
[uwsgi官方文档](https://uwsgi-docs.readthedocs.io/en/latest/)

### 一、创建项目
```sh
$ django-admin.py startproject test_pro     # 创建项目
$ chmod +x django-admin.py      # 如果权限拒绝，运行此命令
$ django-admin startapp app1    # 创建应用
$ python manage.py runserver    # 启动服务，默认访问127.0.0.1:8000/url/
# 项目存放位置最好是根目录(root)之外的位置，因为放到根目录有使人通过网络看到源代码的风险
```
- uwsgi.ini
```
# plugins = python
py-autoreload = 2
```
### 二、python的两种安装组件的方法(通常两种都需要安装)
```
easy_install ：出现较早
pip ：pip是easy_install的改进版，提供了更好的提示信息
```
### 三、WEB服务器
```
web服务器是连接用户浏览器与python服务端程序的中间节点，目前主流的web服务器包括：Nginx、Apache、Lighthttpd、IIS等
WSGI：全称 Web Server Gateway Interface，wsgi是将python服务端程序连接到web服务器的通用协议，uwsgi和apache的mod_wsgi都是独立的wsgi程序。wsgi用于为python语言定义web服务器和服务器端程序的通用接口规范。
```
### 四、WSGI的接口分为两个

- 与web服务器的接口
- 与服务器端程序的接口


### 五、Nginx
- Nginx是由俄罗斯工程师开发的一个高性能HTTP和反向代理服务器
- 优点：运行稳定、配置简单、资源消耗低

Nginx的相关文件路径：
```sh
/etc/nginx/nginx.conf           # 全局配置文件
/var/log/nginx/access.log-日期   # 访问日志文件
/var/log/nginx/error.log-日期    # 错误日志文件
```
Nginx配置文件
```sh
$ vim /etc/nginx/nginx.conf
user  nginx;                # 定义运行Nginx的用户
worker_processes  1;        # Nginx的进行数，应设置与系统CPU数量相等的数值

error_log  /var/log/nginx/error.log warn;   # 错误日志文件路径
pid        /var/run/nginx.pid;              #

events {
    worker_connections  1024;               # 每个Nginx进行允许的最大客户端连接数
}

http {
    include       /etc/nginx/mime.types;        #
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;    # 访问日志文件路径名
    sendfile        on;             # 是否允许文件上传
    #tcp_nopush     on;             # 防止网络阻塞
    keepalive_timeout  65;          # 允许客户端长连接最大秒数
    #gzip  on;

    server {
        client_max_body_size 20M;       # nginx默认上传文件的上限是1M，修改为上限20M
    	listen       port;              # 配置站点监听的端口
    	server_name  IP地址;             # 站点监听的IP地址，可设置问localhost或者真实的IP地址
    	#charset koi8-r;

    	access_log  /data/项目名/logs/data.access.log  main;
    	error_log   /data/项目名/logs/data.error.log;

        # location用于配置URL的转发接口
    	location /static/ {
        	root   /data/项目名;
        	index  index.html index.htm;
    	}

    	location /项目名/ {
        	rewrite "^/项目名/(.*)$" /$1 last;
    	}

    	location / {
        	uwsgi_pass host:port;
                include uwsgi_params;
    	}

    	location /admin/ {
        	uwsgi_pass 127.0.0.1:8078;
        	include uwsgi_params;
    	}
    }

    include /etc/nginx/conf.d/*.conf;

}
```

### 六、uWSGI
安装
```sh
pip install uwsgi       # 安装
uwsgi  uwsgi.ini        # 启动uwsgi时，直接指定uwsgi.ini即可
```
编辑uWSGI.ini文件
```sh
[uwsgi]
socket = host:port     # 以WSGI的socket方式运行，并指定链接地址和端口    
master = true
processes = 4               # 指定服务器端程序的进程数

basedir = /data/项目名       #
chdir = %(basedir)          # 指定uWSGI启动后的当前目录
wsgi-file = common/wsgi.py  # 指定服务器端的程序名

uid = root                  # 指定用户隐形uWSGI的Linux用户ID
gid = root

pidfile = %(basedir)/logs/uwsgi-master.pid
daemonize = %(basedir)/logs/uwsgi-daemonize.log

# plugins = python
py-autoreload = 2
```

## Django字段类型清单
> 清单为网上复制的内容，未校验

| 字段 | 说明 |
| ---- | ---- |
| AutoField | 自动递增的整型字段，通常不需要指定 |
| BooleanField | 布尔字段 |
| CharField     | 字符串字段，单行输入，必填参数(max_length) |
| TextField     | 文本字段，容量大，多行编辑框    |
| CommaSeparatedIntegerField    | 存放逗号分隔的整数值，必填参数(max_length)   |
| DateField     | 日期字段，auto_now（对象保存时间）,auto_now_add（对象创建时间）  |
| DateTimeField     | 类似DateField，支持相同的选项   | 
| EmailField    | 带有Email合法性的CharField  |
| FileField     | 文件上传字段，详情如下 |
| FilePathField     | 选择指定目录按照限定规则选择文件，详情如下 |
| ImageField    | 图片上传字段，可选参数(height_field:高度，width_field:宽度) |
| FloatFIeld    | 浮点型，必填参数(max_digits：除小数点和符号外的总位数，decimal_places：小数点位数)   |
| IntegerFie    | 整数字段      |
| SmallIntegerField     | 小整型字段     |
| PositiveIntegerField  | 整数字段，且非负数     |
| PositiveSmallIntegerField     | 整数小整型字段    |
| IPAddressField    | 字符串类型的IP地址    |
| NullBooleanField  | 布尔类型，但是允许NULL作为其中一个选项（相当于BooleanField加 null=True）     |
| PhoneNumberField  | 合法美国风格的电话号码的CharField(格式：XXX-XXX-XXXX)    |
| SlugField     | 只包含字母、数字、下划线和连字符，通常用于URLs |
| TimeField     | 时间字段  |
| URLField      | 用于保存URL   |
| XMLField      | XML字符字段，校验值是否为合法XML的TextField，必填参数（schema_path：校验文本的 RelaxNG schema 的文件系统路径）|


## Field选项
- null ：缺省设置为false，通常不将其用于字符型字段上，字符型字段如果没有值会返回空字符串。
- blank：该字段是否可以为空。如果为假，则必须有值
- choices：一个用来选择值的2维元组。第一个值是实际存储的值，第二个用来方便进行选择。如SEX_CHOICES= ((‘F’,'Female’),(‘M’,'Male’),)
- core：db_column，db_index 如果为真将为此字段创建索引
- default：设定缺省值
- editable：如果为假，admin模式下将不能改写。缺省为真
- help_text：admin模式下帮助文档
- primary_key：设置主键，如果没有设置django创建表时会自动加上
- radio_admin：用于admin模式下将select转换为radio显示。只用于ForeignKey或者设置了choices
- unique：数据唯一
- unique_for_date：日期唯一，如下例中系统将不允许title和pub_date两个都相同的数据重复出现
- title = meta.CharField(maxlength=30,unique_for_date=’pub_date’)
- unique_for_month / unique_for_year：用法同上
- validator_list：有效性检查。非有效产生 django.core.validators.ValidationError 错误


## OAuth 第三方登录

- [理解OAuth 2.0](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
- [第三方账号登录](https://shenxgan.gitbooks.io/django/content/publish/2015-08-10-django-oauth-login.html)

### 一、OAuth 2.0的理解

> 摘自[第三方账号登录](https://shenxgan.gitbooks.io/django/content/publish/2015-08-10-django-oauth-login.html)

1. 点击第三方登录的按钮，发送请求。比如登录页面上的第三方图标
2. 用户输入了第三方的登录名和密码
3. 在第 2 步的时候，第三方会返回 code，此步就是通过这个 code 去获取 access token
4. 第三方确认无误，返回 access token
5. 根据获取的 access token 去获取用户的基本信息
6. 第三方确认无误，返回用户信息


### 二、Django实现
#### 1、申请github的Client ID和Client Secret

1. 登录github
- setting
- Developer settings
- new auth app
- 填写对应的信息 -> register applocation
- 注册成功后会返回Client ID和Client Secret

#### 2、获取code
> github_client_id为申请的client_id,redirect_url为申请是填写的redirect_url

```py
def ReLogin(request):
    '''
    第三方登录 - 授权码模式
    客户端申请认证的URI，通过HttpResponseRedirect(url)使服务器回应客户端带code的URI
    :param request: 
    :return: 
    '''
    params = {'client_id': github_client_id,
              'response_type': 'code',
              'redirect_uri': redirect_url,
              'state': 'xyz'}
    url = '%s?%s' % ('https://github.com/login/oauth/authorize', urllib.urlencode(params))
    return HttpResponseRedirect(url)
```

#### 3、获取access_token，并通过access_token访问服务端数据

```py
def index(request):
    '''
    获取服务端回应的code和state
    :param request: 
    :return: 
    '''
    request_code = request.GET.get('code')
    state = request.GET.get('state') or '/'
    print request_code, state

    # 通过传入code，获取access_token
    url = 'https://github.com/login/oauth/access_token'
    data = {
        'grant_type': 'authorization_code',
        'client_id': github_client_id,
        'client_secret': github_client_secret,
        'code': request_code,
        'redirect_uri': redirect_url,
    }
    data = urllib.urlencode(data)
    req = urllib2.Request(url, data, headers={'Accept': 'application/json'})
    response = urllib2.urlopen(req)
    result = response.read()
    result = json.loads(result)
    # print result
    # --------------------------
    # 通过传入access_token，访问服务端数据
    access_token = result.get("access_token", "")
    token_type = result.get("token_type", "")
    token_url = 'https://api.github.com/user?access_token=%s' % (access_token)
    token_response = urllib2.urlopen(token_url)
    html = token_response.read()
    data = json.loads(html)
    # print data
    return render_to_response('index.html', locals())
```
