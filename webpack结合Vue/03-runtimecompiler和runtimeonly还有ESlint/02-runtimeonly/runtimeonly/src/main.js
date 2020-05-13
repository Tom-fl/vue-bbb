import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})

// render -> vdom ->UI
// 难道only 不需要 template -ast -render -vdom -ui 这个步骤吗？
//不需要，因为最终编译出来的就个普通的对象，而这个普通的对象，已经将template渲染成render函数了
// console.log(App); 是没有template  打印出来 有个render

// 那么..vue文件中的template是由谁处理的呢？
// 是由vue-template-compiler 处理的
// 之前在webpack配置vue中，学过，在vue文件封装处理