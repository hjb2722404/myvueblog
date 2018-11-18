---
title: "从零开始写一款javascript插件（一）——tab选项卡"
categories: tech
date: 2016-06-15 16:00:00 +0800
author: hjb2722404
tags: [javascript,插件,选项卡]

---

上一次写了[《从零开始学习制作H5场景应用》][1]系列，反响还算好，所以趁最近不是太忙，继续新的系列，从零开始写javascript插件。

今天，先从最简单的开始，将已有的一个Tab选项卡切换功能改写成javascript插件形式。



###原生函数写法

**将一个javascript方法改写为js插件最简单的方式就是将这个方法挂载到window全局对象下面**

我们先来看看最原始的使用函数写法的代码：

tab.html



<pre class="prettyprint">    <span class="hljs-doctype">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">head</span> <span class="hljs-attribute">lang</span>=<span class="hljs-value">"en"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">charset</span>=<span class="hljs-value">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">http-equiv</span>=<span class="hljs-value">"X-UA-Compatible"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"IE=edge"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"viewport"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"renderer"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"webkit"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">title</span>&gt;</span>jquery_hjb_tab插件demo<span class="hljs-tag">&lt;/<span class="hljs-title">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"h.css"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"tab"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"tabs"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">ul</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>tab1<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>tab2<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>tab3<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>tab4<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"tabCons"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">section</span>&gt;</span>内容一<span class="hljs-tag">&lt;/<span class="hljs-title">section</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">section</span>&gt;</span>内容二<span class="hljs-tag">&lt;/<span class="hljs-title">section</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">section</span>&gt;</span>内容三<span class="hljs-tag">&lt;/<span class="hljs-title">section</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">section</span>&gt;</span>内容四<span class="hljs-tag">&lt;/<span class="hljs-title">section</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    window.onload = h_tab(<span class="hljs-string">'tab'</span>);
   <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">h_tab</span><span class="hljs-params">(tabId)</span>{</span>
       <span class="hljs-keyword">var</span> oLinks = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"a"</span>);
       <span class="hljs-keyword">var</span> oCons = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"section"</span>);
       <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;oLinks.length; i++){
           oLinks[i].index = i;
           oLinks[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
               <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j =<span class="hljs-number">0</span>; j&lt;oLinks.length; j++){
                   oLinks[j].className=<span class="hljs-string">""</span>;
                   oCons[j].style.display = <span class="hljs-string">"none"</span>;
               }
               <span class="hljs-keyword">this</span>.className=<span class="hljs-string">"cur"</span>;
               oCons[<span class="hljs-keyword">this</span>.index].style.display =<span class="hljs-string">"block"</span>;
           }

       }
   }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></pre>

h.css

<pre class="prettyprint">    <span class="hljs-at_rule">@<span class="hljs-keyword">charset</span> <span class="hljs-string">"utf-8"</span></span>;
<span class="hljs-comment">/*
//author:hjb2722404
//description:
//date:2016/2/18
*/</span>
<span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">list-style-type</span>:<span class="hljs-value"> none</span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">48</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> inline-block</span></span>; <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">0</span></span></span>; <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">0</span></span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-tag">a</span> <span class="hljs-rules">{<span class="hljs-rule"><span class="hljs-attribute">border-bottom</span>:<span class="hljs-value"> <span class="hljs-number">3</span>px solid <span class="hljs-hexcolor">#cccccc</span></span></span>; <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> block</span></span>; <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> center</span></span>; <span class="hljs-rule"><span class="hljs-attribute">min-height</span>:<span class="hljs-value"> <span class="hljs-number">40</span>px</span></span>; <span class="hljs-rule"><span class="hljs-attribute">line-height</span>:<span class="hljs-value"> <span class="hljs-number">40</span>px</span></span>; <span class="hljs-rule"><span class="hljs-attribute">text-decoration</span>:<span class="hljs-value"> none</span></span>; <span class="hljs-rule"><span class="hljs-attribute">font-family</span>:<span class="hljs-value"> <span class="hljs-string">"微软雅黑"</span></span></span>; <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#a94442</span></span></span></span>}
<span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-tag">a</span><span class="hljs-class">.cur</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">border-bottom</span>:<span class="hljs-value"> <span class="hljs-number">3</span>px solid <span class="hljs-hexcolor">#f26123</span></span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.tabCons</span> <span class="hljs-tag">section</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> none</span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.tabCons</span> <span class="hljs-tag">section</span><span class="hljs-pseudo">:nth-child(1)</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> block</span></span>;<span class="hljs-rule">}</span></span></pre>

