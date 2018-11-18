---
title: "CentOs Server环境搭建"
categories: tech
tags: [环境,centos]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

标签（空格分隔）： 环境搭建 centos

---

<blockquote>
  引言：本文档是在全新的CentOs系统搭建JAVA工程相关的服务器环境的指导文档
</blockquote>

---

##步骤索引：

一、安装JDK     
二、安装Tomcat     
三、安装Nginx



##正文

一、安装JDK

1.检查CentOs是否默认安装了openjdk软件，可以使用以下命令中的任意命令，最好都试一下：



<pre class="prettyprint">
    <span class="hljs-variable">#rpm</span> <span class="hljs-attribute">-qa</span> <span class="hljs-subst">|</span>grep java

    <span class="hljs-variable">#rpm</span> <span class="hljs-attribute">-qa</span> <span class="hljs-subst">|</span>grep jdk

    <span class="hljs-variable">#rpm</span> <span class="hljs-attribute">-qa</span> <span class="hljs-subst">|</span>grep gcj</pre>

执行命令后,如果没有任何输出，则说明该系统没有安装jdk，直接跳到第2步，相反，如果输出类似下面的结果：



<pre class="prettyprint">
    java-<span class="hljs-number">1.6</span><span class="hljs-number">.0</span>-openjdk-<span class="hljs-number">1.6</span><span class="hljs-number">.0</span><span class="hljs-number">.35</span>-<span class="hljs-number">1.13</span><span class="hljs-number">.7</span><span class="hljs-number">.1</span><span class="hljs-preprocessor">.el</span>6_6<span class="hljs-preprocessor">.x</span>86_64

    java-<span class="hljs-number">1.6</span><span class="hljs-number">.0</span>-openjdk-<span class="hljs-number">1.7</span><span class="hljs-number">.0</span><span class="hljs-number">.35</span>-<span class="hljs-number">2.3</span><span class="hljs-number">.7</span><span class="hljs-number">.1</span><span class="hljs-preprocessor">.el</span>6_6<span class="hljs-preprocessor">.x</span>86_64</pre>

则说明该系统已经安装了openjdk,我们需要卸载它，然后安装sun公司的jdk.卸载命令：



<pre class="prettyprint">
    <span class="hljs-variable">#rpm</span> –e  jdk相关文件名
    <span class="hljs-comment">//(普通删除命令，删除特定的包，如果遇到依赖，则无法删除)</span>

    <span class="hljs-variable">#rpm</span> <span class="hljs-attribute">-e</span> –nodeps  jdk相关文件名 

    <span class="hljs-comment">//(强制删除命令，忽略依赖，删除特定的包。如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除) </span></pre>

<blockquote>
  注意：这里的jdk相关文件名指的是上个步骤中用查询命令 查出来的jdk的相关文件的文件名。
</blockquote>

例如：



<pre class="prettyprint"><span class="hljs-variable">#rpm</span> <span class="hljs-attribute">-e</span> java<span class="hljs-subst">-</span><span class="hljs-number">1.6</span><span class="hljs-number">.0</span><span class="hljs-attribute">-openjdk</span><span class="hljs-subst">-</span><span class="hljs-number">1.6</span><span class="hljs-number">.0</span><span class="hljs-number">.35</span><span class="hljs-subst">-</span><span class="hljs-number">1.13</span><span class="hljs-number">.7</span><span class="hljs-number">.1</span><span class="hljs-built_in">.</span>el6_6<span class="hljs-built_in">.</span>x86_64</pre>

如果无法删除，可以尝试以下命令：



<pre class="prettyprint"><span class="hljs-preprocessor">#yum -y remove java jdk相关文件名</span></pre>

执行以上命令后，用find命令查看是否还有文件残留：



<pre class="prettyprint"><span class="hljs-preprocessor">#find / -name jdk</span>
<span class="hljs-preprocessor">#find / -name java</span>
<span class="hljs-preprocessor">#find / -name jre</span>
<span class="hljs-preprocessor">#find / -name gcj</span></pre>

查询无果，说明jdk已经删除干净。

若查询出来还有参与目录，可以用# rm -rf 目录，将残余目录一个一个删除掉。

至此jdk的删除工作已完成。

2.下载sun公司的jdk包并安装

首先查询当前系统的位数，以确定要下载什么位数的jdk：



<pre class="prettyprint"><span class="hljs-preprocessor"># uname -r</span></pre>

