(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{411:function(s,t,n){"use strict";n.r(t);var e=n(18),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"前端性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化"}},[s._v("#")]),s._v(" 前端性能优化")]),s._v(" "),n("p",[s._v("CRP：是一种思想，相当于在关键节点上做一些优化")]),s._v(" "),n("p",[s._v("HSTS\nDNS解析：一般20~120ms")]),s._v(" "),n("p",[s._v("一、DOM解析优化")]),s._v(" "),n("ol",[n("li",[s._v("标签语义化")]),s._v(" "),n("li",[s._v("避免多级嵌套，最好在3-4级\n二、加载CSS\n注意：style不发送http请求")]),s._v(" "),n("li",[s._v("选择器层级问题")]),s._v(" "),n("li",[s._v("尽可能少写选择器层级")])]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 回流和重绘")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选择器都是从右向左的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// css预编译器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sass：问题  很多人滥用层级嵌套")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 预编译期的层级嵌套要慎用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// link是发送一个HTTP请求，异步发送请求")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主线程是自上而下请求")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// http 可以同时发送6-7个请求")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// DOM树优于CSS加载")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @import是同步发送请求")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 真实项目中应该减少@import这种同步请求，尽可能不用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// style的css 是和第一次拿到html的时候一起拿回来的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// style会比link更好一点，前提是style的样式不多，如果多的时候，会影响DOM树的拉取时间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// link需要写到头部")]),s._v("\n\njs默认都是阻塞的\njs 放到body底部\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// script 默认是阻塞的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// script async 拉回来之后立即渲染,不关注依赖")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// script defer 渲染完DOM之后，统一渲染script，关注依赖")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果以后，我们修改了元素的位置和结构等，我们需要重新计算视口的位置和大小")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 元素的样式改变：")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 减少回流，减少DOM操作")]),s._v("\ndns解析\n"),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("本地解析")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" 其他地方解析\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// dns提前预解析")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 内存缓存 更快")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 硬盘缓存 存储东西多")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 强缓存和协商缓存 都是针对文件的")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务器主动推送，可以在不刷新页面的情况下更新页面")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);