上面两份代码为基本代码，之后我们后一步步在这份代码的基础上进行改进。



###原生插件写法

好，现在，我们就来将这个方法改写成挂载在window对象下的插件：

tab.html



<pre class="prettyprint">    ……
// 下面是第一次改动
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"h_tabs.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    H_tab(<span class="hljs-string">"tab"</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>

h_tabs.js



<pre class="prettyprint">window.H_tab = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(tabId)</span>{</span>
       <span class="hljs-keyword">var</span> oLinks = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"a"</span>);
       <span class="hljs-keyword">var</span> oCons = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"section"</span>);
       <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;oLinks.length; i++){
           oLinks[i].index = i;
           oLinks[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
               <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j =<span class="hljs-number">0</span>; j&lt;oLinks.length; j++){
                   oLinks[j].className=<span class="hljs-string">""</span>;
                   oCons[j].style.display = <span class="hljs-string">"none"</span>;
               }
               <span class="hljs-keyword">this</span>.className=<span class="hljs-string">"cur"</span>;
               oCons[<span class="hljs-keyword">this</span>.index].style.display =<span class="hljs-string">"block"</span>;
           }

       }
   };</pre>

但是，我们发现这样的写法虽然很简单，但也有问题：window作为一个全局对象，如果我们把自己的方法都挂载到它下面作为插件使用的话，插件一多，就容易产生命名空间冲突，另一方面，使用原生js虽然可以减少对外部的依赖，但代码量相对还是很大，写法比较繁琐。



##jquery写法

我们尝试引入jquery库，将此插件改写为jquery插件。

**jquery插件有三种形式：类级别的形式，对象级别的形式，jquery UI组件的形式**



###jquery 类级别插件写法–单个方法

我们先来看类级别插件的形式。

第一种类级别插件的形式，直接把该方法挂载到jquery的根空间下，作为一个工具方法：

tab.html 



<pre class="prettyprint">……
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"../jquery.js"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"h_tabs.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    $.h_tab(<span class="hljs-string">'tab'</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>

h_tabs.js



<pre class="prettyprint">    $.h_tab = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(tabId)</span>{</span>
    <span class="hljs-keyword">var</span> oLinks = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"a"</span>);
    <span class="hljs-keyword">var</span> oCons = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"section"</span>);
    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;oLinks.length; i++){
        oLinks[i].index = i;
        oLinks[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
            <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j =<span class="hljs-number">0</span>; j&lt;oLinks.length; j++){
                oLinks[j].className=<span class="hljs-string">""</span>;
                oCons[j].style.display = <span class="hljs-string">"none"</span>;
            }
            <span class="hljs-keyword">this</span>.className=<span class="hljs-string">"cur"</span>;
            oCons[<span class="hljs-keyword">this</span>.index].style.display =<span class="hljs-string">"block"</span>;
        }

    }
};</pre>



###jquery类级别插件写法-多个方法

如果你想要将多个方法绑定到jquery根空间上面，那么像下面这样写：

tab.html 



