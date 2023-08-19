module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: ["error", "double"], // 允许混合使用单引号和双引号
    semi: ["error", "always"], // 允许使用分号
    "comma-dangle": ["error", "always-multiline"], // 允许多行时末尾逗号
    "space-before-function-paren": "off", // 关闭 "Missing space before function parentheses" 规则
    "spaced-comment": "off", // 关闭 spaced-comment 规则
    "vue/multi-word-component-names": "off",
  },
};
