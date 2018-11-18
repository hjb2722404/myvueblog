---
title: "服务器设置Cache-Control的方法"
categories: tech
date: 2016-06-15 16:00:00 +0800
author: hjb2722404
tags: [服务器,Cache-Control,性能优化]

---



**Apache**

.htaccess文件



<pre class="prettyprint"><span class="hljs-subst">&lt;</span>filesMatch <span class="hljs-string">"\.(ico|gif|jpg|png|jpeg)$"</span><span class="hljs-subst">&gt;</span> 
ExpiresActive <span class="hljs-keyword">On</span> 
ExpiresDefault <span class="hljs-string">"access plus 11 month"</span> 
<span class="hljs-keyword">Header</span> append <span class="hljs-keyword">Cache</span><span class="hljs-attribute">-Control</span> <span class="hljs-string">"public"</span> 
<span class="hljs-subst">&lt;</span>/filesMatch<span class="hljs-subst">&gt;</span></pre>

**Nginx**

.conf文件



<pre class="prettyprint">location ~* ^.+\.(jpg|jpeg|gif|png|ico)<span class="hljs-variable">$ </span>
{ 
expires max; 
}</pre>

**IIS**

config.xml文件

<pre class="prettyprint"><span class="hljs-tag">&lt;<span class="hljs-title">configuration</span>&gt;</span> 
    <span class="hljs-tag">&lt;<span class="hljs-title">system.webServer</span>&gt;</span> 
        <span class="hljs-tag">&lt;<span class="hljs-title">staticContent</span>&gt;</span> 
            <span class="hljs-tag">&lt;<span class="hljs-title">clientCache</span> <span class="hljs-attribute">cacheControlMode</span>=<span class="hljs-value">"UseExpires"</span> <span class="hljs-attribute">httpExpires</span>=<span class="hljs-value">"Tue, 19 Jan 2038 03:14:07 GMT"</span> /&gt;</span> 
        <span class="hljs-tag">&lt;/<span class="hljs-title">staticContent</span>&gt;</span> 
    <span class="hljs-tag">&lt;/<span class="hljs-title">system.webServer</span>&gt;</span> 
<span class="hljs-tag">&lt;/<span class="hljs-title">configuration</span>&gt;</span></pre>
