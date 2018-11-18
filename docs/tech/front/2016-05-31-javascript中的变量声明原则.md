---
title: "javascript中的变量声明原则"
categories: tech
tags: [js,理论]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

1、最小全局变量原则：每一个变量都只应该在其作用域中使用，以避免全局污染和命名冲突；

2、最好的定义变量的方法是显式地使用“var”关键字来定义；

3、通过var关键字声明的变量是无法被“delete”操作符删除的，而没有用var关键字声明的变量是可以被“delete”操作符删除的

4、一种通用的全局对象访问方式：

<pre class="prettyprint"><span class="hljs-keyword">var</span> global = (<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>

    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;

}());</pre>

5、尽可能少地使用单var定义变量模式（即袋子模式），多使用盒子模式；

袋子模式：

<pre class="prettyprint"><span class="hljs-attribute">var a</span>=<span class="hljs-string">1,
    b=2,
    c=3;</span></pre>

盒子模式：

<pre class="prettyprint"><span class="hljs-keyword">var</span> a=<span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> b=<span class="hljs-number">2</span>;
<span class="hljs-keyword">var</span> c=<span class="hljs-number">3</span>;</pre>

6、所有未初始化但声明的变量的初始值是undefined

7、由于javascript是顺序解析的，所以为了避免混乱，最好预先使用var声明所有你要用到的变量
