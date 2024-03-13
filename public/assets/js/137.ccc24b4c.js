(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1414:function(t,s,n){"use strict";n.r(s);var a=n(1),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"os-概述"}},[t._v("OS 概述")]),t._v(" "),s("p",[t._v("操作系统特征")]),t._v(" "),s("ul",[s("li",[t._v("并发性，记清楚了，不是并行性")]),t._v(" "),s("li",[t._v("共享性")]),t._v(" "),s("li",[t._v("虚拟性")]),t._v(" "),s("li",[t._v("异步性")])]),t._v(" "),s("p",[t._v("操作系统历程：原始操作系统 ——> 管理系统 ——> 操作系统")]),t._v(" "),s("p",[t._v("不同操作系统")]),t._v(" "),s("ul",[s("li",[t._v("批处理系统：关注吞吐量")]),t._v(" "),s("li",[t._v("分时：关注交互性")]),t._v(" "),s("li",[t._v("实时：关注及时响应（通过中断机制）")])]),t._v(" "),s("p",[t._v("微内核和宏内核：微内核的效率更低，因为需要频繁切换状态（内核态和用户态）")]),t._v(" "),s("h2",{attrs:{id:"作业管理和用户接口"}},[t._v("作业管理和用户接口")]),t._v(" "),s("p",[t._v("系统调用，中断")]),t._v(" "),s("p",[t._v("作业的调度算法")]),t._v(" "),s("ul",[s("li",[t._v("先来先：FCFS")]),t._v(" "),s("li",[t._v("短作业优先：SJF")]),t._v(" "),s("li",[t._v("相应比高者优先：相应比 = 已等待时间 / 所需 CPU 时间")])]),t._v(" "),s("p",[t._v("SPOOLing 系统")]),t._v(" "),s("ul",[s("li",[t._v("输入输出缓存区")]),t._v(" "),s("li",[t._v("输入输出井")])]),t._v(" "),s("h2",{attrs:{id:"进程管理"}},[t._v("进程管理")]),t._v(" "),s("h3",{attrs:{id:"进程调度"}},[t._v("进程调度")]),t._v(" "),s("p",[t._v("进程状态：就绪、阻塞、执行、终止")]),t._v(" "),s("p",[t._v("进程控制块：PCB")]),t._v(" "),s("p",[t._v("进程是资源分配的基本单位，线程是资源调度的基本单位")]),t._v(" "),s("p",[t._v("进程调度算法")]),t._v(" "),s("ul",[s("li",[t._v("先来先服务：FCFS")]),t._v(" "),s("li",[t._v("最短 CPU 运行期优先：SCBF")]),t._v(" "),s("li",[t._v("最高优先权：HPF，分为静态和动态、抢占式和非抢占式")]),t._v(" "),s("li",[t._v("时间片轮转：RR")]),t._v(" "),s("li",[t._v("多级反馈队列：MFQS")])]),t._v(" "),s("p",[t._v("周转时间：进程终止时间 - 进程调入时间")]),t._v(" "),s("p",[t._v("用户级线程和内核级线程：后者需要进入内核态，前者不需要")]),t._v(" "),s("p",[t._v("临界资源与临界区")]),t._v(" "),s("h3",{attrs:{id:"同步与互斥"}},[t._v("同步与互斥")]),t._v(" "),s("p",[t._v("信号量机制，P/V 操作，同步互斥设计")]),t._v(" "),s("p",[t._v("进程通信")]),t._v(" "),s("ul",[s("li",[t._v("共享内存：Redis")]),t._v(" "),s("li",[t._v("消息传递：WebSocket")]),t._v(" "),s("li",[t._v("管道传输：RabbitMQ")])]),t._v(" "),s("p",[t._v("生产-消费者问题：通过一个 mutex = 1 控制缓冲区的访问权，通过 full = 0，empty = n 来控制缓冲区中资源的数量和空闲的位置")]),t._v(" "),s("p",[t._v("在生产前")]),t._v(" "),s("ol",[s("li",[t._v("先要 wait(empty) 判断是否有空位")]),t._v(" "),s("li",[t._v("然后再 wait(mutex) 拿取缓冲区访问权，singal(full) 将资源放入缓冲区，填满一个空位（full + 1）")]),t._v(" "),s("li",[t._v("最后别忘记释放缓冲区访问权 singal(mutex)")])]),t._v(" "),s("p",[t._v("消费同理")]),t._v(" "),s("ol",[s("li",[t._v("先 wait(full) 判断是否有资源可拿")]),t._v(" "),s("li",[t._v("再 wait(mutex) 拿取缓冲区访问权，拿取资源 singal(empty)，空出一个空位")]),t._v(" "),s("li",[t._v("最后释放缓冲区 singal(mutex)")])]),t._v(" "),s("p",[t._v("在有多个生产、消费者时，或有生产消费链时，要使用多个 mutex 去控制每一个缓冲区的访问权，多个 full 和 empty 去控制缓冲区的资源存储情况")]),t._v(" "),s("p",[t._v("读写互斥问题：通过 count = 0 来记录当前读者数量，通过 rw 来控制读写权限，通过 mutex 来控制操作 count 的权限")]),t._v(" "),s("ul",[s("li",[t._v("必须用 mutex 给 count 的操作（+1/-1）上锁，不然多个读者同时访问时将出现脏读")])]),t._v(" "),s("p",[t._v("基本的读者进程")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要读了，要修改 count++ 了，事先要拿 count 的访问权")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当为第一个读者，要等待读写权限")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读完了，要修改 count-- 了，事先拿 count 访问权")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当没有读者，释放读写权限")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("基本写者进程，就是这么简单")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("这有很多变式，如单向路口，同时仅限一方通行：此时需要设置两个 count 去记录两批读者的数量，两个 mutex 来给两个 count 上锁，用一个 pass 信号量给“通行”这一操作上锁（即一方通行时，另一方被 pass 锁上）")]),t._v(" "),s("p",[t._v("哲学家进食问题（一个圆桌）：通过一组信号量控制哲学家拿筷子的操作，为了避免哲学家同时拿左手筷子导致死锁，采用给哲学家拿左右两只筷子（两个连续操作）上锁的方式")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Semagore stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSemagore mutex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给拿两只筷子操作上锁")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第 i 个哲学家进食")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    eatting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("这样每次保证只有一个哲学家进食，不可能出现有其他哲学家抢他筷子的情况发生（会导致忙等，但不失为一种同步互斥方案）")]),t._v(" "),s("h3",{attrs:{id:"死锁"}},[t._v("死锁")]),t._v(" "),s("p",[t._v("死锁预防：破坏死锁产生的必要条件")]),t._v(" "),s("ul",[s("li",[t._v("破坏互斥条件：SPOOLing")]),t._v(" "),s("li",[t._v("破坏不可剥夺条件：抢夺式分配")]),t._v(" "),s("li",[t._v("破坏保持请求条件：一次性分配")]),t._v(" "),s("li",[t._v("破坏循环等待条件：给资源编号")])]),t._v(" "),s("p",[t._v("死锁避免：银行家算法")]),t._v(" "),s("p",[t._v("死锁检测：资源分配图，矩形中的圆圈表示资源，圆圈表示进程，箭头朝进程表示分配，朝资源表示请求分配，通过撤销进程来判断资源是否足够分配（若撤销了还不够，说明产生死锁）")]),t._v(" "),s("p",[t._v("死锁解除")]),t._v(" "),s("ul",[s("li",[t._v("撤销所有陷入死锁的进程：一刀切")]),t._v(" "),s("li",[t._v("逐个撤销陷入死锁中的进程：逐个抓")]),t._v(" "),s("li",[t._v("使陷入死锁中的进程逐个放弃所占有资源，直到死锁消失：注意此时并不撤销进程，只是令其放弃资源，转入阻塞队列")])]),t._v(" "),s("h2",{attrs:{id:"存储管理"}},[t._v("存储管理")]),t._v(" "),s("p",[t._v("就是内存管理")]),t._v(" "),s("p",[t._v("程序的链接、装入")]),t._v(" "),s("p",[t._v("地址重定位")]),t._v(" "),s("h3",{attrs:{id:"连续分配"}},[t._v("连续分配")]),t._v(" "),s("p",[t._v("内存连续分配存储管理")]),t._v(" "),s("ul",[s("li",[t._v("静态分配局部置换")]),t._v(" "),s("li",[t._v("动态分配全局置换")]),t._v(" "),s("li",[t._v("动态分配局部置换")])]),t._v(" "),s("p",[t._v("分区分配算法")]),t._v(" "),s("ul",[s("li",[t._v("首次适应 FF：地址升序")]),t._v(" "),s("li",[t._v("最差适应 WF：空闲区大小降序排列")]),t._v(" "),s("li",[t._v("最优适应 BF：空闲区大小升序排列（产生最多的内部碎片）")])]),t._v(" "),s("h3",{attrs:{id:"离散分配"}},[t._v("离散分配")]),t._v(" "),s("p",[t._v("分页")]),t._v(" "),s("p",[t._v("分段")]),t._v(" "),s("p",[t._v("段页式")]),t._v(" "),s("h3",{attrs:{id:"虚拟存储"}},[t._v("虚拟存储")]),t._v(" "),s("p",[t._v("程序的局部性原理")]),t._v(" "),s("p",[t._v("请求分页式存储管理")]),t._v(" "),s("p",[t._v("页面置换算法")]),t._v(" "),s("ul",[s("li",[t._v("先进先出：FIFO")]),t._v(" "),s("li",[t._v("最近最久未使用：LRU")]),t._v(" "),s("li",[t._v("最近未使用：NRU")])]),t._v(" "),s("h2",{attrs:{id:"文件管理"}},[t._v("文件管理")]),t._v(" "),s("h3",{attrs:{id:"文件"}},[t._v("文件")]),t._v(" "),s("p",[t._v("逻辑结构、物理结构")]),t._v(" "),s("p",[t._v("存储逻辑结构")]),t._v(" "),s("ul",[s("li",[t._v("连续")]),t._v(" "),s("li",[t._v("链接")]),t._v(" "),s("li",[t._v("索引")]),t._v(" "),s("li",[t._v("Hash")])]),t._v(" "),s("p",[t._v("存储物理结构")]),t._v(" "),s("ul",[s("li",[t._v("顺序存储")]),t._v(" "),s("li",[t._v("链式存储：分为隐式和显式（链接表 FAT）")]),t._v(" "),s("li",[t._v("索引存储")])]),t._v(" "),s("p",[t._v("文件控制块：FCB")]),t._v(" "),s("p",[t._v("索引节点，索引表，文件打开表，系统打开表")]),t._v(" "),s("h3",{attrs:{id:"目录管理"}},[t._v("目录管理")]),t._v(" "),s("p",[t._v("二级目录")]),t._v(" "),s("p",[t._v("树形目录")]),t._v(" "),s("h3",{attrs:{id:"磁盘管理"}},[t._v("磁盘管理")]),t._v(" "),s("p",[t._v("非空闲磁盘管理")]),t._v(" "),s("p",[t._v("空闲磁盘管理")]),t._v(" "),s("ul",[s("li",[t._v("空闲表法")]),t._v(" "),s("li",[t._v("空闲链表法")]),t._v(" "),s("li",[t._v("位示图：FAT（不允许同名文件）")]),t._v(" "),s("li",[t._v("成组链接法：UNIX")])]),t._v(" "),s("p",[t._v("可变分区存储管理")]),t._v(" "),s("p",[t._v("磁盘调度算法")]),t._v(" "),s("ul",[s("li",[t._v("先来先服务：FCFS")]),t._v(" "),s("li",[t._v("最短寻道时间优先：SSTF")]),t._v(" "),s("li",[t._v("电梯调度算法：SCAN")]),t._v(" "),s("li",[t._v("优化的电梯调度算法：C-SCAN")])]),t._v(" "),s("h2",{attrs:{id:"设备管理"}},[t._v("设备管理")]),t._v(" "),s("p",[t._v("缓冲技术")]),t._v(" "),s("ul",[s("li",[t._v("单缓冲区")]),t._v(" "),s("li",[t._v("双缓冲区")]),t._v(" "),s("li",[t._v("缓冲池")])]),t._v(" "),s("p",[t._v("计算任务最快时间，类似流水线的计算方法，着眼于当前状态到下一同一状态所经时间")]),t._v(" "),s("p",[t._v("SPOOLing 技术")]),t._v(" "),s("ul",[s("li",[t._v("输入输出井")]),t._v(" "),s("li",[t._v("输入输出缓冲区")]),t._v(" "),s("li",[t._v("输入输出进程")])]),t._v(" "),s("p",[t._v("磁盘的访问时间计算：寻道时间")]),t._v(" "),s("p",[t._v("磁盘调度算法")])])}),[],!1,null,null,null);s.default=v.exports}}]);