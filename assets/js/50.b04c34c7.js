(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1545:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"目的及环境"}},[s._v("目的及环境")]),s._v(" "),n("h3",{attrs:{id:"实验目的"}},[s._v("实验目的")]),s._v(" "),n("p",[s._v("掌握 8253 计数特点和编程方法。掌握 8253 工作方式 3 的基本工作原理、计数特点和编程方法")]),s._v(" "),n("p",[s._v("实验环境")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Tpc-zk-II")]),s._v("集成开发环境")]),s._v(" "),n("li",[s._v("微机原理与接口技术实验箱")])]),s._v(" "),n("h3",{attrs:{id:"实验原理"}},[s._v("实验原理")]),s._v(" "),n("p",[s._v("8253/8254 内部结构")]),s._v(" "),n("ul",[n("li",[s._v("三个16位"),n("strong",[s._v("减一")]),s._v("计数单元")]),s._v(" "),n("li",[s._v("控制寄存器")])]),s._v(" "),n("p",[s._v("8253 芯片结构示意图")]),s._v(" "),n("img",{attrs:{src:a(500)}}),s._v(" "),n("p",[s._v("各地址信号组合功能")]),s._v(" "),n("img",{attrs:{src:a(501)}}),s._v(" "),n("p",[s._v("8253/8254 的编程命令：作为可编程器件，8253/8254是通过命令字来控制其工作方式的，命令字有两类")]),s._v(" "),n("ul",[n("li",[s._v("初始化编程命令：用于设定计数器的功能、工作方式；")]),s._v(" "),n("li",[s._v("锁存读出命令：用于读出计数器中的计数值，或计数器的状态（8254）")])]),s._v(" "),n("p",[s._v("8253/8254 的初始化控制字")]),s._v(" "),n("img",{attrs:{src:a(502)}}),s._v(" "),n("p",[s._v("8253 具有三个计数器"),n("code",[s._v("CNT0、CNT1、CNT2")]),s._v("，还有一个控制寄存器，它们各占一个地址（由引脚A1、A0确定）；在每一个计数器"),n("code",[s._v("CNTi")]),s._v("中，有三个部分构成，初值寄存器"),n("code",[s._v("CR")]),s._v("、减一计数器"),n("code",[s._v("CE")]),s._v("和输出锁存器"),n("code",[s._v("OL")])]),s._v(" "),n("img",{attrs:{src:a(503)}}),s._v(" "),n("p",[s._v("8253/8254 的初始化编程：初始化编程操作的顺序是：先想控制寄存器写入命令字，然后写入初值。如果是 16 位初值时，必须是先写入低 8 位初值，然后再写入高 8 位初值，最后输出锁存命令（读计数器的计数值），将当前的计数器的计数值捕捉到输出锁存器"),n("code",[s._v("OL")]),s._v("中")]),s._v(" "),n("h2",{attrs:{id:"实验步骤及分析"}},[s._v("实验步骤及分析")]),s._v(" "),n("h3",{attrs:{id:"计数实验"}},[s._v("计数实验")]),s._v(" "),n("p",[s._v("实验流程")]),s._v(" "),n("img",{attrs:{src:a(504)}}),s._v(" "),n("p",[s._v("编写汇编代码程序")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data segment\n\tio0 equ 280h\n\tio1 equ 281h\n\tio2 equ 282h\n\tiok equ 283h\ndata ends\ncode segment\nassume cs:code,ds:data\nstart:\n\tmov ax,data\n\tmov ds,ax\n\tmov dx,iok\n\tmov al,14h\n\tout dx,al\n\tmov dx,io0\n\tmov al,9\n\tout dx,al\n\tr1:mov dx,io0\n\tin al,dx\n\tcall dis\n\tmov ah,1\n\tint 16h\n\tjz r1\n\tmov ah,4ch\n\tint 21h\n\tdis proc\n\tpush ax\n\tpush dx\n\tadd al,30h\n\tmov dl,al\n\tmov ah,2\n\tint 21h\n\tpop dx\n\tpop ax\n\tret\n\tdis endp\n\there:jmp here\ncode ends\nend start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("p",[s._v("按图连接电路，将计数器0设置为方式2，计数器初值为N（N<=0FH），用手逐个输入单脉冲，编程使计数值在屏幕上显示，用逻辑笔观察OUT0电平变化（当输入N+1个脉冲后OUT0变高电平）")]),s._v(" "),n("img",{attrs:{src:a(505)}}),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("接线")]),s._v(" "),n("th")])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("8254/CLK0")]),s._v(" "),n("td",[s._v("单脉冲/正脉冲")])]),s._v(" "),n("tr",[n("td",[s._v("8254/CS")]),s._v(" "),n("td",[s._v("I/O译码/Y0（280H---287H）")])]),s._v(" "),n("tr",[n("td",[s._v("8254/OUT0")]),s._v(" "),n("td",[s._v("LED显示/L7 或 逻辑笔")])]),s._v(" "),n("tr",[n("td",[s._v("8254/GATE0")]),s._v(" "),n("td",[s._v("+5V")])])])]),s._v(" "),n("p",[s._v("点击运行，记录计数过程")]),s._v(" "),n("img",{attrs:{src:a(506)}}),s._v(" "),n("h3",{attrs:{id:"定时实验"}},[s._v("定时实验")]),s._v(" "),n("p",[s._v("编写汇编代码程序")]),s._v(" "),n("div",{staticClass:"language-assembly line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("data segment\nio0 equ 280h\nio1 equ 281h\nio2 equ 282h\niok equ 283h\ndata ends\ncode segment\nassume cs:code,ds:data\nstart:\n    mov ax,data\n    mov ds,ax\n    mov dx,iok\n    mov al,36h\n    out dx,al\n    mov dx,io0\n    mov ax,1000\n    out dx,al\n    mov al,ah\n    out dx,al\n    mov dx,iok\n    mov al,76h\n    out dx,al\n    mov dx,io1\n    mov ax,1000\n    out dx,al\n    mov al,ah\n    out dx,al\nhere:jmp here\ncode ends\nend start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("按下图 连接电路，将计数器0、计数器1分别设置工作方式，CLK0连接时钟1MHZ，由  T01000分频后变为1000HZ，再由T1进行1000分频后得1HZ")]),s._v(" "),n("img",{attrs:{src:a(507)}}),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("接线")]),s._v(" "),n("th")])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("8254/CLK0")]),s._v(" "),n("td",[s._v("时钟/1MHz")])]),s._v(" "),n("tr",[n("td",[s._v("8254/CS")]),s._v(" "),n("td",[s._v("I/O译码/Y0（280H---287H）")])]),s._v(" "),n("tr",[n("td",[s._v("8254/OUT0")]),s._v(" "),n("td",[s._v("LED显示/L7 或 逻辑笔")])]),s._v(" "),n("tr",[n("td",[s._v("8254/GATE0,GATE1")]),s._v(" "),n("td",[s._v("+5V")])]),s._v(" "),n("tr",[n("td",[s._v("8254/OUT1")]),s._v(" "),n("td",[s._v("逻辑笔")])])])]),s._v(" "),n("p",[s._v("运行程序，可以看到指示灯如下描述闪烁：高低电平每变化一次，计数加一，计数由两位二进制组成，如")]),s._v(" "),n("ul",[n("li",[s._v("在"),n("code",[s._v("0")]),s._v("时刻，计数为"),n("code",[s._v("00")]),s._v("，两个指示灯均暗")]),s._v(" "),n("li",[s._v("在"),n("code",[s._v("1")]),s._v("时刻，高低电平变化，计数变为"),n("code",[s._v("01")]),s._v("，第一个指示灯暗，第二个指示灯亮")]),s._v(" "),n("li",[s._v("在"),n("code",[s._v("2")]),s._v("时刻，高低电平变化，计数为"),n("code",[s._v("10")]),s._v("，第一个指示灯亮，第二个指示灯暗")]),s._v(" "),n("li",[s._v("在"),n("code",[s._v("3")]),s._v("时刻，计数为"),n("code",[s._v("11")]),s._v("，两个指示灯均亮")]),s._v(" "),n("li",[s._v("在"),n("code",[s._v("4")]),s._v("时刻，计数为"),n("code",[s._v("00")]),s._v("，两个指示灯均暗")])])])}),[],!1,null,null,null);n.default=e.exports},500:function(s,n,a){s.exports=a.p+"assets/img/image-20230406095009956.984755a2.png"},501:function(s,n){s.exports="data:image/png;base64,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"},502:function(s,n,a){s.exports=a.p+"assets/img/image-20230406095315846.04d72260.png"},503:function(s,n,a){s.exports=a.p+"assets/img/image-20230409100556044.fd44d409.png"},504:function(s,n,a){s.exports=a.p+"assets/img/image-20230409100630614.8fcf8350.png"},505:function(s,n,a){s.exports=a.p+"assets/img/image-20230409101036748.aa3e1c45.png"},506:function(s,n,a){s.exports=a.p+"assets/img/count.2c5c3056.png"},507:function(s,n,a){s.exports=a.p+"assets/img/image-20230409101423583.872fd97c.png"}}]);