import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    // "",
   
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "入门指南",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "博客",
      icon: "person-chalkboard",
      link: "https://www.cillian.website",
    },
    // "portfolio",
  ],

//   "/zh/guide/": [
//     "",
//   ],
});