会看到类似以下输出：



<pre class="prettyprint"><span class="hljs-number">2.6</span><span class="hljs-number">.32</span>-<span class="hljs-number">358.</span>el6<span class="hljs-preprocessor">.x</span>86_64</pre>

我们可以看到该系统是64位，那我们就去搜索下载64位的jdk，这里我们选择下载1.6版本的。下载下来的文件名为：

jdk-6u45-linux-x64.bin

我们把下载下来的文件利用ftp工具上传至服务器的usr/java目录中（java目录是新建的）。

[最新版jdk下载链接][1]

然后在终端工具切换到java目录下，修改文件权限：



<pre class="prettyprint"><span class="hljs-variable">#chmod</span> u<span class="hljs-subst">+</span>x jdk<span class="hljs-subst">-</span><span class="hljs-number">6</span>u45<span class="hljs-attribute">-linux</span><span class="hljs-attribute">-x64</span><span class="hljs-attribute">-rpm</span><span class="hljs-built_in">.</span>bin </pre>

执行安装：



<pre class="prettyprint"><span class="hljs-built_in">.</span>/jdk<span class="hljs-subst">-</span><span class="hljs-number">6</span>u45<span class="hljs-attribute">-linux</span><span class="hljs-attribute">-x64</span><span class="hljs-attribute">-rpm</span><span class="hljs-built_in">.</span>bin </pre>

如果可以查看到java版本号，说明安装成功：



<pre class="prettyprint"><span class="hljs-preprocessor">#java -version</span></pre>

3、配置环境变量



<pre class="prettyprint"><span class="hljs-preprocessor">#vi /etc/profile</span>
</pre>

在最后加上



<pre class="prettyprint">JAVA_HOME=/usr/local/jdk1.<span class="hljs-number">6.0</span>_45 //注意版本号为你刚安装的

PATH=<span class="hljs-variable">$PATH</span>:<span class="hljs-variable">$JAVA_HOME</span>/bin

CLASSPATH=.:<span class="hljs-variable">$JAVA_HOME</span>/lib/dt.jar:<span class="hljs-variable">$JAVA_HOME</span>/lib/tools.jar


<span class="hljs-keyword">export</span> JAVA_HOME

<span class="hljs-keyword">export</span> PATH

<span class="hljs-keyword">export</span> CLASSPATH</pre>

执行：wq保存退出，并更新配置文件：



<pre class="prettyprint"><span class="hljs-preprocessor">#source /etc/profile</span></pre>

至此，jdk安装成功。

二、安装Tomcat

1、下载tomcat

[最新版tomcat下载链接][2]

2、将下载的文件（apache-tomcat-7.0.61.tar.gz）用ftp工具上传至服务器usr/local目录下

3、终端切换到local目录下，解压缩tomcat：



<pre class="prettyprint"><span class="hljs-variable">#tar</span> <span class="hljs-attribute">-xzvf</span> apache<span class="hljs-attribute">-tomcat</span><span class="hljs-subst">-</span><span class="hljs-number">7.0</span><span class="hljs-number">.61</span><span class="hljs-built_in">.</span>tar<span class="hljs-built_in">.</span>gz</pre>

4、将解压出的文件复制到usr/tomcat目录：



<pre class="prettyprint"><span class="hljs-variable">#cp</span> <span class="hljs-attribute">-R</span> apache<span class="hljs-attribute">-tomcat</span><span class="hljs-subst">-</span><span class="hljs-number">7.0</span><span class="hljs-number">.61</span> /usr/<span class="hljs-built_in">local</span>/tomcat</pre>

5、启动tomcat



<pre class="prettyprint"><span class="hljs-preprocessor">#/usr/local/tomcat/bin/startup.sh</span></pre>

6、关闭防火墙



<pre class="prettyprint"><span class="hljs-preprocessor">#/etc/init.d/iptables stop</span></pre>

至此，tomcat安装配置成功，下面开启apachetomcat及把apache tomcat写入开机运行队列：     
（1、apache tomcat 的启动命令： #/usr/local/tomcat/bin/startup.sh     
（2、apache tomcat的停止命令：     
#/usr/local/tomcat/bin/shutdown.sh     
（3、apache tomcat开机启动设置：      
#echo "/usr/local/tomcat/bin/startup.sh" &gt;&gt; /etc/rc.local     
3、配置TOMCAT的环境变量     
编辑      
#vi ~/.bash_profile     
加入 tomcat 环境参数



