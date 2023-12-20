(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1159:function(v,_,t){v.exports=t.p+"assets/img/image-20230823014330133.64a366d4.png"},1160:function(v,_,t){v.exports=t.p+"assets/img/image-20230823020439142.98e062a7.png"},1657:function(v,_,t){"use strict";t.r(_);var s=t(1),i=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("根据明文产生一个属于当前明文的特定码，用于认证内容未被修改，根据明文产生认证码，其过程就相当于将明文视作密钥，对某一初始自定义内容进行加密，这里的加密常使用 CBC 模式的 DES 算法和某些公钥算法")]),v._v(" "),_("ul",[_("li",[v._v("这和分组加密的思路是一模一样的")])]),v._v(" "),_("p",[v._v("哈希函数实际上就是对加密算法的封装，可以同时包含多种算法（包含分组加密和公钥加密），使一个较长的输入（明文）输出一个定长的较短码")]),v._v(" "),_("h2",{attrs:{id:"消息认证码"}},[v._v("消息认证码")]),v._v(" "),_("h3",{attrs:{id:"cbc-模式-des-的数据认证算法"}},[v._v("CBC 模式 DES 的数据认证算法")]),v._v(" "),_("blockquote",[_("p",[v._v("基于 CBC 模式 DES 算法")])]),v._v(" "),_("p",[v._v("消息认证码的实现和作用可以参考用于差错检测的海明码和循环冗余码，都是通过在原数据后冗余一段码用于验证，这段码和数据在传输过程中保持一个整体，若在未知密钥的情况下篡改，将破坏整段数据的完整性，从而验证失败，接收方据此得知数据出了问题")]),v._v(" "),_("p",[v._v("区别在于，循环冗余码采用二进制整除的形式验证其完整性，而消息认证码采用加密算法验证其完整性（当然，码的生成也基于加密算法，不然怎么验证）")]),v._v(" "),_("p",[v._v("消息认证算法：基于 CBC 运行模式的 DES 算法")]),v._v(" "),_("ul",[_("li",[v._v("CBC，Cipher Block Chain，密码分组链")]),v._v(" "),_("li",[v._v("DES，Data Encryption Standard，标准加密算法")])]),v._v(" "),_("p",[v._v("一毛吊样")]),v._v(" "),_("img",{attrs:{src:t(1159)}}),v._v(" "),_("p",[v._v("这里的 O 在 DES 加密中就是一个个密文分组，经过密钥 K 加密，CBC 模式的每轮密钥不变，采用将上一轮密文和当前轮明文异或再 DES 加密的形式实现扩散性，这样同一明文分组将对应不同密文组")]),v._v(" "),_("h3",{attrs:{id:"cfb-模式-des-的数据认证算法"}},[v._v("CFB 模式 DES 的数据认证算法")]),v._v(" "),_("p",[v._v("用 CFB 模式的 DES 算法模拟以 0 为初始向量的 CBC 模式 DES 数据认证算法")]),v._v(" "),_("h2",{attrs:{id:"哈希函数和生日攻击"}},[v._v("哈希函数和生日攻击")]),v._v(" "),_("p",[v._v("就是哈希函数，应满足的条件有")]),v._v(" "),_("ul",[_("li",[v._v("单向性")]),v._v(" "),_("li",[v._v("无碰撞性")])]),v._v(" "),_("img",{attrs:{src:t(1160)}}),v._v(" "),_("p",[v._v("其中性质 6 用于抵御生日攻击")]),v._v(" "),_("p",[v._v("第一类生日攻击：找到一个 y 令 h(y) 等于已知的一个哈希值 h(x)，其穷举的长度 k 至少为 n/2（n 为哈希函数所有可能的输入长度）")]),v._v(" "),_("p",[v._v("第二类生日攻击：找到一对输入 x 和 y，满足其哈希值相等，即 h(x) = h(y)，其穷举的长度 k 至少为 √n（n 为哈希函数所有可能的输入长度）")]),v._v(" "),_("h2",{attrs:{id:"md5-杂凑算法"}},[v._v("MD5 杂凑算法")]),v._v(" "),_("p",[v._v("缓冲器中，数据小端存储，产生认证码 128 位（4 个 32 位寄存器构成缓冲）")]),v._v(" "),_("h2",{attrs:{id:"安全杂凑算法-sha"}},[v._v("安全杂凑算法 SHA")]),v._v(" "),_("p",[v._v("缓冲器中，数据大端存储，产生认证码 160 位（5 个 32 位寄存器构成缓冲）")]),v._v(" "),_("h2",{attrs:{id:"hmac"}},[v._v("HMAC")]),v._v(" "),_("p",[v._v("使用哈希函数产生 MAC（Message Authentication Code，消息认证码）")])])}),[],!1,null,null,null);_.default=i.exports}}]);