---
title: "CSS3新特性+less实验（3）——transition"
categories: tech
tags: [css,less,transition]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

本次实验，我们将就CSS3新特性transition做一些深入研究。



###**实验对象：transition**

<blockquote>
  transition实际上是一种提供了一组用来实现效果过渡方法的复合属性。
</blockquote>



###**语法**

<blockquote>
  transition：[ transition-property ] || [ transition-duration ] || [ transition-timing-function ] || [ transition-delay ]
</blockquote>

###**说明**

<blockquote>
  transition-property:参与过渡的属性，可以是任意的CSS属性，也可以是none代表不设置，或者all代表所有可以进行过渡的属性，可以提供多个属性值，用逗号隔开；
</blockquote>

有过渡效果的属性：

<table>
<thead>
<tr>
  <th>属性</th>
  <th align="center">可能值</th>
</tr>
</thead>
<tbody><tr>
  <td>background-color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>background-image</td>
  <td align="center">only gradients</td>
</tr>
<tr>
  <td>background-position</td>
  <td align="center">percentage, length</td>
</tr>
<tr>
  <td>border-bottom-color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>border-bottom-width</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>border-color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>border-left-color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>border-left-width</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>border-right-color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>border-right-width</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>border-spacing</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>border-top-color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>border-top-width</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>border-width</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>bottom</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>crop</td>
  <td align="center">rectangle</td>
</tr>
<tr>
  <td>font-size</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>font-weight</td>
  <td align="center">number</td>
</tr>
<tr>
  <td>grid-*</td>
  <td align="center">various</td>
</tr>
<tr>
  <td>height</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>left</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>letter-spacing</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>line-height</td>
  <td align="center">number, length, percentage</td>
</tr>
<tr>
  <td>margin-bottom</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>margin-left</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>margin-right</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>margin-top</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>max-height</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>max-width</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>min-height</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>min-width</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>opacity</td>
  <td align="center">number</td>
</tr>
<tr>
  <td>outline-color</td>
  <td align="center">color</td>
</tr>
<tr>
  <td>outline-offset</td>
  <td align="center">integer</td>
</tr>
<tr>
  <td>outline-width</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>padding-bottom</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>padding-left</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>padding-right</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>padding-top</td>
  <td align="center">length</td>
</tr>
<tr>
  <td>right</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>text-indent</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>text-shadow</td>
  <td align="center">shadow</td>
</tr>
<tr>
  <td>top</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>vertical-align</td>
  <td align="center">keywords, length, percentage</td>
</tr>
<tr>
  <td>visibility</td>
  <td align="center">visibility</td>
</tr>
<tr>
  <td>width</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>word-spacing</td>
  <td align="center">length, percentage</td>
</tr>
<tr>
  <td>z-index</td>
  <td align="center">integer</td>
</tr>
<tr>
  <td>zoom</td>
  <td align="center">number</td>
</tr>
</tbody></table>


        transition-duration:过渡效果的持续时间，单位为s或ms
        
        transition-trming-function:过渡的动画类型,可取值为：


<table>
<thead>
<tr>
  <th>取值</th>
  <th align="center">说明</th>
</tr>
</thead>
<tbody><tr>
  <td>linear</td>
  <td align="center">线性过渡</td>
</tr>
<tr>
  <td>ease</td>
  <td align="center">平滑过渡</td>
</tr>
<tr>
  <td>ease-in</td>
  <td align="center">由慢到快</td>
</tr>
<tr>
  <td>ease-out</td>
  <td align="center">由快到慢</td>
</tr>
<tr>
  <td>ease-in-out</td>
  <td align="center">由慢到快再到慢</td>
</tr>
<tr>
  <td>step-start</td>
  <td align="center">等同于steps(1,start)</td>
</tr>
<tr>
  <td>step-end</td>
  <td align="center">等同于 steps(1,end)</td>
</tr>
</tbody></table>


<blockquote>
  steps(,[start | end]):这是一个步进函数，接受两个参数，第一个必须为正整数，表示单位步进数，第二个值可以为start或end，指定每一步的值发生变化的时间点。
  
  还有一个函数可作为值：
  
  cubic-bezier(,,,) :特定的贝塞尔曲线类型，4个值需在[0,1]区间内。
  
  贝塞尔曲线也用在作图领域（想想钢笔工具），
  
  不了解贝塞尔曲线的，请移步这里：[贝塞尔曲线-百度百科][1]
</blockquote>

        transition-delay:过渡延迟时间，单位s或ms;


###**实例**



####HTML



<pre class="prettyprint">……
  <span class="hljs-tag">&lt;<span class="hljs-title">title</span>&gt;</span>CSS3新特性实验——transition<span class="hljs-tag">&lt;/<span class="hljs-title">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">link</span> <span class="hljs-attribute">rel</span>=<span class="hljs-value">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"style.css"</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text/css"</span>/&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"content"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"box1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span></pre>



####LESS