<pre class="prettyprint">TOMCAT_HOME=/usr/local/tomcat
<span class="hljs-keyword">export</span> PATH JAVA_HOME CLASSPATH TOMCAT_HOME</pre>

保存退出，然后执行      
#source ~/.bash_profile， 让环境变量生效     
现在开启TOMCAT服务：     
#/usr/local/tomcat/bin/startup.sh     
然后打入     
#netstart –tnl     
进行监听，如果能看到8080和8009两个，表示tomcat已经正常启动.     
下面进行访问测试，看能否进入网页;打入：[http://serverip:8080][3] ，可以看到网页的话说明tomcat已经安装成功。

三、安装Nginx

1、下载Nginx安装包

[最新版Nginx下载链接][4]

2、在安装nginx前，需要确保系统安装了g++、gcc、openssl-devel、pcre-devel和zlib-devel软件。安装必须软件：



<pre class="prettyprint"><span class="hljs-variable">#yum</span> install gcc<span class="hljs-attribute">-c</span><span class="hljs-subst">++</span>
<span class="hljs-variable">#yum</span> <span class="hljs-attribute">-y</span> install zlib zlib<span class="hljs-attribute">-devel</span> openssl openssl<span class="hljs-subst">--</span>devel pcre pcre<span class="hljs-attribute">-devel</span></pre>

3、将安装包文件上传到/usr/local中执行以下操作：



<pre class="prettyprint">[root<span class="hljs-variable">@admin</span> <span class="hljs-keyword">local</span>]<span class="hljs-comment"># cd /usr/local</span>
[root<span class="hljs-variable">@admin</span> <span class="hljs-keyword">local</span>]<span class="hljs-comment"># tar -zxv -f nginx-1.2.6.tar.gz</span>
[root<span class="hljs-variable">@admin</span> <span class="hljs-keyword">local</span>]<span class="hljs-comment"># rm -rf nginx-1.2.6.tar.gz</span>
[root<span class="hljs-variable">@admin</span> <span class="hljs-keyword">local</span>]<span class="hljs-comment"># mv nginx-1.2.6 nginx</span>
[root<span class="hljs-variable">@admin</span> <span class="hljs-keyword">local</span>]<span class="hljs-comment"># cd /usr/local/nginx</span>
[root<span class="hljs-variable">@admin</span> nginx]<span class="hljs-comment"># ./configure --prefix=/usr/local/nginx</span>
[root<span class="hljs-variable">@admin</span> nginx]<span class="hljs-comment"># make</span>
[root<span class="hljs-variable">@admin</span> nginx]<span class="hljs-comment"># make install</span></pre>

4、启动



<pre class="prettyprint"><span class="hljs-comment">#方法1</span>
[root<span class="hljs-variable">@admin</span> nginx-<span class="hljs-number">1.2</span>.<span class="hljs-number">6</span>]<span class="hljs-comment"># /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf</span>
<span class="hljs-comment">#方法2</span>
[root<span class="hljs-variable">@admin</span> nginx-<span class="hljs-number">1.2</span>.<span class="hljs-number">6</span>]<span class="hljs-comment"># cd /usr/local/nginx/sbin</span>
[root<span class="hljs-variable">@admin</span> sbin]<span class="hljs-comment"># ./nginx</span></pre>

PS:启动时可能会报如下错误：

<blockquote>
  nginx: [alert] could not open error log file: open() “/usr/local/nginx/logs/error.log” failed (2: No such file or directory)     
  2015/05/14 15:57:14 [emerg] 16430#0: open() “/usr/local/nginx/logs/access.log” failed (2: No such file or directory)     
  [root@cloud nginx]# sudo /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf 
</blockquote>

在nginx文件夹下新建logs文件夹，再次启动就可以了。

5、测试



<pre class="prettyprint"><span class="hljs-preprocessor">#测试端口 </span>
netstat –na|grep <span class="hljs-number">80</span>
<span class="hljs-preprocessor">#浏览器中测试 </span>
http:<span class="hljs-comment">//ip:80</span></pre>

[1]: http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase6-419409.html#jdk-6u45-oth-JPR
[2]: http://tomcat.apache.org/download-70.cgi
[3]: http://serverip:8080
[4]: http://nginx.org/en/download.html