<pre class="prettyprint">……
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"../jquery.js"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"h_tabs.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    $.h_tab(<span class="hljs-string">'tab'</span>);
    $.h_hello(<span class="hljs-string">'hjb'</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>

h_tabs.js



<pre class="prettyprint">    $.extend({
    h_tab:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(tabId)</span>{</span>
        <span class="hljs-keyword">var</span> oLinks = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"a"</span>);
        <span class="hljs-keyword">var</span> oCons = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">"section"</span>);
        <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;oLinks.length; i++){
            oLinks[i].index = i;
            oLinks[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
                <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j =<span class="hljs-number">0</span>; j&lt;oLinks.length; j++){
                    oLinks[j].className=<span class="hljs-string">""</span>;
                    oCons[j].style.display = <span class="hljs-string">"none"</span>;
                }
                <span class="hljs-keyword">this</span>.className=<span class="hljs-string">"cur"</span>;
                oCons[<span class="hljs-keyword">this</span>.index].style.display =<span class="hljs-string">"block"</span>;
            }

        }
    },
    h_hello :<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(name)</span>{</span>
        console.log(<span class="hljs-string">"hello,"</span>,name);
    }
});
</pre>

虽然使用$.extend()工具方法将自己的功能函数直接挂载到jquery根命名空间下，简单，省事儿，但很不幸的是，这样的方式不能利用jquery强大的sizzle引擎，即你选择到的DOM元素无法运用这个方法。

所以我们要用到对象级别的插件开发方式。



###jquery对象级别插件写法

**对象级别的插件开发方式是利用$.fn.extend()方法将自己的方法绑定到jquery原型上去，这样所有jquery对象队可以应用该方法来执行相应操作了**

代码如下：

tab.html



<pre class="prettyprint">……
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"../jquery.js"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"h_tabs.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-comment">//对象级别的插件引用方法，注意和上面类级别插件的写法上的区分</span>
    $(<span class="hljs-string">'#tab'</span>).h_tab(<span class="hljs-string">'tab'</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>

h_tabs.js



<pre class="prettyprint">(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">($)</span>{</span>
    $.fn.extend({
        h_tab:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(tabId)</span>{</span>
            <span class="hljs-keyword">var</span> oLinks = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">'a'</span>);
            <span class="hljs-keyword">var</span> oCons = document.getElementById(tabId).getElementsByTagName(<span class="hljs-string">'section'</span>);
            <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;oLinks.length; i++){
                oLinks[i].index = i;
                oLinks[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
                    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j =<span class="hljs-number">0</span>; j&lt;oLinks.length; j++){
                        oLinks[j].className=<span class="hljs-string">""</span>;
                        oCons[j].style.display = <span class="hljs-string">"none"</span>;
                    }
                    <span class="hljs-keyword">this</span>.className=<span class="hljs-string">"cur"</span>;
                    oCons[<span class="hljs-keyword">this</span>.index].style.display =<span class="hljs-string">"block"</span>;
                }

            }
        }
    });
})(jQuery);</pre>

**这里，我们利用一个闭包封装了插件，避免了命名空间污染**

在这里，还有一些问题，就是我们的方法必须传参数才可以运行，这就导致调用的时候我们使用$(‘#tab’)选择了id为tab的div，然后在插件里我们又根据传入的ID获取了一遍该元素。

既然我们已经使用了jquery的选择器，那么我们就可以引入this来解决重复获取元素的冗余问题。



###jquery对象级别插件写法-引入this

tab.html



<pre class="prettyprint">……
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"../jquery.js"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"h_tabs.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    $(<span class="hljs-string">'#tab'</span>).h_tab();
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>

h_tabs.js



<pre class="prettyprint">(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">($)</span>{</span>
    $.fn.extend({
        h_tab:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span>{</span>
            <span class="hljs-comment">//在这里引入this</span>
            <span class="hljs-keyword">var</span> oLinks = <span class="hljs-keyword">this</span>.find(<span class="hljs-string">'a'</span>);
            <span class="hljs-keyword">var</span> oCons = <span class="hljs-keyword">this</span>.find(<span class="hljs-string">'section'</span>);
            <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;oLinks.length; i++){
                oLinks[i].index = i;
                oLinks[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
                    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j =<span class="hljs-number">0</span>; j&lt;oLinks.length; j++){
                        oLinks[j].className=<span class="hljs-string">""</span>;
                        oCons[j].style.display = <span class="hljs-string">"none"</span>;
                    }
                    <span class="hljs-keyword">this</span>.className=<span class="hljs-string">"cur"</span>;
                    oCons[<span class="hljs-keyword">this</span>.index].style.display =<span class="hljs-string">"block"</span>;
                }

            }
        }
    });
})(jQuery);</pre>

