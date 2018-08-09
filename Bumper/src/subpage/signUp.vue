<template lang="html">
  <div class="signUp">
    <div class="signup_con">
      <ul class="signup_way">
        <router-link to="/signUp/auth" @click.native="auth()" :class="{active:color==1}" tag="li">验证码登录</router-link>
        <router-link to="/signUp/password" @click.native="pass()" :class="{active:color==2}" tag="li">密码登录</router-link>
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
      this.color=2;
    },
    auth(){
      this.color=1;
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
  .signup_con{
    width: 40%;
    height:100%;
    margin:0 auto;
    padding-top:5%;
    .signup_way{
      width: 60%;
      margin:40px auto;
      height: 40px;
      display: flex;
      li{
        width: 50%;
        height:100%;
        line-height: 40px;
        cursor:pointer;
      }
      li:hover{
        background: linear-gradient(180deg,rgba(255,120,81,1),rgba(255,67,40,1));
        color:white;
      }
    }
    .way_mes{
      width: 70%;
      min-height: 200px;
      margin:0 auto;
      border:1px solid red;
      box-sizing: border-box;
    }
  }
}
</style>
