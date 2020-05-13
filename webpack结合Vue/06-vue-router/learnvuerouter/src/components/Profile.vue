<template>
      <div>
          <ul>
            <li v-for="(item,index) in $route.query" >{{index}}：{{item}}</li>
          </ul>
      </div>
</template>

<script>
export default {
    name:'Profile',
     data(){
         return{
             obj:{
                name:'fl'
             }
         }
},
 methods:{
   
   },
 created(){
    console.log('profile created');
   },
    // 被销毁
    destroyed(){
        console.log('profile destroyed');
    },
   // 生命周期 - 挂载完成(访问DOM元素)
   mounted(){
   
   }
   }
</script>

<style scoped>
/* @import url();引入css类 */
</style>