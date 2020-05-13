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

// 5.使用Vue进行开发
import Vue from 'vue'

// 方法一
// new Vue({
//     el: '#app',
//     template: `
//         <div>{{message}}</div>
//         `,
//     data: {
//         message: 'heelo'
//     }
// })

//方法二
// const App = {
//     template: `<div>{{message}}</div>`,
//     data() {
//         return {
//             message: 'xxxx'
//         }
//     }
// }
// new Vue({
//     el: '#app',
//     template: ' <App></App>',
//     components: {
//         App
//     }
// })

// 方法三 定义一个app.js文件
import App from './vue/App.vue'
new Vue({
    el: '#app',
    template: ' <App></App>',
    components: {
        App
    }
})