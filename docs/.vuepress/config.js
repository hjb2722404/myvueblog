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
            text: '技术迷思', 
            items : [
              {text: '前端乱炖', link: '/tech/front/'},
              {text: '后端打滚', link: '/tech/back/'},
              {text: '工具方法', link: '/tech/tools/'},
              {text: '其他一切', link: '/tech/other/'},
            ]  
          },
          { 
            text: '生活哲思', 
            items : [
              {text: '影评系列', link: '/life/movie/'},
              {text: '杂文随想', link: '/life/arch/'},
              {text: '诗歌骈文', link: '/life/poem/'},
            ]  
          },
          {text :'关于我', link:'/about/'}
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
      }
}
