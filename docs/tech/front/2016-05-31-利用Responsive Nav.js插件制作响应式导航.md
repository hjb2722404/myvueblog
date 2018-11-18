---
title: "利用Responsive Nav.js插件制作响应式导航"
categories: tech
date: 2016-06-15 16:00:00 +0800
author: hjb2722404
tags: [CSS,响应式]

---

在制作响应式Web站点的过程中，导航的响应式设计是很重要的一个环节，Responsive Nav是bootstrap官方推荐的一款响应式导航制作插件，官方站点：

[响应式导航（Responsive Nav）][1]

但是，官方给出了使用示例是最简单的一个例子，里面的链接都还是带下划线的蓝色链接字体，小屏下的menu也只是一个链接，没有样式。

根据官方示例的原理，设计了一款带有简单样式的导航，这是宽屏下的显示效果：

![宽屏下的显示](http://img.blog.csdn.net/20150423120211770)

下面是PAD同等宽度屏幕上的显示效果：

![这里写图片描述](http://img.blog.csdn.net/20150423120444344)

下面是手机屏幕上显示效果：

![这里写图片描述](http://img.blog.csdn.net/20150423120742980)

直接上代码：

**responsiveNav.html**



<pre class="prettyprint"><span class="hljs-doctype">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">head</span> <span class="hljs-attribute">lang</span>=<span class="hljs-value">"en"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">charset</span>=<span class="hljs-value">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">meta</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"viewport"</span> <span class="hljs-attribute">content</span>=<span class="hljs-value">"initial-scale=1, maximum-scale=1, user-scalable=no"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">title</span>&gt;</span>响应式导航测试<span class="hljs-tag">&lt;/<span class="hljs-title">title</span>&gt;</span>
<span class="hljs-comment">&lt;!--    &lt;link rel="stylesheet" href="css/bootstrap.min.css"/&gt; --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"css/myNav.css"</span>/&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"css/responsive-nav.css"</span>/&gt;</span>
    <span class="hljs-comment">&lt;!--调用responsive nav的css样式表文件--&gt;</span>
    <span class="hljs-comment">&lt;!--    &lt;script type="text/javascript" src="js/jquery.js"&gt;&lt;/script&gt;
      &lt;script type="text/javascript" src="js/bootstrap.min.js"&gt;&lt;/script&gt; --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/javascript"</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"js/responsive-nav.min.js"</span>&gt;</span><span class="javascript"></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
    <span class="hljs-comment">&lt;!--调用responsive nav的js插件--&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"container"</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"row"</span>&gt;</span> <span class="hljs-comment">&lt;!--两个外层DIV是为了整合bootstrap插件--&gt;</span>

            <span class="hljs-tag">&lt;<span class="hljs-title">nav</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"nav-collapse"</span>&gt;</span> <span class="hljs-comment">&lt;!--这里的className就是下方插件要调用的参数--&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-title">ul</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>导航项目一<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>导航项目二<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                       <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>导航项目三<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>导航项目四<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
    
            <span class="hljs-tag">&lt;/<span class="hljs-title">nav</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
        <span class="hljs-keyword">var</span> navigation = responsiveNav(<span class="hljs-string">".nav-collapse"</span>);
        <span class="xml"><span class="hljs-comment">&lt;!--这里就是该插件最简单的调用方式，更多的设置请参考官网说明--&gt;</span>
    </span></span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>

**myNav.css：**



<pre class="prettyprint"><span class="hljs-tag">ul</span> ,<span class="hljs-tag">li</span> { <span class="hljs-attribute">margin</span><span class="hljs-value">: <span class="hljs-number">0</span>;</span> <span class="hljs-attribute">padding</span><span class="hljs-value">: <span class="hljs-number">0</span>;</span>} <span class="hljs-comment">//reset浏览器默认样式</span>
<span class="hljs-class">.nav-collapse</span> { <span class="hljs-attribute">min-height</span><span class="hljs-value">: <span class="hljs-number">60</span>px;</span> }<span class="hljs-comment">//设置导航的最小高度</span>
<span class="hljs-class">.nav-collapse</span> <span class="hljs-tag">ul</span> { <span class="hljs-attribute">width</span><span class="hljs-value">:<span class="hljs-number">100</span>%;</span><span class="hljs-attribute">list-style-type</span><span class="hljs-value">: none;</span> <span class="hljs-attribute">background</span><span class="hljs-value">: <span class="hljs-hexcolor">#333333</span>;</span>}<span class="hljs-comment">//为导航设置 </span>
<span class="hljs-class">.nav-collapse</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> { <span class="hljs-attribute">max-height</span><span class="hljs-value">: <span class="hljs-number">40</span>px;</span> <span class="hljs-attribute">line-height</span><span class="hljs-value">: <span class="hljs-number">40</span>px;</span> <span class="hljs-attribute">display</span><span class="hljs-value">: inline-block;</span> <span class="hljs-attribute">background-color</span><span class="hljs-value">: <span class="hljs-hexcolor">#333333</span>;</span>}
<span class="hljs-comment">//设置li样式，这里需要特别注意，这里一定要将li的display设置为inline-block，这样项目才能在行内显示，千万不要是用float:left这样的语句，否则Responsive Nav插件会失效</span>
<span class="hljs-class">.nav-collapse</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-tag">a</span>{ <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">100</span>%;</span> <span class="hljs-attribute">height</span><span class="hljs-value">: <span class="hljs-number">100</span>%;</span> <span class="hljs-attribute">text-decoration</span><span class="hljs-value">: none;</span> <span class="hljs-attribute">color</span><span class="hljs-value">: <span class="hljs-hexcolor">#cccccc</span>;</span> <span class="hljs-attribute">display</span><span class="hljs-value">: block;</span> <span class="hljs-attribute">text-align</span><span class="hljs-value">: center;</span> <span class="hljs-attribute">font-weight</span><span class="hljs-value">: bold;</span>}
<span class="hljs-class">.nav-collapse</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> <span class="hljs-tag">a</span><span class="hljs-pseudo">:hover</span> { <span class="hljs-attribute">background</span><span class="hljs-value">: <span class="hljs-hexcolor">#cccccc</span>;</span> <span class="hljs-attribute">color</span><span class="hljs-value">: <span class="hljs-hexcolor">#333333</span>;</span>} <span class="hljs-comment">//为链接设置样式</span>

<span class="hljs-comment">//大屏显示时，li的宽度要指定，否则大屏下会显示为100%宽度；</span>
<span class="hljs-at_rule">@<span class="hljs-keyword">media</span><span class="hljs-preprocessor"> screen</span><span class="hljs-preprocessor"> and</span> (min-width:<span class="hljs-preprocessor"> 40em</span>) {</span>

    <span class="hljs-class">.nav-collapse</span> <span class="hljs-tag">ul</span> <span class="hljs-tag">li</span> { <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">18</span>%;</span> } <span class="hljs-comment">//这里的数字根据导航项目的数量自己计算得到；</span>
}

<span class="hljs-comment">/*为menu菜单设置简单样式，你也可以设置为图片*/</span>
<span class="hljs-class">.nav-toggle</span> {
    <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">40</span>px;</span>
    <span class="hljs-attribute">height</span><span class="hljs-value">: <span class="hljs-number">30</span>px;</span>
    <span class="hljs-attribute">line-height</span><span class="hljs-value">: <span class="hljs-number">30</span>px;</span>
    <span class="hljs-attribute">text-decoration</span><span class="hljs-value">: none;</span>
    <span class="hljs-attribute">background</span><span class="hljs-value">: <span class="hljs-hexcolor">#333</span>;</span>
    <span class="hljs-attribute">color</span><span class="hljs-value">: <span class="hljs-hexcolor">#fff</span>;</span>
    <span class="hljs-attribute">display</span><span class="hljs-value">: block;</span>
    <span class="hljs-attribute">text-align</span><span class="hljs-value">: center;</span>
}</pre>

基本上就是以上代码，可以根据这样的基本原理，制作出更多可变的响应式导航

[1]: http://www.bootcss.com/p/responsive-nav.js/
