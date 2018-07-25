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
      <span>注册</span>
      <span>登录</span>
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
  min-width: 1100px;
  background: black;
  padding-left:15%;
  position: relative;
  .logo{
    width: 250px;
    height:50px;
    padding-top: 1%;
  }
  .header_title{
    width: 18%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left:45%;
    top:48%;
    li{
      color:white;
      cursor:pointer;
    }
  }
}
</style>
