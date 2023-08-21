/**
 *
 * 1,Promise是一个构造函数
 * 2.promise.prototype上包含一个.then方法
 * 3..then()方法可可以用来预先制定成功和失败的回调  p.then(res=>{},err=>{})
 * 4.如果.then中返回了一个新的Promise实例，则可以通过下一个.then处理
 */

import thenFs from "then-fs";
// thenFs.readFile('./1.txt','utf8').then((res)=>{
//     console.log(res);
// })
// thenFs.readFile('./2.txt','utf8').then((res)=>{
//     console.log(res);
// })

// 按顺序读取
// thenFs
//   .readFile("./1.txt", "utf8")
//   .then((res) => {
//     console.log(res);
//     return thenFs.readFile("./24.txt", "utf8");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// 不影响后续.then执行可以将.catch提前
// thenFs
//   .readFile("./11.txt", "utf8")
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .then((res) => {
//     console.log(res);
//     return thenFs.readFile("./2.txt", "utf8");
//   })
//   .then((res) => {
//     console.log(res);
//   });

// promise.all()接受一个数组，当所有内容执行完毕才执行.then

const pArr = [
  thenFs.readFile("./1.txt", "utf8"),
  thenFs.readFile("./2.txt", "utf8"),
];
// Promise.all(pArr)
//   .then((res) => {
//     // 会按数组顺序读取结果
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// 谁先读取完成先返回谁
// Promise.race(pArr)
//   .then((res) => {
//     // 会按数组顺序读取结果
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// 封装读取文件
// const getFile = (filePath) => {
//   return new Promise((resolve, reject) => {
//     thenFs.readFile(filePath, "utf8", (err, data) => {
//       if (err) return reject(err.message);
//       resolve(data);
//     });
//   });
// };

// getFile("./1.txt").then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// async await介绍 用async 修饰的函数默认返回的是一个promise 用 await必须async修饰
// 第一个 await之前的代码会同步进行，之后会异步进行
const getFile = async (filePath) => {
  const res = await thenFs.readFile(filePath, "utf8");
  console.log(res);
};
getFile('./1.txt')