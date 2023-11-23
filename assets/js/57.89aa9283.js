(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1575:function(v,_,t){"use strict";t.r(_);var s=t(1),i=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"调度的基本概念"}},[v._v("调度的基本概念")]),v._v(" "),_("p",[v._v("内存中存在多个运行实体（进程），而 CPU 数量有限（资源不足）无法真正使其并行，于是我们就要挑进程进行执行，令其他进程处于准备执行的状态（就绪），操作系统需要通过调度程序为各进程分配所需资源")]),v._v(" "),_("p",[v._v("调度分为以下三种级别")]),v._v(" "),_("h3",{attrs:{id:"作业调度"}},[v._v("作业调度")]),v._v(" "),_("p",[v._v("又称为高级调度，作业，指用户交给操作系统的一个独立任务，由若干作业步构成，往往上一个作业步的输出是下一个作业步的输入")]),v._v(" "),_("p",[v._v("作业调度概述")]),v._v(" "),_("ul",[_("li",[v._v("调度单位：作业")]),v._v(" "),_("li",[v._v("特点：运行频率较低，可选择较复杂的调度算法（因为用的少）")]),v._v(" "),_("li",[v._v("作业控制块（一个复杂的表格 JCB）：作业注册程序，作业后备队列，等待作业调度程序调入")])]),v._v(" "),_("p",[v._v("不同操作系统的高级调度方法不同")]),v._v(" "),_("p",[v._v("批处理系统")]),v._v(" "),_("ul",[_("li",[v._v("选择作业")]),v._v(" "),_("li",[v._v("分配资源")]),v._v(" "),_("li",[v._v("创建进程：进入进程就绪队列")]),v._v(" "),_("li",[v._v("作业控制：启动、衔接、异常处理")]),v._v(" "),_("li",[v._v("回收资源")])]),v._v(" "),_("p",[v._v("分时系统和实时系统：为及时响应，作业直接送入内存，不需要作业调度")]),v._v(" "),_("h3",{attrs:{id:"交换调度"}},[v._v("交换调度")]),v._v(" "),_("p",[v._v("也称为内存调度或中级调度，将暂时不具备运行条件的进程挂起，释放资源，并将进程 PCB 调至外存或内存挂起队列，令其处于"),_("strong",[v._v("驻外存状态或挂起状态")]),v._v("，直到内存空闲区满足挂起状态的某进程需求时，调度算法将外存上的挂起进程重新调入内存")]),v._v(" "),_("p",[v._v("注意，被挂起的进程状态可能是就绪，也可能是阻塞，当被转换至外存后统一处于挂起状态（静止就绪或静止阻塞），不能参与低级调度（进程调度）")]),v._v(" "),_("p",[v._v("交换调度概述")]),v._v(" "),_("ul",[_("li",[v._v("应用背景：小内存，大作业，无法放入作业")]),v._v(" "),_("li",[v._v("目的：提高内存利用率、提高系统吞吐量、短期平滑和调整系统负荷")]),v._v(" "),_("li",[v._v("使用频率居中")])]),v._v(" "),_("h3",{attrs:{id:"进程调度"}},[v._v("进程调度")]),v._v(" "),_("p",[v._v("也叫低级调度、线程调度、处理机调度，是最基本的调度，是所有 OS 的核心功能，是多道操作系统的基础")]),v._v(" "),_("p",[v._v("进程调度概述")]),v._v(" "),_("ul",[_("li",[v._v("调度单位：进程 / 线程")]),v._v(" "),_("li",[v._v("使用频率高，通常选用简单的调度算法")]),v._v(" "),_("li",[v._v("主要任务：为就绪进程 / 线程分配处理机，使其处于运行状态")])]),v._v(" "),_("p",[v._v("低级调度的任务：注意他并不创建进程（由作业调度创建），只调度进程")]),v._v(" "),_("ul",[_("li",[v._v("保存当前进程 / 线程信息，如 PC 内容、程序状态字等")]),v._v(" "),_("li",[v._v("调度算法从就绪队列调度某一进程")]),v._v(" "),_("li",[v._v("将处理机分配给这一进程")])]),v._v(" "),_("p",[v._v("进程调度机制如图所示")]),v._v(" "),_("img",{attrs:{src:t(728)}}),v._v(" "),_("ul",[_("li",[v._v("排队器：将系统所有的就绪进程按一定方式排列成一个或多个队列")]),v._v(" "),_("li",[v._v("分派器：将进程调度程序选定的进程从就绪队列取出，进行上下文切换，将 CPU 分配给新进程")]),v._v(" "),_("li",[v._v("上下文切换器：进行两次切换，第一次将当前程序保存，装入分派程序的上下文；第二次为将新进程的上下文装入 CPU 相应寄存器\n"),_("ul",[_("li",[v._v("这里的上下文切换非常耗资源")])])])]),v._v(" "),_("h3",{attrs:{id:"操作系统中作业和进程的关系"}},[v._v("操作系统中作业和进程的关系")]),v._v(" "),_("h4",{attrs:{id:"批处理系统"}},[v._v("批处理系统")]),v._v(" "),_("p",[v._v("作业是进程的任务实体，进程是作业的执行实体，没有作业进程将不存在、虚无，没有进程作业将无法完成")]),v._v(" "),_("ul",[_("li",[v._v("任务是考高分，作业是学习各学科")])]),v._v(" "),_("p",[v._v("作业多用于批处理操作系统，面向外存；进程用于多道程序设计，面向内存")]),v._v(" "),_("p",[v._v("作业的三阶段四状态")]),v._v(" "),_("ul",[_("li",[v._v("收容阶段：提交状态、后备状态\n"),_("ul",[_("li",[v._v("提交任务，由输入设备预输入")]),v._v(" "),_("li",[v._v("输入结束，调入后备队列（外存）")])])]),v._v(" "),_("li",[v._v("运行阶段：执行状态")]),v._v(" "),_("li",[v._v("完成阶段：完成状态")])]),v._v(" "),_("h4",{attrs:{id:"分时操作系统"}},[v._v("分时操作系统")]),v._v(" "),_("p",[v._v("每个终端的一次提交是一个作业交互，可以是提交一个作业，也可以是一个作业步")]),v._v(" "),_("h3",{attrs:{id:"调度的任务和基本准则"}},[v._v("调度的任务和基本准则")]),v._v(" "),_("p",[v._v("进程调度：为当前要执行的进程分配处理机（CPU）")]),v._v(" "),_("p",[v._v("作业调度")]),v._v(" "),_("ul",[_("li",[v._v("根据 JCB 检查系统资源及作业需求；按照某种调度算法从作业后备队列选取满足资源的若干作业调入内存，并为内存中的作业创建进程，分配必要资源；将进程插入进程就绪队列，等待进程调度，使之执行")]),v._v(" "),_("li",[v._v("需要决定\n"),_("ul",[_("li",[v._v("接纳多少作业（取决于多道度）：系统规模、运行速度、作业大小、系统性能")]),v._v(" "),_("li",[v._v("接纳哪些作业（取决于调度算法）：分时、实时系统无需作业调度，但需要某种接纳措施控制进入系统的用户数")])])])]),v._v(" "),_("p",[v._v("调度的基本准则")]),v._v(" "),_("p",[v._v("面向用户")]),v._v(" "),_("ul",[_("li",[v._v("周转时间：尽量短")]),v._v(" "),_("li",[v._v("相应时间：尽量快")]),v._v(" "),_("li",[v._v("截止时间：尽量满足")]),v._v(" "),_("li",[v._v("优先权准则：对不同任务设定优先权，并对优先级高的任务动态调度，以保证紧急任务及时处理。如实时系统采用"),_("strong",[v._v("抢占式调度方式")])])]),v._v(" "),_("p",[v._v("面向系统")]),v._v(" "),_("ul",[_("li",[v._v("吞吐量大：单位时间内完成的作业数尽量多")]),v._v(" "),_("li",[v._v("CPU 利用率高：单位时间内 CPU 处于忙碌状态的时间占比尽量高，在单用户系统和实时系统中，该准则并不重要，更在意实时性")]),v._v(" "),_("li",[v._v("系统资源平衡利用")]),v._v(" "),_("li",[v._v("公平性")])]),v._v(" "),_("p",[v._v("各级调度区别")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("调度级别")]),v._v(" "),_("th",[v._v("调度算法复杂度")]),v._v(" "),_("th",[v._v("使用频率")]),v._v(" "),_("th",[v._v("必备")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("低级调度（进程调度）")]),v._v(" "),_("td",[v._v("低")]),v._v(" "),_("td",[v._v("高")]),v._v(" "),_("td",[v._v("是")])]),v._v(" "),_("tr",[_("td",[v._v("中继调度（交换调度）")]),v._v(" "),_("td",[v._v("中")]),v._v(" "),_("td",[v._v("中")]),v._v(" "),_("td",[v._v("可选")])]),v._v(" "),_("tr",[_("td",[v._v("高级调度（作业调度）")]),v._v(" "),_("td",[v._v("高")]),v._v(" "),_("td",[v._v("低")]),v._v(" "),_("td",[v._v("有或无")])])])]),v._v(" "),_("p",[v._v("各操作系统调度存在情况")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("操作系统")]),v._v(" "),_("th",[v._v("低级调度")]),v._v(" "),_("th",[v._v("中继调度")]),v._v(" "),_("th",[v._v("高级调度")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("多道批处理系统")]),v._v(" "),_("td",[v._v("有")]),v._v(" "),_("td",[v._v("可选")]),v._v(" "),_("td",[v._v("有")])]),v._v(" "),_("tr",[_("td",[v._v("分时系统")]),v._v(" "),_("td",[v._v("有")]),v._v(" "),_("td",[v._v("引入")]),v._v(" "),_("td",[v._v("一般无")])]),v._v(" "),_("tr",[_("td",[v._v("实时系统")]),v._v(" "),_("td",[v._v("有")]),v._v(" "),_("td",[v._v("可选")]),v._v(" "),_("td",[v._v("无")])])])]),v._v(" "),_("p",[v._v("注意在多处理机情况下，调度并不负责为进程选择合适的 CPU，只是分配（分配 != 选择）")]),v._v(" "),_("h2",{attrs:{id:"调度的目的"}},[v._v("调度的目的")]),v._v(" "),_("p",[v._v("不同类型操作系统调度算法的目的不同")]),v._v(" "),_("p",[v._v("CPU 利用率 = CPU 有效工作时间 / (有效工作时间 + 空闲时间)")]),v._v(" "),_("img",{attrs:{src:t(729)}}),v._v(" "),_("p",[v._v("处理机调度的共同目标如下")]),v._v(" "),_("ul",[_("li",[v._v("资源利用率高：尽可能忙碌")]),v._v(" "),_("li",[v._v("公平性：合理分配 CPU 时间")]),v._v(" "),_("li",[v._v("平衡性：合理调度，使使用均衡")]),v._v(" "),_("li",[v._v("策略执行性强")])]),v._v(" "),_("h3",{attrs:{id:"批处理系统目标"}},[v._v("批处理系统目标")]),v._v(" "),_("p",[v._v("平均周转时间短：作业从提交（外存到内存）到完成")]),v._v(" "),_("ul",[_("li",[v._v("等待作业调度时间")]),v._v(" "),_("li",[v._v("就绪队列等待时间")]),v._v(" "),_("li",[v._v("执行时间")]),v._v(" "),_("li",[v._v("等待 IO 时间")])]),v._v(" "),_("p",[v._v("作业希望自己的周转时间最短（贪婪），操作系统则要考虑平均周转最短，使大多数用户满意，提高系统资源利用率")]),v._v(" "),_("p",[v._v("带权周转时间：周转时间（任务结束时间 - 任务到达时间）比上执行时间（整个时间比上占用 CPU 比例）；越大，说明 CPU 占用越少\n"),_("section",[_("eqn",[_("span",{staticClass:"katex-display"},[_("span",{staticClass:"katex"},[_("span",{staticClass:"katex-mathml"},[_("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[_("semantics",[_("mrow",[_("msub",[_("mi",[v._v("T")]),_("mrow",[_("mi",[v._v("w")]),_("mi",[v._v("e")]),_("mi",[v._v("i")]),_("mi",[v._v("g")]),_("mi",[v._v("h")]),_("mi",[v._v("t")])],1)],1),_("mo",[v._v("=")]),_("mfrac",[_("mi",[v._v("T")]),_("msub",[_("mi",[v._v("T")]),_("mi",[v._v("e")])],1)],1)],1),_("annotation",{attrs:{encoding:"application/x-tex"}},[v._v("\nT_{weight} = \\frac{T}{T_e}\n")])],1)],1)],1),_("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[_("span",{staticClass:"base"},[_("span",{staticClass:"strut",staticStyle:{height:"0.9694em","vertical-align":"-0.2861em"}}),_("span",{staticClass:"mord"},[_("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[v._v("T")]),_("span",{staticClass:"msupsub"},[_("span",{staticClass:"vlist-t vlist-t2"},[_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.3361em"}},[_("span",{staticStyle:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),_("span",{staticClass:"sizing reset-size6 size3 mtight"},[_("span",{staticClass:"mord mtight"},[_("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02691em"}},[v._v("w")]),_("span",{staticClass:"mord mathnormal mtight"},[v._v("e")]),_("span",{staticClass:"mord mathnormal mtight"},[v._v("i")]),_("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[v._v("g")]),_("span",{staticClass:"mord mathnormal mtight"},[v._v("h")]),_("span",{staticClass:"mord mathnormal mtight"},[v._v("t")])])])])]),_("span",{staticClass:"vlist-s"},[v._v("​")])]),_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.2861em"}},[_("span")])])])])]),_("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),_("span",{staticClass:"mrel"},[v._v("=")]),_("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),_("span",{staticClass:"base"},[_("span",{staticClass:"strut",staticStyle:{height:"2.1963em","vertical-align":"-0.836em"}}),_("span",{staticClass:"mord"},[_("span",{staticClass:"mopen nulldelimiter"}),_("span",{staticClass:"mfrac"},[_("span",{staticClass:"vlist-t vlist-t2"},[_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"1.3603em"}},[_("span",{staticStyle:{top:"-2.314em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),_("span",{staticClass:"mord"},[_("span",{staticClass:"mord"},[_("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[v._v("T")]),_("span",{staticClass:"msupsub"},[_("span",{staticClass:"vlist-t vlist-t2"},[_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.1514em"}},[_("span",{staticStyle:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),_("span",{staticClass:"sizing reset-size6 size3 mtight"},[_("span",{staticClass:"mord mathnormal mtight"},[v._v("e")])])])]),_("span",{staticClass:"vlist-s"},[v._v("​")])]),_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[_("span")])])])])])])]),_("span",{staticStyle:{top:"-3.23em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),_("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),_("span",{staticStyle:{top:"-3.677em"}},[_("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),_("span",{staticClass:"mord"},[_("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[v._v("T")])])])]),_("span",{staticClass:"vlist-s"},[v._v("​")])]),_("span",{staticClass:"vlist-r"},[_("span",{staticClass:"vlist",staticStyle:{height:"0.836em"}},[_("span")])])])]),_("span",{staticClass:"mclose nulldelimiter"})])])])])])])],1),v._v("\n系统吞吐量高：短作业优先，追求处理更多的作业，以提高吞吐量（单位时间内完成作业数量）")]),v._v(" "),_("p",[v._v("处理机利用率高：大作业优先，CPU 占用时间长")]),v._v(" "),_("h3",{attrs:{id:"分时系统目标"}},[v._v("分时系统目标")]),v._v(" "),_("p",[v._v("分时系统最大的目的：交互性")]),v._v(" "),_("p",[v._v("响应时间快：分时操作系统调度算法的主要准则")]),v._v(" "),_("ul",[_("li",[v._v("请求时间")]),v._v(" "),_("li",[v._v("处理时间")]),v._v(" "),_("li",[v._v("回送时间")])]),v._v(" "),_("p",[v._v("均衡性：尽可能保持均衡，大任务用时稍长可以接受")]),v._v(" "),_("h3",{attrs:{id:"实时系统的目标"}},[v._v("实时系统的目标")]),v._v(" "),_("p",[v._v("截止时间的保证：主要目的，确定作业必须完成的最迟时间")]),v._v(" "),_("ul",[_("li",[v._v("硬实时周期任务：必须确保截止时间")]),v._v(" "),_("li",[v._v("软实时周期任务：基本保证截止时间（可稍延迟）")])]),v._v(" "),_("p",[v._v("可预测性：如视频处理的第 i 帧和 i+1 帧具有连续性，由此可以压缩所需存储的数据规模")]),v._v(" "),_("h2",{attrs:{id:"调度的实现"}},[v._v("调度的实现")]),v._v(" "),_("h3",{attrs:{id:"调度器和调度程序"}},[v._v("调度器和调度程序")]),v._v(" "),_("blockquote",[_("p",[v._v("scheduler")])]),v._v(" "),_("p",[v._v("从多个任务中选取若干任务合理分配资源，使其在微观（并行）或宏观（并发）上同时执行，提高系统资源利用率和吞吐量")]),v._v(" "),_("p",[v._v("调度器常包含三部分内容")]),v._v(" "),_("ul",[_("li",[v._v("数据结构：存储任务的必要信息，为调度服务")]),v._v(" "),_("li",[v._v("上下文：为切换提供参数，包含\n"),_("ul",[_("li",[v._v("用户地址空间：程序代码、数据和用户堆栈等")]),v._v(" "),_("li",[v._v("控制信息：进程描述符、内存堆栈等")]),v._v(" "),_("li",[v._v("硬件上下文：重要寄存器的内容")])])]),v._v(" "),_("li",[v._v("虚拟时钟：为算法提供时钟标准")])]),v._v(" "),_("h3",{attrs:{id:"调度的时机和切换"}},[v._v("调度的时机和切换")]),v._v(" "),_("p",[v._v("处理中断、处于操作系统内核临界区、正在处理原子操作、正在执行原语时将暂缓调度，其余时间，任何请求调度的事件发生都有可能除法调度程序运行")]),v._v(" "),_("p",[v._v("调度时机")]),v._v(" "),_("ul",[_("li",[v._v("系统调用结束")]),v._v(" "),_("li",[v._v("中断或陷入处理结束：意外处理完毕")]),v._v(" "),_("li",[v._v("主动：进程执行完毕或执行发生异常；进程执行过程中请求外设操作")]),v._v(" "),_("li",[v._v("被动：进程时间片用完；抢占方式下遇到优先级更高的进程进入")])]),v._v(" "),_("p",[v._v("切换指处理机占用者发生变化，即 PC 中的内容变为其他程序中的指令地址，正占用者放弃处理机，唤醒调度程序，使其运行新的占用该处理机的进程")]),v._v(" "),_("p",[v._v("非抢占式 / 非剥夺式：只有运行结束或因 IO 阻塞时，正运行程序才会释放处理机，适用于批处理系统")]),v._v(" "),_("p",[v._v("其引起进程调度的因素如下")]),v._v(" "),_("ul",[_("li",[v._v("进程运行完毕")]),v._v(" "),_("li",[v._v("进程因 IO 请求暂停执行")]),v._v(" "),_("li",[v._v("进程无法执行")]),v._v(" "),_("li",[v._v("通讯过程中执行了某原语，导致其停止执行")])]),v._v(" "),_("p",[v._v("非抢占式调度特点")]),v._v(" "),_("ul",[_("li",[v._v("优点：实现简单，系统开销小")]),v._v(" "),_("li",[v._v("缺点：无法满足重要或紧迫任务的需求，很难满足交互性作业和实时性需求")]),v._v(" "),_("li",[v._v("适用于大多数批处理系统，不适用于分时系统和大多数实时系统")])]),v._v(" "),_("p",[v._v("注意在非抢占式调度中，即使优先级最高，也不一定被及时调度，触发进程调度程序")]),v._v(" "),_("p",[v._v("抢占式 / 剥夺式：正在执行进程可被动让出处理机")]),v._v(" "),_("ul",[_("li",[v._v("优先级原则：为紧迫作业赋予较高优先级")]),v._v(" "),_("li",[v._v("短进程优先原则：占用 CPU 时间短的作业优先级较高")]),v._v(" "),_("li",[v._v("时间片原则：作业的时间片用完后，将自动执行下一个任务")])]),v._v(" "),_("p",[v._v("抢占式调度特点")]),v._v(" "),_("ul",[_("li",[v._v("优点：系统相应快，吞吐量大，资源利用率高，能够满足重要、紧迫任务的需求")]),v._v(" "),_("li",[v._v("准则：优先权；基于时间片；短进程优先")])]),v._v(" "),_("h3",{attrs:{id:"闲逛进程"}},[v._v("闲逛进程")]),v._v(" "),_("p",[v._v("0 号进程，优先级最低，抢占式下很容易被剥夺 CPU，由内核初始化函数创建，就绪队列为空时，CPU 执行闲逛进程，可以省电并减少产热")]),v._v(" "),_("h3",{attrs:{id:"调度实现方式"}},[v._v("调度实现方式")]),v._v(" "),_("p",[v._v("可以由操作系统完成，也可以由用户程序完成，前者更快，后者灵活性更高")]),v._v(" "),_("h3",{attrs:{id:"用户级线程调度"}},[v._v("用户级线程调度")]),v._v(" "),_("p",[v._v("用户程序通过线程函数库创建的线程，运行于用户状态（如 JAVA 的 Tread，C3P0 线程池），对操作系统透明（没有 PCB、TCB）")]),v._v(" "),_("p",[v._v("用户级线程的调度算法由用户自己变写，操作系统进行进程调度，线程的调度无需内核参与")]),v._v(" "),_("p",[v._v("特点")]),v._v(" "),_("ul",[_("li",[v._v("优点：控制简单，易扩展，无需切换内核，开销较小")]),v._v(" "),_("li",[v._v("缺点：进程是资源调度单位，用户线程进行请求时只能请求单个进程资源，这意味着多个线程只能运行在同一进程（处理机），并且，当进程中某线程阻塞时，整个进程可能会被阻塞（线程调度算法可以被用户重写以处理单个线程阻塞切换其他线程的情况）")])]),v._v(" "),_("h3",{attrs:{id:"内核级线程调度"}},[v._v("内核级线程调度")]),v._v(" "),_("p",[v._v("由操作系统实现，位于内核空间，运行于核心状态，通过线程控制快 TCB 进行控制")]),v._v(" "),_("p",[v._v("通过系统调用创建新鲜成，并由 OS 对线程表进行更新，一个进程的多个线程可以同时运行在多个 CPU 上，实现并行，各自不会相互阻塞")]),v._v(" "),_("p",[v._v("需要不断从内核态到用户态切换，需要额外开销")]),v._v(" "),_("h2",{attrs:{id:"典型调度算法"}},[v._v("典型调度算法")]),v._v(" "),_("p",[v._v("调度算法的选择取决于操作系统的类型和设计目标（算法即流程）")]),v._v(" "),_("h3",{attrs:{id:"先来先服务调度算法"}},[v._v("先来先服务调度算法")]),v._v(" "),_("blockquote",[_("p",[v._v("First Come First Served, FCFS")])]),v._v(" "),_("p",[v._v("以等待时间为优先级，属于不可抢占的调度方式，进程、线程、作业调用都可适用")]),v._v(" "),_("p",[v._v("进程 / 线程调度的 FCFS：将处理机分配给就绪队列队头的进程，使其处于执行态")]),v._v(" "),_("p",[v._v("作业调度的 FCFS：从外存后备队列的队头开始，选择一个或多个作业进入后备队列且资源能够得到满足的作业调入内存，为他们分配资源、创建进程并插入就绪队列")]),v._v(" "),_("p",[v._v("特点：不会出现饥饿现象 —— 即早早进入队列且资源能够满足，但一直得不到执行的情况")]),v._v(" "),_("img",{attrs:{src:t(730)}}),v._v(" "),_("ul",[_("li",[v._v("带权周转时间越大，说明安排的越不合理（执行一小会儿，等")]),v._v(" "),_("li",[v._v("平均周转时间、平均带权周转时间简单取均值即可")])]),v._v(" "),_("h3",{attrs:{id:"短进程优先调度算法"}},[v._v("短进程优先调度算法")]),v._v(" "),_("blockquote",[_("p",[v._v("Short Process First, SPF")])]),v._v(" "),_("p",[v._v("谁占用 CPU 的相对时间短，谁优先级高，相对指"),_("code",[v._v("运行时间/计算时间")]),v._v("，但在实际计算中看进程的"),_("strong",[v._v("服务时间")]),v._v("即可，适用于进程调度和作业调用")]),v._v(" "),_("p",[v._v("特点")]),v._v(" "),_("ul",[_("li",[v._v("可能出现饥饿现象")]),v._v(" "),_("li",[v._v("没有考虑紧迫作业的需求")]),v._v(" "),_("li",[v._v("必须预知作业的运行时长，这并不容易估计")]),v._v(" "),_("li",[v._v("不利于运行 时间长的作业")])]),v._v(" "),_("h3",{attrs:{id:"时间片轮转调度算法"}},[v._v("时间片轮转调度算法")]),v._v(" "),_("p",[v._v("分时操作系统为保证用户请求响应的及时性，采用简单的时间片轮转调度算法，90 年代广泛采用多级反馈队列调度算法")]),v._v(" "),_("p",[v._v("基本原理")]),v._v(" "),_("ul",[_("li",[v._v("OS 将所有就绪进程按 FCFS 排成一个队列")]),v._v(" "),_("li",[v._v("将 CPU 分给队首进程，令其执行一个时间片")]),v._v(" "),_("li",[v._v("时间片用完立即停止该进程，将其插入队尾")]),v._v(" "),_("li",[v._v("重复操作，直至所有进程执行完毕")])]),v._v(" "),_("p",[v._v("当队列为空执行零号闲逛进程，用于省电")]),v._v(" "),_("p",[v._v("进程切换时机")]),v._v(" "),_("ul",[_("li",[v._v("时间片未用完，进程执行完毕，进行进程切换，立即启动一个新的时间片")]),v._v(" "),_("li",[v._v("时间片用完，进程未用完，进行进程切换，启动一个新的时间片")])]),v._v(" "),_("p",[v._v("时间片大小的确定：")]),v._v(" "),_("ul",[_("li",[v._v("时间片小利于短进程运行，对于大进程增加了进程调度和上下文切换的开销")]),v._v(" "),_("li",[v._v("大时间片利于长作业运行，算法可能退化为 FCFS")]),v._v(" "),_("li",[v._v("可行方法为：时间片略大于一次典型交互时间")])]),v._v(" "),_("p",[v._v("特点：确保就绪队列所有进程在一定时间内均能获得一个时间片；系统在给定时间内能够响应所有用户请求")]),v._v(" "),_("ul",[_("li",[v._v("实际上执行顺序和服务时长保持一致，越短越早执行完")]),v._v(" "),_("li",[v._v("短的进程会先结束，长的进程也不会发生饥饿")])]),v._v(" "),_("p",[v._v("轮转算法的推导过程非常繁琐，一定要捋清关系，慢慢算")]),v._v(" "),_("h3",{attrs:{id:"高相应比优先调度算法"}},[v._v("高相应比优先调度算法")]),v._v(" "),_("p",[v._v("相应比 = (等待时间+运行时间) / 运行时间 = 1 + 等待时间 / 运行时间 = 响应时间 / 运行时间")]),v._v(" "),_("ul",[_("li",[v._v("等待时间越长，优先级越高")])]),v._v(" "),_("p",[v._v("缺点：每次调度之前均需计算相应比，增加系统开销")]),v._v(" "),_("p",[v._v("优点")]),v._v(" "),_("ul",[_("li",[v._v("对于不同进程实现了较好的这种")]),v._v(" "),_("li",[v._v("等待时间相同，运行时间越短越先执行，有利于短任务调度")]),v._v(" "),_("li",[v._v("运行时间相同，等待时间越长越先执行，类似于先来先服务调度")])]),v._v(" "),_("p",[v._v("每当一个任务结束后，队列中所有任务的等待时间都需要更新一次（服务时间不变），做题时要手动更新并计算出相应比最大的一个任务，作为下一个执行任务")]),v._v(" "),_("h3",{attrs:{id:"优先级调度算法"}},[v._v("优先级调度算法")]),v._v(" "),_("blockquote",[_("p",[v._v("Priority Scheduling Algorithm, PSA")])]),v._v(" "),_("p",[v._v("调度优先级最高的进程进行执行，可能出现饥饿现象，适用于批处理操作系统和实时操作系统")]),v._v(" "),_("p",[v._v("分为动态优先级和静态优先级，也分为抢占式和非抢占式")]),v._v(" "),_("ul",[_("li",[v._v("非抢占式必须要等待当前任务执行完毕才可以执行优先级最高的任务")])]),v._v(" "),_("p",[v._v("动态优先级：优先级在创建进程时就赋予，在排队过程中，各进程的优先级是可以动态改变的")]),v._v(" "),_("ul",[_("li",[v._v("适用于批处理和实时系统，分时系统需要抢占式调度")]),v._v(" "),_("li",[v._v("复杂，系统开销大")])]),v._v(" "),_("p",[v._v("静态优先级：每个进程在创建时被赋予的优先级不可变")]),v._v(" "),_("p",[v._v("确定的优先级的依据")]),v._v(" "),_("ul",[_("li",[v._v("进程类型")]),v._v(" "),_("li",[v._v("进程对资源的需求")]),v._v(" "),_("li",[v._v("用户要求")])]),v._v(" "),_("p",[v._v("栗子一：静态优先级的非抢占式实例")]),v._v(" "),_("img",{attrs:{src:t(731)}}),v._v(" "),_("p",[v._v("栗子二：静态优先级的抢占式实例")]),v._v(" "),_("img",{attrs:{src:t(732)}}),v._v(" "),_("img",{attrs:{src:t(733)}}),v._v(" "),_("h3",{attrs:{id:"多队列调度算法"}},[v._v("多队列调度算法")]),v._v(" "),_("p",[v._v("系统中设置多个队列，每个队列可以使用不同的调度算法，各个队列之间有队列的优先级，在调度时，先根据队列的优先级确定队列，再根据队列具体的调度方式从当前队列中调度进程/作业")]),v._v(" "),_("p",[v._v("在多处理机系统中")]),v._v(" "),_("ul",[_("li",[v._v("可以为每个处理机设置一个就绪队列")]),v._v(" "),_("li",[v._v("不同处理机可采用不同的调度策略")]),v._v(" "),_("li",[v._v("可将一个进程的多个线程分配在一个处理机上")]),v._v(" "),_("li",[v._v("可将一组需要合作的进程或线程分配到一组处理机对应的多个就绪队列，使其并行处理作业")])]),v._v(" "),_("h3",{attrs:{id:"多级反馈队列调度算法"}},[v._v("多级反馈队列调度算法")]),v._v(" "),_("blockquote",[_("p",[v._v("非常复杂捏，有可能考到")])]),v._v(" "),_("p",[v._v("工作原理")]),v._v(" "),_("ul",[_("li",[v._v("设置多个就绪队列，一队列优先级高于二队列，二高于三，以此类推")]),v._v(" "),_("li",[v._v("在每个队列内，采用时间片轮转调度算法，队列优先级越高，时间片越小")]),v._v(" "),_("li",[v._v("当第 i 队列中，某一进程的时间片用完，且进程未完成，将加至第 i+1 个队列的队尾，直到该进程完成")]),v._v(" "),_("li",[v._v("初始时进程将加至一队列队尾，所有进程都遵循以上规则直至所有任务完成")])]),v._v(" "),_("p",[v._v("注意：只有当第 i 队列前的所有队列均空时，第 i 个队列才能执行其队头进程，这也是队列优先级的含义")]),v._v(" "),_("p",[v._v("优点：")]),v._v(" "),_("ul",[_("li",[v._v("性能很好，能满足各种类型用户需要")]),v._v(" "),_("li",[v._v("终端型作业，大多属于较小的交互型作业")]),v._v(" "),_("li",[v._v("短批处理作业用户：周转时间仍较短，至多在 2-3 队列完成")]),v._v(" "),_("li",[v._v("长批处理用户：不会饥饿，总会完成")])]),v._v(" "),_("p",[v._v("调度算法比较")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("调度算法")]),v._v(" "),_("th",[v._v("可抢占")]),v._v(" "),_("th",[v._v("不可抢占")]),v._v(" "),_("th",[v._v("优点")]),v._v(" "),_("th",[v._v("缺点")]),v._v(" "),_("th",[v._v("适用")]),v._v(" "),_("th",[v._v("能否用于作业调度")]),v._v(" "),_("th",[v._v("能否用于进程调度")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("先来先服务")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("公平；简单；利于 CPU 繁忙型")]),v._v(" "),_("td",[v._v("不利于短作业和 IO 繁忙型服务")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("短作业优先")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("平均等待时间最少，效率最高")]),v._v(" "),_("td",[v._v("长作业可能饥饿；估计时间不易确定；未考虑紧迫程度")]),v._v(" "),_("td",[v._v("作业调度批处理系统")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("高响应比优先")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("兼顾长短作业")]),v._v(" "),_("td",[v._v("计算响应比开销较大（每执行一个进程都需要重新计算所有入队进程的等待时间）")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("时间片轮转")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("兼顾长短作业")]),v._v(" "),_("td",[v._v("平均等待时间较长；上下文切换开销较大")]),v._v(" "),_("td",[v._v("分时系统")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])]),v._v(" "),_("tr",[_("td",[v._v("多级反馈队列")]),v._v(" "),_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("兼顾长短作业；响应时间较短；综合效率高")]),v._v(" "),_("td",[v._v("同样存在计算开销")]),v._v(" "),_("td",[v._v("通用")]),v._v(" "),_("td",[v._v("0")]),v._v(" "),_("td",[v._v("1")])])])]),v._v(" "),_("p",[v._v("这里要注意的是：多级反馈的抢占不同于优先级调度的抢占，他是优先级高的队列中进程抢占队列优先级低的进程，他的抢占必须发生在"),_("strong",[v._v("本次时间片执行结束或进程提前时间片结束")]),v._v("，而优先级调度的抢占可以发生在进程执行期间")]),v._v(" "),_("h2",{attrs:{id:"上下文及其切换机制"}},[v._v("上下文及其切换机制")]),v._v(" "),_("h3",{attrs:{id:"上下文的概念"}},[v._v("上下文的概念")]),v._v(" "),_("p",[v._v("主要包含运行状态进程的以下内容，存储于 CPU 内；其他进程的相应内容存储于进程的私有堆栈中")]),v._v(" "),_("ul",[_("li",[v._v("用户地址空间：包括程序代码、数据、用户堆栈等")]),v._v(" "),_("li",[v._v("控制信息：进程描述符、内核堆栈等")]),v._v(" "),_("li",[v._v("硬件上下文：上下文寄存器、处理机的各寄存器内存\n"),_("ul",[_("li",[v._v("程序计数器 PC：下一条指令的地址 ——> 自动执行")]),v._v(" "),_("li",[v._v("程序状态字寄存器 PSW")]),v._v(" "),_("li",[v._v("栈顶指针寄存器 SP：切换离不开堆栈")]),v._v(" "),_("li",[v._v("其他寄存器：如累加器 ALL")])])])]),v._v(" "),_("h3",{attrs:{id:"进程切换机制"}},[v._v("进程切换机制")]),v._v(" "),_("p",[v._v("上下文切换，又称任务切换或进程切换，指回收 CPU，将其分配给新进程，使新进程处于执行状态的操作，内核挂起正在 CPU 上运行的进程，转去执行其他进程的过程，通过进程切换可以控制进程的执行")]),v._v(" "),_("p",[v._v("进程切换的流程如下")]),v._v(" "),_("ul",[_("li",[v._v("保护现场：保存原进程当前断点的现场信息 —— 将信息保存到当前进程内核栈，更新栈顶指针")]),v._v(" "),_("li",[v._v("切换进程：将新进程现场信息装入新进程内核栈，更新当前运行进程空间指针")]),v._v(" "),_("li",[v._v("运行新进程")])]),v._v(" "),_("p",[v._v("注意切换的过程中禁止中断，需要保存并更新重要寄存器的值，不能乱")]),v._v(" "),_("h3",{attrs:{id:"切换操作及流程"}},[v._v("切换操作及流程")]),v._v(" "),_("p",[v._v("切换操作")]),v._v(" "),_("img",{attrs:{src:t(734)}}),v._v(" "),_("p",[v._v("切换流程")]),v._v(" "),_("ul",[_("li",[v._v("保存处理机上下文\n"),_("ul",[_("li",[v._v("PCB 入栈：SP 存入当前执行状态进程的 PCB")]),v._v(" "),_("li",[v._v("PC、PSW 及其他寄存器的值存入当前执行状态进程的私有栈")])])]),v._v(" "),_("li",[v._v("更新 PCB 队列，将当前进程 PCB 移出至相应队列队尾（阻塞入阻塞队列，就绪入就绪队列）")]),v._v(" "),_("li",[v._v("通过进程调度程序选择新进程，分配处理机，更新其 PCB")]),v._v(" "),_("li",[v._v("更新系统数据结构")]),v._v(" "),_("li",[v._v("更新处理机上下文\n"),_("ul",[_("li",[v._v("从 PCB 表中获取其 SP 值，存入栈顶指针 SP")]),v._v(" "),_("li",[v._v("从私有栈中获取 PC、PSW 及其他寄存器的值，存入 CPU 的相应寄存器中")])])])]),v._v(" "),_("p",[v._v("进程切换是多任务、多用户操作系统的基本功能；进程切换可能发生于中断、系统调用处理过程中（现行程序 ——> 中断服务程序的过程）；进程切换会导致两个进程的 PCB 内容发生变化；进程切换具有代价，过于频繁的调度和切换会降低系统效率")])])}),[],!1,null,null,null);_.default=i.exports},728:function(v,_,t){v.exports=t.p+"assets/img/QQ截图20221021174928.c2074354.png"},729:function(v,_,t){v.exports=t.p+"assets/img/截图_2022-10-22_09-50-17.47b39046.png"},730:function(v,_,t){v.exports=t.p+"assets/img/QQ截图20221023135601.1497328c.png"},731:function(v,_,t){v.exports=t.p+"assets/img/QQ截图20221023145232.7d467625.png"},732:function(v,_,t){v.exports=t.p+"assets/img/QQ截图20221023145506.dd62fa22.png"},733:function(v,_,t){v.exports=t.p+"assets/img/QQ截图20221023145537.db0dc16d.png"},734:function(v,_,t){v.exports=t.p+"assets/img/QQ截图20221024140300.6b6e8464.png"}}]);