这里需要注意的是，我们调用该插件的元素对象是<span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-1-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-1" style="width: 21.709em; display: inline-block;"><span style="display: inline-block; position: relative; width: 17.336em; height: 0px; font-size: 125%;"><span style="position: absolute; clip: rect(1.709em 1000em 3.149em -0.371em); top: -2.717em; left: 0.003em;"><span class="mrow" id="MathJax-Span-2"><span class="msup" id="MathJax-Span-3"><span style="display: inline-block; position: relative; width: 0.696em; height: 0px;"><span style="position: absolute; clip: rect(1.816em 1000em 3.149em -0.371em); top: -2.717em; left: 0.003em;"><span class="mo" id="MathJax-Span-4" style="font-family: MathJax_Main;">(</span><span style="display: inline-block; width: 0px; height: 2.723em;"></span></span><span style="position: absolute; top: -2.984em; left: 0.429em;"><span class="mo" id="MathJax-Span-5" style="font-size: 70.7%; font-family: MathJax_Main;">′</span><span style="display: inline-block; width: 0px; height: 2.509em;"></span></span></span></span><span class="mi" id="MathJax-Span-6" style="font-family: MathJax_Math-italic;">t</span><span class="mi" id="MathJax-Span-7" style="font-family: MathJax_Math-italic;">a</span><span class="msup" id="MathJax-Span-8"><span style="display: inline-block; position: relative; width: 0.749em; height: 0px;"><span style="position: absolute; clip: rect(1.709em 1000em 2.723em -0.424em); top: -2.557em; left: 0.003em;"><span class="mi" id="MathJax-Span-9" style="font-family: MathJax_Math-italic;">b</span><span style="display: inline-block; width: 0px; height: 2.563em;"></span></span><span style="position: absolute; top: -2.931em; left: 0.483em;"><span class="mo" id="MathJax-Span-10" style="font-size: 70.7%; font-family: MathJax_Main;">′</span><span style="display: inline-block; width: 0px; height: 2.509em;"></span></span></span></span><span class="mo" id="MathJax-Span-11" style="font-family: MathJax_Main;">)</span><span class="texatom" id="MathJax-Span-12"><span class="mrow" id="MathJax-Span-13"><span class="mo" id="MathJax-Span-14"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">，</span></span></span></span><span class="texatom" id="MathJax-Span-15"><span class="mrow" id="MathJax-Span-16"><span class="mo" id="MathJax-Span-17"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">则</span></span></span></span><span class="texatom" id="MathJax-Span-18"><span class="mrow" id="MathJax-Span-19"><span class="mo" id="MathJax-Span-20"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">此</span></span></span></span><span class="texatom" id="MathJax-Span-21"><span class="mrow" id="MathJax-Span-22"><span class="mo" id="MathJax-Span-23"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">时</span></span></span></span><span class="texatom" id="MathJax-Span-24"><span class="mrow" id="MathJax-Span-25"><span class="mo" id="MathJax-Span-26"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">直</span></span></span></span><span class="texatom" id="MathJax-Span-27"><span class="mrow" id="MathJax-Span-28"><span class="mo" id="MathJax-Span-29"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">接</span></span></span></span><span class="texatom" id="MathJax-Span-30"><span class="mrow" id="MathJax-Span-31"><span class="mo" id="MathJax-Span-32"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">使</span></span></span></span><span class="texatom" id="MathJax-Span-33"><span class="mrow" id="MathJax-Span-34"><span class="mo" id="MathJax-Span-35"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">用</span></span></span></span><span class="mi" id="MathJax-Span-36" style="font-family: MathJax_Math-italic;">t</span><span class="mi" id="MathJax-Span-37" style="font-family: MathJax_Math-italic;">h</span><span class="mi" id="MathJax-Span-38" style="font-family: MathJax_Math-italic;">i</span><span class="mi" id="MathJax-Span-39" style="font-family: MathJax_Math-italic;">s</span><span class="mo" id="MathJax-Span-40" style="font-family: MathJax_Main;">.</span><span class="mi" id="MathJax-Span-41" style="font-family: MathJax_Math-italic; padding-left: 0.163em;">f<span style="display: inline-block; overflow: hidden; height: 1px; width: 0.056em;"></span></span><span class="mi" id="MathJax-Span-42" style="font-family: MathJax_Math-italic;">i</span><span class="mi" id="MathJax-Span-43" style="font-family: MathJax_Math-italic;">n</span><span class="mi" id="MathJax-Span-44" style="font-family: MathJax_Math-italic;">d<span style="display: inline-block; overflow: hidden; height: 1px; width: 0.003em;"></span></span><span class="mo" id="MathJax-Span-45" style="font-family: MathJax_Main;">(</span><span class="mo" id="MathJax-Span-46" style="font-family: MathJax_Main;">)</span><span class="texatom" id="MathJax-Span-47"><span class="mrow" id="MathJax-Span-48"><span class="mo" id="MathJax-Span-49"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">就</span></span></span></span><span class="texatom" id="MathJax-Span-50"><span class="mrow" id="MathJax-Span-51"><span class="mo" id="MathJax-Span-52"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">等</span></span></span></span><span class="texatom" id="MathJax-Span-53"><span class="mrow" id="MathJax-Span-54"><span class="mo" id="MathJax-Span-55"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">价</span></span></span></span><span class="texatom" id="MathJax-Span-56"><span class="mrow" id="MathJax-Span-57"><span class="mo" id="MathJax-Span-58"><span style="font-family: STIXGeneral, 'Arial Unicode MS', serif; font-size: 80%; font-style: normal; font-weight: normal;">于</span></span></span></span></span><span style="display: inline-block; width: 0px; height: 2.723em;"></span></span></span><span style="border-left-width: 0.003em; border-left-style: solid; display: inline-block; overflow: hidden; width: 0px; height: 1.537em; vertical-align: -0.397em;"></span></span></nobr></span><script type="math/tex" id="MathJax-Element-1">('tab')，则此时直接使用this.find()就等价于</script>(‘tab’).find()，而不是$(this).find()，注意使用代入法来区分这两种写法的差别。

