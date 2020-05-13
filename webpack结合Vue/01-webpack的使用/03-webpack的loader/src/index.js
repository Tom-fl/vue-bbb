let { name, age } = require('./js/a');
console.log(name);
console.log(age);


import { Person } from './js/b';
// 使用类
const p = new Person;
// 使用类的方法
p.run()

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')