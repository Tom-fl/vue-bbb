<template>
    <div class="title">{{message}}
    <Cpn></Cpn>
    <!-- <Cpn/> 也可以这么写 -->
    </div>
</template>

<script>
import Cpn from './Cpn'
export default {
     data(){
        return{
        message: 'xxxx'
        }
},
components:{
    Cpn
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
.title{
    color: green;
}
</style>