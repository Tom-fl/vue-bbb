import Vue from 'vue'
import App from './App.vue'

// npm run serve  要不要显示提示信息
// 在产品构建的时候才需要显示的提示信息，所以在我们开发阶段设置为false ，如果你准备发布的时候可以来个true，设置为true的时候，会告诉你很多的提示信息
Vue.config.productionTip = false


// new Vue({
//     el: '#app',
//     render: function(h) {
//         return h(App)
//     }
// })

new Vue({
    render: h => h(App),
}).$mount('#app')

/*
    区别就是el
        实例上是没区别的，因为Vue内部，当你把#app 传过去的时候，它内部还是执行 $.mount('#app') 的
        虽然你传了个el，但是内部还是执行mount，内部只是多了一行代码而已
        内部会帮你判断的，如果你有el这个属性的时候，它内部帮你执行 $mount 这个东西，区别不大，最终会被render出来的替换掉
*/