<!-- 密码登录 -->
<template lang="html">
  <div class="password_signup">
    <p class="phone">
      <span style="color:red;">*</span>手机号：&nbsp;&nbsp;<input type="text" value="" placeholder="" ref="phoneNumber"/>
    </p>
    <p class="code"><span style="color:red;">*</span>密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" value="" placeholder="" ref="pass" /></p>
    <p class="turn">
      <button type="button" name="button" @click="sginIn()">登录</button>
    </p>
  </div>
</template>

<script>
export default {
  methods:{
    sginIn(){
      let _this=this;
      let phone=_this.$refs.phoneNumber.value;
      let pass=_this.$refs.pass.value;
      _this.axios.post(_this.oUrl+'/login',
      {header:{
        'Content-Type':'application/json'
      }},
      {
        "user_phone":phone,
        "user_passwd":pass
      }
    ).then((res)=>{
      console.log(res)
    })
    }
  }
}
</script>

<style lang="scss" scoped>
.password_signup{
  width: 100%;
  height:100%;
  padding-top:10%;
  .phone{
    width: 80%;
    margin:0 auto;
    position: relative;
    margin-bottom: 5%;
    input{
      border:1px solid #ccc;
      min-height: 22px;
      font-size: 15px;
    }
  }
  .code{
    width: 80%;
    margin:0 auto;
    input{
      border:1px solid #ccc;
      min-height: 22px;
      font-size: 15px;
    }
  }
  .turn{
    margin-top:10%!important;
    width: 60%;
    min-height: 35px;
    margin:0 auto;
    button{
      width: 100%;
      min-height:35px;
      border-radius:5px;
      font-size: 15px;
      background: linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
      color:white;
    }
  }
}
</style>
