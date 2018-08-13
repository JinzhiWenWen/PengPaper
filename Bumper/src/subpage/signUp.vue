<template lang="html">
  <div class="signUp">
    <div class="signup_con">
      <ul class="signup_way">
        <router-link to="/signUp/password" @click.native="pass()" :class="{active:color==1}" tag="li">密码登入</router-link>
        <router-link to="/signUp/auth" @click.native="auth()" :class="{active:color==2}" tag="li">手机登入</router-link>
      </ul>
      <div class="way_mes">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      color:1
    }
  },
  methods:{
    pass(){
      this.color=1;
    },
    auth(){
      this.color=2;
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
  background: linear-gradient(180deg,rgba(255,120,81,1),rgba(255,67,40,1));
  color:white;
}
.signUp{
  width: 100%;
  height:100%;
  min-width: 1631px;
  .signup_con{
    width: 40%;
    height:100%;
    margin:0 auto;
    padding-top:10%;
    .signup_way{
      width: 60%;
      margin:0 auto;
      height: 55px;
      display: flex;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      border:1px solid red;
      border-bottom:0;
      box-sizing: border-box;
      li{
        width: 50%;
        height:100%;
        line-height: 55px;
        cursor:pointer;
      }
      li:nth-child(1){
        border-top-left-radius: 12px;
      }
      li:nth-child(2){
        border-top-right-radius: 12px;
      }
    }
    .way_mes{
      width: 60%;
      min-height: 250px;
      margin:0 auto;
      border:1px solid red;
      box-sizing: border-box;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
}
</style>
