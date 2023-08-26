(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1428:function(t,v,_){"use strict";_.r(v);var s=_(3),n=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"消息认证码-消息认证算法"}},[t._v("消息认证码 - 消息认证算法")]),t._v(" "),v("p",[t._v("消息认证码的实现和作用可以参考用于差错检测的海明码和循环冗余码，都是通过在原数据后冗余一段码用于验证，这段码和数据在传输过程中保持一个整体，若在未知密钥的情况下篡改，将破坏整段数据的完整性，从而验证失败，接收方据此得知数据出了问题")]),t._v(" "),v("p",[t._v("区别在于，循环冗余码采用二进制整除的形式验证其完整性，而消息认证码采用加密算法验证其完整性（当然，码的生成也基于加密算法，不然怎么验证）")]),t._v(" "),v("p",[t._v("消息认证算法：基于 CBC 运行模式的 DES 算法")]),t._v(" "),v("ul",[v("li",[t._v("CBC，Cipher Block Chain，密码分组链")]),t._v(" "),v("li",[t._v("DES，Data Encryption Standard，标准加密算法")])]),t._v(" "),v("p",[t._v("一毛吊样")]),t._v(" "),v("img",{attrs:{src:_(720)}}),t._v(" "),v("p",[t._v("这里的 O 在 DES 加密中就是一个个密文分组，经过密钥 K 加密，CBC 模式的每轮密钥不变，采用将上一轮密文和当前轮明文异或再 DES 加密的形式实现扩散性，这样同一明文分组将对应不同密文组")]),t._v(" "),v("h2",{attrs:{id:"哈希函数和生日攻击"}},[t._v("哈希函数和生日攻击")]),t._v(" "),v("p",[t._v("就是哈希函数，应满足的条件有")]),t._v(" "),v("ul",[v("li",[t._v("单向性")]),t._v(" "),v("li",[t._v("无碰撞性")])]),t._v(" "),v("img",{attrs:{src:_(721)}}),t._v(" "),v("p",[t._v("其中性质 6 用于抵御生日攻击")]),t._v(" "),v("p",[t._v("第一类生日攻击：找到一个 y 令 h(y) 等于已知的一个哈希值 h(x)，其穷举的长度 k 至少为 n/2（n 为哈希函数所有可能的输入长度）")]),t._v(" "),v("p",[t._v("第二类生日攻击：找到一对输入 x 和 y，满足其哈希值相等，即 h(x) = h(y)，其穷举的长度 k 至少为 √n（n 为哈希函数所有可能的输入长度）")]),t._v(" "),v("h2",{attrs:{id:"md5-杂凑算法"}},[t._v("MD5 杂凑算法")]),t._v(" "),v("p",[t._v("缓冲器中，数据小端存储，产生认证码 128 位（4 个 32 位寄存器构成缓冲）")]),t._v(" "),v("h2",{attrs:{id:"安全杂凑算法-sha"}},[t._v("安全杂凑算法 SHA")]),t._v(" "),v("p",[t._v("缓冲器中，数据大端存储，产生认证码 160 位（5 个 32 位寄存器构成缓冲）")]),t._v(" "),v("h2",{attrs:{id:"hmac"}},[t._v("HMAC")]),t._v(" "),v("p",[t._v("使用哈希函数产生 MAC（Message Authentication Code，消息认证码）")])])}),[],!1,null,null,null);v.default=n.exports},720:function(t,v,_){t.exports=_.p+"assets/img/image-20230823014330133.64a366d4.png"},721:function(t,v,_){t.exports=_.p+"assets/img/image-20230823020439142.98e062a7.png"}}]);