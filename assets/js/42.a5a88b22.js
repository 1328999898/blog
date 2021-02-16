(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{364:function(a,s,t){"use strict";t.r(s);var n=t(18),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"scala和spark的安装-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scala和spark的安装-mac"}},[a._v("#")]),a._v(" scala和spark的安装(MAC)")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：Scala是基于java之上，大量使用java的类库和变量，必须使用Scala之前必须先安装Java JDK（>1.5版本）。")])]),a._v(" "),t("h2",{attrs:{id:"一、下载安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、下载安装包"}},[a._v("#")]),a._v(" 一、下载安装包")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("java JDK8"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.scala-lang.org/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("scala-2.12.5.tgz"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.apache.org/dyn/closer.lua/spark/spark-2.3.0/spark-2.3.0-bin-hadoop2.7.tgz",target:"_blank",rel:"noopener noreferrer"}},[a._v("spark-2.3.0-bin-hadoop2.7.tgz"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.jetbrains.com/idea/download/#section=mac",target:"_blank",rel:"noopener noreferrer"}},[a._v("scala编辑器"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"二、安装并配置scala的环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、安装并配置scala的环境变量"}},[a._v("#")]),a._v(" 二、安装并配置scala的环境变量")]),a._v(" "),t("p",[a._v("1.安装Java SDK8")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装jdk-8u171-nb-8_2-macosx-x64.dmg")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检测是否安装了Java")]),a._v("\n$ java -version\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检测是否安装了Java编译器")]),a._v("\n$ javac -version\n")])])]),t("p",[a._v("2.解压文件")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf scala-2.12.5.tgz\n")])])]),t("p",[a._v("3.配置环境变量")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果未安装zsh，编辑~/.bash_profile文件，如果安装了zsh，编辑~/.zshrc文件")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" .zshrc\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SCALA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/path/scala-2.12.5"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SCALA_HOME")]),a._v('/bin"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使配置文件生效")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.zshrc\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 测试 - 输入scala进入命令行, :q或:quit退出命令行")]),a._v("\n$ scala\n")])])]),t("h2",{attrs:{id:"三、安装并配置spark的环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、安装并配置spark的环境变量"}},[a._v("#")]),a._v(" 三、安装并配置spark的环境变量")]),a._v(" "),t("p",[a._v("1.解压文件")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 解压文件")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf spark-2.3.0-bin-hadoop2.7.tgz\n")])])]),t("p",[a._v("2.配置环境变量")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" .zshrc\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPARK_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/path/spark-2.3.0-bin-hadoop2.7"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SPARK_HOME")]),a._v('/bin"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使配置文件生效")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.zshrc\n")])])]),t("p",[a._v("3.修改spark-env.sh")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 默认conf文件下只有spark-env.sh.template")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" conf\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" spark-env.sh.template spark-env.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改spark的环境变量")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" spark-env.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SCALA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/scala-2.12.5\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPARK_MASTER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPARK_WORKER_MEMORY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1g\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检测是否安装成功")]),a._v("\n$ spark-shell\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);