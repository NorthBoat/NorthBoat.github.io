(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1583:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[n("em",[s._v("Nginx")]),s._v(" (engine x) 是一个高性能的"),n("a",{attrs:{href:"https://baike.baidu.com/item/HTTP",target:"_blank",rel:"noopener noreferrer"}},[s._v("HTTP"),n("OutboundLink")],1),s._v("和"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86/7793488",target:"_blank",rel:"noopener noreferrer"}},[s._v("反向代理"),n("OutboundLink")],1),s._v("web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的")]),s._v(" "),n("p",[s._v("其将"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E6%BA%90%E4%BB%A3%E7%A0%81/3814213",target:"_blank",rel:"noopener noreferrer"}},[s._v("源代码"),n("OutboundLink")],1),s._v("以类"),n("a",{attrs:{href:"https://baike.baidu.com/item/BSD%E8%AE%B8%E5%8F%AF%E8%AF%81/10642412",target:"_blank",rel:"noopener noreferrer"}},[s._v("BSD许可证"),n("OutboundLink")],1),s._v("的形式发布，因它的稳定性、丰富的功能集、简单的配置文件和低系统资源的消耗而闻名")]),s._v(" "),n("p",[s._v("Nginx是一款轻量级的Web服务器/"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86/7793488",target:"_blank",rel:"noopener noreferrer"}},[s._v("反向代理"),n("OutboundLink")],1),s._v("服务器及"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6/111106",target:"_blank",rel:"noopener noreferrer"}},[s._v("电子邮件"),n("OutboundLink")],1),s._v("（IMAP/POP3）代理服务器，在BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上"),n("em",[s._v("Nginx")]),s._v("的并发能力在同类型的网页服务器中表现较好")])]),s._v(" "),n("h2",{attrs:{id:"代理"}},[s._v("代理")]),s._v(" "),n("h3",{attrs:{id:"正向代理"}},[s._v("正向代理")]),s._v(" "),n("p",[s._v("VPN：挂在客户端上的代理")]),s._v(" "),n("p",[s._v("客户端 —— VPN ——> 服务器")]),s._v(" "),n("h3",{attrs:{id:"反向代理"}},[s._v("反向代理")]),s._v(" "),n("blockquote",[n("p",[s._v("挂在服务器上的代理")])]),s._v(" "),n("p",[s._v("作为中间代理分发请求给服务器，实现负载均衡")]),s._v(" "),n("p",[s._v("如访问"),n("code",[s._v("www.baidu.com")]),s._v("，服务端代理这个域名，将请求分发给不同的服务器去接收请求")]),s._v(" "),n("h2",{attrs:{id:"负载均衡"}},[s._v("负载均衡")]),s._v(" "),n("p",[s._v("轮询：请求依次打到服务器（循环链表）")]),s._v(" "),n("p",[s._v("加权轮询：优先打到权重较高的服务器，保证服务器性能最大化")]),s._v(" "),n("p",[s._v("IPHash：")]),s._v(" "),n("ul",[n("li",[s._v("Session保存在Tomcat中，用Redis共享Session")]),s._v(" "),n("li",[s._v("通过IP进行计算，固定的IP打到固定的服务器，这样Session就不会丢失，但一旦这台服务器挂了，Session也全没了")])]),s._v(" "),n("p",[s._v("动静分离：静态资源直接通过Nginx返回，不走项目，如前端静态网页")]),s._v(" "),n("h2",{attrs:{id:"基本使用"}},[s._v("基本使用")]),s._v(" "),n("h3",{attrs:{id:"搭建"}},[s._v("搭建")]),s._v(" "),n("p",[s._v("安装")]),s._v(" "),n("p",[s._v("上传安装包")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-axvf")]),s._v(" nginx-1.20.2.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.20.2.tar.gz\n\n./configure\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx\n/usr/local/nginx\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("启动命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" sbin\n./nginx\n\n./nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" stop "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止")]),s._v("\n\n./nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" quit "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安全退出，处理完请求后退出")]),s._v("\n\n./nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新加载配置")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看nginx进程")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"使用"}},[s._v("使用")]),s._v(" "),n("p",[s._v("核心配置文件 nginx.conf")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#user  nobody;")]),s._v("\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  notice;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  info;")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pid        logs/nginx.pid;")]),s._v("\n\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大worker数量")]),s._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#                  '$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#                  \'"$http_user_agent" "$http_x_forwarded_for"\';')]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  logs/access.log  main;")]),s._v("\n\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#keepalive_timeout  0;")]),s._v("\n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gzip  on;")]),s._v("\n\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#charset koi8-r;")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  logs/host.access.log  main;")]),s._v("\n\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page  404              /404.html;")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect server error pages to the static page /50x.html")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    proxy_pass   http://127.0.0.1;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ \\.php$ {")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    root           html;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_pass   127.0.0.1:9000;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_index  index.php;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    include        fastcgi_params;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deny access to .htaccess files, if Apache's document root")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# concurs with nginx's one")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#location ~ /\\.ht {")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    deny  all;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       8000;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       somename:8080;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  somename  alias  another.alias;")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HTTPS server")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       443 ssl;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  localhost;")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate      cert.pem;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate_key  cert.key;")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_cache    shared:SSL:1m;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_timeout  5m;")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_prefer_server_ciphers  on;")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br")])]),n("p",[s._v("配置server")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置负载均衡")]),s._v("\nupstream PerformanceSystem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 邮件发送服务器资源")]),s._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8084 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tserver "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8085 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tlisten       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tserver_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n\tlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\troot   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tindex  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置服务")]),s._v("\n\t\tproxy_pass http://PerformanceSystem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\terror_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  /50x.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tlocation "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\troot   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("热部署")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样将没有任何征兆地更新配置并添加服务")]),s._v(" "),n("p",[s._v("更多：动静分离、重写")])])}),[],!1,null,null,null);n.default=e.exports}}]);