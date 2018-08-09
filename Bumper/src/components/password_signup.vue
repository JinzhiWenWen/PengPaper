<!-- 密码登录 -->
<template lang="html">
  <div class="password_signup">
    <p class="phone">
      手机号：&nbsp;&nbsp;<input type="text" value="" placeholder=""/>
      <!-- <span>发送验证码</span> -->
    </p>
    <p class="code">密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" value="" placeholder="" /></p>
    <p class="turn">
      <button type="button" name="button">登录</button>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.password_signup{
  width: 100%;
  height:100%;
  padding-top:5%;
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
    span{
      position: absolute;
      font-size: 12px;
      top:20%;
      right:0;
      cursor:pointer;
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
    margin-top:7%!important;
    width: 60%;
    min-height: 30px;
    margin:0 auto;
    button{
      width: 100%;
      min-height:30px;
      border-radius:5px;
      font-size: 15px;
      background: linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
      color:white;
    }
  }
}
</style>
