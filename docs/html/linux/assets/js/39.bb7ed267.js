(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{191:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("h2",{attrs:{id:"组件及路径"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件及路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件及路径")]),t._v(" "),r("p",[t._v("AWX部署包中不仅仅只有AWX本身，还包含一序列支持AWX运行所需的其他软件（这里称之为组件），下面列出主要组件名称、安装路径、配置文件地址等重要的信息：")]),t._v(" "),r("h3",{attrs:{id:"awx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#awx","aria-hidden":"true"}},[t._v("#")]),t._v(" AWX")]),t._v(" "),r("p",[t._v("AWX: /var/lib/awx"),r("br"),t._v("\nAWX Python package directory: /opt/awx"),r("br"),t._v("\nAWX configuration file: /etc/awx/settings.py"),r("br"),t._v("\nAnsible: /opt/awx/embedded/lib/python2.7/site-packages/ansible")]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[t._v("TATIC_ROOT "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/opt/awx/static'")]),t._v("\nPROJECTS_ROOT "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/var/lib/awx/projects'")]),t._v("\nJOBOUTPUT_ROOT "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/var/lib/awx/job_status'")]),t._v("\n")])])]),r("h3",{attrs:{id:"python"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python","aria-hidden":"true"}},[t._v("#")]),t._v(" Python")]),t._v(" "),r("p",[t._v("PHP Configuration File: "),r("em",[t._v("/etc/php.ini")]),r("br"),t._v("\nPHP Modules Configuration Directory: "),r("em",[t._v("/etc/php.d")])]),t._v(" "),r("h3",{attrs:{id:"rabbitmq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq","aria-hidden":"true"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),r("p",[t._v("Installation directory: /var/lib/rabbitmq")]),t._v(" "),r("h3",{attrs:{id:"apache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),r("h3",{attrs:{id:"postgresql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#postgresql","aria-hidden":"true"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),r("p",[t._v("MySQL Management URL: http://Internet IP:9090")]),t._v(" "),r("h3",{attrs:{id:"redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),r("p",[t._v("Redis configuration file: /etc/redis.conf"),r("br"),t._v("\nRedis data directory: /var/lib/redis")]),t._v(" "),r("h2",{attrs:{id:"端口号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#端口号","aria-hidden":"true"}},[t._v("#")]),t._v(" 端口号")]),t._v(" "),r("p",[t._v("下面是您在使用本镜像过程中，需要用到的端口号，请通过云控制台安全组进行设置")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("名称")]),t._v(" "),r("th",[t._v("端口号")]),t._v(" "),r("th",[t._v("用途")]),t._v(" "),r("th",[t._v("必要性")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("MySQL")]),t._v(" "),r("td",[t._v("3306")]),t._v(" "),r("td",[t._v("远程连接MySQL")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("HTTP")]),t._v(" "),r("td",[t._v("80")]),t._v(" "),r("td",[t._v("通过http访问Metabase")]),t._v(" "),r("td",[t._v("必须")])]),t._v(" "),r("tr",[r("td",[t._v("HTTPS")]),t._v(" "),r("td",[t._v("443")]),t._v(" "),r("td",[t._v("通过https访问Metabase")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("phpMyAdmin on Docker")]),t._v(" "),r("td",[t._v("9090")]),t._v(" "),r("td",[t._v("可视化管理MySQL")]),t._v(" "),r("td",[t._v("可选")])])])]),t._v(" "),r("h2",{attrs:{id:"版本号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本号","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本号")]),t._v(" "),r("p",[t._v("组件对应的基本版本号可以通过云市场商品页面查看，但部署到您的服务器之后，版本会有一定的升级，故更为精准的版本请通过在服务器上运行命令查看：")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# Nginx version\n\n# MySQL version\n\n# Python version\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);