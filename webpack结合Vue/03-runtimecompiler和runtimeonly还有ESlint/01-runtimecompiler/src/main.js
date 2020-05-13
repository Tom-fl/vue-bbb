// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = ({
    template: `
        <p>{{message}}</p>
    `,
    data() {
        return {
            message: '我是message'
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // components: { App },
    // template: '<App/>'

    render: function(createElement) {
        // 1.普通用法：createElement('标签',{标签的属性},[标签的内容])
        // return createElement('h2', { class: 'box' }, ['hello world', createElement('button', ['按钮'])])

        // 2.传入组件对象：
        // return createElement(cpn)
        return createElement(App)
    }

})

// runtime-compiler
// template -> ast -> render -> vdom ->UI 

// runtime-only(1.性能更高 2.这个代码量更少) 以后推荐选择这个
// render -> vdom -> UI