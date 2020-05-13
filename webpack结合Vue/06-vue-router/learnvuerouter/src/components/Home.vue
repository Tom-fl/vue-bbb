<template>
      <div> 
          <h2>我是首页</h2>
          <p>我是首页内容</p>
          <router-link to='/home/news' replace>新闻</router-link>
          <router-link to='/home/message' replace>消息</router-link>
          <router-view></router-view>
      </div>
</template>

<script>
export default {
     data(){
         return{
            path:'/home/news'
        }
},
 methods:{
     
   },
// 生命周期 - 创建完成(访问当前this实例)
// 当我们组价在被创建出来之后，它来这里对这个生命周期进行回调,你可以做你想做的事情
   created(){
    console.log('home created');
   },
    // 被销毁
    destroyed(){
        console.log('home destroyed');
    },
    // 活跃的,这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
    activated(){
        // console.log('activated');
        this.$router.push(this.path)
    },
    // 不活跃的
    // deactivated(){
    //     console.log(this.$route.path);
    //     console.log('deactivated');
    // },
    beforeRouteLeave (to, from, next) {
        console.log(this.$route.path);
        this.path=this.$route.path
        next()
    }
   }
</script>

<style scoped>
/* @import url();引入css类 */
</style>