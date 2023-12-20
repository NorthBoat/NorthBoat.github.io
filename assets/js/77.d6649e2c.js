(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1288:function(t,s,a){t.exports=a.p+"assets/img/QQ截图20221006160743.2bba4c1b.png"},1289:function(t,s,a){t.exports=a.p+"assets/img/QQ截图20221006170358.41200133.png"},1290:function(t,s,a){t.exports=a.p+"assets/img/QQ截图20221006170150.4b3ccb8e.png"},1291:function(t,s,a){t.exports=a.p+"assets/img/截图_2022-10-07_15-31-57.3862ca5d.png"},1680:function(t,s,a){"use strict";a.r(s);var i=a(1),m=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"机器指令"}},[t._v("机器指令")]),t._v(" "),s("blockquote",[s("p",[t._v("以小题为主，2-4 分")])]),t._v(" "),s("h3",{attrs:{id:"指令格式"}},[t._v("指令格式")]),t._v(" "),s("p",[t._v("冯诺依曼计算机是受指令流控制的计算机，指令的一般格式：\n"),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mtext",[t._v("操作码（")]),s("mi",[t._v("O")]),s("mi",[t._v("P")]),s("mtext",[t._v("）")]),s("mo",[t._v("+")]),s("mtext",[t._v("地址码")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\n操作码（OP） + 地址码\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{staticClass:"mord cjk_fallback"},[t._v("操作码（")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("OP")]),s("span",{staticClass:"mord cjk_fallback"},[t._v("）")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),s("span",{staticClass:"mord cjk_fallback"},[t._v("地址码")])])])])])])],1)]),t._v(" "),s("p",[t._v("有点像汇编")]),t._v(" "),s("h3",{attrs:{id:"地址码"}},[t._v("地址码")]),t._v(" "),s("blockquote",[s("p",[t._v("零地址指令")])]),t._v(" "),s("p",[t._v("指令中只有操作码，没有地址码，如汇编指令 aaa")]),t._v(" "),s("p",[t._v("无需任何操作数")]),t._v(" "),s("p",[t._v("其操作数默认：如堆栈，数据大多来自于此，暂存器、累加器、立即数均不可默认")]),t._v(" "),s("blockquote",[s("p",[t._v("一地址指令")])]),t._v(" "),s("p",[t._v("包含操作码和一个地址码，寄存器或内存单元")]),t._v(" "),s("p",[t._v("单目运算：如取反、取负、取绝对值")]),t._v(" "),s("p",[t._v("做隐含寻址，即隐含约定目的地址的双操作数指令，默认有另一个操作数")]),t._v(" "),s("blockquote",[s("p",[t._v("二地址指令")])]),t._v(" "),s("p",[t._v("包含操作码和两个地址码")]),t._v(" "),s("blockquote",[s("p",[t._v("三地址指令")])]),t._v(" "),s("p",[t._v("操作码和三个地址码")]),t._v(" "),s("p",[t._v("往往 A1 、A2 提供运算数据，A3 是用于存放结果的地址")]),t._v(" "),s("blockquote",[s("p",[t._v("四地址指令")])]),t._v(" "),s("p",[t._v("地址码和四个地址码")]),t._v(" "),s("p",[t._v("A1、A2 提供数据，A3 存放结果，A4 是下一条指令的地址")]),t._v(" "),s("blockquote",[s("p",[t._v("隐指令")])]),t._v(" "),s("p",[t._v("指令系统中没有的指令，由硬件催发")]),t._v(" "),s("h2",{attrs:{id:"定长指令格式和变长指令格式"}},[t._v("定长指令格式和变长指令格式")]),t._v(" "),s("h3",{attrs:{id:"定长指令格式"}},[t._v("定长指令格式")]),t._v(" "),s("p",[t._v("定长指令格式是所有指令的操作码位数相同，并由操作码决定操作的类型")]),t._v(" "),s("p",[t._v("操作码位数为 n，则说明有 2^n 个操作码；反之，若指令系统有 n 条指令，则至少有 log2 (n) 位操作码")]),t._v(" "),s("h3",{attrs:{id:"扩展操作码指令格式"}},[t._v("扩展操作码指令格式")]),t._v(" "),s("p",[t._v("高级语言中各指令的使用频率不同，如 goto 和赋值语句，扩展操作码指令格式将根据指令的使用频率划分不同位数的操作码以提高译码速度")]),t._v(" "),s("ul",[s("li",[t._v("短操作码不能作为长操作码的前缀")]),t._v(" "),s("li",[t._v("各指令的操作码不能重复")])]),t._v(" "),s("p",[t._v("类似于计网的子网划分")]),t._v(" "),s("h3",{attrs:{id:"操作数类型和操作类型"}},[t._v("操作数类型和操作类型")]),t._v(" "),s("p",[t._v("举个栗子：操作码 4 位，地址码 A1,A2,A3 均为 4 位，请据此设计一个可变长的指令实现 15 条三地址指令、15 条二地址指令、15 条一地址指令、16 条零地址指令")]),t._v(" "),s("ul",[s("li",[t._v("三地址指令，操作码 0000 ~ 1110")]),t._v(" "),s("li",[t._v("二地址指令，借用地址码 A1，操作码 1111 0000 ~ 1111 1110，操作码从 4 位扩展到 8 位")]),t._v(" "),s("li",[t._v("一地址指令，借用地址码 A1,A2，操作码 1111 1111 0000 ~ 1111 1111 1110，操作码从 8 位扩展到 12 位")]),t._v(" "),s("li",[t._v("零地址指令，借用地址码 A1,A2,A3，操作码 1111 1111 1111 0000 ~ 1111 1111 1111 1111，操作码 16 位，共 16 种")])]),t._v(" "),s("p",[t._v("可以注意到，由于上一次扩展是特地留了一位，用于区分前缀，方便下一次扩展")]),t._v(" "),s("p",[t._v("若改为 14 个二地址指令，31 个一地址指令，该如何设计？")]),t._v(" "),s("img",{attrs:{src:a(1288)}}),t._v(" "),s("p",[t._v("结论：在写数据时，若每一位都是 n 位，上一级结构每留出一位，那么下一级结构将可以扩展 2^n 条指令")]),t._v(" "),s("p",[t._v("是一个下阶梯的过程")]),t._v(" "),s("h2",{attrs:{id:"寻址方式"}},[t._v("寻址方式")]),t._v(" "),s("blockquote",[s("p",[t._v("较关键，汇编中学过：直接寻址、间接寻址、基址变址寻址。均为数据寻址方式")])]),t._v(" "),s("p",[t._v("形式地址 A，有效地址 EA")]),t._v(" "),s("h3",{attrs:{id:"指令寻址"}},[t._v("指令寻址")]),t._v(" "),s("p",[t._v("指令寻址，寻找下一条将要执行的指令的内存地址，由 CPU 内的程序计数器 PC 的内容和指令中给出的偏移量求和得到，分为顺序寻址和跳跃寻址（转移寻址）")]),t._v(" "),s("ul",[s("li",[t._v("偏移量为有符号数，用补码表示")])]),t._v(" "),s("h3",{attrs:{id:"数据寻址"}},[t._v("数据寻址")]),t._v(" "),s("p",[t._v("如何去寻找程序运行时所需的数据")]),t._v(" "),s("blockquote",[s("p",[t._v("立即寻址")])]),t._v(" "),s("p",[t._v("指令中的地址码就是数据本身，即立即数，A 为数据本身，拿到指令即拿到数据")]),t._v(" "),s("p",[t._v("指令相对较短，不能储存大的立即数，这种方式的计算很有限，只适用于数很小的情况")]),t._v(" "),s("blockquote",[s("p",[t._v("直接寻址")])]),t._v(" "),s("p",[t._v("操作数字段是操作数所在的内存地址，相当于指针")]),t._v(" "),s("p",[t._v("同样因为地址码位数有限，能够定位到的内存编号很少")]),t._v(" "),s("blockquote",[s("p",[t._v("间接寻址")])]),t._v(" "),s("p",[t._v("指针的指针，指向一段存有数据地址的指针的地址")]),t._v(" "),s("p",[t._v("一次间址：指针的指针")]),t._v(" "),s("p",[t._v("多次间址：指针的指针的指针，多次间址会造成访问速度变慢")]),t._v(" "),s("blockquote",[s("p",[t._v("寄存器寻址")])]),t._v(" "),s("p",[t._v("给出寄存器编号，CPU 根据编号去访问寄存器，从寄存器中拿出数据")]),t._v(" "),s("p",[t._v("成本高（寄存器贵），同时寄存器较少")]),t._v(" "),s("blockquote",[s("p",[t._v("寄存器间接寻址")])]),t._v(" "),s("p",[t._v("给出寄存器编号，寄存器中存放的是指针而非数据，CPU 从寄存器给出的地址中去取数据")]),t._v(" "),s("p",[t._v("慢于寄存器寻址，快于间接寻址")]),t._v(" "),s("blockquote",[s("p",[t._v("隐含寻址")])]),t._v(" "),s("p",[t._v("只给出一个数据，这个数据按照地址码给出，另一个数据在 ACC 中")]),t._v(" "),s("p",[t._v("能有效减少字长")]),t._v(" "),s("blockquote",[s("p",[t._v("变址寻址")])]),t._v(" "),s("p",[t._v("EA = (IX) + A，地址码给出的是变址寄存器的编号和偏移量，变址寄存器内容加上偏移量得到 EA")]),t._v(" "),s("p",[t._v("A 不可变， IX 可变")]),t._v(" "),s("p",[t._v("常用于解决数组问题，用 A 给出寄存器编号（不可变），IX 给出数组下标（可变）")]),t._v(" "),s("p",[t._v("立足于用户")]),t._v(" "),s("blockquote",[s("p",[t._v("基址寻址")])]),t._v(" "),s("p",[t._v("(BR) + A = EA，基址寄存器内容加上偏移量得到 EA")]),t._v(" "),s("p",[t._v("A 可变，BR 不可变")]),t._v(" "),s("p",[t._v("和 IX+A 很像，但可变不可变的部分不同，于是 BR+A 常用于解决多道程序问题，用 A 切换寄存器编号")]),t._v(" "),s("p",[t._v("可以解决循环问题")]),t._v(" "),s("p",[t._v("面向系统")]),t._v(" "),s("blockquote",[s("p",[t._v("相对寻址")])]),t._v(" "),s("p",[t._v("PC + A = EA，实现程序浮动，用于转移指令")]),t._v(" "),s("blockquote",[s("p",[t._v("堆栈寻址")])]),t._v(" "),s("p",[t._v("分为硬堆栈和软堆栈")]),t._v(" "),s("p",[t._v("基于先进后出原则")]),t._v(" "),s("p",[t._v("硬堆栈即寄存器堆栈，纯用寄存器实现")]),t._v(" "),s("p",[t._v("软堆栈划分一块内存空间，实现栈功能")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("寻址方式")]),t._v(" "),s("th",[t._v("有效地址")]),t._v(" "),s("th",[t._v("访存次数（访问内存）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("隐含寻址")]),t._v(" "),s("td",[t._v("程序指定")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("立即寻址")]),t._v(" "),s("td",[t._v("A 即是操作数")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("直接寻址")]),t._v(" "),s("td",[t._v("EA = A")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("一次间接寻址")]),t._v(" "),s("td",[t._v("EA = (A)")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("N 次间接寻址")]),t._v(" "),s("td",[t._v("EA = ((A))")]),t._v(" "),s("td",[t._v("N+1")])]),t._v(" "),s("tr",[s("td",[t._v("寄存器寻址")]),t._v(" "),s("td",[t._v("EA = Ri")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("寄存器间接一次寻址")]),t._v(" "),s("td",[t._v("EA = (Ri)")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("相对寻址")]),t._v(" "),s("td",[t._v("EA = (PC) + A")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("基址寻址")]),t._v(" "),s("td",[t._v("EA = (BR) + A")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("变址寻址")]),t._v(" "),s("td",[t._v("EA = (IX) + A")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("堆栈寻址")]),t._v(" "),s("td",[t._v("硬堆栈")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("堆栈寻址")]),t._v(" "),s("td",[t._v("软堆栈")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("ul",[s("li",[t._v("访存次数越多，越慢")]),t._v(" "),s("li",[t._v("以上表格不包括取指令本身的访存次数")])]),t._v(" "),s("p",[t._v("常用情形")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("寻址方式")]),t._v(" "),s("th",[t._v("特点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("立即寻址")]),t._v(" "),s("td",[t._v("执行期间不访存")])]),t._v(" "),s("tr",[s("td",[t._v("隐含寻址")]),t._v(" "),s("td",[t._v("有效减少指令字长")])]),t._v(" "),s("tr",[s("td",[t._v("变址寻址")]),t._v(" "),s("td",[t._v("解决数组问题")])]),t._v(" "),s("tr",[s("td",[t._v("基址寻址")]),t._v(" "),s("td",[t._v("解决多道程序和循环问题")])]),t._v(" "),s("tr",[s("td",[t._v("相对寻址")]),t._v(" "),s("td",[t._v("解决程序浮动问题")])])])]),t._v(" "),s("p",[t._v("堆栈的先减后加，后减先加")]),t._v(" "),s("ul",[s("li",[t._v("若栈顶指针 SP 先减，说明指向的是栈顶元素，减到空再压入数据，在取数据时，就要先取出栈顶元素，再令指针 SP+1，指针 SP 始终指向栈顶元素")]),t._v(" "),s("li",[t._v("若先压入栈再令指针 SP-1，说明 SP 本来就指向的空，于是在取出时，要先令 SP+1，指向栈顶元素后才能取出值")])]),t._v(" "),s("img",{attrs:{src:a(1289)}}),t._v(" "),s("p",[t._v("偏移寻址方式：即使用寄存器加偏移量的形式寻址，包括基址寻址、变址寻址、相对寻址")]),t._v(" "),s("p",[t._v("相对寻址示例")]),t._v(" "),s("img",{attrs:{src:a(1290)}}),t._v(" "),s("p",[t._v("指令格式分配：重点考虑题目 P16 00:11:00-00:40:00 两道题，其中第一道题尤为重要")]),t._v(" "),s("p",[t._v("指令格式分配例题：第五题")]),t._v(" "),s("img",{attrs:{src:a(1291)}}),t._v(" "),s("p",[t._v("这道题有点问题，我算出来也是 23，但答案没有，只能强行解释 23 不好按字节编码，于是以 23(8x3) 作为指令长度")]),t._v(" "),s("h2",{attrs:{id:"cisc-和-risc"}},[t._v("CISC 和 RISC")]),t._v(" "),s("blockquote",[s("p",[t._v("指令设计的两种方案")])]),t._v(" "),s("p",[t._v("单字指令格式：\n"),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("O")]),s("mi",[t._v("P")]),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("m")]),s("mi",[t._v("o")]),s("msub",[s("mi",[t._v("d")]),s("mi",[t._v("S")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("msub",[s("mi",[t._v("R")]),s("mi",[t._v("S")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("m")]),s("mi",[t._v("o")]),s("msub",[s("mi",[t._v("d")]),s("mi",[t._v("D")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("msub",[s("mi",[t._v("R")]),s("mi",[t._v("D")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\n|\\quad OP\\quad|\\quad mod_S\\quad|\\quad R_S\\quad|\\quad mod_D\\quad|\\quad R_D\\quad|\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("OP")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")])])])])])])],1),t._v("\n双字指令格式：\n"),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("O")]),s("mi",[t._v("P")]),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("m")]),s("mi",[t._v("o")]),s("msub",[s("mi",[t._v("d")]),s("mi",[t._v("S")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("msub",[s("mi",[t._v("R")]),s("mi",[t._v("S")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("m")]),s("mi",[t._v("o")]),s("msub",[s("mi",[t._v("d")]),s("mi",[t._v("D")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{width:"1em"}}),s("msub",[s("mi",[t._v("R")]),s("mi",[t._v("D")])],1),s("mspace",{attrs:{width:"1em"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mspace",{attrs:{linebreak:"newline"}}),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")]),s("mtext"),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mi",[t._v("X")]),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mspace",{attrs:{width:"1em"}}),s("mtext"),s("mi",{attrs:{mathvariant:"normal"}},[t._v("∣")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\n|\\quad OP\\quad|\\quad mod_S\\quad|\\quad R_S\\quad|\\quad mod_D\\quad|\\quad R_D\\quad|\\\\\n|\\,\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad X\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\quad\\,|\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("OP")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3283em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0077em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord"},[t._v("∣")])]),s("span",{staticClass:"mspace newline"}),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("∣")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"1em"}}),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[t._v("∣")])])])])])])],1),t._v("\n很显然，进行执行时，所需的功能和访存需求是不一样的")]),t._v(" "),s("h3",{attrs:{id:"复杂指令系统计算机"}},[t._v("复杂指令系统计算机")]),t._v(" "),s("blockquote",[s("p",[t._v("CISC")])]),t._v(" "),s("p",[t._v("使用汇编语言实现，喜好强大好用的指令集，追求功能越强大越好，但这样造成对内存访问比较多，指令变得很慢")]),t._v(" "),s("ul",[s("li",[t._v("采用可变长指令")])]),t._v(" "),s("p",[t._v("常使用于大型机中")]),t._v(" "),s("h3",{attrs:{id:"精简指令系统计算机"}},[t._v("精简指令系统计算机")]),t._v(" "),s("p",[t._v("常用于在微型机中，追求指令尽可能简单高效，格式尽可能规整")]),t._v(" "),s("ul",[s("li",[t._v("采用定长指令")])]),t._v(" "),s("p",[t._v("RISC 利于扩展，但由于指令定长，使得所需存储空间变大")]),t._v(" "),s("h3",{attrs:{id:"cisc-和-risc-的对比"}},[t._v("CISC 和 RISC 的对比")]),t._v(" "),s("p",[t._v("常考该表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("CISC")]),t._v(" "),s("th",[t._v("RISC")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("指令系统")]),t._v(" "),s("td",[t._v("复杂、庞大")]),t._v(" "),s("td",[t._v("简单、精简")])]),t._v(" "),s("tr",[s("td",[t._v("指令数")]),t._v(" "),s("td",[t._v("一般大于 200")]),t._v(" "),s("td",[t._v("一般小于 100")])]),t._v(" "),s("tr",[s("td",[t._v("可访问内存的指令")]),t._v(" "),s("td",[t._v("不加限制")]),t._v(" "),s("td",[t._v("只有 load/store 指令")])]),t._v(" "),s("tr",[s("td",[t._v("指令字长")]),t._v(" "),s("td",[t._v("不固定")]),t._v(" "),s("td",[t._v("定长")])]),t._v(" "),s("tr",[s("td",[t._v("各种指令使用频率")]),t._v(" "),s("td",[t._v("相差很大")]),t._v(" "),s("td",[t._v("相差不大")])]),t._v(" "),s("tr",[s("td",[t._v("各指令执行时间")]),t._v(" "),s("td",[t._v("相差很大")]),t._v(" "),s("td",[t._v("相差不大")])]),t._v(" "),s("tr",[s("td",[t._v("优化编译实现")]),t._v(" "),s("td",[t._v("很难")]),t._v(" "),s("td",[t._v("较容易")])]),t._v(" "),s("tr",[s("td",[t._v("控制逻辑实现方式")]),t._v(" "),s("td",[t._v("绝大部分为微程序控制（即软件实现）")]),t._v(" "),s("td",[t._v("绝大多数为硬连线实现")])])])]),t._v(" "),s("p",[t._v("RISC 寄存器多，因为只有 load/store 能够访问内存，其他指令要访问数据只能通过寄存器")]),t._v(" "),s("p",[t._v("RISC 程序长，因为每条指令精简，所以需要很多指令来完成一件事，造成程序较长，即"),s("code",[t._v("总事件 / 单个任务大小 = 任务数量")])]),t._v(" "),s("p",[t._v("RISC 采用硬布线逻辑，也叫组合逻辑，底层逻辑全使用硬件实现，因为指令简单且执行速度快很多")])])}),[],!1,null,null,null);s.default=m.exports}}]);