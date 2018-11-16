module.exports = {
    title : "国王说",
    description : "国王何博士的生活记录",
    base : "/",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],
    dest: "blog",
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        lineNumbers : true,
      },
      themeConfig: {
        displayAllHeaders: true,
        nav: [
          { text: '主页', link: '/' },
          { 
            text: '文章', 
            items : [
              {text: '技术迷思', link: '/tech/'},
              {text: '生活哲思', link: '/life/'}
            ]  
          },
          {text :'关于我', link:'http//:www.baidu.com'}
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
      }
}
