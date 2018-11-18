---
title: "jquery cookie插件用法"
categories: tech
date: 2016-06-15 16:00:00 +0800
author: hjb2722404
tags: [jquery,cookie,插件] 

---

插件的下载地址及英文说明：[jquery cookie on git hub][1]

1、引入插件：

<pre class="prettyprint"><span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"js/jquery.cookie.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></pre>

2、设置cookie

<pre class="prettyprint"><span class="hljs-variable">$.</span>cookie(<span class="hljs-string">'name'</span>, <span class="hljs-string">'value'</span>);</pre>

3、设置有存储时间限制的cookie，例如保持7天：



<pre class="prettyprint"><span class="hljs-variable">$.</span>cookie(<span class="hljs-string">'name'</span>, <span class="hljs-string">'value'</span>, { <span class="hljs-symbol">expires:</span> <span class="hljs-number">7</span> });</pre>

4、设置cookie在整个站点根目录下有效：

<pre class="prettyprint"><span class="hljs-variable">$.</span>cookie(<span class="hljs-string">'name'</span>, <span class="hljs-string">'value'</span>, { <span class="hljs-symbol">expires:</span> <span class="hljs-number">7</span>, <span class="hljs-symbol">path:</span> <span class="hljs-string">'/'</span> });</pre>

5、给定cookie名称读取对应cookie：

<pre class="prettyprint"><span class="hljs-variable">$.</span>cookie(<span class="hljs-string">'name'</span>);</pre>

6、读取所有的cookie记录：

<pre class="prettyprint"><span class="hljs-variable">$.</span>cookie();</pre>

        注：这里返回的是一个对象，可使用console.log($.cookie());输出到浏览器控制台


7、删除cookie：

<pre class="prettyprint"><span class="hljs-variable">$.</span>removeCookie(<span class="hljs-string">'name'</span>);</pre>

需要注意的是，如果你的cookie设置了有效路径，则使用相同设置才能删除：

<pre class="prettyprint"><span class="hljs-variable">$.</span>removeCookie(<span class="hljs-string">'name'</span>, { <span class="hljs-symbol">path:</span> <span class="hljs-string">'/'</span> });</pre>

8、一些配置：

自动编码转换：



<pre class="prettyprint"><span class="hljs-variable">$.</span>cookie.raw = <span class="hljs-keyword">true</span>;</pre>

自动实现json与string之间的转换：



<pre class="prettyprint"><span class="hljs-variable">$.</span>cookie.json = <span class="hljs-keyword">true</span>;</pre>

[1]: https://github.com/carhartl/jquery-cookie
