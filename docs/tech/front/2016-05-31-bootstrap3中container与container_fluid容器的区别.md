---
title: "bootstrap3中container与container_fluid容器的区别"
categories: tech
tags: [bootstrap,理论]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404
---

.container与.container_fluid是bootstrap中的两种不同类型的外层容器，按照官方的说法，这两者的区别是：

<blockquote>
  .container 类用于固定宽度并支持响应式布局的容器。

  .container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。
</blockquote>

一开始，我以为所谓固定宽度是开发者可以设置该容器为固定宽度，所以我采用了如下布局样式：

<pre class="prettyprint"><span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"container"</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width: 800px"</span> &gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"col-md-6"</span>&gt;</span>

            <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>官方解释container容器用于固定宽度并且能够自适应布局，我现在给外层应用了container类的div设置一个固定宽度800px，用来测试是否能实现自适应<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span>

        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"col-md-6"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">img</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"image/QQ截图20150423144403.png"</span> <span class="hljs-attribute">alt</span>=<span class="hljs-value">""</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"width:100%;"</span>/&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>

    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>



<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
</pre>

当我这样做了以后，我发现，缩小浏览器宽度到小于800px的值时，内容不再自适应了，所以，我调出了调试台，看了bootstrap.css中对.container的定义：

<pre class="prettyprint"><span class="hljs-class">.container</span><span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">padding-right</span>:<span class="hljs-value"><span class="hljs-number">15</span>px</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">padding-left</span>:<span class="hljs-value"><span class="hljs-number">15</span>px</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value">auto</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value">auto
</span></span></span>}

<span class="hljs-at_rule">@<span class="hljs-keyword">media</span> (min-width:<span class="hljs-number">768</span>px)</span>{
    <span class="hljs-class">.container</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"><span class="hljs-number">750</span>px
    </span></span></span>}

}

<span class="hljs-at_rule">@<span class="hljs-keyword">media</span> (min-width:<span class="hljs-number">992</span>px)</span>{
    <span class="hljs-class">.container</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"><span class="hljs-number">970</span>px
    </span></span></span>}

}

<span class="hljs-at_rule">@<span class="hljs-keyword">media</span> (min-width:<span class="hljs-number">1200</span>px)</span>{
    <span class="hljs-class">.container</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"><span class="hljs-number">1170</span>px
    </span></span></span>}

}</pre>

我忽然明白，所谓固定宽度并不是允许开发者自己设置容器的宽度，而是bootstrap内部根据屏幕宽度利用媒体查询，帮我们设置了固定宽度，并且是能够自适应的。

所以，无论何种情况下，请不要手动为响应式布局中的外层布局容器设置固定宽度值。

那么，.container-fluid，又是怎样的呢？

根据测试，.container-fluid自动设置为外层视窗的100%，如果外层视窗为body，那么它将全屏显示，无论屏幕大小，并且自动实现响应式布局。
