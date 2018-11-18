---
title: "git使用笔记3-push rejected错误解决"
categories: tech
tags: [git, 错误]
date: 2016-06-15 16:00:00 +0800
author: hjb2722404

---

背景是这样的，我在github上新建了一个名为mxzs的库，然后在本地mxzs文件夹下init了一个git仓库，然后我add了所有文件，并进行了commit。

这时，我使用以下命令将本地库与github上的mxzs库做了同步关联：

<blockquote>
  git remote add origin git@github.com:hjb2722404/mxzs.git
</blockquote>

直到这里都没有问题。

然后我向远程仓库推送本地提交的文件：

<blockquote>
  git push -u origin master
</blockquote>

此时，错误出现了，提示如下图所示：

![这里写图片描述](http://img.blog.csdn.net/20150519232459826)

这个拒绝推送错误【rejected】,经过看错误提示，是因为远程仓库中有一些文件在本地仓库中不存在，所以必须首先将远程仓库pull一份到本地：

<blockquote>
  git pull origin master
</blockquote>

然后再运行

<blockquote>
  git push -u origin master
</blockquote>

就正常上传了
