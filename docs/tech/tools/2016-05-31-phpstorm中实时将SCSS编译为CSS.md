---
title: "phpstorm中实时将SCSS编译为CSS"
categories: tech
date: 2016-06-15 16:00:00 +0800
author: hjb2722404
tags: [phpstorm, scss]

---

1-1、安装ruby，并在安装时勾选“add..to..PATH”一项。

1-2、命令行运行：gem install sass，安装SASS模块

2、打开phpstorm的设置-工具-FileWatcher

![这里写图片描述](http://img.blog.csdn.net/20151130215513185)

3、点击右边“+”，选择“SCSS”，并配置scss.bat所在目录：

![这里写图片描述](http://img.blog.csdn.net/20151130215737044)

确定

然后你不管在哪写SCSS都会实时将CSS文件编译到scss文件所在目录了
