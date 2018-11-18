---
title: "css 权重及！important"
categories: tech
tag: [css,优先级,权重]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

在编写css样式的时候，我们会时常碰到自己写的样式没有生效，尤其是引用一些外部框架的时候，这种情况更容易发生。

## CSS样式的优先级

按照官方的表述，css优先级如下：

<blockquote>
  通用选择器（*） &lt; 元素(类型)选择器 &lt; 类选择器 &lt; 属性选择器 &lt; 伪类  &lt; ID 选择器 &lt;内联样式
</blockquote>

举例：

例如以下代码：

index.html

<pre class="prettyprint"><span class="hljs-doctype">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">head</span> <span class="hljs-attribute">lang</span>=<span class="hljs-value">"en"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">charset</span>=<span class="hljs-value">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">http-equiv</span>=<span class="hljs-value">"X-UA-Compatible"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"IE=edge"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"viewport"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"renderer"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"webkit"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">title</span>&gt;</span>css权重计算测试<span class="hljs-tag">&lt;/<span class="hljs-title">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"style.css"</span>/&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">style</span>&gt;</span><span class="css">
        <span class="hljs-tag">img</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">150</span>px</span></span>;<span class="hljs-rule">}</span></span>
    </span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-title">img</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"img.jpg"</span>  <span class="hljs-attribute">width</span>=<span class="hljs-value">"1080"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 100px"</span>  <span class="hljs-attribute">class</span>=<span class="hljs-value">"img"</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"img"</span> <span class="hljs-attribute">alt</span>=<span class="hljs-value">"图片"</span>/&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>

style.css



<pre class="prettyprint"><span class="hljs-at_rule">@<span class="hljs-keyword">charset</span> <span class="hljs-string">"utf-8"</span>;</span>
<span class="hljs-comment">/*
//author:hjb2722404
//description:
//date:2015/10/10
*/</span>

