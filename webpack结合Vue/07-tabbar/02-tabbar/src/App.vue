<template>
  <div id="app">
      <router-view></router-view>
    <MainTabar></MainTabar>
  </div>
</template>

<script>
import MainTabar from './components/MainTabar'
export default {
    name:'App',
    components:{
        MainTabar
    }
}
</script>

<style>
/* 如果是js引入的话，不需要加@了，但是style 引入css资源的时候要写@import */
    @import './assets/css/base.css';
</style>
