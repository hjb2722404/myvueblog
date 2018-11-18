---
title: "git学习笔记（2）——git init命令选项说明"
categories: tech
tags: [git,命令行]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

##git init

<blockquote>
  创建一个新的仓库或重新初始化现有仓库
</blockquote>

选项说明：

        -q|--quiet:只打印错误和警告，其他输出将被制止。
        
        --bare:创建一个空的仓库，如果GIT_DIR环境变量没有设置，则会被设置到当前目录
        
        --template=&lt;template_directory&gt;：指定目录里的模板将被使用


<blockquote>
  模板目录：模板目录包含一些文件和目录，这些文件和目录将在仓库创建后被拷贝到$git_dir
</blockquote>

关于git_dir，请参看felixs的博文：

[Git系列之二 — git-dir &amp; work-tree][1]



<pre class="prettyprint">--separate-git-<span class="hljs-keyword">dir</span>=&lt;git <span class="hljs-keyword">dir</span>&gt; ：此命令将不会简单的初始化仓库，而是将git仓库与文件系统做一个符号链接，指向特定的路径，并初始化仓库，结果是git仓库将从工作树分离，仓库将移动到指定的路径。</pre>



<pre class="prettyprint">--shared[=(<span class="hljs-keyword">false</span><span class="hljs-localvars">|true|umask|group|all|world|everybody|</span><span class="hljs-number">0</span>xxx)]
    指定该仓库的用户权限，默认为group

    umask | <span class="hljs-keyword">false</span> :使用umask报告的权限，默认不指定共享；

    group |  <span class="hljs-method">true:</span>使小组具有对仓库的可写权限（因为git小组对所有用户来说可能不是主要的小组），此选项被用来放宽具有其他安全码（safe umask）的权限。值得注意的是，该umask依然适用于其他少量权限。（例如：如果umask为<span class="hljs-number">0022</span>，使用group将不会移除来自其他非小组用户的读权限），详见：如何使用<span class="hljs-number">0</span>xxx完全指定版本库权限。

    其他选项均给予字面意思所代表的权限。很简单，就不赘述了</pre>

[1]: http://blog.csdn.net/talking12391239/article/details/8642121%20%20%E2%80%9DGit%E7%B3%BB%E5%88%97%E4%B9%8B%E4%BA%8C%20---%20git-dir%20&amp;%20work-tree%E2%80%9C
