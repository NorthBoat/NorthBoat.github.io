(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1394:function(t,s,n){"use strict";n.r(s);var a=n(4),p=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"操作系统概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作系统概述"}},[t._v("#")]),t._v(" 操作系统概述")]),t._v(" "),s("p",[t._v("操作系统特征")]),t._v(" "),s("ul",[s("li",[t._v("并发性")]),t._v(" "),s("li",[t._v("共享性")]),t._v(" "),s("li",[t._v("虚拟性")]),t._v(" "),s("li",[t._v("异步性")])]),t._v(" "),s("p",[t._v("操作系统历程：原始操作系统 ——> 管理系统 ——> 操作系统")]),t._v(" "),s("p",[t._v("不同操作系统")]),t._v(" "),s("ul",[s("li",[t._v("批处理系统：关注吞吐量")]),t._v(" "),s("li",[t._v("分时：关注交互性")]),t._v(" "),s("li",[t._v("实时：关注及时响应（通过中断机制）")])]),t._v(" "),s("p",[t._v("分时系统得特征")]),t._v(" "),s("ul",[s("li",[t._v("同时性，又叫多路性")]),t._v(" "),s("li",[t._v("独立性")]),t._v(" "),s("li",[t._v("交互性")]),t._v(" "),s("li",[t._v("及时性（注意和实时性区别）")])]),t._v(" "),s("p",[t._v("微内核和宏内核：微内核的效率更低，因为需要频繁切换状态（内核态和用户态）")]),t._v(" "),s("p",[t._v("重定位：地址转换机构、链接装入过程")]),t._v(" "),s("ul",[s("li",[t._v("静态地址重定位：在程序装入时进行地址重定位")]),t._v(" "),s("li",[t._v("动态地址重定位：在程序执行时定位，即边执行边定位")])]),t._v(" "),s("p",[t._v("三级调度")]),t._v(" "),s("ul",[s("li",[t._v("作业调度，又叫高级调度：决定运行哪个程序，注意是程序")]),t._v(" "),s("li",[t._v("内存调度，又叫中级调度：决定是否将进程调入内存")]),t._v(" "),s("li",[t._v("处理机/CPU调度，又叫低级调度：决定将 CPU 分配给哪个进程")])]),t._v(" "),s("p",[t._v("多道程序处理：利用了处理器和通道并行工作的能力")]),t._v(" "),s("p",[t._v("中断分类")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("硬件中断：外部中断、终止异常")]),t._v(" "),s("p",[t._v("软件中断：自陷异常、故障异常")])]),t._v(" "),s("li",[s("p",[t._v("外部中断：可屏蔽中断、不可屏蔽中断")]),t._v(" "),s("p",[t._v("内部中断：终止异常、自陷异常、故障异常")])])]),t._v(" "),s("p",[t._v("访管中断属于软中断/内中断，I/O 中断属于外中断")]),t._v(" "),s("p",[t._v("用户态、内核态的转换和逻辑地址、物理地址的转换都是"),s("strong",[t._v("由硬件完成")]),t._v("的，中断处理也必须需要硬件参与")]),t._v(" "),s("h2",{attrs:{id:"作业管理和用户接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作业管理和用户接口"}},[t._v("#")]),t._v(" 作业管理和用户接口")]),t._v(" "),s("p",[t._v("系统调用，中断")]),t._v(" "),s("p",[t._v("作业的调度算法")]),t._v(" "),s("ul",[s("li",[t._v("先来先：FCFS")]),t._v(" "),s("li",[t._v("短作业优先：SJF")]),t._v(" "),s("li",[t._v("相应比高者优先：相应比 = 已等待时间 / 所需 CPU 时间")])]),t._v(" "),s("p",[t._v("SPOOLing 系统")]),t._v(" "),s("ul",[s("li",[t._v("输入输出缓存区")]),t._v(" "),s("li",[t._v("输入输出井")])]),t._v(" "),s("h2",{attrs:{id:"进程调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[t._v("#")]),t._v(" 进程调度")]),t._v(" "),s("p",[t._v("进程状态：创建、就绪、阻塞、执行、终止")]),t._v(" "),s("ul",[s("li",[t._v("其中就绪、阻塞、执行是三种基本状态")])]),t._v(" "),s("p",[t._v("进程控制块：PCB")]),t._v(" "),s("ul",[s("li",[t._v("进程由 PCB、数据、以及代码三部分组成")])]),t._v(" "),s("p",[t._v("进程是资源分配的基本单位，线程是资源调度的基本单位")]),t._v(" "),s("p",[t._v("进程调度算法")]),t._v(" "),s("ul",[s("li",[t._v("先来先服务：FCFS")]),t._v(" "),s("li",[t._v("最短 CPU 运行期优先：SCBF")]),t._v(" "),s("li",[t._v("最高优先权：HPF，分为静态和动态、抢占式和非抢占式")]),t._v(" "),s("li",[t._v("时间片轮转：RR")]),t._v(" "),s("li",[t._v("多级反馈队列：MFQS")])]),t._v(" "),s("p",[t._v("注意对于未明确抢占的系统，默认为非抢占式，即一个进程开始进行，将占有这个资源直到其执行结束，即使有优先级更高的进程进入就绪队列，依旧保持执行")]),t._v(" "),s("p",[t._v("周转时间：进程终止时间 - 进程调入时间")]),t._v(" "),s("ul",[s("li",[t._v("衡量处理效率的两个重要数据：周转时间、平均周转时间")])]),t._v(" "),s("p",[t._v("周转时间的计算：甘特图")]),t._v(" "),s("ul",[s("li",[t._v("一定注意对于周转时间，后面的进程等待的时间是叠加的，叠加的除了前面进程的执行时间，还有切换进程的时间（如前面切换了3次，则周转时间要加上三次切换的时间，而不是单独计算）")]),t._v(" "),s("li",[t._v("画出完整的甘特图再分析是最为稳妥的")])]),t._v(" "),s("p",[t._v("线程：轻量级进程")]),t._v(" "),s("ul",[s("li",[t._v("线程不共享：注册")]),t._v(" "),s("li",[t._v("用户级线程和内核级线程：后者需要进入内核态，前者不需要")])]),t._v(" "),s("p",[t._v("线程与进程的区别")]),t._v(" "),s("ul",[s("li",[t._v("资源和地址方面")]),t._v(" "),s("li",[t._v("调度代价方面")])]),t._v(" "),s("h2",{attrs:{id:"同步与互斥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步与互斥"}},[t._v("#")]),t._v(" 同步与互斥")]),t._v(" "),s("p",[t._v("临界区：一段互斥执行"),s("strong",[t._v("程序")]),t._v("，程序，是程序")]),t._v(" "),s("ul",[s("li",[t._v("进程处于临界区，意味着进程当前占有处理机")]),t._v(" "),s("li",[t._v("临界区共享资源的占有和处理机的调度并不是很有关系，就是说即使进程处于临界区，仍可以被抢夺处理机（感觉是中级调度和低级调度的区别）")])]),t._v(" "),s("p",[t._v("当 5 个进程共享一类临界资源时，共有 5 个临界区（5 个进程都有一段互斥的代码，即临界区）")]),t._v(" "),s("p",[t._v("任意时刻可以共享的代码（纯代码、可重入代码）：就相当于 utils 包，是不可修改的代码")]),t._v(" "),s("p",[t._v("同步互斥的规则：空闲让进、忙则等待、有限等待、让权等待")]),t._v(" "),s("p",[t._v("信号量机制，P/V 操作，同步互斥设计")]),t._v(" "),s("ul",[s("li",[t._v("互斥是进程间的直接约束")]),t._v(" "),s("li",[t._v("同步是间接约束")])]),t._v(" "),s("p",[t._v("P/V 操作是一种低级通信原语（不可分割的指令序列），是一段不可中断的过程")]),t._v(" "),s("p",[t._v("P/V 操作和 wait/signal 的区别")]),t._v(" "),s("ul",[s("li",[t._v("P(S) 操作时，要根据信号量 S 的值来确定是等待还是进入；而 S.wait() 操作直接就是让进程 S 阻塞，直到有进程唤醒他才进入就绪队列（等待和阻塞似乎不太一样）")]),t._v(" "),s("li",[t._v("V(S) 操作表示释放一个资源；signal(S) 表示令阻塞的 S 进程进入"),s("strong",[t._v("就绪")]),t._v("状态")])]),t._v(" "),s("p",[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("当 V(S) 时导致唤醒了等待 S 的资源，此时说明之前已经有 S < 0，即 V(S) 后仍有 S ≤ 0")]),t._v(" "),s("li",[t._v("当执行 P(S) "),s("strong",[t._v("后")]),t._v("，只有当 S < 0，该进程才会进入资源等待队列，一定要注意题目中是 P/V(S) 之前还是之后")])]),t._v(" "),s("p",[t._v("进程通信")]),t._v(" "),s("ul",[s("li",[t._v("共享内存：Redis")]),t._v(" "),s("li",[t._v("消息传递：WebSocket")]),t._v(" "),s("li",[t._v("管道传输：RabbitMQ")])]),t._v(" "),s("p",[t._v("管程：一次只允许一个进程进入冠城")]),t._v(" "),s("p",[t._v("生产-消费者问题：通过一个 mutex = 1 控制缓冲区的访问权，通过 full = 0，empty = n 来控制缓冲区中资源的数量和空闲的位置")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Semaphore mutex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" full "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("work")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("work")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("在有多个生产、消费者时，或有生产消费链时，要使用多个 mutex 去控制每一个缓冲区的访问权，多个 full 和 empty 去控制缓冲区的资源存储情况")]),t._v(" "),s("p",[t._v("读写互斥问题：通过 count = 0 来记录当前读者数量，通过 rw 来控制读写权限，通过 mutex 来控制操作 count 的权限")]),t._v(" "),s("ul",[s("li",[t._v("必须用 mutex 给 count 的操作（+1/-1）上锁，不然多个读者同时访问时将出现脏读")])]),t._v(" "),s("p",[t._v("基本的读者进程")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要读了，要修改 count++ 了，事先要拿 count 的访问权")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当为第一个读者，要等待读写权限")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读完了，要修改 count-- 了，事先拿 count 访问权")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当没有读者，释放读写权限")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("基本写者进程，就是这么简单")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("这有很多变式，如单向路口，同时仅限一方通行：此时需要设置两个 count 去记录两批读者的数量，两个 mutex 来给两个 count 上锁，用一个 pass 信号量给“通行”这一操作上锁（即一方通行时，另一方被 pass 锁上）")]),t._v(" "),s("p",[t._v("哲学家进食问题（一个圆桌）：通过一组信号量控制哲学家拿筷子的操作，为了避免哲学家同时拿左手筷子导致死锁，采用给哲学家拿左右两只筷子（两个连续操作）上锁的方式")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("Semagore stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSemagore mutex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给拿两只筷子操作上锁")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第 i 个哲学家进食")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("P")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    eatting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" stick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("这样每次保证只有一个哲学家进食，不可能出现有其他哲学家抢他筷子的情况发生（会导致忙等，但不失为一种同步互斥方案）")]),t._v(" "),s("p",[t._v("注意：在写题时，一定要写 main 函数，若有需要，应将主要功能用 while(1) 包含起来持续运行")]),t._v(" "),s("h2",{attrs:{id:"死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),s("p",[t._v("当有 n 个进程时，就绪队列最多有 n-1 个进程，而阻塞队列最多有 n 个进程")]),t._v(" "),s("ul",[s("li",[t._v("当发生死锁时，n 个进程全被阻塞")])]),t._v(" "),s("p",[t._v("死锁预防：破坏死锁产生的必要条件")]),t._v(" "),s("ul",[s("li",[t._v("破坏互斥条件：SPOOLing")]),t._v(" "),s("li",[t._v("破坏不可剥夺条件：抢夺式分配")]),t._v(" "),s("li",[t._v("破坏保持请求条件：一次性分配")]),t._v(" "),s("li",[t._v("破坏循环等待条件：给资源编号")])]),t._v(" "),s("p",[t._v("死锁避免：银行家算法")]),t._v(" "),s("ul",[s("li",[t._v("系统处于不安全状态"),s("strong",[t._v("可能")]),t._v("发生死锁：因为可以主动撤销资源，不是说不安全就一定要继续进行下去直到发展成死锁")])]),t._v(" "),s("p",[t._v("死锁检测：资源分配图，矩形中的圆圈表示资源，圆圈表示进程，箭头朝进程表示分配，朝资源表示请求分配，通过撤销进程来判断资源是否足够分配（若撤销了还不够，说明产生死锁）")]),t._v(" "),s("p",[t._v("死锁解除")]),t._v(" "),s("ul",[s("li",[t._v("撤销所有陷入死锁的进程：一刀切")]),t._v(" "),s("li",[t._v("逐个撤销陷入死锁中的进程：逐个抓")]),t._v(" "),s("li",[t._v("使陷入死锁中的进程逐个放弃所占有资源，直到死锁消失：注意此时并不撤销进程，只是令其放弃资源，转入阻塞队列")])])])}),[],!1,null,null,null);s.default=p.exports}}]);