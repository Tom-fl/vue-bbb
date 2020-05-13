var name = '小明';
var age = 12;
var flag = true;

function sum(sum1, sum2) {
    return sum1 + sum2
}
if (flag) {
    console.log(sum(10, 20));
}

// 1.导出方式一：
export {
    flag,
    sum
}
// 2.导出方式二:
export var width = 20;
export var height = 120;

// 3.导出函数/类
export function count(a, b) {
    return a * b
}

// 直接class 类 ES6写法
export class Person {
    // 以前的写法
    // function Person() {}
    run() {
        console.log('吃屎呢');

    }
}

// 5.export default
// const address = '北京';
// export default address;

export default function(zxc) {
    console.log(zxc);

}