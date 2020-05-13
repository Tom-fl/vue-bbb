<template>
      <div>
          <h2>我是关于</h2>
          <p>我是关于内容</p>
      </div>
</template>

<script>
export default {
     data(){
         return{

         }
},
 methods:{
   
   },
// 生命周期 - 创建完成(访问当前this实例)
   created(){
    console.log('about created');
   },
    // 被销毁
    destroyed(){
        console.log('about destroyed');
    },
   // 生命周期 - 挂载完成(访问DOM元素)
   mounted(){
   
   }
   }
</script>

<style scoped>
/* @import url();引入css类 */
</style>