* { <span class="hljs-attribute">width</span><span class="hljs-value">:<span class="hljs-number">1000</span>px;</span> }  <span class="hljs-comment">// 通用选择器</span>
  <span class="hljs-class">.img</span> { <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">180</span>px;</span>} <span class="hljs-comment">// 类选择器</span>
  <span class="hljs-tag">img</span><span class="hljs-attr_selector">[alt="img"]</span> {
    <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">400</span>px;</span>
  }                     <span class="hljs-comment">//属性选择器</span>
  <span class="hljs-tag">img</span><span class="hljs-pseudo">:hover</span> { <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">500</span>px;</span>} <span class="hljs-comment">// 伪类选择器</span>
  <span class="hljs-id">#img</span> { <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">300</span>px;</span>}   <span class="hljs-comment">//ID 选择器</span></pre>

此时，我们查看效果，![这里写图片描述](http://img.blog.csdn.net/20151010104825524)

发现最终起作用的是内联样式，并且鼠标悬浮到图片上时：hover的样式并未起作用。说明内联样式优先级最高。

我们去掉行内样式：

<pre class="prettyprint">&lt;img src=<span class="hljs-string">"img.jpg"</span>  width=<span class="hljs-string">"1080"</span>  <span class="hljs-type">class</span>=<span class="hljs-string">"img"</span> <span class="hljs-property">id</span>=<span class="hljs-string">"img"</span> alt=<span class="hljs-string">"图片"</span>/&gt;</pre>

再看效果：

![这里写图片描述](http://img.blog.csdn.net/20151010105858675)

发现最终应用了ID选择器的规则，并且：hover伪类未起作用，我们继续去掉ID选择器，看效果：



<pre class="prettyprint">
* <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">1000</span>px</span></span>;<span class="hljs-rule">}</span></span>
  <span class="hljs-class">.img</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">180</span>px</span></span>;<span class="hljs-rule">}</span></span>
  <span class="hljs-tag">img</span><span class="hljs-attr_selector">[alt="img"]</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">400</span>px</span></span>;
  <span class="hljs-rule">}</span></span>
  <span class="hljs-tag">img</span><span class="hljs-pseudo">:hover</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">500</span>px</span></span>;<span class="hljs-rule">}</span></span>
  <span class="hljs-comment">/*#img { width: 300px;}*/</span></pre>

![这里写图片描述](http://img.blog.csdn.net/20151010111346673)

发现此时应用了”属性选择器“的规则，当鼠标悬停到图片上时：

![这里写图片描述](http://img.blog.csdn.net/20151010110706563)

应用了”伪类“的规则，说明伪类的优先级高于”属性选择器“。

我们继续去掉属性选择器与伪类：



<pre class="prettyprint">* <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">1000</span>px</span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-class">.img</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">180</span>px</span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-comment">/*img[alt="img"] {*/</span>
    <span class="hljs-comment">/*width: 400px;*/</span>
<span class="hljs-comment">/*}*/</span>
<span class="hljs-comment">/*img:hover { width: 500px;}*/</span>
<span class="hljs-comment">/*#img { width: 300px;}*/</span></pre>

效果如下：

![这里写图片描述](http://img.blog.csdn.net/20151010111505528)

这里应用了”类选择器“的规则。

我们继续去掉类选择器：



<pre class="prettyprint">* <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">1000</span>px</span></span>;<span class="hljs-rule">}</span></span>
<span class="hljs-comment">/*.img { width: 180px;}*/</span>
<span class="hljs-comment">/*img[alt="img"] {*/</span>
    <span class="hljs-comment">/*width: 400px;*/</span>
<span class="hljs-comment">/*}*/</span>
<span class="hljs-comment">/*img:hover { width: 500px;}*/</span>
<span class="hljs-comment">/*#img { width: 300px;}*/</span></pre>

效果如下：

![这里写图片描述](http://img.blog.csdn.net/20151010111654619)

发现应用了”元素选择器“规则。

继续去掉元素选择器：

<pre class="prettyprint"> <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"style.css"</span>/&gt;</span>
    <span class="hljs-comment">&lt;!--&lt;style&gt;--&gt;</span>
        <span class="hljs-comment">&lt;!--img { width: 150px;}--&gt;</span>
    <span class="hljs-comment">&lt;!--&lt;/style&gt;--&gt;</span></pre>

效果如下：

![这里写图片描述](http://img.blog.csdn.net/20151010112012488)

我们发现它应用了”通用选择器“的规则。继续去掉通用选择器：



<pre class="prettyprint"><span class="hljs-javadoc">/** { width: 1000px;}*/</span></pre>

效果如下：

![这里写图片描述](http://img.blog.csdn.net/20151010112211200)

发现应用了元素自身的属性值。

再去掉元素自身属性之后，不必说，显示的就是原图大小了

至此，我们一步步验证了CSS官方的优先级顺序规则，除了最后一点，提醒我们注意：

**元素自身属性的优先级反而是最低的**

这一实验驳斥了一些博客上所说的”离元素越近优先级越高“的说法

##css样式优先级计算规则：

实际上，优先级之所以表现为上面所示，是因为CSS内部是按每条样式的权重值来计算优先级的，各类型选择器所对应的权重值如下：

<blockquote>
  元素, 伪元素: 1 – (0,0,0,1)      
  类, 伪类, 属性: 1 – (0,0,1,0)      
  ID: 1 – (0,1,0,0)     
  内联样式: 1 – (1,0,0,0)
</blockquote>

我们可以这样理解：

假使元素在未应用任何样式前它的权重值为0，那么，每条样式的权重值就是该样式所包含的所有选择器相对应的权重值之和：

元素，伪元素：+1     
类，伪类，属性：+10     
ID：+100     
内联样式：+1000

例如以下样式：

<pre class="prettyprint">p {} <span class="hljs-comment"> //p为元素，总权重就是：1</span>
<span class="hljs-operator">div</span> p{}<span class="hljs-comment"> //p与div都是元素，总权重是：1=1=2</span>
.<span class="hljs-operator">div</span> p<span class="hljs-comment"> // .div是类，p是元素，总权重是：10+1=11</span></pre>

所以，如果这三条样式修饰同一p元素，最终应用的就是第三条权重值最大的样式。

##总有例外

那么，如果同时有几个选择器规则应用在同一个元素上，我想最终要的那条权重又比其他的比较低，怎么办呢？

还拿一开始那个例子来说，我现在就想让图片宽度为150px，即应用元素选择器中的样式，在不注释和删除其他样式的情况下，我该怎么做，答案就是：



###！important

!important允许开发人员强制应用某样式，他的用法是写在该样式的某属性值后，结束分号前，以便强制应用该样式，如：

<pre class="prettyprint"> <span class="hljs-tag">&lt;<span class="hljs-title">style</span>&gt;</span><span class="css">
        <span class="hljs-tag">img</span> <span class="hljs-rules">{ <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">150</span>px <span class="hljs-important">!important</span></span></span>;<span class="hljs-rule">}</span></span>
    </span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span></pre>

我们看看效果：

![这里写图片描述](http://img.blog.csdn.net/20151010114112231)

成功了！

<blockquote>
  注意：在开发中不到万不得已，尽量不要使用此方法，建议通过改变选择器类型来改变权重。至于为啥，自行问度娘吧^.^
</blockquote>
