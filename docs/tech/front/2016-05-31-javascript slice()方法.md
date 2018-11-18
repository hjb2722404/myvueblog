---
title: "javascript slice()方法"
categories: tech
tags: [js, 语法]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

**定义和用法**     
slice() 方法可从已有的数组中返回选定的元素。

**语法**



<pre class="prettyprint">arrayObject.slice(<span class="hljs-operator"><span class="hljs-keyword">start</span>,<span class="hljs-keyword">end</span>)</span></pre>

**参数描述**     
start   |必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。

end |可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

**返回值**     
返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

**说明**     
请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