<pre class="prettyprint">
<span class="hljs-class">.transition</span>(<span class="hljs-at_rule">@pro:background-color,@dur:<span class="hljs-number">3</span>s,@fn:ease-in,@delay:.<span class="hljs-number">5</span>s){</span>
  -webkit-<span class="hljs-attribute">transition-property</span><span class="hljs-value">: @pro;</span>
  -moz-<span class="hljs-attribute">transition-property</span><span class="hljs-value">: @pro;</span>
  -o-<span class="hljs-attribute">transition-property</span><span class="hljs-value">: @pro;</span>
  <span class="hljs-attribute">transition-property</span><span class="hljs-value">: @pro;</span>

  -webkit-<span class="hljs-attribute">transition-duration</span><span class="hljs-value">: @dur;</span>
  -moz-<span class="hljs-attribute">transition-duration</span><span class="hljs-value">: @dur;</span>
  -o-<span class="hljs-attribute">transition-duration</span><span class="hljs-value">: @dur;</span>
  <span class="hljs-attribute">transition-duration</span><span class="hljs-value">: @dur;</span>

  -webkit-<span class="hljs-attribute">transition-timing-function</span><span class="hljs-value">: @fn;</span>
  -moz-<span class="hljs-attribute">transition-timing-function</span><span class="hljs-value">: @fn;</span>
  -o-<span class="hljs-attribute">transition-timing-function</span><span class="hljs-value">:@fn;</span>
  <span class="hljs-attribute">transition-timing-function</span><span class="hljs-value">: @fn;</span>

  -webkit-<span class="hljs-attribute">transition-delay</span><span class="hljs-value">: @delay;</span>
  -moz-<span class="hljs-attribute">transition-delay</span><span class="hljs-value">: @delay;</span>
  -o-<span class="hljs-attribute">transition-delay</span><span class="hljs-value">: @delay;</span>
  <span class="hljs-attribute">transition-delay</span><span class="hljs-value">: @delay;</span>
}

<span class="hljs-class">.content</span> {
  <span class="hljs-attribute">width</span><span class="hljs-value">: <span class="hljs-number">1400</span>px;</span>
  <span class="hljs-attribute">height</span><span class="hljs-value">: <span class="hljs-number">600</span>px;</span>
  <span class="hljs-attribute">margin-left</span><span class="hljs-value">: <span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">margin-top</span><span class="hljs-value">: <span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">border</span><span class="hljs-value">: <span class="hljs-number">1</span>px solid <span class="hljs-hexcolor">#ccc</span>;</span>
}

<span class="hljs-class">.box</span> {
  <span class="hljs-attribute">width</span><span class="hljs-value">:<span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">height</span><span class="hljs-value">:<span class="hljs-number">100</span>px;</span>
  <span class="hljs-attribute">float</span><span class="hljs-value">: left;</span>
  <span class="hljs-attribute">margin-right</span><span class="hljs-value">: <span class="hljs-number">30</span>px;</span>
  <span class="hljs-attribute">background-color</span><span class="hljs-value">: <span class="hljs-hexcolor">#000</span>;</span>
}

<span class="hljs-class">.box1</span> {
  <span class="hljs-class">.box</span>;
  <span class="hljs-class">.transition</span>();
}

<span class="hljs-class">.box1</span><span class="hljs-pseudo">:hover</span>{
  <span class="hljs-attribute">background-color</span><span class="hljs-value">: <span class="hljs-hexcolor">#666</span>;</span>
}</pre>



####css



<pre class="prettyprint"><span class="hljs-class">.content</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">1400</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">600</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-left</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-top</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">border</span>:<span class="hljs-value"> <span class="hljs-number">1</span>px solid <span class="hljs-hexcolor">#ccc</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">30</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background-color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#000</span></span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box1</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">30</span>px</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">background-color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#000</span></span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-webkit-transition-property</span>:<span class="hljs-value"> background-color</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-moz-transition-property</span>:<span class="hljs-value"> background-color</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-o-transition-property</span>:<span class="hljs-value"> background-color</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transition-property</span>:<span class="hljs-value"> background-color</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-webkit-transition-duration</span>:<span class="hljs-value"> <span class="hljs-number">3</span>s</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-moz-transition-duration</span>:<span class="hljs-value"> <span class="hljs-number">3</span>s</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-o-transition-duration</span>:<span class="hljs-value"> <span class="hljs-number">3</span>s</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transition-duration</span>:<span class="hljs-value"> <span class="hljs-number">3</span>s</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-webkit-transition-timing-function</span>:<span class="hljs-value"> ease-in</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-moz-transition-timing-function</span>:<span class="hljs-value"> ease-in</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-o-transition-timing-function</span>:<span class="hljs-value"> ease-in</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transition-timing-function</span>:<span class="hljs-value"> ease-in</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-webkit-transition-delay</span>:<span class="hljs-value"> <span class="hljs-number">0.5</span>s</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-moz-transition-delay</span>:<span class="hljs-value"> <span class="hljs-number">0.5</span>s</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">-o-transition-delay</span>:<span class="hljs-value"> <span class="hljs-number">0.5</span>s</span></span>;
  <span class="hljs-rule"><span class="hljs-attribute">transition-delay</span>:<span class="hljs-value"> <span class="hljs-number">0.5</span>s</span></span>;
<span class="hljs-rule">}</span></span>
<span class="hljs-class">.box1</span><span class="hljs-pseudo">:hover</span> <span class="hljs-rules">{
  <span class="hljs-rule"><span class="hljs-attribute">background-color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#666</span></span></span>;
<span class="hljs-rule">}</span></span>
</pre>



####效果：

![这里写图片描述](http://img.blog.csdn.net/20150603172824570)

这是默认状态

![这里写图片描述](http://img.blog.csdn.net/20150603173004990)

这是鼠标悬停在box1之上之后的效果



###**总结**

<blockquote>
  总的来说，transition规定了过渡效果的各项参数，但它需要一定的触发条件，比如上面css中的.box1:hover，就是使用鼠标悬停来触发过渡，实际应用中，多采用与JS结合的方式，动态添加类名来实现各种过渡效果。
</blockquote>

[1]: http://baike.baidu.com/view/60154.htm
