<template>
  <div id="app">
    <tab-bar>
        <tab-bar-item>
            <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item>
            <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item>
            <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item>
            <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
            <div slot="item-text">我的</div>
            </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
    import TabBar from './components/tabbar/TabBar'
    import TabBarItem from './components/tabbar/TabBarItem'
export default {
    name:'App',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
/* 如果是js引入的话，不需要加@了，但是style 引入css资源的时候要写@import */
    @import './assets/css/base.css';
</style>
