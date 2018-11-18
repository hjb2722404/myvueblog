---
title: "CSS3+less实验（1）——gradient"
categories: tech
tags: [css3,less,gradient]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

从今天起，将陆续进行CSS3新特性的详细实验，由于要兼容各个浏览器（一想到这就觉得做前端真烦啊），所以配合LESS来处理css样式。

###本次实验对象——gradient

<blockquote>
  gradient是CSS3新推出的可以实现渐变的 background的值，也就是说，它本身不是一个css属性，而是background属性的一个可能的值，所以这一点要搞清楚。
</blockquote>



###**线性渐变**



####1、语法：

        background:-prefix-linear-gradient(angle,startcolor,stopcolor);




####2、说明：

        prefix:浏览器前缀，目前有 moz[火狐]，webkit[chrome，safari],o[opara]
        
        angle:起始角度。取值范围 0~360(deg),也可以直接使用left(90deg),top(180deg),bottom(0deg),right(270deg)来实现水平或垂直的渐变
        
        startcolor : 渐变起始颜色
        
        stopcolor : 渐变终止颜色




####3、html：



<pre class="prettyprint">//index.html

<span class="hljs-doctype">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">head</span> <span class="hljs-attribute">lang</span>=<span class="hljs-value">"en"</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">charset</span>=<span class="hljs-value">"UTF-8"</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">http-equiv</span>=<span class="hljs-value">"X-UA-Compatible"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"IE=edge"</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"viewport"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"renderer"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"webkit"</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">title</span>&gt;</span>css3动画试验之——gradient<span class="hljs-tag">&lt;/<span class="hljs-title">title</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"style.css"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/css"</span>/&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>

   <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box7"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>



####4、less

<blockquote>
  关于less，如果没有接触过的，请看这里：[LESS中文教程][1]
</blockquote>



<pre class="prettyprint">
//<span class="hljs-tag">style</span><span class="hljs-class">.less</span>

<span class="hljs-class">.gradient</span>(<span class="hljs-at_rule">@<span class="hljs-keyword">angle:top,@start:#000,@stop:#ff050e){</span>

  background: <span class="hljs-function">-webkit-linear-gradient(@angle,@start,@stop)</span></span>;
  <span class="hljs-tag">background</span>: <span class="hljs-tag">-moz-linear-gradient</span>(<span class="hljs-at_rule">@<span class="hljs-keyword">angle,@start,@stop);</span>
  background: <span class="hljs-function">-o-linear-gradient(@angle,@start,@stop)</span></span>;
  <span class="hljs-tag">background</span>: <span class="hljs-tag">linear-gradient</span>(<span class="hljs-at_rule">@<span class="hljs-keyword">angle,@start,@stop);</span>


}

.box </span>{
  <span class="hljs-tag">width</span>: 120<span class="hljs-tag">px</span>;
  <span class="hljs-tag">height</span>: 60<span class="hljs-tag">px</span>;
  <span class="hljs-tag">float</span>: <span class="hljs-tag">left</span>;
  <span class="hljs-tag">margin-right</span>: 10<span class="hljs-tag">px</span>;
}

<span class="hljs-class">.box1</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">.box;
  .gradient();
}

