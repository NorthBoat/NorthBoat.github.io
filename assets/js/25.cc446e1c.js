(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1225:function(s,t,a){s.exports=a.p+"assets/img/image-20230703184754458.7a457d20.png"},1226:function(s,t,a){s.exports=a.p+"assets/img/image-20230703190237078.e81e15e0.png"},1227:function(s,t,a){s.exports=a.p+"assets/img/image-20230703190443358.08f0d9fd.png"},1228:function(s,t,a){s.exports=a.p+"assets/img/image-20230703192534390.93c4882d.png"},1229:function(s,t,a){s.exports=a.p+"assets/img/image-20230703192728759.88d19e06.png"},1230:function(s,t,a){s.exports=a.p+"assets/img/image-20230703192851201.af971260.png"},1231:function(s,t,a){s.exports=a.p+"assets/img/image-20230703192905323.2e193284.png"},1232:function(s,t,a){s.exports=a.p+"assets/img/image-20230705002649395.5d7b5f0d.png"},1233:function(s,t,a){s.exports=a.p+"assets/img/image-20230704224233826.06b7c113.png"},1234:function(s,t,a){s.exports=a.p+"assets/img/image-20230705001347898.7bac63e8.png"},1235:function(s,t,a){s.exports=a.p+"assets/img/image-20230704224329592.2d8461c5.png"},1236:function(s,t,a){s.exports=a.p+"assets/img/image-20230705001049916.6d94c35f.png"},1237:function(s,t,a){s.exports=a.p+"assets/img/image-20230705001232422.2064b15e.png"},1238:function(s,t,a){s.exports=a.p+"assets/img/image-20230705001249299.985a1169.png"},1239:function(s,t,a){s.exports=a.p+"assets/img/image-20230705000930157.33301233.png"},1240:function(s,t,a){s.exports=a.p+"assets/img/image-20230705000951232.5a1dc961.png"},1241:function(s,t,a){s.exports=a.p+"assets/img/image-20230705001832792.dba1d37c.png"},1242:function(s,t,a){s.exports=a.p+"assets/img/image-20230705002538903.6d109e6d.png"},1669:function(s,t,a){"use strict";a.r(t);var i=a(1),v=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"传输层功能"}},[s._v("传输层功能")]),s._v(" "),t("p",[s._v("传输层只在资源子网，即互联网的边缘部分存在，核心部分的通讯只依靠于下三层网络协议，下三层的传输在前面的总结中已经说的很清楚了，已经完全支持数据在网络之间的定向传输（之事不可靠）")]),s._v(" "),t("h2",{attrs:{id:"udp"}},[s._v("UDP")]),s._v(" "),t("p",[s._v("在数据部分前添加首部 8B")]),s._v(" "),t("img",{attrs:{src:a(1225)}}),s._v(" "),t("p",[s._v("在 IP 分组的基础上加入端口功能，将连接的主体由主机细化到进程，注意这里的虽然是在“基础上”，但其功能的实现在数据报的“内部”，即 IP 分组拆开后，识别到 UDP 首部，才可实现这里的分用功能")]),s._v(" "),t("p",[s._v("注意：实现分用的是目的端口，实现复用的是源端口")]),s._v(" "),t("h2",{attrs:{id:"tcp"}},[s._v("TCP")]),s._v(" "),t("h3",{attrs:{id:"首部格式和功能"}},[s._v("首部格式和功能")]),s._v(" "),t("p",[s._v("首部长度和 IP 分组的长度设计完全一致，首部以 4B 为单位计量，总长度按字节为单位")]),s._v(" "),t("ul",[t("li",[s._v("固定长度 20B")]),s._v(" "),t("li",[s._v("可变长度 0-40B")])]),s._v(" "),t("p",[s._v("也就是说 TCP 报文和 IP 分组的首部长度一定在 20-60B 之间，整个 TCP 数据报的最大长度为 65535B（IP 分组同理）")]),s._v(" "),t("p",[s._v("TCP 提供可靠的全双工信道")]),s._v(" "),t("ul",[t("li",[s._v("可靠指无差错、不丢失、不重复且有序：通过序号、确认和重传实现")]),s._v(" "),t("li",[s._v("全双工信道其实可以理解为两条信道，这在释放连接的时候显得十分明显，即发送端发送一个 FIN 只代表自身不发送（但可接收），只有当两端均发送了 FIN 且被确认后，这条全双工信道才被销毁")])]),s._v(" "),t("p",[s._v("MSS（Max Segment Size）：指一个数据报的最大的总长度")]),s._v(" "),t("p",[s._v("RTT（Round Trip Time）：指一次发送和一次确认的时间，即数据报的一次往返时间")]),s._v(" "),t("p",[s._v("TCP 重要的首部字段")]),s._v(" "),t("ul",[t("li",[s._v("序号：表示当前传输的 TCP 报文数据部分的字节起始序号")]),s._v(" "),t("li",[s._v("确认号（ack）：表示期望收到的下一个数据字节序号")]),s._v(" "),t("li",[s._v("确认位（ACK）：标志确认号的有效，当 ACK = 0 时，确认号无效")]),s._v(" "),t("li",[s._v("终止位（FIN）：用以终止连接，表示当前端口停止发送数据")]),s._v(" "),t("li",[s._v("同步位（SYN）：当连接愿意建立后 SYN 始终为 1，只有 SYN = 1 时数据才能被正常传输")]),s._v(" "),t("li",[s._v("窗口：指明当前端的接收窗口大小，参与限制发送窗口的大小（流量控制）")])]),s._v(" "),t("h3",{attrs:{id:"连接的建立和释放"}},[s._v("连接的建立和释放")]),s._v(" "),t("p",[s._v("首部中，序号和确认号，确认位、终止位和开始位，一起合作控制 TCP 连接的建立和释放")]),s._v(" "),t("ul",[t("li",[s._v("确认号传输的是序号，指明下一个想要收到的数据报文的起始序号")])]),s._v(" "),t("p",[s._v("三次握手")]),s._v(" "),t("img",{attrs:{src:a(1226)}}),s._v(" "),t("p",[s._v("注意每个站点的 seq 都是独立的，即互不影响，在建立连接时，二者开始的 seq 几乎也是随意取值，只是注意确认报文的确认号一定和上一条收到的报文的序号以及有效数据长度有关")]),s._v(" "),t("p",[s._v("这里两个 seq 实际上可以视作两条信道的有序保持者，seq1 保证 A 到 B 的数据报有序，seq2 保证 B 到 A 的数据报有序")]),s._v(" "),t("ul",[t("li",[s._v("这里的时间名称记一下，有个印象，考过")])]),s._v(" "),t("p",[s._v("四次挥手：双方主动告知对方自己不再发送数据，当双方均确认对方不再发送数据后，连接断开")]),s._v(" "),t("img",{attrs:{src:a(1227)}}),s._v(" "),t("p",[s._v("同样的，这里的时间段名称也留个印象，主动关闭的主机发送最后一个确认信号后将等待两个 MSL 后才关闭")]),s._v(" "),t("p",[s._v("MSL（Max Segment Life）：数据报最大的存活时间")]),s._v(" "),t("img",{attrs:{src:a(1228)}}),s._v(" "),t("h3",{attrs:{id:"流量控制"}},[s._v("流量控制")]),s._v(" "),t("p",[s._v("流量控制和拥塞控制的区别，流量控制是针对端和端来说的，由接收方单纯的控制发送方，并不会影响到其他的端口；而拥塞控制是针对整个网络而言，即出现拥塞不单单是当前 TCP 连接的两端的问题，也就是说，当网络出现拥塞，每个连接都将无法幸免")]),s._v(" "),t("p",[s._v("其控制的原理基本相同：通过限制发送方的流量，降低信道（网络）拥塞程度，流量控制把发送方窗口锁死，而拥塞控制动态的调整发送窗口大小")]),s._v(" "),t("h3",{attrs:{id:"拥塞控制"}},[s._v("拥塞控制")]),s._v(" "),t("blockquote",[t("p",[s._v("慢开始，拥塞避免 —— 基于冗余 ACK ——> 快重传，快恢复")])]),s._v(" "),t("p",[s._v("首先要明确的是\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mtext",[s._v("发送窗口")]),t("mo",[s._v("=")]),t("mi",[s._v("m")]),t("mi",[s._v("i")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v("{")]),t("mtext",[s._v("接收窗口")]),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mtext"),t("mtext",[s._v("拥塞窗口")]),t("mo",{attrs:{stretchy:"false"}},[s._v("}")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\n发送窗口 = min\\{接收窗口,\\,拥塞窗口\\}\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),t("span",{staticClass:"mord cjk_fallback"},[s._v("发送窗口")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("min")]),t("span",{staticClass:"mopen"},[s._v("{")]),t("span",{staticClass:"mord cjk_fallback"},[s._v("接收窗口")]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord cjk_fallback"},[s._v("拥塞窗口")]),t("span",{staticClass:"mclose"},[s._v("}")])])])])])])],1),s._v("\ncwnd（Congestion Window）：拥塞窗口")]),s._v(" "),t("p",[s._v("慢开始：慢指的是 cwnd 大小从 1 开始，但他是指数增长的，每经过一轮 RTT，他的窗口大小将乘以 2（没经过一个数据报的确认，窗口大小 +1，每个 RTT 将有 cwnd 个数据报被确认）")]),s._v(" "),t("p",[s._v("拥塞避免：维护一个阈值 ssthresh（手动初始化），当 cwnd 达到 ssthresh 后，每轮 RTT 后，cwnd 增加一个（在时间轴上线性增长）")]),s._v(" "),t("p",[s._v("当碰到拥塞时（确认报超时），将 ssthresh 降为 cwnd 的二分之一，同时将 cwnd 置为，开始慢开始算法")]),s._v(" "),t("ul",[t("li",[s._v("会碰到这样的情况，如"),t("code",[s._v("ssthresh = 6, cwnd = 4")]),s._v("，根据慢开始算法，下一轮 RTT 时，cwnd 应乘以 2 为 8，但这里统一认为 cwnd 始终不会超过 ssthresh，故下一轮 cwnd = 6，然后开始执行拥塞避免算法")])]),s._v(" "),t("p",[s._v("冗余确认：当发送方连续收到三个确认号一样的数据报时，即认为发生了冗余确认，我们认为此时网络发生了拥塞或传输出现了错误")]),s._v(" "),t("p",[s._v("快重传：当发生冗余确认后，无需等待超时，直接重发三个冗余确认中携带的确认号序号的数据报文，从这个中断点开始有序传输")]),s._v(" "),t("p",[s._v("快恢复：在拥塞避免算法遇到拥塞时，有\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mi",[s._v("s")]),t("mi",[s._v("s")]),t("mi",[s._v("t")]),t("mi",[s._v("h")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("s")]),t("mi",[s._v("h")]),t("mo",[s._v("=")]),t("mfrac",[t("mrow",[t("mi",[s._v("c")]),t("mi",[s._v("w")]),t("mi",[s._v("n")]),t("mi",[s._v("d")])],1),t("mn",[s._v("2")])],1),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mi",[s._v("c")]),t("mi",[s._v("w")]),t("mi",[s._v("n")]),t("mi",[s._v("d")]),t("mo",[s._v("=")]),t("mn",[s._v("1")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nssthresh = \\frac{cwnd}{2}, cwnd = 1\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("ss")]),t("span",{staticClass:"mord mathnormal"},[s._v("t")]),t("span",{staticClass:"mord mathnormal"},[s._v("h")]),t("span",{staticClass:"mord mathnormal"},[s._v("res")]),t("span",{staticClass:"mord mathnormal"},[s._v("h")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"2.0574em","vertical-align":"-0.686em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mopen nulldelimiter"}),t("span",{staticClass:"mfrac"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.3714em"}},[t("span",{staticStyle:{top:"-2.314em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("2")])])]),t("span",{staticStyle:{top:"-3.23em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),t("span",{staticStyle:{top:"-3.677em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal"},[s._v("c")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[s._v("w")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("d")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[t("span")])])])]),t("span",{staticClass:"mclose nulldelimiter"})]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("c")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[s._v("w")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("d")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("1")])])])])])])],1),s._v("\n在采用快恢复时，转换变成了这样\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mi",[s._v("s")]),t("mi",[s._v("s")]),t("mi",[s._v("t")]),t("mi",[s._v("h")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("s")]),t("mi",[s._v("h")]),t("mo",[s._v("=")]),t("mfrac",[t("mrow",[t("mi",[s._v("c")]),t("mi",[s._v("w")]),t("mi",[s._v("n")]),t("mi",[s._v("d")])],1),t("mn",[s._v("2")])],1),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mi",[s._v("c")]),t("mi",[s._v("w")]),t("mi",[s._v("n")]),t("mi",[s._v("d")]),t("mo",[s._v("=")]),t("mi",[s._v("s")]),t("mi",[s._v("s")]),t("mi",[s._v("t")]),t("mi",[s._v("h")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("s")]),t("mi",[s._v("h")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nssthresh = \\frac{cwnd}{2}, cwnd = ssthresh\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("ss")]),t("span",{staticClass:"mord mathnormal"},[s._v("t")]),t("span",{staticClass:"mord mathnormal"},[s._v("h")]),t("span",{staticClass:"mord mathnormal"},[s._v("res")]),t("span",{staticClass:"mord mathnormal"},[s._v("h")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"2.0574em","vertical-align":"-0.686em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mopen nulldelimiter"}),t("span",{staticClass:"mfrac"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.3714em"}},[t("span",{staticStyle:{top:"-2.314em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("2")])])]),t("span",{staticStyle:{top:"-3.23em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),t("span",{staticStyle:{top:"-3.677em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal"},[s._v("c")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[s._v("w")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("d")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[t("span")])])])]),t("span",{staticClass:"mclose nulldelimiter"})]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("c")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[s._v("w")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("d")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("ss")]),t("span",{staticClass:"mord mathnormal"},[s._v("t")]),t("span",{staticClass:"mord mathnormal"},[s._v("h")]),t("span",{staticClass:"mord mathnormal"},[s._v("res")]),t("span",{staticClass:"mord mathnormal"},[s._v("h")])])])])])])],1),s._v("\n然后开始继续执行拥塞避免算法，cwnd 随时间线性增加")]),s._v(" "),t("p",[s._v("这里有一个确认数据报延迟的问题")]),s._v(" "),t("img",{attrs:{src:a(1229)}}),s._v(" "),t("p",[s._v("可以轻松得到当前发送窗口大小为 2000B，但注意此时发送端只收到了一个确认段，也就是说有 1000B 的数据还未确认，故此时只能发送 1000B 的数据，选 A")]),s._v(" "),t("img",{attrs:{src:a(1230)}}),s._v(" "),t("img",{attrs:{src:a(1231)}}),s._v(" "),t("p",[s._v("同样的，此时发送窗口为接收窗口 500B（拥塞窗口未知，只能这么认为），只收到了 501 的确认报，没收到刚刚发出去的"),t("code",[s._v("seq-501, length=200B")]),s._v("的确认报，所以现在只能发送 500-200=300B 的数据报，并且是接着 500+200=700 的序号发送，选 C")]),s._v(" "),t("p",[s._v("有时，窗口大小 cwnd 按照字节来计量，此时需要直到 MMS 大小，认为窗口中最多含有 cwnd / MMS 个数据报")]),s._v(" "),t("h2",{attrs:{id:"应用层"}},[s._v("应用层")]),s._v(" "),t("p",[s._v("常见协议及其服务所使用的熟知端口")]),s._v(" "),t("img",{attrs:{src:a(1232)}}),s._v(" "),t("p",[s._v("一般应用层为了可靠传输，都使用 TCP 作为下层的传输协议，常见的除了 DNS，使用 UDP 数据报")]),s._v(" "),t("p",[s._v("但注意，即使是使用 TCP 协议，也不一定是一个面向连接的协议，如 HTTP1.0，他把 TCP 当 UDP 用的，多少沾点")]),s._v(" "),t("h3",{attrs:{id:"网络应用模型"}},[s._v("网络应用模型")]),s._v(" "),t("blockquote",[t("p",[s._v("C/S，B/S，P2P")])]),s._v(" "),t("p",[s._v("P2P 模型是一个另类的 C/S 架构，当连接建立之后，客户和服务的界限变得模糊，两台主机同时作为客户和服务端进行工作，这样会带来一些安全问题，以及对网络拥塞有非常大的贡献 U•ェ•*U")]),s._v(" "),t("img",{attrs:{src:a(1233)}}),s._v(" "),t("p",[s._v("在 C/S 架构中，客户机是面向用户的，服务器是面向任务的，一般来说，在做分发任务时，P2P 的效率要高于 C/S 架构")]),s._v(" "),t("h3",{attrs:{id:"域名系统"}},[s._v("域名系统")]),s._v(" "),t("blockquote",[t("p",[s._v("DNS，信息传输基于 UDP")])]),s._v(" "),t("p",[s._v("域名系统组成")]),s._v(" "),t("ul",[t("li",[s._v("层次域名空间")]),s._v(" "),t("li",[s._v("域名服务器")]),s._v(" "),t("li",[s._v("域名解析器")])]),s._v(" "),t("p",[s._v("域名的层次结构")]),s._v(" "),t("img",{attrs:{src:a(1234)}}),s._v(" "),t("p",[s._v("域名服务器")]),s._v(" "),t("ul",[t("li",[s._v("根服务器：管理顶级域名")]),s._v(" "),t("li",[s._v("顶级域名服务器：管理二级域名")]),s._v(" "),t("li",[s._v("权限域名服务器：管理下级服务器")]),s._v(" "),t("li",[s._v("本地域名服务器：管理本区域所有主机的域名")])]),s._v(" "),t("p",[s._v("其中本地域名服务器和权限域名服务器应该是平级的，只是看待他们的主体不同")]),s._v(" "),t("p",[s._v("域名的递归查询和迭代查询")]),s._v(" "),t("img",{attrs:{src:a(1235)}}),s._v(" "),t("p",[s._v("域名和 IP 绝对不是一一对应的，比如很多域名指向同一 IP 地址（可以多对一，一对一，但不可以一对多）")]),s._v(" "),t("p",[s._v("栗题 x2")]),s._v(" "),t("img",{attrs:{src:a(1236)}}),s._v(" "),t("p",[s._v("一定要注意解析域名只是数据传输的第一步，拿到 IP 后才正式开始数据传输")]),s._v(" "),t("p",[s._v("这题真没懂，选尼玛 C，我选的 A")]),s._v(" "),t("img",{attrs:{src:a(1237)}}),s._v(" "),t("img",{attrs:{src:a(1238)}}),s._v(" "),t("h3",{attrs:{id:"文件传输协议"}},[s._v("文件传输协议")]),s._v(" "),t("blockquote",[t("p",[s._v("FTP，纯纯的基于 TCP")])]),s._v(" "),t("p",[s._v("控制和传输分"),t("strong",[s._v("两个端口")]),s._v("进行，又叫带外传送（一定要记牢端口号）")]),s._v(" "),t("ul",[t("li",[s._v("20 端口用于数据传输")]),s._v(" "),t("li",[s._v("21 端口用于连接控制")])]),s._v(" "),t("p",[s._v("两个端口均指服务端口，也就是说客户端并不遵守这一要求，可以是任意端口；同时这两个端口均基于 TCP 连接进行数据信息传输")]),s._v(" "),t("p",[s._v("其中，控制连接囊括整个 FTP 传输过程，而数据连接会在数据传输结束后及时关闭（但此时 FTP 连接不一定关闭）")]),s._v(" "),t("ul",[t("li",[s._v("就像使用 WinSCP 的时候，连接服务器用的是 20 端口，在文件上传的时候才会用到 21 端口（不传输时 21 端口空闲），不传输但也可以一直挂在后台，控制连接和数据连接相对独立")])]),s._v(" "),t("p",[s._v("匿名访问 FTP 服务器时使用 anonymous 作为用户名")]),s._v(" "),t("p",[s._v("举俩栗题")]),s._v(" "),t("img",{attrs:{src:a(1239)}}),s._v(" "),t("img",{attrs:{src:a(1240)}}),s._v(" "),t("h3",{attrs:{id:"邮件传输协议"}},[s._v("邮件传输协议")]),s._v(" "),t("blockquote",[t("p",[s._v("SMTP 和 POP3 协议，前者用于 push，后者用于 pull，均基于 TCP 报文传输")])]),s._v(" "),t("p",[s._v("在客户端发送给邮件服务器和邮件服务器之间传输时，使用 SMTP，在服务器传输给客户时使用 POP3 协议")]),s._v(" "),t("img",{attrs:{src:a(1241)}}),s._v(" "),t("p",[s._v("注意所有的邮件传输协议在传输数据时，都将数据转化为 ASCII 字符再最终转化为比特流在链路中传输，这叫做"),t("strong",[s._v("多用途网络邮件扩充(MIME)")]),s._v("，目的是用于发送多媒体信息而不是简单的文本")]),s._v(" "),t("h3",{attrs:{id:"超文本传输协议"}},[s._v("超文本传输协议")]),s._v(" "),t("blockquote",[t("p",[s._v("HTTP：HTTP1.0 仅支持无连接的传输，HTTP1.1 支持有连接的传输")]),s._v(" "),t("p",[s._v("注意无论是有连接还是无连接，均基于 TCP 进行数据传输")])]),s._v(" "),t("p",[s._v("HTTP 本身是无连接的，但他的传输是基于有连接的 TCP 协议（有点像上面的 FTP 的数据传输端口，不用时关闭，用时打开）")]),s._v(" "),t("p",[s._v("这样的基于 TCP 的"),t("strong",[s._v("无连接传输")]),s._v("非常之蠢，比如你要请求一个 html 页面，这个页面上有 100 个图片，由于无连接的缘故，TCP 连接需要建立和释放 101 次（100 次用于传输图片，1 次用于传输 html 页面）")]),s._v(" "),t("ul",[t("li",[s._v("而有连接的 HTTP 不存在这种情况")])]),s._v(" "),t("p",[s._v("统一资源定位符：和 IP 地址或者域名做一个区分，这里是加上资源的，比如"),t("code",[s._v("39.106.160.174")]),s._v("这是一个 IP，"),t("code",[s._v("39.106.160.174:8080")]),s._v("这是一个传输层端口，而"),t("code",[s._v("39.106.160.174:8080/index.html")]),s._v("就是一个 URL")]),s._v(" "),t("p",[s._v("Cookie：用服务器发送给客户并存储在客户机上的一小串字符，用以标记客户访问过本服务的一些信息")]),s._v(" "),t("img",{attrs:{src:a(1242)}}),s._v(" "),t("p",[s._v("GET 和 POST 就不多说了，都是请求资源，前者把请求项写在 url 中，后者通过表单传输参数")]),s._v(" "),t("p",[s._v("HEAD 主要功能用于测试，不需要服务器返回请求对象")])])}),[],!1,null,null,null);t.default=v.exports}}]);