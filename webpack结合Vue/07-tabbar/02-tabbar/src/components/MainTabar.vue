<template>
      <div>
        <tab-bar>
        <tab-bar-item path='/home' activeColor='blue'>
            <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/category' activeColor='blue'>
            <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path='/cart' activeColor='blue'>
            <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/profile' activeColor='blue'>
            <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt="">
            <div slot="item-text">我的</div>
            </tab-bar-item>
    </tab-bar>
      </div>
</template>

<script>
    import TabBar from './tabbar/TabBar'
    import TabBarItem from './tabbar/TabBarItem'
export default {
     data(){
         return{

         }
},
components:{
    TabBar,
    TabBarItem
},
 methods:{
   
   },
// 生命周期 - 创建完成(访问当前this实例)
// 当我们组价在被创建出来之后，它来这里对这个生命周期进行回调,你可以做你想做的事情
   created(){

   },
   // 生命周期 - 挂载完成(访问DOM元素)
//当我们的 <template> 里面的东西,它怪载到整个DOM上面之后，就会回调这个生命周期函数
   mounted(){
   
   },
//    当界面发生更新的时候，只要界面发生一次刷新，它就会来这里执行这个函数
updated(){}
 }
</script>

<style scoped>
/* @import url();引入css类 */
</style>