作为一款插件，它应该是可以被开发者控制的，所以还应该提供给使用者一些配置接口。



###jquery对象级别插件写法-加入配置项

tab.html



<pre class="prettyprint">    ……
        <span class="hljs-tag">&lt;<span class="hljs-title">ul</span>&gt;</span>
        <span class="hljs-comment">&lt;!--对照文章开始的代码， 注意这里的改动 --&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"current"</span>&gt;</span>tab1<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>tab2<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
     ……
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"../jquery.js"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"h_tabs.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    $(<span class="hljs-string">'#tab'</span>).h_tab({
        <span class="hljs-comment">//使得当前选项卡标签的样式名称可自定义的配置</span>
        curName:<span class="hljs-string">'current'</span>
    });
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span>
</pre>

我们这里把一开始的”当前选项卡标签样式类名称“由”cur“改为了”current“，并将其作为配置项传入插件

h.css



<pre class="prettyprint"><span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">list-style-type</span>:<span class="hljs-value"> none</span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">48</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> inline-block</span></span>; <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">0</span></span></span>; <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">0</span></span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-tag">a</span> <span class="hljs-rules">{<span class="hljs-rule"><span class="hljs-attribute">border-bottom</span>:<span class="hljs-value"> <span class="hljs-number">3</span>px solid <span class="hljs-hexcolor">#cccccc</span></span></span>; <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>%</span></span>; <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> block</span></span>; <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> center</span></span>; <span class="hljs-rule"><span class="hljs-attribute">min-height</span>:<span class="hljs-value"> <span class="hljs-number">40</span>px</span></span>; <span class="hljs-rule"><span class="hljs-attribute">line-height</span>:<span class="hljs-value"> <span class="hljs-number">40</span>px</span></span>; <span class="hljs-rule"><span class="hljs-attribute">text-decoration</span>:<span class="hljs-value"> none</span></span>; <span class="hljs-rule"><span class="hljs-attribute">font-family</span>:<span class="hljs-value"> <span class="hljs-string">"微软雅黑"</span></span></span>; <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#a94442</span></span></span></span>}

