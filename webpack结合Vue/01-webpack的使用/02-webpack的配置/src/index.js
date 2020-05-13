let { name, age } = require('./a');
console.log(name);
console.log(age);


import { Person } from './b.js';
// 使用类
const p = new Person;
// 使用类的方法
p.run()