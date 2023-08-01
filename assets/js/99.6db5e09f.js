(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1155:function(s,e,a){s.exports=a.p+"assets/img/20181230195451513.a904dfde.jpg"},1400:function(s,e,a){"use strict";a.r(e);var t=a(3),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("第一台服务器：CentOS7.6，基于Red Hat Linux，狗阿里坑我钱财")])]),s._v(" "),e("h2",{attrs:{id:"linux-基本使用"}},[s._v("LInux  基本使用")]),s._v(" "),e("h3",{attrs:{id:"基本命令"}},[s._v("基本命令")]),s._v(" "),e("p",[s._v("常用")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 显示当前文件路径\npwd\n# 查看当前目录所有文件\nls\n# 获取root权限\nsudo su\n# 切换目录\ncd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("vim")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim test.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("按"),e("code",[s._v(":")]),s._v("对vim进行功能选择")]),s._v(" "),e("ul",[e("li",[s._v("开始编辑："),e("code",[s._v("i")])]),s._v(" "),e("li",[s._v("不保存退出："),e("code",[s._v("q!")])]),s._v(" "),e("li",[s._v("保存并退出："),e("code",[s._v("wq!")])])]),s._v(" "),e("p",[s._v("文件和文件夹")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建文件夹\nmkdir\n# 创建文件\ntouch\n# 查看文件\ncat\ntail\nless\n# 重命名文件：将A改为B\nmv A B\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("删库跑路")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo rm -rf /*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解压缩")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar -zxvf -C\ntar -xvf mysql-8.0.16-2.el7.x86_64.rpm-bundle.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("服务")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 启动\nsystemctl start .service\n# 重启\nsystemctl restart .service\n# 停止\nsystemctl stop .service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("赋予权限："),e("code",[s._v("+rw")]),s._v("为赋予读写权限，"),e("code",[s._v("-w")]),s._v("为删除写权限")]),s._v(" "),e("p",[s._v("每个文件的权限由三部分组成")]),s._v(" "),e("img",{attrs:{src:a(1155)}}),s._v(" "),e("ul",[e("li",[s._v("owner 属主，缩写u")]),s._v(" "),e("li",[s._v("group 属组，缩写g")]),s._v(" "),e("li",[s._v("other 其他，缩写o")])]),s._v(" "),e("p",[s._v("权限类型有三种")]),s._v(" "),e("ul",[e("li",[s._v("r：Read 读")]),s._v(" "),e("li",[s._v("w：Write 写")]),s._v(" "),e("li",[s._v("x：eXecute 执行")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo chmod +rw xxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("权限的数字表示法：所谓数字表示法，是指将r、w和x分别用4、2、1来代表，没有授予权限的则为0，然后把权限相加，如下：")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("原始权限")]),s._v(" "),e("th",[s._v("转换为数字")]),s._v(" "),e("th",[s._v("数字表示法")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("rwxrwxr-x")]),s._v(" "),e("td",[s._v("(421)(421)(401)")]),s._v(" "),e("td",[s._v("775")])]),s._v(" "),e("tr",[e("td",[s._v("rwxr-xr-x")]),s._v(" "),e("td",[s._v("(421)(401)(401)")]),s._v(" "),e("td",[s._v("755")])])])]),s._v(" "),e("h3",{attrs:{id:"本地连接"}},[s._v("本地连接")]),s._v(" "),e("p",[s._v("用WinSCP和PuTTY连接远程服务器")]),s._v(" "),e("ul",[e("li",[s._v("下载WinSCP和PuTTY，")]),s._v(" "),e("li",[s._v("在WinSCP用服务器外网ip、linux用户名（一般为root）以及登录密码远程连接服务器文件系统")]),s._v(" "),e("li",[s._v("在WinSCP中开启PuTTY，远程连接linux终端")])]),s._v(" "),e("p",[s._v("宝塔面板：有后门，蚌")]),s._v(" "),e("h3",{attrs:{id:"自定义命令和系统服务"}},[s._v("自定义命令和系统服务")]),s._v(" "),e("p",[s._v("Linux设置快捷键：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim ~/.bashrc\nsource .bashrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("通过配置bashrc文件创建自定义linux命令（快捷键）")]),s._v(" "),e("p",[s._v("在新版本的"),e("code",[s._v("linux")]),s._v("中，启动一项服务时，系统会首先找"),e("code",[s._v("/etc/systemd/system/")]),s._v("中的 .service文件，通过该文件连接到"),e("code",[s._v("/lib/systemd/system")]),s._v("中")]),s._v(" "),e("p",[s._v("即为")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl start docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("的一部分执行过程")]),s._v(" "),e("p",[s._v("更多：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.linuxcool.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux命令手册"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"http://c.biancheng.net/view/735.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("第一个Shell脚本"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"内网穿透"}},[s._v("内网穿透")]),s._v(" "),e("blockquote",[e("p",[s._v("使用frp进行内网穿透")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.unvone.com/72356.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("FRP 内网穿透反向代理实现 Windows 远程桌面连接 - 合一学院 (unvone.com)"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"服务端"}},[s._v("服务端")]),s._v(" "),e("p",[s._v("就是利用"),e("code",[s._v("frp")]),s._v("这个软件对端口进行映射，需要一个具有公网"),e("code",[s._v("ip")]),s._v("的服务器")]),s._v(" "),e("p",[s._v("配置"),e("code",[s._v("frps.ini")]),s._v("文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[common]\nbind_port = 7000\n             \ndashboard_port = 7500\ndashboard_user = admin\ndashboard_pwd = 123456\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("其中"),e("code",[s._v("7000")]),s._v("是对外开放的端口，需要开启防火墙供人访问")]),s._v(" "),e("li",[e("code",[s._v("dashboard")]),s._v("是"),e("code",[s._v("frp")]),s._v("自提供的一个监控平台，观察各种连接信息\n"),e("ul",[e("li",[e("code",[s._v("dashboard_port")]),s._v("是网站入口")]),s._v(" "),e("li",[e("code",[s._v("dashboard_user")]),s._v("是用户名")]),s._v(" "),e("li",[e("code",[s._v("dashboard_pwd")]),s._v("是密码")])])])]),s._v(" "),e("p",[s._v("启动"),e("code",[s._v("frp")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./frps -c frps.ini\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("编辑"),e("code",[s._v("frps.service")]),s._v("方便开机自启")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim /etc/systemd/system/frps.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[Unit]\nDescription=frps daemon\nAfter=syslog.target  network.target\nWants=network.target\n[Service]\nType=simple\n# frp的路径\nExecStart=/root/frp_0.34.3_linux_amd64/frps -c /root/frp_0.34.3_linux_amd64/frps.ini\nRestart= always\nRestartSec=1min\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("ul",[e("li",[s._v("启动frps：sudo systemctl start frps")]),s._v(" "),e("li",[s._v("打开开机自启动：sudo systemctl enable frps")]),s._v(" "),e("li",[s._v("重启应用：sudo systemctl restart frps")]),s._v(" "),e("li",[s._v("停止应用：sudo systemctl stop frps")]),s._v(" "),e("li",[s._v("查看应用的日志：sudo systemctl status frps")])]),s._v(" "),e("p",[s._v("启动并开机自启")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl start frps && systemctl enable frps\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"客户端"}},[s._v("客户端")]),s._v(" "),e("p",[s._v("配置"),e("code",[s._v("frpc.ini")]),s._v("文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[common]\n# 公网ip地址\nserver_addr = 80.251.215.170\n# frps服务端口号\nserver_port = 7000\n\n[RDP]\ntype = tcp\n# 自身本地ip\nlocal_ip = 192.168.1.5\n# 自身要映射的端口号\nlocal_port = 3389\n# 要映射到的端口号\nremote_port = 7001\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("ul",[e("li",[s._v("主要"),e("code",[s._v("frps")]),s._v("配置的"),e("code",[s._v("port:7000")]),s._v("是"),e("code",[s._v("frp")]),s._v("服务的端口号，这里映射的"),e("code",[s._v("7001")]),s._v("是本地应用服务的端口号，若要访问同样需要开放"),e("code",[s._v("7001")]),s._v("端口")])]),s._v(" "),e("p",[s._v("启动"),e("code",[s._v("frp")]),s._v("客户端")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".\\frpc.exe -c frpc.ini\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"java"}},[s._v("JAVA")]),s._v(" "),e("h3",{attrs:{id:"java-应用部署"}},[s._v("JAVA 应用部署")]),s._v(" "),e("h4",{attrs:{id:"docker-tomcat"}},[s._v("Docker Tomcat")]),s._v(" "),e("p",[s._v("将 war 包 docker cp 进 tomcat 容器的 webapp 目录下，将自动解压运行")]),s._v(" "),e("h4",{attrs:{id:"java-jar"}},[s._v("java -jar")]),s._v(" "),e("p",[s._v("启动")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nohup java -jar xxxx.jar --server.port=8080 >log.txt &\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("关闭")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ps -ef|grep java\nkill -9 进程号\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"java-转-exe"}},[s._v("JAVA 转 EXE")]),s._v(" "),e("blockquote",[e("p",[s._v("将可运行的jar包转成自带环境的可运行的exe文件")])]),s._v(" "),e("h4",{attrs:{id:"exe4j"}},[s._v("Exe4j")]),s._v(" "),e("blockquote",[e("p",[s._v("使用Exe4j打包Jar包为可执行EXE文件")])]),s._v(" "),e("p",[s._v("1、准备设置")]),s._v(" "),e("p",[s._v("勾选"),e("code",[s._v('"JAR in EXE" mode')])]),s._v(" "),e("p",[s._v("给应用取个小名，设置输出路径")]),s._v(" "),e("p",[s._v("Excutable type 选择 Console application 或其他")]),s._v(" "),e("p",[s._v("设置应用名称、图标、是否允许一次运行多个程序")]),s._v(" "),e("p",[s._v("点击 Advanced Options - 32bit or 64bit，勾选 Generate 64-bit executable")]),s._v(" "),e("p",[s._v("2、JAR包设置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("点击右侧"),e("code",[s._v("+")]),s._v("号添加 JAR 包（勾选 Archive 通过目录打开）")])]),s._v(" "),e("li",[e("p",[s._v("点击右下"),e("code",[s._v("...")]),s._v("选择 Main 函数入口")])]),s._v(" "),e("li",[e("p",[s._v("设置运行环境（JDK）版本")])]),s._v(" "),e("li",[e("p",[s._v("一路下一步即可")])])]),s._v(" "),e("p",[s._v("中间有一些细节配置，可仔细阅读")]),s._v(" "),e("p",[s._v("3、其他")]),s._v(" "),e("p",[s._v("在准备设置中设置的输出目录找到对应 exe 文件，双击运行即可")]),s._v(" "),e("p",[s._v("注意，该 exe 需要机器自带符合版本要求的 JDK 环境")]),s._v(" "),e("h4",{attrs:{id:"inno-setup"}},[s._v("Inno Setup")]),s._v(" "),e("blockquote",[e("p",[s._v("使用inno setup打包可执行EXE文件和运行环境为安装包文件")])]),s._v(" "),e("p",[s._v("1、准备")]),s._v(" "),e("p",[s._v("用 Exe4j 打包成的 exe 文件需要相应的 JDK 环境才能正常运行，为了解决这一问题，使用 InnoSetup 将 exe 和 jre 打包成一个完整的安装包")]),s._v(" "),e("p",[s._v("将 JDK 中的 jre 文件夹拷出，将 jre 和要打包的 exe 放置在同一文件夹")]),s._v(" "),e("p",[s._v("2、使用")]),s._v(" "),e("p",[s._v("点击右上角 file 选择 new 一个应用，依次填写应用名称、版本、出版者、官网，一直点击下一步直到选择 exe 应用的界面")]),s._v(" "),e("ul",[e("li",[s._v("在"),e("code",[s._v("Application main executable file")]),s._v("处选择你要打包的 exe 文件")]),s._v(" "),e("li",[s._v("添加环境文件夹，即包含了 jre 和 exe 的文件夹，如第一步选择"),e("code",[s._v("/user/admin/home/demo/demo.exe")]),s._v("，那么第二步则选择"),e("code",[s._v("/user/admin/home/demo/*")]),s._v("，其中 jre 包含在"),e("code",[s._v("/demo/")]),s._v("目录下")])]),s._v(" "),e("p",[s._v("无脑下一步，直到设置输出目录以及安装包程序名称。继续下一步，使用默认脚本构建安装包程序，等待即可")]),s._v(" "),e("p",[s._v("3、其他")]),s._v(" "),e("p",[s._v("日常使用的 JDK 的 jre 略大，会造成最终程序较大（>200MB），可在网上寻找精简版的 jre 进行打包，效果一样")])])}),[],!1,null,null,null);e.default=n.exports}}]);