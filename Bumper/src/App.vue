<template>
  <div id="app">
    <Header/>
    <transition :name="transitionName">
      <router-view class="trans-view" ref="trans_view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName:'slide-left'
    }
  },
  components:{
    Header:resolve=>{
      require(['@/components/header-all'],resolve)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1376px;
}
.trans-view{
  position: absolute;
  left: 0;
  top: -1px;
  width:100%;
  height:100%;
  transition: all .4s cubic-bezier(.55,0,.5,1);
  padding-top:4%;
}
.slide-left-enter,.slide-right-leave-active{
  opacity:0;
  -webkit-transfrom:translate(0,20px);
  transform:translate(0,20px);
}
.slide-left-leave-active, .slide-right-enter {
opacity: 0;
-webkit-transform: translate(0,20px);
transform: translate(0,20px);
}
</style>
