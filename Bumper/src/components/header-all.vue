<template lang="html">
  <div class="header_all">
    <div class="logo">
      <img src="../../static/img/Logo.png" alt="">
    </div>
    <ul class="header_title">
      <li>首页</li>
      <li>票据市场</li>
      <li>我要贴现</li>
      <li>我要买票</li>
    </ul>
    <div class="header_oper">
      <span class="signIn">注册</span>
      <span class="signUp">登录</span>
      <span class="user_icon"><img src="../../static/img/user.png" alt="" title="" /></span>
      <span class="mes_icon"><img src="../../static/img/mes.png" alt="" title="" /></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.header_all{
  width: 100%;
  height:8%;
  min-height: 64px;
  min-width: 1376px;
  background: black;
  padding-left:15%;
  position: relative;
  .logo{
    width: 250px;
    height:50px;
    padding-top: 1%;
  }
  .header_title{
    width: 22%;
    height:100%;
    display: flex;
    // justify-content: space-between;
    position: absolute;
    left:49%;
    top:0;
    li{
      color:white;
      cursor:pointer;
      font-size: 16px;
      height:100%;
      line-height: 68px;
      width: 25%;
    }
    li:hover{
      background: red;
    }
  }
  .header_oper{
    width: 10%;
    height:50%;
    color:white;
    position: absolute;
    right:15%;
    top:30%;
    display: flex;
    justify-content: space-around;
    span{
      cursor:pointer;
      font-size: 14px;
      line-height: 32px;
    }
    .user_icon{
      img{
        width: 25px;
        height:25px;
      }
    }
    .mes_icon{
      img{
        width: 25px;
        height:25px;
      }
    }
  }
}
</style>
