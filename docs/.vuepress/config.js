module.exports = {
  title: "test-ui",
  base: "/lime-ui/",
  description: "这是个练手项目",
  port: 8083,
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/component/guide/introduction" },
      { text: "主题", link: "/theme/" },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      "/component/": [
        {
          title: "开发指南",
          collapsable: false,
          children: ["guide/introduction", "guide/guide"],
        },
        {
          title: "基础组件",
          collapsable: false,
          children: [
            "basic/button",
            "basic/input",
            "basic/form",
            "basic/notice",
          ],
        },
      ],
    },
  },
};
