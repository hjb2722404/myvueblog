---
title: "jquery利用attr()方法改变checkbox控件状态的问题"
categories: tech
date: 2016-06-15 16:00:00 +0800
author: hjb2722404
tags: [jquery,checkbox]

---

使用jquery进行购物车里的商品全选和全不选操作时，需要改变所有checkbox的状态，原来的写法是：

<pre class="prettyprint">$(<span class="hljs-string">".selectall"</span>).on(<span class="hljs-string">"click"</span>,<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
        <span class="hljs-keyword">if</span>($(<span class="hljs-keyword">this</span>).html()==<span class="hljs-string">"x"</span>){
            $(<span class="hljs-string">"[name = chkItem]:checkbox"</span>).attr(<span class="hljs-string">"checked"</span>, <span class="hljs-literal">true</span>);
            $(<span class="hljs-keyword">this</span>).html(<span class="hljs-string">'O'</span>);
        }<span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span>($(<span class="hljs-keyword">this</span>).html()==<span class="hljs-string">"O"</span>){
            $(<span class="hljs-string">"[name = chkItem]:checkbox"</span>).attr(<span class="hljs-string">"checked"</span>, <span class="hljs-literal">false</span>);
            $(<span class="hljs-keyword">this</span>).html(<span class="hljs-string">'x'</span>);
        }
    });</pre>

然后发现该段代码执行时全选和全不选的操作都只能执行一次，再之后就不执行了。

将其中的attr()方法替换为prop()方法，搞定。

原来，在jquery里，有两种操作元素属性的方法，一种是attr()，另一种是prop().

attr()是用来改变元素的attributes属性的，而prop()方法是用来改变元素properties属性的，那么这两者有何区别呢。

在默认情况下，attributes和properties是一样的，都是用来保存元素的属性值的。

但是，当涉及到boolean值时，比如checkbox这样的，有true和false这样的布尔值的元素属性，attributes在页面加载的时候就被设置，并且一直保持初始值，而properties则存储着元素属性的当前值。

也就是说：**boolean properties保持最新。但相应的boolean attributes是不一样的，正如上面所述，它们仅被浏览器用来保存初始值**

所以，涉及到boolean properties要在页面加载后随时更新的话，那还是要使用prop()方法。
