(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1372:function(t,a,s){"use strict";s.r(a);var v=s(4),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("blockquote",[a("p",[t._v("往往只考一个选择题")]),t._v(" "),a("p",[t._v("物理层通过一套定义、规范，从离散信号、连续信号中解析数据(0/1)")])]),t._v(" "),a("p",[t._v("物理层的功能：屏蔽不同传输媒体和通信手段的差异，透明地传输比特流")]),t._v(" "),a("p",[t._v("物理层特性")]),t._v(" "),a("ul",[a("li",[t._v("机械特性：外观特征")]),t._v(" "),a("li",[t._v("电气特性：每条线路上的电压范围")]),t._v(" "),a("li",[t._v("功能特性：线是干啥的")]),t._v(" "),a("li",[t._v("过程特性（时间特性）：可能事件的出现顺序")])]),t._v(" "),a("p",[t._v("通信模型：PC - 调制解调器(字-模拟信号) - 公网 - 调制解调器(模拟信号-字) - PC")]),t._v(" "),a("h2",{attrs:{id:"传输媒体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输媒体"}},[t._v("#")]),t._v(" 传输媒体")]),t._v(" "),a("p",[t._v("传输媒体，也叫传输介质或传输媒介")]),t._v(" "),a("h3",{attrs:{id:"导引型传输媒体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导引型传输媒体"}},[t._v("#")]),t._v(" 导引型传输媒体")]),t._v(" "),a("p",[t._v("有线的，信号沿着固体传播")]),t._v(" "),a("ul",[a("li",[t._v("双绞线：电信号，最慢，最常见，两根绞在一起的目的是为了减少串扰\n"),a("ul",[a("li",[t._v("屏蔽双绞线")]),t._v(" "),a("li",[t._v("无屏蔽双绞线")]),t._v(" "),a("li",[t._v("不同绞合度的双绞线")])])]),t._v(" "),a("li",[t._v("同轴电缆：电信号，带宽取决于电缆的质量")]),t._v(" "),a("li",[t._v("光纤：光传输（全反射），最快\n"),a("ul",[a("li",[t._v("多摸光纤")]),t._v(" "),a("li",[t._v("单模光纤：类似于直线传播")])])])]),t._v(" "),a("h3",{attrs:{id:"非导引型传输媒体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非导引型传输媒体"}},[t._v("#")]),t._v(" 非导引型传输媒体")]),t._v(" "),a("p",[t._v("无线的，指自由空间，利用短波通信")]),t._v(" "),a("ul",[a("li",[t._v("微波，在空间中直线传播，所以需要塔台中转\n"),a("ul",[a("li",[t._v("地面微波接力通信")]),t._v(" "),a("li",[t._v("卫星通信")])])]),t._v(" "),a("li",[t._v("宽带接入技术")])]),t._v(" "),a("p",[t._v("100 BaseT，100基带的双绞线")]),t._v(" "),a("p",[t._v("100 BaseF ，100基带的光纤")]),t._v(" "),a("p",[t._v("频谱")]),t._v(" "),a("h3",{attrs:{id:"介质通信模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介质通信模式"}},[t._v("#")]),t._v(" 介质通信模式")]),t._v(" "),a("ul",[a("li",[t._v("单向通信（单工通信）：江河")]),t._v(" "),a("li",[t._v("双向交替通信（半双工通信）：水管")]),t._v(" "),a("li",[t._v("双向同时通信（全双工通信）：同时发送和接受")])]),t._v(" "),a("h2",{attrs:{id:"调制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调制"}},[t._v("#")]),t._v(" 调制")]),t._v(" "),a("blockquote",[a("p",[t._v("重点！")]),t._v(" "),a("p",[t._v("在信号（载体）中识别数据")])]),t._v(" "),a("p",[t._v("调制方式")]),t._v(" "),a("ul",[a("li",[t._v("基带调制：其他信号 ——> 数字信号（离散信号），编码")]),t._v(" "),a("li",[t._v("带通调制：其他信号 ——> 模拟信号（连续信号），调制")])]),t._v(" "),a("h3",{attrs:{id:"编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码"}},[t._v("#")]),t._v(" 编码")]),t._v(" "),a("p",[t._v("常见的编码方式：目的是区分0/1")]),t._v(" "),a("ul",[a("li",[t._v("归零（RZ）和不归零制（NRZ），差分不归零制（NRZI）\n"),a("ul",[a("li",[t._v("高电位1,低电位为0")]),t._v(" "),a("li",[t._v("不归零制从高电位垂直下降到低点位")]),t._v(" "),a("li",[t._v("归零制在转换时会在0电位停留一段时间")]),t._v(" "),a("li",[t._v("差分不归零会比较相邻二者的信号，一样则为0,不同则为1")])])]),t._v(" "),a("li",[t._v("曼彻斯特\n"),a("ul",[a("li",[t._v("每个时钟信号都是一高一低组成")]),t._v(" "),a("li",[t._v("在同一时钟信号中，从低到高表示0，从高到低表示1")])])]),t._v(" "),a("li",[t._v("差分曼彻斯特\n"),a("ul",[a("li",[t._v("差分指相邻两个的关系，看前一段的后半部分，后一段的前半部分，如果不同即为0，一样则为1")])])])]),t._v(" "),a("p",[t._v("常考题型：给一段数去对图，给一个图去对数")]),t._v(" "),a("p",[t._v("区别")]),t._v(" "),a("ul",[a("li",[t._v("曼彻斯特编码的信号变化频率高于归零编码")]),t._v(" "),a("li",[t._v("不归零制无法区分时钟信号的边界，没有自同步能力；而曼彻斯特每个时钟信号都是一高一低，能够自区分")])]),t._v(" "),a("h3",{attrs:{id:"调制-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调制-2"}},[t._v("#")]),t._v(" 调制")]),t._v(" "),a("p",[t._v("其他信号 ——> 模拟信号，目的仍是区分0/1")]),t._v(" "),a("p",[t._v("基本的二元制调制方法")]),t._v(" "),a("ul",[a("li",[t._v("调幅（AM）：调制载波振幅，0的时候幅度小，1的时候幅度大")]),t._v(" "),a("li",[t._v("调频（FM）：调制载波频率，0的时候频率低，1的时候频率高")]),t._v(" "),a("li",[t._v("调相（PM）：调制载波初始相位，0和1的初始相位不同")])]),t._v(" "),a("p",[t._v("正交振幅调制（QAM）：分四个象限，接受不同范围内的点（载体），不同象限对应不同的二进制编码，如第一象限表示 0000-0100")]),t._v(" "),a("p",[t._v("每个信号所携带的比特数为 log(M*N)，M是相位，N是振幅")]),t._v(" "),a("h2",{attrs:{id:"信道的极限容量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信道的极限容量"}},[t._v("#")]),t._v(" 信道的极限容量")]),t._v(" "),a("blockquote",[a("p",[t._v("重点，和调制64开")])]),t._v(" "),a("h3",{attrs:{id:"码元和比特率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#码元和比特率"}},[t._v("#")]),t._v(" 码元和比特率")]),t._v(" "),a("p",[t._v("码元：信号的不同形状")]),t._v(" "),a("p",[t._v("波特率：码元 / s")]),t._v(" "),a("p",[t._v("比特率：bit / s")]),t._v(" "),a("ul",[a("li",[t._v("若一个码元 n bit，则比特率为 n x 波特率")]),t._v(" "),a("li",[t._v("码元的比特量 n = logV，V 为码元数。对 V 种码元进行二进制编码。若 V = 2，则编码为0,1，一个码元的比特量为1；若 V = 4，则编码为 00,01,10,11，码元的比特量为2，以此类推")])]),t._v(" "),a("p",[t._v("数据的传输过程中")]),t._v(" "),a("ul",[a("li",[t._v("存在失真和各种干扰")]),t._v(" "),a("li",[t._v("波特率越高，距离越远，干扰的影响越大，波形（码元）的失真就越严重")])]),t._v(" "),a("h3",{attrs:{id:"奈奎斯特定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#奈奎斯特定理"}},[t._v("#")]),t._v(" 奈奎斯特定理")]),t._v(" "),a("blockquote",[a("p",[t._v("奈氏准则")])]),t._v(" "),a("p",[t._v("码元的传输速率上限值 B = 2W")]),t._v(" "),a("ul",[a("li",[t._v("W 为带宽大小")])]),t._v(" "),a("p",[t._v("若有 V 种码元（每个码元数据量为 logV bit），则极限数据传输速率 C = 2W log V bit/s")]),t._v(" "),a("p",[t._v("采样定理：采样频率（在单位波段中采样个数）>= 两倍原始频率，就可以把所有频率采出来")]),t._v(" "),a("p",[t._v("信噪比：真实环境中的干扰，信号的平均功率和噪声的平均功率之比")]),t._v(" "),a("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"},attrs:{jax:"SVG",display:"true"}},[a("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"27.719ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 12251.7 1000","aria-hidden":"true"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("text",{attrs:{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"}},[t._v("信")])]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(1000,0)"}},[a("text",{attrs:{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"}},[t._v("噪")])]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(2000,0)"}},[a("text",{attrs:{"data-variant":"normal",transform:"scale(1,-1)","font-size":"884px","font-family":"serif"}},[t._v("比")])]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(3000,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(3389,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D451",d:"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(3909,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(4668,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(5334.8,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),a("g",{attrs:{"data-mml-node":"mn",transform:"translate(6390.6,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500,0)"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(7390.6,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D459",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(7688.6,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D45C",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}})]),a("g",{attrs:{"data-mml-node":"msub",transform:"translate(8173.6,0)"}},[a("g",{attrs:{"data-mml-node":"mi"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),a("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(510,-150) scale(0.707)","data-mjx-texclass":"ORD"}},[a("g",{attrs:{"data-mml-node":"mn"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500,0)"}})])])]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(9440.7,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(9829.7,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D446",d:"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"}})]),a("g",{attrs:{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(10474.7,0)"}},[a("g",{attrs:{"data-mml-node":"mo"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}})])]),a("g",{attrs:{"data-mml-node":"mi",transform:"translate(10974.7,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"}})]),a("g",{attrs:{"data-mml-node":"mo",transform:"translate(11862.7,0)"}},[a("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})])])])]),a("mjx-assistive-mml",{staticStyle:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"},attrs:{unselectable:"on",display:"block"}},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("mi",{attrs:{mathvariant:"normal"}},[t._v("信")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("噪")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("比")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("d")]),a("mi",[t._v("B")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("mn",[t._v("10")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("msub",[a("mi",[t._v("g")]),a("mrow",{attrs:{"data-mjx-texclass":"ORD"}},[a("mn",[t._v("10")])],1)],1),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("S")]),a("mrow",{attrs:{"data-mjx-texclass":"ORD"}},[a("mo",[t._v("/")])],1),a("mi",[t._v("N")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("p",[t._v("当 S/N = 10 时，信噪比为 10 dB，当 S/N 为 1000 时，信噪比为 30 dB")]),t._v(" "),a("h3",{attrs:{id:"香农定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#香农定理"}},[t._v("#")]),t._v(" 香农定理")]),t._v(" "),a("p",[t._v("在有噪声的环境中，极限数据传输率 C = W log (1+S/N)")]),t._v(" "),a("ul",[a("li",[t._v("证明只要带宽一定，平均功率和噪声平均功率一定，速率就固定了")])]),t._v(" "),a("p",[t._v("注意：以上提供了两种计算最大数据率的公式（奈氏准则和香农定理），在考试中应以更小的一个作为答案")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("五个公式")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("C = B x N = B x log V")]),t._v(" "),a("td",[t._v("C 数据传输比特率，N 为每个码元的数据量，B 为波特率(Baud)，V 为码元种数")])]),t._v(" "),a("tr",[a("td",[t._v("B = 2W")]),t._v(" "),a("td",[t._v("B 码元传输率的上限，W 为带宽")])]),t._v(" "),a("tr",[a("td",[t._v("C = 2Wlog V")]),t._v(" "),a("td",[t._v("C 数据传输比特率的上限，V 为码元种数")])]),t._v(" "),a("tr",[a("td",[t._v("dB = 10 log10 (S/N)")]),t._v(" "),a("td",[t._v("信噪比 dB，S 为信号平均功率，N 为噪声平均功率")])]),t._v(" "),a("tr",[a("td",[t._v("C = W log(1+S/N)")]),t._v(" "),a("td",[t._v("C 数据传输比特率上限")])])])]),t._v(" "),a("p",[t._v("例题知识点：")]),t._v(" "),a("ul",[a("li",[t._v("影响信道最大传输速率的因素：B+V 或 W+dB")]),t._v(" "),a("li",[t._v("波形数量 = 相位数 x 振幅数")])]),t._v(" "),a("h2",{attrs:{id:"物理层设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理层设备"}},[t._v("#")]),t._v(" 物理层设备")]),t._v(" "),a("h3",{attrs:{id:"中继器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中继器"}},[t._v("#")]),t._v(" 中继器")]),t._v(" "),a("p",[t._v("碰撞域，也叫冲突域，不同站点发送的帧在传输线路上有所碰撞的网络区域")]),t._v(" "),a("p",[t._v("为什么要有中继器？")]),t._v(" "),a("ul",[a("li",[t._v("避免长距离传输造成的失真")])]),t._v(" "),a("p",[t._v("中继器的作用：将衰减得不完整的信号经过整理重新产生出完整的信号再继续传送，实现一个得以扩展的网络")]),t._v(" "),a("ul",[a("li",[t._v("工作区域：物理层")]),t._v(" "),a("li",[t._v("本质作用：信号再生；简单地转发比特")])]),t._v(" "),a("p",[t._v("中继器的转发面向所有连接中继器的站点，这种转发模式叫做广播，在拓扑上属于星型网络；又因为数据在所有连接中继器的机器上共享（没有中心之分），所以中继器组成的局域网在逻辑上其实是一种总线型网络")]),t._v(" "),a("p",[t._v("在总线型网络中为了避免冲突，各站点必须控制传输媒体，时刻至多允许一个站点发送数据；自然的，根据定义，处于中继器网络中的不同站点属于同一个碰撞域")]),t._v(" "),a("ul",[a("li",[t._v("中继器以太网是一个独立的碰撞域，同时只能允许一个站点发送数据（也属于同一个广播域）")]),t._v(" "),a("li",[t._v("中继器工作在物理层，他的接口仅仅简单的发送比特，不能连接不同速率、规格的网段")]),t._v(" "),a("li",[t._v("中继器仅作用于信号的电气部分")]),t._v(" "),a("li",[t._v("中继器以太网站点共享带宽，不能同时发送数据，即 1s 内，所有站点共发带宽等值的比特，于是各站点平均带宽为：带宽 / 站点数")])]),t._v(" "),a("p",[t._v("发大器和中继器的区别：")]),t._v(" "),a("ul",[a("li",[t._v("发大器放大的模拟信号，同时增大了噪声")]),t._v(" "),a("li",[t._v("中继器作用的是数字信号，并且是再生，重点在还原，不同于放大")])]),t._v(" "),a("h3",{attrs:{id:"集线器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集线器"}},[t._v("#")]),t._v(" 集线器")]),t._v(" "),a("p",[t._v("中继器是集线器的前身，实际上就是一种多端口的中继器，扩大了碰撞域")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);