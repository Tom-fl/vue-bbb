// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
// 三个高阶函数: filter/map/reduce

// filter 中的回调函数有一个要求：必须返回一个Boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false:当返回false时，函数内部会过滤掉这次的 n
const nums = [12, 2, 123, 4, 52, 345, 1, 324];

// 一行搞定
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total);


// // 一坨搞定
// let total = nums.filter(function(n) {
//     return n < 100
// }).map(function(n) {
//     return n * 2
// }).reduce(function(preValue, n) {
//     return preValue + n
// }, 0)
// console.log(total);


// // 1.filter 函数的使用
// // 数组里有7次，回调函数就会回调7次
// let newNums = nums.filter(function(n) {
//         return n < 100
//     })
//     // console.log(newNums);

// // 2.map函数的使用
// // 24, 4, 8, 104, 2
// let new2Nums = newNums.map(function(n) {
//     return n * 2
// })
// console.log(new2Nums);

// // 3.reduce函数的使用
// //  reduce 作用  对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function(preValue, n) {
//     return preValue + n
// }, 0)
// console.log(total);
// // 第一次: preValue 0 n:24
// // 第二次: preValue 24 n:4
// // 第三次: preValue 28 n:8
// // 第四次: preValue 36 n:104
// // 第五次: preValue 140 n:2
// // 142




// 以前的做法~~~~~
// const nums = [12, 2, 123, 4, 52, 345, 1, 324];
// // 1.需求：去除所有小于100的数字
// let newNums = []
// for (let n of nums) {
//     if (n < 100) {
//         newNums.push(n)
//     }
// }
// // 2.需求：将所有小于100的数字进行转化：全部 * 2
// let new2Nums = []
// for (let n of newNums) {
//     new2Nums.push(n * 2)
// }
// console.log(new2Nums);
// // 3.需求：将所有new2Nums数字相加，得到最终相加
// let total = 0
// for (let n of new2Nums) {
//     total += n
// }
// console.log(total);