.box2 {
  .box;
  .gradient(left,#000,#fff);
}

.box3 {
  .box;
  .gradient(30deg,#000,#fff);
}


.box4 {
  .box;
  .gradient(180deg,#000,#fff);
}

.box5 {
  .box;
  .gradient(0deg,#000,#fff);
}

.box6 {
  .box;
  .gradient(90deg,#000,#fff);
}

.box7 {
  .box;
  .gradient(270deg,#000,#fff);
}</span></span></span></pre>



####5、CSS



<pre class="prettyprint">//<span class="hljs-tag">style</span><span class="hljs-class">.css</span>
<span class="hljs-class">.box</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box1</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-linear-gradient(top, #<span class="hljs-number">000000</span>, #ff050e)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-linear-gradient(top, #<span class="hljs-number">000000</span>, #ff050e)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-o-linear-gradient(top, #<span class="hljs-number">000000</span>, #ff050e)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">linear-gradient(top, #<span class="hljs-number">000000</span>, #ff050e)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box2</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-linear-gradient(left, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-linear-gradient(left, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-o-linear-gradient(left, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">linear-gradient(left, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box3</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-linear-gradient(<span class="hljs-number">30</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-linear-gradient(<span class="hljs-number">30</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-o-linear-gradient(<span class="hljs-number">30</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">linear-gradient(<span class="hljs-number">30</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box4</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-linear-gradient(<span class="hljs-number">180</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-linear-gradient(<span class="hljs-number">180</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-o-linear-gradient(<span class="hljs-number">180</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">linear-gradient(<span class="hljs-number">180</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box5</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-linear-gradient(<span class="hljs-number">0</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-linear-gradient(<span class="hljs-number">0</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-o-linear-gradient(<span class="hljs-number">0</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">linear-gradient(<span class="hljs-number">0</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box6</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-linear-gradient(<span class="hljs-number">90</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-linear-gradient(<span class="hljs-number">90</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-o-linear-gradient(<span class="hljs-number">90</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">linear-gradient(<span class="hljs-number">90</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box7</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-linear-gradient(<span class="hljs-number">270</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-linear-gradient(<span class="hljs-number">270</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-o-linear-gradient(<span class="hljs-number">270</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">linear-gradient(<span class="hljs-number">270</span>deg, #<span class="hljs-number">000000</span>, #ffffff)</span></span></span>;
<span class="hljs-rule">}</span></span>
</pre>



####6、效果

![这里写图片描述](http://img.blog.csdn.net/20150602101501377)

<blockquote>
  从做至右的样式分别是box1~box7
</blockquote>

###**径向渐变**

####1、语法

        -prefix-radial-gradient([&lt;bg-position&gt; || &lt;angle&gt;,]? [&lt;shape&gt; || &lt;size&gt;,]? &lt;color-stop&gt;, &lt;color-stop&gt;[, &lt;color-stop&gt;]*);




####2、说明

        prefix:浏览器前缀，目前有 moz[火狐]，webkit[chrome，safari],o[opara]
        
        bg-position || angle :背景位置或角度，只能出现其中一种，否则元素不显示
        
        bg-position: 可选值为百分比，或数值，或 left ,bottom,top,center,right等值
        angle: 可选值为角度值，单位 deg
        
        shape  ||  size  :形状或大小，只能出现其中一种，否则元素不显示
        
        shape : 形状，可选值为 circle(圆) 或 ellipse（椭圆），默认为ellipse
        
        size : 大小，可选值为像素数，如 48px;
        
        color-stop:终止颜色，可以有多个




####3、HTML



<pre class="prettyprint">  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box8"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box9"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box11"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box12"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box13"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span></pre>

####4、Less



<pre class="prettyprint">
.gradient-<span class="hljs-keyword">radial</span>(<span class="hljs-variable">@positionOrAngle</span>:bottom left,<span class="hljs-variable">@shapeOrSize</span>:<span class="hljs-keyword">circle</span>,<span class="hljs-variable">@color_stop1</span>:#<span class="hljs-number">000000</span>,<span class="hljs-variable">@color_stop2</span>:#D2F726 ,<span class="hljs-variable">@color_stop13</span>:#DD2222 ){
  background: -moz-<span class="hljs-keyword">radial</span>-gradient(<span class="hljs-variable">@positionOrAngle</span>,<span class="hljs-variable">@shapeOrSize</span>, <span class="hljs-variable">@color_stop1</span>,<span class="hljs-variable">@color_stop2</span>,<span class="hljs-variable">@color_stop13</span>);
  background: -webkit-<span class="hljs-keyword">radial</span>-gradient(<span class="hljs-variable">@positionOrAngle</span>,<span class="hljs-variable">@shapeOrSize</span>, <span class="hljs-variable">@color_stop1</span>,<span class="hljs-variable">@color_stop2</span>,<span class="hljs-variable">@color_stop13</span>);
}

.box {
  width: <span class="hljs-number">120</span>px;
  height: <span class="hljs-number">60</span>px;
  <span class="hljs-keyword">float</span>: left;
  margin-right: <span class="hljs-number">10</span>px;
}


.box8 {
  .box;
  .gradient-<span class="hljs-keyword">radial</span>(center,ellipse);
}

.box9 {
  .box;
  .gradient-<span class="hljs-keyword">radial</span>(bottom left,#<span class="hljs-number">000000</span>  <span class="hljs-number">50</span><span class="hljs-variable">%,</span>#D2F726  <span class="hljs-number">30</span><span class="hljs-variable">%,</span>#DD2222  <span class="hljs-number">80</span><span class="hljs-variable">%)</span>;
}

.box10 {
  .box;
  .gradient-<span class="hljs-keyword">radial</span>(ellipse,#<span class="hljs-number">000000</span>  <span class="hljs-number">50</span><span class="hljs-variable">%,</span>#D2F726  <span class="hljs-number">30</span><span class="hljs-variable">%,</span>#DD2222  <span class="hljs-number">80</span><span class="hljs-variable">%)</span>;
}


.box11 {
  .box;
  .gradient-<span class="hljs-keyword">radial</span>(<span class="hljs-keyword">circle</span>,#<span class="hljs-number">000000</span> ,#D2F726 ,#DD2222 );
}

.box12 {
  .box;
  .gradient-<span class="hljs-keyword">radial</span>(closest-corner,#<span class="hljs-number">000000</span> ,#D2F726  ,#DD2222  );
}

.box13 {
  .box;
  .gradient-<span class="hljs-keyword">radial</span>(<span class="hljs-number">16</span>px,#<span class="hljs-number">000000</span>,#D2F726 ,#DD2222 );</pre>

####5、CSS



<pre class="prettyprint">
<span class="hljs-class">.box8</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-radial-gradient(center, ellipse, #<span class="hljs-number">000000</span>, #d2f726, #dd2222)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-radial-gradient(center, ellipse, #<span class="hljs-number">000000</span>, #d2f726, #dd2222)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box9</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-radial-gradient(bottom left, #<span class="hljs-number">000000</span> <span class="hljs-number">50</span>%, #d2f726 <span class="hljs-number">30</span>%, #dd2222 <span class="hljs-number">80</span>%, #dd2222)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-radial-gradient(bottom left, #<span class="hljs-number">000000</span> <span class="hljs-number">50</span>%, #d2f726 <span class="hljs-number">30</span>%, #dd2222 <span class="hljs-number">80</span>%, #dd2222)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box10</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-radial-gradient(ellipse, #<span class="hljs-number">000000</span> <span class="hljs-number">50</span>%, #d2f726 <span class="hljs-number">30</span>%, #dd2222 <span class="hljs-number">80</span>%, #dd2222)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-radial-gradient(ellipse, #<span class="hljs-number">000000</span> <span class="hljs-number">50</span>%, #d2f726 <span class="hljs-number">30</span>%, #dd2222 <span class="hljs-number">80</span>%, #dd2222)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box11</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-radial-gradient(circle, #<span class="hljs-number">000000</span>, #d2f726, #dd2222, #dd2222)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-radial-gradient(circle, #<span class="hljs-number">000000</span>, #d2f726, #dd2222, #dd2222)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box12</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-radial-gradient(closest-corner, #<span class="hljs-number">000000</span>, #d2f726, #dd2222, #dd2222)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-radial-gradient(closest-corner, #<span class="hljs-number">000000</span>, #d2f726, #dd2222, #dd2222)</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box13</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">120</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">10</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-moz-radial-gradient(<span class="hljs-number">16</span>px, #<span class="hljs-number">000000</span>, #d2f726, #dd2222, #dd2222)</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-function">-webkit-radial-gradient(<span class="hljs-number">16</span>px, #<span class="hljs-number">000000</span>, #d2f726, #dd2222, #dd2222)</span></span></span>;</span></pre>

####6、效果

![这里写图片描述](http://img.blog.csdn.net/20150602140537996)

<blockquote>
  从左至右分别为box8~box13，我只实验了几种参数组合，其他不同参数组合效果有兴趣可以自己做实验观察。
</blockquote>

[1]: http://www.bootcss.com/p/lesscss/
