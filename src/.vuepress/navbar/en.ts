import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  // "/portfolio",
  "/en/",
,
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "User Guide",
        icon: "lightbulb",
        link: "/guide/",
        children: [],
      },
      // {
      //   text: "Foo",
      //   icon: "lightbulb",
      //   prefix: "foo/",
      //   children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      // },
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