<span class="hljs-comment">/*注意下面一行与之前的样式代码的对比变化之处*/</span>
<span class="hljs-class">.tabs</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-tag">a</span><span class="hljs-class">.current</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">border-bottom</span>:<span class="hljs-value"> <span class="hljs-number">3</span>px solid <span class="hljs-hexcolor">#f26123</span></span></span>;<span class="hljs-rule">}</span></span>

<span class="hljs-class">.tabCons</span> <span class="hljs-tag">section</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> none</span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.tabCons</span> <span class="hljs-tag">section</span><span class="hljs-pseudo">:nth-child(1)</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> block</span></span>;<span class="hljs-rule">}</span></span></pre>

我们在样式表中做出了相应的改动。

h_tabs.js



<pre class="prettyprint">    (<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">($)</span>{</span>
    $.fn.extend({
        <span class="hljs-comment">//给方法传入一个对象作为参数</span>
        h_tab:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(opts)</span>{</span>
        <span class="hljs-comment">//定义默认的配置</span>
            <span class="hljs-keyword">var</span> defaults ={
                curName : <span class="hljs-string">'cur'</span>
            };

            <span class="hljs-comment">//将传入的参数覆盖默认参数中的默认项，最终合并到一个新的参数对象上</span>
            <span class="hljs-keyword">var</span> Opt = $.extend({},defaults,opts);

            <span class="hljs-keyword">var</span> oLinks = <span class="hljs-keyword">this</span>.find(<span class="hljs-string">'a'</span>);
            <span class="hljs-keyword">var</span> oCons = <span class="hljs-keyword">this</span>.find(<span class="hljs-string">'section'</span>);
            <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i&lt;oLinks.length; i++){
                oLinks[i].index = i;
                oLinks[i].onclick = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> {</span>
                    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j =<span class="hljs-number">0</span>; j&lt;oLinks.length; j++){
                        oLinks[j].className=<span class="hljs-string">""</span>;
                        oCons[j].style.display = <span class="hljs-string">"none"</span>;
                    }

                    <span class="hljs-comment">//在这里使用配置项的值</span>
                    <span class="hljs-keyword">this</span>.className = Opt[<span class="hljs-string">'curName'</span>];

                    oCons[<span class="hljs-keyword">this</span>.index].style.display =<span class="hljs-string">"block"</span>;
                }

            }
        }
    });

})(jQuery);</pre>

在这里我们使用了jquery的$.extend()方法的合并对象的功能，使用用户传入的配置项覆盖默认配置项并最终合并到一个新的配置项供后面的程序使用。

好了，经过了这么几步，我们基本上完成了一款最简单的javascript插件。所有代码已经上传至我的github上面，下面是地址：

[git代码仓库查看源码][2]

[1]: http://blog.csdn.net/hjb2722404/article/details/46363367
[2]: http://www.github.com/hjb2722404/js-tools-h_tabs.git
