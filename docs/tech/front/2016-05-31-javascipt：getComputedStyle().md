---
title: "javascipt：getComputedStyle()"
categories: tech
tags: [js,语法]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

简单的说，这个方法是用来获取元素样式的值的，语法为：



<pre class="prettyprint"><span class="hljs-reserved">var</span> style = <span class="hljs-built_in">window</span>.getComputedStyle(element[, pseudoElt]);</pre>

其中，element 是用于计算样式的元素，为必须参数，pseudoElt为可选参数，主要用于选取伪元素进行匹配计算

用法示例：

<pre class="prettyprint"><span class="hljs-tag">&lt;<span class="hljs-title">style</span>&gt;</span><span class="css">
 <span class="hljs-id">#elem-container</span><span class="hljs-rules">{
   <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> absolute</span></span>;
   <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value">     <span class="hljs-number">100</span>px</span></span>;
   <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value">      <span class="hljs-number">200</span>px</span></span>;
   <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value">   <span class="hljs-number">100</span>px</span></span>;
 <span class="hljs-rule">}</span></span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"elem-container"</span>&gt;</span>dummy<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"output"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>  

<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTheStyle</span><span class="hljs-params">()</span>{</span>
    <span class="hljs-keyword">var</span> elem = document.getElementById(<span class="hljs-string">"elem-container"</span>);
    <span class="hljs-keyword">var</span> theCSSprop = window.getComputedStyle(elem,<span class="hljs-literal">null</span>).getPropertyValue(<span class="hljs-string">"height"</span>);
    document.getElementById(<span class="hljs-string">"output"</span>).innerHTML = theCSSprop;
   }
  getTheStyle();
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></pre>

可以看出，getComputedStyle 返回的对象跟 element 调用 style 属性返回的对象是同一种类型，可以称为 CSSStyleDeclaration. 但两个对象有不同的用处， getComplutedSytle返回的对象是只读对象， 用于检测元素的样式（包括在

<pre class="prettyprint"><span class="hljs-tag">&lt;<span class="hljs-title">style</span>&gt;</span><span class="css">
 <span class="hljs-tag">h3</span><span class="hljs-pseudo">:after</span> <span class="hljs-rules">{
   <span class="hljs-rule"><span class="hljs-attribute">content</span>:<span class="hljs-value"> <span class="hljs-string">' rocks!'</span></span></span>;
 <span class="hljs-rule">}</span></span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-title">h3</span>&gt;</span>generated content<span class="hljs-tag">&lt;/<span class="hljs-title">h3</span>&gt;</span> 

<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">var</span> h3       = document.querySelector(<span class="hljs-string">'h3'</span>), 
      result   = getComputedStyle(h3, <span class="hljs-string">':after'</span>).content;

  console.log(<span class="hljs-string">'the generated content is: '</span>, result); <span class="hljs-comment">// returns ' rocks!'</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></pre>
