// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载导入(什么时候用什么时候去拿)
const Home = () =>
    import ('../components/Home')
const About = () =>
    import ('../components/About')
const User = () =>
    import ('../components/User')

const HomeNews = () =>
    import ('../components/HomeNews.vue')
const HomeMessage = () =>
    import ('../components/HomeMessage.vue')
const Profile = () =>
    import ('../components/Profile.vue')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter
const routes = [{
        path: '',
        // redirect重定向:重新定义方向
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            // {
            //     path: '',
            //     component: HomeNews
            // },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        },
    },
    {
        path: '/user/:userid',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]
const router = new VueRouter({
    // 配置路径和组件之间关系
    routes,
    // 使用HTML5 history 模式，就不会出现路径带有#了
    mode: 'history',
    // 设置class属性 
    linkActiveClass: 'active'
})

// 前置守卫(guard)  总之都是一种回调
// 全局导航守卫
// 源代码里面要传入一个函数
router.beforeEach((to, from, next) => {
    // 从一个路由跳转到另一个路由
    // 从from跳转到to
    document.title = to.matched[0].meta.title

    // 这个next本身又是个函数,这个函数的本身是让你掉一下它

    // 如果你没写这个整个导航守卫，它内部是自动掉这个next，但是现在使用了这个导航守卫，不掉用这个next 会出现很多问题,页面上啥功能都没有
    // console.log('++++');
    next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
    // console.log('----');
})

// 3.将router对象传入vue实例
export default router