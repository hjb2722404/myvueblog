---
title: "jquery ajax传递的data参数中带json多维数组字符串"
categories: tech
tags: [ajax,参数json]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

**情况描述：**

后台那边是JAVA，需要我从前台Ajax传递数据，数据包含一些表单字段，和一个json二维数组，使用的是jquery $.ajax跨域方法。



<pre class="prettyprint"><span class="hljs-keyword">var</span> <span class="hljs-variable">$dataStr</span> = {
        <span class="hljs-string">"name"</span>: <span class="hljs-variable">$name</span>,
        <span class="hljs-string">"phone"</span>: <span class="hljs-variable">$phone</span>,
        <span class="hljs-string">"trainNum"</span>: <span class="hljs-variable">$trainNum</span>,
        <span class="hljs-string">"coach"</span>: <span class="hljs-variable">$coach</span>,
        <span class="hljs-string">"seatNum"</span>: <span class="hljs-variable">$seatNum</span>,
        <span class="hljs-string">"remark"</span>: <span class="hljs-variable">$remark</span>,
        <span class="hljs-string">"menusStr"</span>:<span class="hljs-variable">$menusStr</span> <span class="hljs-comment">//这个是二维数组字符串</span>
    }
    $.ajax({
        type:<span class="hljs-string">"get"</span>,
        url:<span class="hljs-string">"ip:port/ordering/orderManager/addOrder"</span>,
        data:<span class="hljs-variable">$dataStr</span>,
        dataType:<span class="hljs-string">'jsonp'</span>,
        async:<span class="hljs-keyword">false</span>,
        jsonp:<span class="hljs-string">'callback'</span>,
        jsonpCallback:<span class="hljs-string">'callback'</span>,
        success:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(json)</span>{</span>
           <span class="hljs-keyword">if</span>(json.result){
               alert(<span class="hljs-string">"订餐成功，等待送餐"</span>);
           }<span class="hljs-keyword">else</span>{
               alert(<span class="hljs-string">"抱歉，订餐失败，请联系服务员"</span>);
           }
        },
        complete:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>

        },
        error:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(e)</span>{</span>
            alert(<span class="hljs-string">"数据加载失败"</span>);
            alert(e);
        }

    });</pre>

其中 $menusStr是一个JSON二维数组字符串，之前的写法是：

<pre class="prettyprint">// $menus<span class="hljs-variable">Str</span>='[<span class="hljs-tuple">{<span class="hljs-string">"a"</span>:<span class="hljs-number">3</span>,<span class="hljs-string">"b"</span>:<span class="hljs-string">"33"</span>}</span>,<span class="hljs-tuple">{<span class="hljs-string">"d"</span>:<span class="hljs-string">"vv"</span>,<span class="hljs-string">"c"</span>:<span class="hljs-number">55</span>}</span>]';</pre>

然后发现后台那边其他字段都可以接收到，唯独 ‘<span>$</span>menusStr’为null，百思不得其解，然后利用json格式校验工具校验，发现整个’<span>$</span>dataStr’格式无法通过校验。

后来改成如下格式，通过了验证，并且后台接收成功：

<pre class="prettyprint"> $menusStr=<span class="hljs-string">"[{'</span><span class="hljs-transposed_variable">a'</span>:<span class="hljs-number">3</span>,<span class="hljs-string">'b'</span>:<span class="hljs-string">'33'</span>},{<span class="hljs-string">'d'</span>:<span class="hljs-string">'vv'</span>,<span class="hljs-string">'c'</span>:<span class="hljs-number">55</span>}]<span class="hljs-string">";</span></pre>

虽然问题解决，但是原因不详，因为json官方的多维数组写法是第一种那种，但就是不行，这个问题在这里做标记，等工作忙完好好研究一下。
