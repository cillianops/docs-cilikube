import { defineUserConfig } from "vuepress";
// import {  pwaHead } from "docs-shared";

import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  // head: [
  //   ...pwaHead,
  //   [
  //     "meta",
  //     {
  //     },
  //   ],
  // ],

  base: "/",

  locales: {
    "/": {      
      lang: "zh-CN",
      title: "CiliKube",
      description: "cilikube的文档站",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs site  for cilikube",

    },
  },

  theme,
  
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  alias: {
    "@FlowChartPlayground": path.resolve(
      __dirname,
      "../../../md-enhance/src/.vuepress/components/FlowChartPlayground.js",
    ),
    "@KatexPlayground": path.resolve(
      __dirname,
      "../../../md-enhance/src/.vuepress/components/KatexPlayground.js",
    ),
    "@ToggleRTLButton": path.resolve(
      __dirname,
      "./components/ToggleRTLButton.js",
    ),
  },

  clientConfigFile: path.resolve(__dirname, "./client.ts"),
  // Enable it with pwa
  // shouldPrefetch: false,
});
