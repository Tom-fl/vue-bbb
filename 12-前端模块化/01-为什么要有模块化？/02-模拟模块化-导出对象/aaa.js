var moduleA = (function() {
    // 导出对象
    var obj = {}

    // 小明
    var name = '小明';
    var age = 12;

    function sum(sum1, sum2) {
        return sum1 + sum2
    }
    var flag = true;
    if (flag) {
        console.log(sum(10, 20));
    }
    obj.flag = flag;
    obj.sum = sum;
    return obj

})()