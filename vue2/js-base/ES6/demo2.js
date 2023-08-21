// 默认导出
import demo1 from "./demo1.js";
// 按需导入
import { module_1 } from "./demo1.js";
// 只需要使用功能
import "./demo3.js";

console.log({ demo1, module_1 });
