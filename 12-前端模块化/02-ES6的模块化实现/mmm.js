// 1.导入的{}中定义的变量
import { flag, sum } from './aaa.js'

if (flag) {
    console.log('嘻嘻嘻');
    console.log(sum(20, 20));
}

// 2.直接导入export定义的变量
import { width, height } from './aaa.js';
console.log(width, height);

// 3.导入 export的function
import { count, Person } from './aaa.js';
console.log(count(50, 50));

// 4.使用类
const p = new Person;
// 使用类的方法
p.run()

// export default 导入
import addr from './aaa.js';
addr('NB')

// 5.统一全部导出
// import { flag, name, width, height } from './aaa.js';
// console.log(flag, name, width, height);

import * as aaa from './aaa.js';
console.log(aaa.flag);
console.log(aaa.height);