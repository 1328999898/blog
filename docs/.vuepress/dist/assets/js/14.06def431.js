(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{335:function(a,t,s){"use strict";s.r(t);var e=s(18),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"dhfs基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dhfs基础"}},[a._v("#")]),a._v(" DHFS基础")]),a._v(" "),s("blockquote",[s("p",[a._v("DHFS（Hadoop Distributed File System）Hadoop分布式文件系统")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qianshangding0708/article/details/47395783",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn常用命令"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看目录下文件")]),a._v("\nhdfs dfs -ls 文件路径\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看文件内容")]),a._v("\nhdfs dfs -tail 文件\nhdfs dfs -cat 文件 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -行数\n")])])]),s("h2",{attrs:{id:"yarn-application命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-application命令"}},[a._v("#")]),a._v(" yarn application命令")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" application -list\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 过滤应用程序的状态： ALL, NEW, NEW_SAVING, SUBMITTED, ACCEPTED, RUNNING, FINISHED, FAILED, KILLED")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" application -appStates FINISHED -list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -2\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" application -kill application_id\n")])])]),s("h2",{attrs:{id:"hdfs特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hdfs特点"}},[a._v("#")]),a._v(" HDFS特点")]),a._v(" "),s("ul",[s("li",[a._v("运行在廉价的机器上")]),a._v(" "),s("li",[a._v("保存多个副本，且提供容错机制，副本丢失或宕机自动恢复，默认存3份。")]),a._v(" "),s("li",[a._v("适合大数据的处理，HDFS默认会将文件分割成Block，将Block按键值对存储在HDFS上，并将键值对的映射存入内存，如果小文件太多，内存的负担就会很重。")])]),a._v(" "),s("h2",{attrs:{id:"block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[a._v("#")]),a._v(" Block")]),a._v(" "),s("ul",[s("li",[a._v("磁盘的Block\n"),s("ul",[s("li",[a._v("是磁盘读/写数据的最小单位")]),a._v(" "),s("li",[a._v("磁盘块一般为512字节(byte)")]),a._v(" "),s("li",[a._v("文件系统的块通常是磁盘块的整数倍。文件系统的块一般为几千字节(byte)")])])]),a._v(" "),s("li",[a._v("HDFS的Block\n"),s("ul",[s("li",[a._v("HDFS中的Block是一个很大的单元")]),a._v(" "),s("li",[a._v("默认是64MB")]),a._v(" "),s("li",[a._v("当HDFS上的文件小于块大小时，则占用实际的文件大小，而非一个块的大小")])])])]),a._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[a._v("#")]),a._v(" 说明")]),a._v(" "),s("ul",[s("li",[a._v("热备份：b是a的热备份，如果a坏掉。那么b马上运行代替a的工作。")]),a._v(" "),s("li",[a._v("冷备份：b是a的冷备份，如果a坏掉。那么b不能马上代替a工作。但是b上存储a的一些信息，减少a坏掉之后的损失。")]),a._v(" "),s("li",[a._v("fsimage：元数据镜像文件（文件系统的目录树。）")]),a._v(" "),s("li",[a._v("edits：元数据的操作日志（针对文件系统做的修改操作记录）")]),a._v(" "),s("li",[a._v("NameNode\n"),s("ul",[s("li",[a._v("Master节点")]),a._v(" "),s("li",[a._v("管理数据块映射")]),a._v(" "),s("li",[a._v("处理客户端的读写请求")]),a._v(" "),s("li",[a._v("配置副本策略")]),a._v(" "),s("li",[a._v("管理HDFS的名称空间")]),a._v(" "),s("li",[a._v("内存中存储的是=fsimage+edits。")])])]),a._v(" "),s("li",[a._v("SecondaryNameNode\n"),s("ul",[s("li",[a._v("分担namenode的工作量")]),a._v(" "),s("li",[a._v("是NameNode的冷备份")]),a._v(" "),s("li",[a._v("定时默认1小时，从namenode上获取fsimage和edits来进行合并再发给namenode。")])])]),a._v(" "),s("li",[a._v("DataNode\n"),s("ul",[s("li",[a._v("Slave节点")]),a._v(" "),s("li",[a._v("负责存储client发来的数据块block")]),a._v(" "),s("li",[a._v("执行数据块的读写操作。")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);