<template>
      <div id="tab-bar">
          <slot></slot>
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

   #tab-bar{
        display: flex;
        background: #f0f0f0f0;

        position: fixed;
        left: 0;
        right: 0;
        bottom: 0; 

       box-shadow: 0 -1px 1px rgba(100,100, 100, 0.2);
    }

</style>