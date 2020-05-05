(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{345:function(t,n,s){"use strict";s.r(n);var a=s(18),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[t._v("#")]),t._v(" Nginx配置")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("资料1"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.oschina.net/translate/nginx-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("资料2"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.ha97.com/5194.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("资料3"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"顶级配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顶级配置"}},[t._v("#")]),t._v(" 顶级配置")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义 Nginx 运行的用户和用户组")]),t._v("\nuser nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进程文件,刚安装的时候没有，在启动nginx时自动生成的,里面存放的是当前nginx进程的ID号")]),t._v("\npid /var/run/nginx.pid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx的结束重启命令,其中26000是nginx的主进程号：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -QUIT "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 错误日志位置和级别，debug、info、notice、warn、error、crit,默认为crit")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明：crit 记录的日志最少，而debug记录的日志最多")]),t._v("\nerror_log  /var/log/nginx/error.log warn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx worker 的进程数，一般可设置为可用的CPU内核数。")]),t._v("\nworker_processes "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个 worker 打开文件描述符的最大数量限制。理论值应该是最多打开文件数（系统的值ulimit -n）与 nginx 进程数相除，但是 nginx 分配请求并不均匀，所以建议与ulimit -n的值保持一致。")]),t._v("\nworker_rlimit_nofile "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65535")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("修改系统文件打开数量限制")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("events "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置一个worker进程同时打开的最大连接数")]),t._v("\n    worker_connections "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#告诉nginx收到一个新连接通知后接受尽可能多的连接")]),t._v("\n    multi_accept on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置用于复用客户端线程的轮询方法。如果你使用Linux ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6")]),t._v("+，你应该使用epoll。如果你使用*BSD，你应该使用kqueue。\n    use epoll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("重启后永久生效，则需要设置修改：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/security/limits.conf\n")])])]),s("p",[t._v("在文件尾部添加：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("* soft nofile "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000")]),t._v("\n* hard nofile "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000")]),t._v("\n")])])]),s("p",[t._v("include")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# include  /etc/nginx/mime.types;")]),t._v("\ninclude 是一个在当前文件中包含另一个文件内容的指令。这里我们使用它来加载文件扩展名与文件类型映射表。nginx根据映射关系，设置http请求响应头的Content-Type值。当在映射表找不到时，使用nginx.conf中default-type指定的默认值。\n")])])]),s("h2",{attrs:{id:"events-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events-模块"}},[t._v("#")]),t._v(" Events 模块")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("events "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置一个worker进程同时打开的最大连接数")]),t._v("\n    worker_connections "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#告诉nginx收到一个新连接通知后接受尽可能多的连接")]),t._v("\n    multi_accept on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置用于复用客户端线程的轮询方法。如果你使用Linux 2.6+，你应该使用epoll。如果你使用*BSD，你应该使用kqueue。")]),t._v("\n    use epoll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"http-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-模块"}},[t._v("#")]),t._v(" HTTP 模块")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("http "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#隐藏 Nginx 的版本号，提高安全性。")]),t._v("\n    server_tokens off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开启高效文件传输模式，sendfile 指令指定 Nginx 是否调用sendfile 函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的负载。")]),t._v("\n    sendfile on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#是否开启目录列表访问，默认关闭。")]),t._v("\n    autoindex off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#告诉 Nginx 在一个数据包里发送所有头文件，而不一个接一个的发送")]),t._v("\n    tcp_nopush on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#告诉 Nginx 不要缓存数据，而是一段一段的发送--当需要及时发送数据时，就应该给应用设置这个属性，这样发送一小块数据信息时就不能立即得到返回值。Nginx 默认会始终工作在 tcp nopush 状态下。但是当开启前面的 sendfile on; 时，它的工作特点是 nopush 的最后一个包会自动转转换到 nopush off。为了减小那200ms的延迟，开启 nodelay on; 将其很快传送出去。结论就是 sendfile on; 开启时，tcp_nopush 和 tcp_nodelay 都是on 是可以的。")]),t._v("\n    tcp_nodelay on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#日志格式设定")]),t._v("\n    log_format  main  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" - "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_user")]),t._v(" ["),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v('] "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\" '")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(' "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v("\" '")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v('" "'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_x_forwarded_for")]),t._v("\"'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义访问日志，设置为 off 可以关闭日志，提高性能")]),t._v("\n    access_log /var/log/nginx/access.log main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#连接超时时间，单位是秒")]),t._v("\n    keepalive_timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#读取HTTP头部的超时时间，默认值 60。客户端与服务器建立连接后将开始接收HTTP头部，在这个过程中，如果在一个时间间隔（超时时间）内没有读取到客户端发来的字节，则认为超时，并向客户端返回408 ("Request timed out")响应。')]),t._v("\n    client_header_timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认值 60。与client_header_timeout相似，只是这个超时时间只在读取HTTP包体时才有效。")]),t._v("\n    client_body_timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#发送响应的超时时间，默认值 60。即Nginx服务器向客户端发送了数据包，但客户端一直没有去接收这个数据包。如果某个连接超过send_timeout定义的超时时间，那么Nginx将会关闭这个连接。")]),t._v("\n    send_timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#连接超时后将通过向客户端发送RST包来直接重置连接。这个选项打开后，Nginx会在某个连接超时后，不是使用正常情形下的四次握手关闭TCP连接，而是直接向用户发送RST重置包，不再等待用户的应答，直接释放Nginx服务器上关于这个套接字使用的所有缓存（如TCP滑动窗口）。相比正常的关闭方式，它使得服务器避免产生许多处于FIN_WAIT_1、FIN_WAIT_2、TIME_WAIT状态的TCP连接。注意，使用RST重置包关闭连接会带来一些问题，默认情况下不会开启。")]),t._v("\n    reset_timedout_connection off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#要限制连接，必须先有一个容器对连接进行计数，"zone=" 是给它一个名字，可以随便叫，这个名字要跟下面的 limit_conn 一致。$binary_remote_addr 用二进制来储存客户端的地址，1m 可以储存 32000 个并发会话。')]),t._v("\n    limit_conn_zone "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("addr:5m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#给定的key设置最大连接数。这里key是addr，我们设置的值是100，也就是说我们允许每一个IP地址最多同时打开有100个连接。")]),t._v("\n    limit_conn addr "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对每个连接限速100k。这如果一个IP允许两个并发连接，那么这个IP就是限速200K。")]),t._v("\n    limit_rate 100k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#include 是一个在当前文件中包含另一个文件内容的指令。这里我们使用它来加载文件扩展名与文件类型映射表。nginx根据映射关系，设置http请求响应头的Content-Type值。当在映射表找不到时，使用nginx.conf中default-type指定的默认值。")]),t._v("\n    include /etc/nginx/mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置文件使用的默认的MIME-type")]),t._v("\n    default_type text/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认编码")]),t._v("\n    charset UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#该模块可以读取预先压缩的gz文件，这样可以减少每次请求进行gzip压缩的CPU资源消耗。该模块启用后，nginx首先检查是否存在请求静态文件的gz结尾的文件，如果有则直接返回该gz文件内容。")]),t._v("\n    gzip_static off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开启 gzip 压缩。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁用客户端为 IE6 时的 gzip功能。")]),t._v("\n    gzip_disable "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msie6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Nginx做为反向代理的时候启用。可选值：off|expired|no-cache|no-sotre|private|no_last_modified|no_etag|auth|any")]),t._v("\n    gzip_proxied any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置允许压缩的页面最小字节数，页面字节数从header头中的Content-Length中进行获取。建议设置成大于1k的字节数，小于1k可能会越压越大。")]),t._v("\n    gzip_min_length "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置数据的压缩等级。这个等级可以是1-9之间的任意数值，9是最慢但是压缩比最大的。")]),t._v("\n    gzip_comp_level "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置系统获取几个单位的缓存用于存储gzip的压缩结果数据流。 例如 4 4k 代表以4k为单位，按照原始数据大小以4k为单位的4倍申请内存。如果没有设置，默认值是申请跟原始数据相同大小的内存空间去存储gzip压缩结果。")]),t._v("\n    gzip_buffers "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" 16k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置需要压缩的数据格式。Nginx默认只对text/html进行压缩。")]),t._v("\n    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为打开文件指定缓存，默认是没有启用的，max 指定缓存数量，建议和打开文件数一致，inactive 是指经过多长时间文件没被请求后删除缓存。")]),t._v("\n    open_file_cache "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65535")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("inactive")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("30s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#多长时间检查一次缓存的有效信息")]),t._v("\n    open_file_cache_valid 30s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#open_file_cache指令中的inactive参数时间内文件的最少使用次数，如果超过这个数字，文件描述符一直是在缓存中打开的。出现 Last-Modified 不变的情况，就是因为当nginx对一个静态文件缓存后，如果30s内还在访问它，那么它的缓存就一直存在，直到30s内你不访问了为止。")]),t._v("\n    open_file_cache_min_uses "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#是否记录cache错误")]),t._v("\n    open_file_cache_errors on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    include /etc/nginx/conf.d/*.conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    include /etc/nginx/sites-enabled/*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"server-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-模块"}},[t._v("#")]),t._v(" SERVER 模块")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#监听端口，nginx 会根据请求的 HOST 来决定使用哪个 SERVER 段的配置。如果没有匹配的 server_name，则默认使用配置文件中第一个。加上 default_server 则可以以指定没有匹配时的默认规则。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#listen 80;")]),t._v("\n    listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#域名可以有多个，用空格隔开")]),t._v("\n    server_name www.test.com test.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root /user/share/nginx/html/test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#404页面配置")]),t._v("\n    error_page   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("   /404.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置 ssl，有需要时开启。")]),t._v("\n    ssl on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_certificate /etc/nginx/ssl/server.crt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_certificate_key /etc/nginx/ssl/server.key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        index   index.html index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#图片缓存时间设置")]),t._v("\n    location ~ .*."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gif"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("bmp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("swf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        expires 10d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#JS和CSS缓存时间设置")]),t._v("\n    location ~ .*."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("?$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        expires 1h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    location ~ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("^/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fastcgi_index   index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开启 PATH_INFO 支持，作用就是把参数按照给定的正则表达式分割成 $fastcgi_script_name 和 $fastcgi_path_info。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#例如：请求 index.php/id/1 不加此行配置时，fastcgi_script_name 是 /index.php/id/1，fastcgi_path_info 是空。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#加上之后，fastcgi_script_name 是 index.php，fastcgi_path_info 是 /id/1")]),t._v("\n        fastcgi_split_path_info ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#此值即是 PHP 中 $_SERVER['SCRIPT_FILENAME'] 的值")]),t._v("\n        fastcgi_param   SCRIPT_FILENAME "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_script_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_param   PATH_INFO               "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_path_info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_param   PATH_TRANSLATED "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_path_info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定FastCGI服务器监听端口与地址。须和 PHP-FPM 的设置相同。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#fastcgi_pass   127.0.0.1:9000;")]),t._v("\n        fastcgi_pass    unix:/var/run/php5-fpm.sock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        include fastcgi_params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"其他配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他配置"}},[t._v("#")]),t._v(" 其他配置")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# access.log")]),t._v("\nserver段不指定access_log时，并且http段中也未指定任何access_log参数时，它会默认写到logs/access.log这个文件，也就是access_log默认值就是”logs/access.log”\nmain 是日志定义格式。\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);