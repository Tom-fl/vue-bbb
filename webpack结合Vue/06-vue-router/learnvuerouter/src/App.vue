<template>
  <div id="app">
      <h3>我是公共的</h3>

      <keep-alive exclude="Profile">
      <router-view></router-view>
      </keep-alive>

      <router-link to="/home" tag='button' replace >首页</router-link>
      <router-link to="/about" tag='button'  replace >关于</router-link>    
      <router-link :to="/user/+userid" tag='button'  replace >用户</router-link>
      <!-- <button @click="homeClick">首页xxx</button> -->
      <!-- <button @click="aboutClick">关于</button> -->

      <!-- <router-link to='/Profile' tag='button' replace>档案</router-link> -->
      <!-- <router-link :to="{path:'/profile',query:{
          name:'fl',
          age:12,
          height:120
      }}" tag='button' replace>档案</router-link> -->

      <button @click="userClick">关于1</button>
      <button @click="profileClick">档案1</button>

    </div>
</template>
 
<script>
export default {
     data(){
        return{
            userid:'冯荦',            
        }
},
 methods:{
    homeClick(){
        this.$router.replace('/home')
        console.log(this.$router);
        console.log(this.$route);
     },
    aboutClick(){
        this.$router.replace('/about')
        // console.log( 'aboutClick');
    },
    userClick(){
        this.$router.push('/user/'+this.userid)
    },
    profileClick(){
        this.$router.push({
            path:'/profile',
            query:{
                name:'kobe',
                age:13,
                height:2.0
            }
        })
    }
   }
}
</script>

<style>
.router-link-exact-active{ 
    color: red;
}
</style>
