---
title: "css3新特性+less试验（2）——transform"
categories: tech
tags: [css3,less,transform]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

本次试验将深入探索CSS3的新特性——transform(变形)。

###**实验对象：transform**

<blockquote>
  transform：顾名思义，就是【变形】的意思，在CSS3中的变形有以下几种：旋转 （rotate） |  扭曲 （skew）  |  缩放 （scale） |  移动 （translate）  |  矩阵变形 （matrix），注意，不同于gradient是background属性的值，transform本身是一个属性。
</blockquote>

###**语法**

        transform:transform: none | rotate | scale | skew | translate |matrix;


###**试验**

####1、rotate [旋转]



#####用法

        transform:rotate(&lt;angle&gt;) 




#####html



<pre class="prettyprint"><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre>

#####less



<pre class="prettyprint">
<span class="hljs-preprocessor">.rotate</span>(@angle) {
  transform: rotate(@angle)<span class="hljs-comment">;</span>
}

<span class="hljs-preprocessor">.box</span> {
  width: <span class="hljs-number">100</span>px<span class="hljs-comment">;</span>
  height: <span class="hljs-number">100</span>px<span class="hljs-comment">;</span>
  margin-left: <span class="hljs-number">100</span>px<span class="hljs-comment">;</span>
  margin-top: <span class="hljs-number">100</span>px<span class="hljs-comment">;</span>
  border-top: <span class="hljs-number">4</span>px solid red<span class="hljs-comment">;</span>
  background: black<span class="hljs-comment">;</span>
  float: left<span class="hljs-comment">;;</span>
}

<span class="hljs-preprocessor">.box</span>1 {
  <span class="hljs-preprocessor">.box</span><span class="hljs-comment">;</span>
  <span class="hljs-preprocessor">.rotate</span>(<span class="hljs-number">20</span>deg)<span class="hljs-comment">;</span>
}

<span class="hljs-preprocessor">.box</span>2 {
  <span class="hljs-preprocessor">.box</span><span class="hljs-comment">;</span>
  <span class="hljs-preprocessor">.rotate</span>(<span class="hljs-number">45</span>deg)<span class="hljs-comment">;</span>
}

<span class="hljs-preprocessor">.box</span>3 {
  <span class="hljs-preprocessor">.box</span><span class="hljs-comment">;</span>
  <span class="hljs-preprocessor">.rotate</span>(<span class="hljs-number">90</span>deg)<span class="hljs-comment">;</span>
}

<span class="hljs-preprocessor">.box</span>4 {
  <span class="hljs-preprocessor">.box</span><span class="hljs-comment">;</span>
  <span class="hljs-preprocessor">.rotate</span>(<span class="hljs-number">180</span>deg)<span class="hljs-comment">;</span>
}

<span class="hljs-preprocessor">.box</span>5 {
  <span class="hljs-preprocessor">.box</span><span class="hljs-comment">;</span>
  <span class="hljs-preprocessor">.rotate</span>(<span class="hljs-number">270</span>deg)<span class="hljs-comment">;</span>

}
<span class="hljs-preprocessor">.box</span>6 {
  <span class="hljs-preprocessor">.box</span><span class="hljs-comment">;</span>
  <span class="hljs-preprocessor">.rotate</span>(<span class="hljs-number">360</span>deg)<span class="hljs-comment">;</span>
}</pre>



#####CSS



