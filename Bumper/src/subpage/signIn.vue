<template lang="html">
  <div class="sgin_in">
    <!-- <Header/> -->
    <div class="sgin_in_con">
      <p class="sgin_in_title">用户信息</p>
      <p><span style="color:red;">*</span>用户名<input type="text" title="" palceholder="" alt="" value=""/></p>
      <p><span style="color:red;">*</span>手机号码<input type="text" title="" palceholder="" alt="" value=""/></p>
      <p class="code"><span style="color:red;">*</span>验证码<input type="text" title="" palceholder="" alt="" value=""/></p>
      <p class="phoneCode"><span style="color:red;">*</span>手机验证码<input type="text" title="" palceholder="" alt="" value=""/>
        <span class="optian">获取短信验证码</span>
      </p>
      <p><span style="color:red;">*</span>登录密码<input type="password" title="" palceholder="" alt="" value=""/></p>
      <p><span style="color:red;">*</span>再次输入密码<input type="password" title="" palceholder="" alt="" value=""/></p>
      <p class="ment"><input type="checkbox" name="vehicle" value="Bike">我已阅读<span style="color:red;">《碰碰票协议》</span></p>
      <p class="turnSignin"><button>同意协议并注册</button></p>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    Header:resolve=>{
      require(['@/components/header-all'],resolve)
    }
  }
}
</script>

<style lang="scss" scoped>
.sgin_in{
  width: 100%;
  height:100%;
  min-width: 1378px;
  .sgin_in_con{
    width: 100%;
    height:100%;
    padding-top:10%;
    p{
      width: 61%;
      min-width:400px;
      text-align: right;
      margin-top: 1%;
      input{
        border:1px solid black;
        margin-left:2%;
        height:22px;
        width: 200px;
        font-size: 16px;
      }
    }
    .sgin_in_title{
      width: 100%;
      text-align: center;
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 5%;
    }
    .code{
      padding-right:5.3%;
      box-sizing: border-box;
      input{
        width: 120px;
      }
    }
    .phoneCode{
      // padding-right:6.85%;
      box-sizing: border-box;
      input{
        width: 100px;
      }
      .optian{
        width: 96px;
        background: #ff462c;
        font-size: 13px;
        height:26px;
        line-height: 27px;
        border-radius: 3px;
        color:white;
        cursor:pointer;
      }
    }
    .ment{
      width: 100%;
      text-align: center;
      margin-top: 2%;
      input{
        width: 12px;
        height:12px;
      }
    }
    .turnSignin{
      width: 100%;
      text-align: center;
      margin-top: 2%;
      button{
        width: 310px;
        height:38px;
        border-radius:5px;
        background: #ff462c;
        color:white;
      }
    }
  }
}
</style>
