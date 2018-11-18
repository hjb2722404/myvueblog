---
title: "angularjs使用中国的一些细节"
categories: tech
tags: [angularjs,经验]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

###与第三方库的共处

有时我们想要的功能angular模块库里并没有提供，而其他第三方库提供了，这时候就需要让angular与第三方库很好的共处。

例如，在使用微信支付时，我们需要在页面中引入weixin-js-sdk:



<pre class="prettyprint">    &lt;html ng-app=<span class="hljs-string">'myApp'</span>&gt;
    &lt;head&gt;
    <span class="hljs-keyword">...</span>
    &lt;script src=<span class="hljs-string">"http://res.wx.qq.com/open/js/jweixin-1.0.0.js"</span>&gt;&lt;/script&gt;
  &lt;/head&gt;
    <span class="hljs-keyword">...</span></pre>

然后我们需要将第三方库的调用初始化一下：



<pre class="prettyprint">angular
    .module(<span class="hljs-string">'static'</span>)
    .run(runBlock);

  <span class="hljs-comment">/**<span class="hljs-phpdoc"> @ngInject</span> */</span>
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">runBlock</span><span class="hljs-params">(<span class="hljs-variable">$http</span>,wtConfig,toastr)</span>{</span>
      <span class="hljs-keyword">var</span> url = wtConfig.apiHost +<span class="hljs-string">"/api/getSignature?url="</span>+location.origin + location.pathname;
      <span class="hljs-variable">$http</span>.get(url)
          .then(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(res)</span>{</span>
              wx.config({
                  debug: <span class="hljs-keyword">false</span>, <span class="hljs-comment">// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。</span>
                  appId: res.data.appId, <span class="hljs-comment">// 必填，公众号的唯一标识</span>
                  timestamp: res.data.timestamp, <span class="hljs-comment">// 必填，生成签名的时间戳</span>
                  nonceStr: res.data.nonceStr, <span class="hljs-comment">// 必填，生成签名的随机串</span>
                  signature: res.data.signature,<span class="hljs-comment">// 必填，签名，见附录1</span>
                  jsApiList: [<span class="hljs-string">'chooseWXPay'</span>] <span class="hljs-comment">// 必填，需要使用的JS接口列表，所有JS接口列表见附录2</span>
              });
          })
          .<span class="hljs-keyword">catch</span>(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(res)</span>{</span>
              toastr.error(res.data.msg);
              <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span>;
          });
  }</pre>

然后，在服务（service）�或工厂（factory）中调用：

<pre class="prettyprint">

<span class="php">        <span class="hljs-comment">/*微信支付*/</span>

        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wxPay</span><span class="hljs-params">(payData)</span>{</span>
            <span class="hljs-keyword">var</span> url = wtConfig.apiHost + wtConfig.wxPayUrl;
            <span class="hljs-keyword">var</span> data = payData;
            <span class="hljs-keyword">return</span> <span class="hljs-variable">$http</span>.post(url,data)
                .then(wxPayComplete)
                .<span class="hljs-keyword">catch</span>(wxPayFailed);
    
            <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wxPayComplete</span><span class="hljs-params">(res)</span>{</span>
                res = res.data;
                wx.chooseWXPay({
                    timestamp: res.timeStamp, <span class="hljs-comment">// 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符</span>
                    nonceStr: res.nonceStr, <span class="hljs-comment">// 支付签名随机串，不长于 32 位</span>
                    package: res.package, <span class="hljs-comment">// 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）</span>
                    signType: res.signType, <span class="hljs-comment">// 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'</span>
                    paySign: res.paySign, <span class="hljs-comment">// 支付签名</span>
                    success: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(resp)</span> {</span>
                        <span class="hljs-keyword">if</span>(resp){
                            window.location.hash = <span class="hljs-string">'#/msg'</span>;
                        }
                    }
                });
            }


            <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wxPayFailed</span><span class="hljs-params">(res)</span>{</span>
                toastr.error(<span class="hljs-string">"error:"</span>+res);
            }
        }
</span></pre>

这里有一个坑，请注意上面第22行代码，这里我为什么没有使用angular自带的$location对象来做页面跳转呢？

**原因是，此处的suceess方法是属于第三方库的，它不在angular的作用域之内，所以此处不可使用angular的对象和方法。**



###指令内不用再包裹标示符

刚开始学习使用angular的同学可能会遇到这样的问题：



<pre class="prettyprint"><span class="xml">
    <span class="hljs-tag">&lt;<span class="hljs-title">li</span> <span class="hljs-attribute">ng-repeat</span>=<span class="hljs-value">"o in obj"</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">ng-href</span>=<span class="hljs-value">"javascript:;"</span> <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"show(</span></span></span><span class="hljs-expression">{{<span class="hljs-variable">o.id</span>}}</span><span class="xml"><span class="hljs-tag"><span class="hljs-value">)"</span>&gt;</span></span><span class="hljs-expression">{{<span class="hljs-variable">o.text</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>

    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>

</span></pre>

然后我们会发现此处的a标签虽然绑定来点击事件用来执行show()方法，但是我们点击却发现没有任何动作并且控制台会报错。

请牢牢记住：



####**ng为前缀的内置指令中本身就是js表达式了，千万不要再包裹标示符**

那么，其实上面的示例应该改为：



<pre class="prettyprint"><span class="xml">
    <span class="hljs-tag">&lt;<span class="hljs-title">li</span> <span class="hljs-attribute">ng-repeat</span>=<span class="hljs-value">"o in obj"</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">ng-href</span>=<span class="hljs-value">"javascript:;"</span> <span class="hljs-attribute">ng-click</span>=<span class="hljs-value">"show(o.id)"</span>&gt;</span></span><span class="hljs-expression">{{<span class="hljs-variable">o.text</span>}}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>

    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>

</span></pre>

这样就ok了。
