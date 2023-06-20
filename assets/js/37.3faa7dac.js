(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1053:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"死锁概念"}},[s._v("死锁概念")]),s._v(" "),t("blockquote",[t("p",[s._v("过于忙碌 ——> 死锁，物极必反")])]),s._v(" "),t("p",[s._v("资源竞争引发的恶果，多个进程在运行过程中可能因争夺资源出现的一种无外力作用时无法向前推进的僵局，称作死锁")]),s._v(" "),t("ul",[t("li",[s._v("比如哲学家同时拿左手筷子，出现僵局（死锁）")])]),s._v(" "),t("h3",{attrs:{id:"资源分类"}},[s._v("资源分类")]),s._v(" "),t("p",[s._v("是否可重用")]),s._v(" "),t("ul",[t("li",[s._v("可重用资源：可供用户重复使用的资源，其中每个单元每次只能分配给一个进程，不允许多进程共享；一般来说数量固定，程序无法创建")]),s._v(" "),t("li",[s._v("可消耗资源：进程运行期间，可由进程动态创建的资源，如指针\n"),t("ul",[t("li",[s._v("消耗性资源的单元数可在执行期间动态变化")]),s._v(" "),t("li",[s._v("进程运行过程可以不断创建该类资源")]),s._v(" "),t("li",[s._v("生产者进程创建，消耗者进程消耗")])])])]),s._v(" "),t("p",[s._v("是否可抢占")]),s._v(" "),t("ul",[t("li",[s._v("可抢占资源：进程获得资源后（尚未用完），可被强制回收并分配给其他进程，如 CPU 和内存")]),s._v(" "),t("li",[s._v("不可抢占资源：进程获取资源后必须得用完自行释放，如磁带打印机")])]),s._v(" "),t("p",[s._v("死锁产生的根本原因：资源不足")]),s._v(" "),t("p",[t("strong",[s._v("死锁产生的具体原因")])]),s._v(" "),t("ul",[t("li",[s._v("竞争消耗性资源")]),s._v(" "),t("li",[s._v("进程间推进顺序非法")]),s._v(" "),t("li",[s._v("竞争不可剥夺资源")]),s._v(" "),t("li",[s._v("请求和释放资源的顺序不当")])]),s._v(" "),t("h3",{attrs:{id:"死锁产生的必要条件"}},[s._v("死锁产生的必要条件")]),s._v(" "),t("blockquote",[t("p",[s._v("重点捏，解决死锁 ——> 打破必要条件")])]),s._v(" "),t("p",[s._v("互斥使用：进程对所分配资源具有排他性")]),s._v(" "),t("p",[s._v("请求保持：进程已经保持了至少一个资源，又提出新的资源请求，但进程请求的资源已被占用，进程请求资源阻塞，此时进程保持请求，同时该进程已占用的资源将保持不释放")]),s._v(" "),t("p",[s._v("不可抢占：进程已获得的资源必须得自己执行完毕后自行释放")]),s._v(" "),t("p",[s._v("循环等待：发生死锁时，必然存在进程-资源循环链")]),s._v(" "),t("h2",{attrs:{id:"死锁预防"}},[s._v("死锁预防")]),s._v(" "),t("blockquote",[t("p",[s._v("死锁的一种解决办法")])]),s._v(" "),t("p",[s._v("采取限制措施破坏死锁的一个或多个必要条件")]),s._v(" "),t("ul",[t("li",[s._v("互斥使用：不可破坏")]),s._v(" "),t("li",[s._v("破坏“请求保持”条件\n"),t("ul",[t("li",[s._v("协议一：进程执行过程中不申请资源，初始分配时就分配所有所需资源")]),s._v(" "),t("li",[s._v("协议二：进程获取初期所需资源后，开始执行")])])]),s._v(" "),t("li",[s._v("破坏“不可抢占”条件：提出新请求无法得到满足时，释放所有已获得的资源")]),s._v(" "),t("li",[s._v("破坏“循环等待”条件：对所有系统资源进行线性排序，进程必须按序号递增顺序申请资源\n"),t("ul",[t("li",[s._v("问题一：增加新设备排序很麻烦")]),s._v(" "),t("li",[s._v("问题二：申请资源的顺序可能很不合理，造成浪费")])])])]),s._v(" "),t("h2",{attrs:{id:"死锁避免"}},[s._v("死锁避免")]),s._v(" "),t("blockquote",[t("p",[s._v("银行家算法")])]),s._v(" "),t("p",[s._v("资源动态分配过程中，防止进入“不安全”状态（有可能死锁的状态）")]),s._v(" "),t("p",[s._v("系统安全状态：进程序列顺序调度资源时，系统资源能够最大化满足各进程顺序执行完毕，那么我们称这个进程序列是系统安全的")]),s._v(" "),t("ul",[t("li",[s._v("安全状态一定不死锁")]),s._v(" "),t("li",[s._v("不安全状态不一定死锁")]),s._v(" "),t("li",[s._v("避免死锁的实质是系统进行资源分配时，使系统不进入不安全状态")])]),s._v(" "),t("h3",{attrs:{id:"银行家算法"}},[s._v("银行家算法")]),s._v(" "),t("p",[s._v("银行家算法：设系统 m 类资源，n 个进程")]),s._v(" "),t("p",[s._v("4 个数据结构")]),s._v(" "),t("ul",[t("li",[s._v("可利用资源数组"),t("code",[s._v("Available[i]")]),s._v("：反映第 i 类可利用资源的数量")]),s._v(" "),t("li",[s._v("最大需求矩阵"),t("code",[s._v("Max[i][j]")]),s._v("：表示第 i 个进程对第 j 类资源的最大需求量")]),s._v(" "),t("li",[s._v("分配矩阵"),t("code",[s._v("Allocation[i][j]")]),s._v("：表示第 i 个进程已经具有第 j 类资源的个数")]),s._v(" "),t("li",[s._v("需求矩阵"),t("code",[s._v("Need[][]")]),s._v("：表示第 i 个进程还需要第 j 类资源的个数")])]),s._v(" "),t("p",[s._v("其中"),t("code",[s._v("Max[i][j] = Need[i][j] + Allocation[i][j]")])]),s._v(" "),t("p",[s._v("设"),t("code",[s._v("Request[i]")]),s._v("是第 i 个进程 P 的请求向量，若"),t("code",[s._v("Request[i][j] = k")]),s._v("，则说明进程 i 需要第 j 类资源 k 个，当 P 发出请求后，系统将以以下顺序进行检查")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Request[i][j] <= Need[i][j]")]),s._v("，转下一步，否则出错（请求的不大于需要的）")]),s._v(" "),t("li",[t("code",[s._v("Request[i][j] <= Available[j]")]),s._v("，转下一步，否则等待（请求的不大于空闲的）")]),s._v(" "),t("li",[t("strong",[s._v("尝试")]),s._v("将资源分配给进程 P，同时修改数据结构数值\n"),t("ul",[t("li",[t("code",[s._v("Available[j] = Available[j] - Request[i][j]")])]),s._v(" "),t("li",[t("code",[s._v("Allocation[i][j] = Allocation[i][j] + Request[i][j]")])]),s._v(" "),t("li",[t("code",[s._v("Need[i][j] = Need[i][j] - Request[i][j]")])])])]),s._v(" "),t("li",[s._v("安全性检测：若分配后系统处于安全状态，则将资源实际分配给 P；否则取消本次尝试，恢复原来的资源分配状态（恢复数据结构），P 进入等待")])]),s._v(" "),t("h3",{attrs:{id:"安全性检测"}},[s._v("安全性检测")]),s._v(" "),t("p",[s._v("如何进行安全性检测？判断必须要熟且快，因为分少但流程长")]),s._v(" "),t("ul",[t("li",[s._v("设置两个向量\n"),t("ul",[t("li",[s._v("工作向量"),t("code",[s._v("Work[j]")]),s._v("：表示"),t("strong",[s._v("当前进程")]),s._v("所需第 j 类资源的数量，初始状态时"),t("code",[s._v("Work[j] == Available[j]")])]),s._v(" "),t("li",[s._v("结束向量"),t("code",[s._v("Finish[i]")]),s._v("：表示系统能够提供足够资源以供第 i 个进程顺利运行完毕，初值为 false")])])]),s._v(" "),t("li",[s._v("从进程集合中找到一个"),t("code",[s._v("Finish[]")]),s._v("为 false 的变量，假设为 i，判断"),t("code",[s._v("Need[i][j]")]),s._v("是否小于等于"),t("code",[s._v("Work[j], 0 <= j <= m")]),s._v("，若全满足，为其分配资源，更新"),t("code",[s._v("Work[j], Allocation[i][j], Need[i][j]")]),s._v("，执行后释放资源，恢复"),t("code",[s._v("Work[j], Available[j]")]),s._v("，设置"),t("code",[s._v("Finish[i] = true")])]),s._v(" "),t("li",[s._v("重复第二步，寻找下一个符合的进程，直到遍历结束，若存在进程 k 使得"),t("code",[s._v("Finish[k] = false")]),s._v("，说明处于不安全状态，否则处于安全状态")])]),s._v(" "),t("p",[s._v("注意这里安全性的判断遵循进程编号的先后顺序，从前往后遍历，每次寻找都从头开始，即完成一个进程后，将其从队列中删除，从头开始遍历寻找下一个进程")]),s._v(" "),t("p",[s._v("栗子")]),s._v(" "),t("img",{attrs:{src:a(433)}}),s._v(" "),t("img",{attrs:{src:a(434)}}),s._v(" "),t("img",{attrs:{src:a(435)}}),s._v(" "),t("img",{attrs:{src:a(436)}}),s._v(" "),t("img",{attrs:{src:a(437)}}),s._v(" "),t("p",[s._v("在例题中，我们称 P0、P2、P4 打头不存在安全序列，安全序列只有可能由 P1、P3 打头，且 P1 存在安全序列")]),s._v(" "),t("h2",{attrs:{id:"死锁检测和解除"}},[s._v("死锁检测和解除")]),s._v(" "),t("p",[s._v("既不预防，也不避免，让系统自己去运行，运行系统发生死锁。此时，系统在固定的时间周期运行死锁检测算法和死锁解除算法，判断系统是否发生死锁。若发生死锁，用死锁解除算法将系统从死锁状态解脱出来")]),s._v(" "),t("p",[s._v("必须对死锁的发生足够敏感，并精确确定与死锁有关的进程和资源（进程 - 资源循环链），系统必须保存资源的请求和分配信息")]),s._v(" "),t("h3",{attrs:{id:"资源分配图及其简化"}},[s._v("资源分配图及其简化")]),s._v(" "),t("p",[s._v("资源分配图：描述系统资源的分配和空闲情况，用于检测死锁")]),s._v(" "),t("ul",[t("li",[s._v("G = ( N, E )，N 为 G 的顶点集合，E 表示 G 的边集合")]),s._v(" "),t("li",[s._v("顶点包括所有进程和资源")]),s._v(" "),t("li",[s._v("边有向\n"),t("ul",[t("li",[s._v("若从资源指向进程，则为进程占用资源，称为"),t("strong",[s._v("占用边")])]),s._v(" "),t("li",[s._v("若从进程指向资源，则为进程请求资源，称为"),t("strong",[s._v("请求边")])])])])]),s._v(" "),t("p",[s._v("如")]),s._v(" "),t("img",{attrs:{src:a(438)}}),s._v(" "),t("p",[s._v("顶点集"),t("code",[s._v("N = {P1, P2, R1, R2}")])]),s._v(" "),t("p",[s._v("边集"),t("code",[s._v("E = {<P1, R2>, <R2, P2>, <R1, P1>, <R1, P1>, <R1, P2>, <P2, R1>}")])]),s._v(" "),t("p",[s._v("简化资源分配图：利用简化资源分配图可以判断当前系统是否存在死锁")]),s._v(" "),t("ul",[t("li",[s._v("找到一个不阻塞且不独立的进程节点 P")]),s._v(" "),t("li",[s._v("不阻塞意味着资源能够满足其运行，于是我们释放 P 所有的资源，删除和 P 相关的所有边（请求边和占用边），使其孤立")]),s._v(" "),t("li",[s._v("继续考虑其他非孤立节点")]),s._v(" "),t("li",[s._v("直到所有顶点均孤立，说明不存在死锁，若不能使所有进程孤立，则发生了死锁，称这个图不可完全简化")])]),s._v(" "),t("h3",{attrs:{id:"死锁检测中的数据结构"}},[s._v("死锁检测中的数据结构")]),s._v(" "),t("p",[t("code",[s._v("Available[] / Work[]")]),s._v("记录每类资源当前可用量，"),t("code",[s._v("Allocation[]")]),s._v("记录每类资源分配出去的量，"),t("code",[s._v("Request[]")]),s._v("表示某一进程对某类资源的请求量，表 L 记录孤立的进程节点")]),s._v(" "),t("p",[s._v("在死锁检测中")]),s._v(" "),t("ul",[t("li",[s._v("寻找"),t("code",[s._v("Request[i] <= Work[i], 0<=i<=n")]),s._v("的进程")]),s._v(" "),t("li",[s._v("将其资源分配图简化，释放资源，"),t("code",[s._v("Work[i] += Allocation[i]")])]),s._v(" "),t("li",[s._v("将该进程记入 L 表，重复以上过程")])]),s._v(" "),t("p",[s._v("若不能将所有进程记入 L，说明当前系统可能发生死锁")]),s._v(" "),t("h3",{attrs:{id:"死锁解除"}},[s._v("死锁解除")]),s._v(" "),t("p",[s._v("死锁接触是与死锁检测相配套的一种措施，在发生死锁时将系统从死锁状态中解脱出来。实施方法为回收部分资源，再将这些资源分配给阻塞态进程使之继续运行")]),s._v(" "),t("p",[s._v("回收资源的方法")]),s._v(" "),t("ul",[t("li",[s._v("抢占资源")]),s._v(" "),t("li",[s._v("撤销 / 挂起 / 终止进程\n"),t("ul",[t("li",[s._v("终止所有死锁的进程")]),s._v(" "),t("li",[s._v("逐个终止进程，直到能打破循环停止")])])])]),s._v(" "),t("p",[s._v("付出代价最小的死锁解除算法：原始算法和改进算法")]),s._v(" "),t("p",[s._v("原始算法：就是穷举所有终止情况，暴搜，每轮一个个尝试终止各个进程直到不死锁")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[s._v("vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" drop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("condition s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("deadlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若死锁，穷举所有当前进程，一个个排除")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将当前要排除的进程添加到路径中")]),s._v("\n            process cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push_back")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取排除当前进程后的新环境")]),s._v("\n            condition c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exclude")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断新环境死否死锁")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("locked")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若死锁，继续在新环境下排除更多进程，复制当前路径展开新分支")]),s._v("\n                vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("branch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若不死锁，将当前路径添加到全局变量 drop 中作为记录，并退出当前情况")]),s._v("\n                drop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push_back")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nvector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("condition s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("locked")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 传入第一轮的死锁环境和原始路径，开始暴搜")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exclude")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("drop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 说明没有找到一条解除死锁的路径")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 选取一条最短的解除死锁的路径，作为答案返回")]),s._v("\n    vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" unlock_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" INT_MAX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" drop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            unlock_path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" unlock_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("p",[s._v("改进算法：根据接触进程的代价将各个进程升序排列，每次解除代价最小的进程，直到解除死锁")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("死锁处理方法")]),s._v(" "),t("th",[s._v("系统开销")]),s._v(" "),t("th",[s._v("资源利用率")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("死锁预防")]),s._v(" "),t("td",[s._v("低")]),s._v(" "),t("td",[s._v("低")])]),s._v(" "),t("tr",[t("td",[s._v("死锁避免")]),s._v(" "),t("td",[s._v("中")]),s._v(" "),t("td",[s._v("中")])]),s._v(" "),t("tr",[t("td",[s._v("死锁检测和解除")]),s._v(" "),t("td",[s._v("高")]),s._v(" "),t("td",[s._v("高")])])])]),s._v(" "),t("p",[s._v("一般来说，在不加限定条件的情况下，为保证系统安全性，把每个进程对资源的最大需求量 -1 处理再求和并 +1，记为 n，要求资源总量大于等于 n")]),s._v(" "),t("p",[s._v("栗子一：如 6 个进程共享 18 个某类资源，每个进程最多申请 3 个该类资源\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mn",[s._v("6")]),t("mo",[s._v("×")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("x")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("+")]),t("mn",[s._v("1")]),t("mo",[s._v("≤")]),t("mn",[s._v("18")]),t("mo",[s._v("⇒")]),t("mi",[s._v("x")]),t("mo",[s._v("≤")]),t("mfrac",[t("mn",[s._v("17")]),t("mn",[s._v("6")])],1),t("mo",[s._v("+")]),t("mn",[s._v("1")]),t("mo",[s._v("=")]),t("mn",[s._v("3.83")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\n6\\times(x-1) + 1 \\leq 18 \\Rightarrow x \\leq \\frac{17}{6} + 1 = 3.83\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7278em","vertical-align":"-0.0833em"}}),t("span",{staticClass:"mord"},[s._v("6")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7804em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("18")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("⇒")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7719em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("x")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≤")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"2.0074em","vertical-align":"-0.686em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mopen nulldelimiter"}),t("span",{staticClass:"mfrac"},[t("span",{staticClass:"vlist-t vlist-t2"},[t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"1.3214em"}},[t("span",{staticStyle:{top:"-2.314em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("6")])])]),t("span",{staticStyle:{top:"-3.23em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),t("span",{staticStyle:{top:"-3.677em"}},[t("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord"},[s._v("17")])])])]),t("span",{staticClass:"vlist-s"},[s._v("​")])]),t("span",{staticClass:"vlist-r"},[t("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[t("span")])])])]),t("span",{staticClass:"mclose nulldelimiter"})]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("3.83")])])])])])])],1),s._v("\n故 x 最大值为 3，每个进程最多申请不能超过 3")]),s._v(" "),t("p",[s._v("栗子二：三个并发进程互斥使用某一资源，其需求量分别为 3、4、5，问至少要多少个该类资源，才不会发生死锁\n"),t("section",[t("eqn",[t("span",{staticClass:"katex-display"},[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[t("semantics",[t("mrow",[t("mi",[s._v("n")]),t("mo",[s._v("≥")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("3")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("+")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("2")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("+")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("5")]),t("mo",[s._v("−")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("+")]),t("mn",[s._v("1")]),t("mo",[s._v("=")]),t("mn",[s._v("10")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\nn \\geq (3-1)+(2-1)+(5-1)+1 = 10\n")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.7719em","vertical-align":"-0.136em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("≥")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("3")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("5")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),t("span",{staticClass:"mord"},[s._v("10")])])])])])])],1)])])}),[],!1,null,null,null);t.default=e.exports},433:function(s,t,a){s.exports=a.p+"assets/img/截图_2022-10-26_14-03-31.c5022a90.png"},434:function(s,t,a){s.exports=a.p+"assets/img/截图_2022-10-26_14-03-51.f814d88d.png"},435:function(s,t,a){s.exports=a.p+"assets/img/截图_2022-10-26_14-04-16.4cd17a23.png"},436:function(s,t,a){s.exports=a.p+"assets/img/截图_2022-10-26_14-04-51.69076405.png"},437:function(s,t,a){s.exports=a.p+"assets/img/截图_2022-10-26_14-05-13.bf2c0a90.png"},438:function(s,t,a){s.exports=a.p+"assets/img/截图_2022-10-26_14-44-39.f1553b90.png"}}]);