<pre class="prettyprint"><span class="hljs-class">.box</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box1</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">rotate(<span class="hljs-number">20</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box2</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">rotate(<span class="hljs-number">45</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box3</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">rotate(<span class="hljs-number">90</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box4</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">rotate(<span class="hljs-number">180</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box5</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">rotate(<span class="hljs-number">270</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box6</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">rotate(<span class="hljs-number">360</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span></pre>

#####效果

![这里写图片描述](http://img.blog.csdn.net/20150602154828506)

<blockquote>
  从左至右依次为box1~box6，我们可以看出，在CSS中，所有角度值的变化都如图片中下半部分所示，请注意体会，如果不清楚，请看下图，我加入了单位格子为100*100的网格线，还有边框为4PX的外层DIV，并取消各个box的margin值以后的效果：
</blockquote>

![这里写图片描述](http://img.blog.csdn.net/20150602161422475)

<blockquote>
  可以看到，实际上，rotate的旋转是围绕着一个圆心的，而默认不设置圆心位置的话，圆心就是旋转元素自身的几何中心，即（50%，50%），上图是我将圆心设置为（0%，0%）后的效果。
</blockquote>

看看我的代码（less中的代码）:



<pre class="prettyprint">.<span class="hljs-keyword">rotate</span>(<span class="hljs-variable">@angle</span>) {
  transform: <span class="hljs-keyword">rotate</span>(<span class="hljs-variable">@angle</span>);
  transform-origin:<span class="hljs-number">0</span>% <span class="hljs-number">0</span><span class="hljs-variable">%;</span> <span class="hljs-comment">//这里就是设置圆心的代码</span>
}</pre>

<blockquote>
  你可以自己尝试一下设置不同的圆心效果有何不同哦！
</blockquote>

####2 、skew 【扭曲】

#####用法

        transform:skew(&lt;angle&gt; [, &lt;angle&gt;]);
        
        第一个参数为x轴的斜切角度，第二个参数为Y轴斜切角度，也可以分别来写：
        
        transform:skewX(&lt;angle&gt;); |  transform:skewY(&lt;angle&gt;);


#####HTML



<pre class="prettyprint">
<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"content"</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
</pre>

#####less



<pre class="prettyprint"><span class="hljs-class">.skew</span>(<span class="hljs-at_rule">@x_angle:<span class="hljs-number">0</span>;</span><span class="hljs-at_rule">@y_angle:<span class="hljs-number">0</span>){</span>
  <span class="hljs-attribute">transform</span><span class="hljs-value">: skew(@x_angle,@y_angle);</span>
}

<span class="hljs-tag">body</span>{
  <span class="hljs-attribute">background</span><span class="hljs-value">: url(<span class="hljs-string">"bg.png"</span>) repeat;</span>
}

<span class="hljs-class">.content</span> {
  <span class="hljs-attribute">position</span><span class="hljs-value">: relative;</span>
  <span class="hljs-attribute">margin-left</span><span class="hljs-value">: <span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">margin-top</span><span class="hljs-value">: <span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">1400</span>px;</span>
  <span class="hljs-attribute">height</span><span class="hljs-value">: <span class="hljs-number">800</span>px;</span>
  <span class="hljs-attribute">border</span><span class="hljs-value">: <span class="hljs-number">4</span>px solid <span class="hljs-hexcolor">#ffff00</span>;</span>
}
<span class="hljs-class">.box</span> {
  <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">height</span><span class="hljs-value">: <span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">border-top</span><span class="hljs-value">: <span class="hljs-number">4</span>px solid red;</span>
  <span class="hljs-attribute">background</span><span class="hljs-value">: black;</span>
  <span class="hljs-attribute">margin-right</span><span class="hljs-value">: <span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">float</span><span class="hljs-value">: left;</span>
  <span class="hljs-attribute">color</span><span class="hljs-value">:<span class="hljs-hexcolor">#ffffff</span>;</span>
}

<span class="hljs-class">.box1</span>{
  <span class="hljs-class">.box</span>;
  <span class="hljs-class">.skew</span>(30deg);
}

<span class="hljs-class">.box2</span>{
  <span class="hljs-class">.box</span>;
  <span class="hljs-class">.skew</span>(0deg,30deg);
}

<span class="hljs-class">.box3</span>{
  <span class="hljs-class">.box</span>;
  <span class="hljs-class">.skew</span>(30deg,30deg);
}

<span class="hljs-class">.box4</span>{
   <span class="hljs-class">.box</span>;
   <span class="hljs-class">.skew</span>(50deg);
 }

<span class="hljs-class">.box5</span>{
  <span class="hljs-class">.box</span>;
  <span class="hljs-class">.skew</span>(130deg);
}

<span class="hljs-class">.box6</span>{
  <span class="hljs-class">.box</span>;
  <span class="hljs-class">.skew</span>(170deg);
}</pre>

#####css



<pre class="prettyprint"><span class="hljs-tag">body</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">url(<span class="hljs-string">"bg.png"</span>)</span> repeat</span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.content</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">1400</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">800</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid <span class="hljs-hexcolor">#ffff00</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#ffffff</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box1</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#ffffff</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">skew(<span class="hljs-number">30</span>deg, <span class="hljs-number">0</span>)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box2</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#ffffff</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">skew(<span class="hljs-number">0</span>deg, <span class="hljs-number">30</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box3</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#ffffff</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">skew(<span class="hljs-number">30</span>deg, <span class="hljs-number">30</span>deg)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box4</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#ffffff</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">skew(<span class="hljs-number">50</span>deg, <span class="hljs-number">0</span>)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box5</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#ffffff</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">skew(<span class="hljs-number">130</span>deg, <span class="hljs-number">0</span>)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box6</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border-top</span>:<span class="hljs-value"> <span class="hljs-number">4</span>px solid red</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> black</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#ffffff</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transform</span>:<span class="hljs-value"> <span class="hljs-function">skew(<span class="hljs-number">170</span>deg, <span class="hljs-number">0</span>)</span></span></span>;
<span class="hljs-rule">}</span></span>
</pre>

#####效果

![这里写图片描述](http://img.blog.csdn.net/20150602165409825)

<blockquote>
  从左至右分别是box1~box6，我们可以看出，box4与box5，分别在X轴斜切角度为50deg和130deg，而它们相对于Y轴对称，我们可以由此得出：skew的角度范围为0~180deg，不能为90deg，为什么不能为90deg呢，你可以试试就知道了。
  
  同样滴，斜切也是有参照圆心的，依旧是transform-origin。这个大家可以自己试验，之后的实验中再不说明。
</blockquote>

####3、translate [平移]

#####用法

        transform:translate(&lt;length&gt; [, &lt;length&gt;]);
        
        第一个参数为x轴的平移距离，第二个参数为Y轴平移距离，也可以分别来写：
        
        transform:translateX(&lt;length&gt;); |  transform:translateY(&lt;length&gt;);


<blockquote>
  这个比较简单，没什么特别说明的，就不演示代码了
</blockquote>

####4、scale[缩放]

#####用法

        transform:scale(&lt;number&gt; [, &lt;number&gt;]);
        
        第一个参数为x轴的缩放倍数，第二个参数为Y轴缩放倍数，均支持小数，也可以分别来写：
        
        transform:scaleX(&lt;number&gt;); |  transform:scaleY(&lt;number&gt;);


<blockquote>
  这个也比较简单，没什么特别说明的，就不演示代码了
</blockquote>



####5、matrix[矩阵变形]

#####用法

        matrix(&lt;number&gt;,&lt;number&gt;,&lt;number&gt;,&lt;number&gt;,&lt;number&gt;,&lt;number&gt;)：
        
        以一个含六值的(a,b,c,d,e,f)变换矩阵的形式指定一个2D变换，相当于直接应用一个[a,b,c,d,e,f]变换矩阵


<blockquote>
  由于本人数学是渣渣，对于矩阵也是不甚了解，所以这里不知如何下手，如果有知道的大神能制作一个关于此的教程，请劳烦第一时间告知一下文章地址。
</blockquote>
