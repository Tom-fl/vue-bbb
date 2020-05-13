<template>
    <!-- 所有的item都展示同一个图片，同一个文字 -->
      <div class="tab-bar-item" @click="itemClick">
          <div v-if="!isActive"><slot name="item-icon"></slot></div>
          <div v-else><slot name="item-icon-active"></slot></div>
           <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
     data(){
         return{
            // isActive:true
        }
}, 
computed:{
    isActive(){
        return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
    }
},
 methods:{
     itemClick(){
        // console.log('a');
        this.$router.replace(this.path)
     }
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
    /* .active{
        color: red;
    } */
</style>