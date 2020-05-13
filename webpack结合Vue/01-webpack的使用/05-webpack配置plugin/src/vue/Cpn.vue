<template>
      <div>
          <h2>我是cpn组件的标题</h2>
          <h2>{{message}}</h2>
      </div>
</template>

<script>
export default {
     data(){
         return{
        message:'Cpn'
         }
},
 methods:{
   
   },
// 生命周期 - 创建完成(访问当前this实例)
   created(){

   },
   // 生命周期 - 挂载完成(访问DOM元素)
   mounted(){
   
   }
   }
</script>

<style scoped>
/* @import url();引入css类 */
</style>