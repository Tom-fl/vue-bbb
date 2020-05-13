<template>
      <div>
          <p>我是用户界面</p>
          <!-- <span>我是用户内容----</span> -->
        <h2>{{userId}}</h2>
      </div>
</template>

<script>
export default {
     data(){
         return{

        }
},
computed:{
    userId(){
        return this.$route.params.userid
    }
},
 methods:{
   
   },
 created(){
    console.log('user created');
   },
    // 被销毁
    destroyed(){
        console.log('user destroyed');
    },
   // 生命周期 - 挂载完成(访问DOM元素)
   mounted(){
   
   }
   }
</script>

<style scoped>
/* @import url();引入css类 */
</style>