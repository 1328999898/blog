(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{346:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[s._v("#")]),s._v(" ORACLE")]),s._v(" "),a("h2",{attrs:{id:"一-查询表结构信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-查询表结构信息"}},[s._v("#")]),s._v(" 一.查询表结构信息")]),s._v(" "),a("ul",[a("li",[s._v("user_tab_columns：视图列出了特定于表的信息")]),s._v(" "),a("li",[s._v("all_tab_columns：系统视图，说明数据库中所有表的字段结构内容")]),s._v(" "),a("li",[s._v("all_col_columns：系统视图，说明数据库中所有列的字段结构内容")]),s._v(" "),a("li",[s._v("user_tables：查询当前用户下所有的表")]),s._v(" "),a("li",[s._v("all_tables：查询所有用户下的表")]),s._v(" "),a("li",[s._v("dba_tables：查询包括系统表的所有表")]),s._v(" "),a("li",[s._v("user_tab_commnents：查询表的备注信息")]),s._v(" "),a("li",[s._v("user_col_comments：查询列的备注信息")]),s._v(" "),a("li",[s._v("user_tablespace：查询所有表空间")]),s._v(" "),a("li",[s._v("user_indexes：系统视图，存放的是索引的名称以及该索引是否是唯一索引等信息")]),s._v(" "),a("li",[s._v("user_ind_column：系统视图，存放的是索引名称，对应的表和列等。")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_tab_columns "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" table_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TEST_1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_tab_comments "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" TABLE_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_tab_commnents "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" TABLE_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"二-函数的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-函数的用法"}},[s._v("#")]),s._v(" 二.函数的用法")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("DECODE函数的用法")]),s._v(" "),a("p",[s._v("DECODE函数相当于一条IF语句，它将输入数值与函数中的参数列表相比较，根据输入值返回一个对应值。DECODE还能识别和操作空值。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("DECODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("input_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("default_result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("截取日期")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("year")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前日期的年")]),s._v("\nextract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前日期的月")]),s._v("\nextract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前日期的日 ")]),s._v("\nlast_day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前月份的最后一天")]),s._v("\nadd_months"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前月份加上3个月")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("日期的转换")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("to_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Month DD YYYY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nto_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MM DD YYYY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nto_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nto_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sysdate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nto_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23542")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$99,999.99'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("instr函数")]),s._v(" "),a("p",[s._v("返回要查找的字符串在源字符串中的位置，索引位置从1开始，如果没有找到，instr函数返回0.\ninstr('源字符串','要查找的字符串','开始查找的位置','要查找的字符串第几次出现')")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("例：instr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ABC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n区别："),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"三-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-区别"}},[s._v("#")]),s._v(" 三.区别")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("truncate,delete,drop之间的区别")]),s._v(" "),a("ul",[a("li",[s._v("truncate table：删除内容，释放空间，但不删除定义，删除的数据不能恢复。")]),s._v(" "),a("li",[s._v("delete table：删除内容，不删除定义，不释放表空间，删除的数据可恢复。")]),s._v(" "),a("li",[s._v("drop table：删除内容和定义，释放表空间。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("备注：\ntruncate table 比delete table 速度快，且使用的系统和事务日志资源少，delete语句每次删除一行，并在事务日志中为所删除的每行记录一项。\ntruncate table 通过释放存储表数据所用的数据页来删除数据，并且只有在事务日志中记录页的释放\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"四-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-操作"}},[s._v("#")]),s._v(" 四.操作")]),s._v(" "),a("ul",[a("li",[s._v("解锁用户并设定密码"),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" 用户名 account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unlock")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" 密码"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[s._v("sqlplus连接数据库"),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("sqlplus 用户名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("密码@数据库名\n")])])])]),s._v(" "),a("li",[s._v("为表添加备注"),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'备注'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("列名 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'备注'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[s._v("建表"),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ids number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" tast_ccc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id2 number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加列")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" test_ccc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除列")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"sql排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql排序"}},[s._v("#")]),s._v(" SQL排序")]),s._v(" "),a("h3",{attrs:{id:"_1、row-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、row-number"}},[s._v("#")]),s._v(" 1、row_number")]),s._v(" "),a("p",[s._v("row_number() over() 用于按顺序排序（不并列）")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       row_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" ds "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" rn\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" TABLE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2、rank"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、rank"}},[s._v("#")]),s._v(" 2、rank")]),s._v(" "),a("p",[s._v("rank() over() 用于并列排序（不按顺序、按照整体排名）")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       rank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" ds "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" rn\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" TABLE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"_3、dense-rank"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、dense-rank"}},[s._v("#")]),s._v(" 3、dense_rank")]),s._v(" "),a("p",[s._v("dense_rank() 用于并列排序（按顺序）")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       dense_rank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" ds "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" rn\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" TABLE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);