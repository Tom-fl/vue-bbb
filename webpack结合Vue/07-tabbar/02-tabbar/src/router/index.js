import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/category',
        component: Category
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    // 使用HTML5 history 模式，就不会出现路径带有#了
    mode: 'history'
})

// 3.导出router
export default router