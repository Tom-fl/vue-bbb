;
(function() {
    if (flag == true) {
        console.log('嘻嘻嘻嘻');
    }
})()

/*
即使通过匿名函数闭包解决了变量冲突问题,
但是,带来了另外一个问题，代码不可复用了
 */

// 在aaa.js 里的sum函数 用不了了，必须的在定义一遍
// function sum(sum1, sum2) {
//     return sum1 + sum2
// }
// sum(10, 20)