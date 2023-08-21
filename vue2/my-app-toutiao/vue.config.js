const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const themePath = path.resolve(__dirname, "./src/theme/common.less");
module.exports = defineConfig({
  transpileDependencies: true,
  // 空字符串或者./支持file协议打开，默认是/只支持http协议打开
  // publicPath: "",
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // "nav-bar-background-color": "skyblue",
            // "nav-bar-title-text-color": "#fff",
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`,
          },
        },
      },
    },
  },
});
