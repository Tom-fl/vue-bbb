<template>
    <!-- 所有的item都展示同一个图片，同一个文字 -->
      <div class="tab-bar-item">
          <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
          <div>首页</div> -->
           <slot name="item-icon"></slot>
           <slot name="item-text"></slot>
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

    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>