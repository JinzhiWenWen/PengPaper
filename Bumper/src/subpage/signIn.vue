<template lang="html">
  <div class="sgin_in">
    <!-- <Header/> -->
    <div class="sgin_in_con">
      <p class="sgin_in_title">用户信息</p>
      <div class="signIn_mes">
        <ul class="signIn_title">
          <li><span style="color:red;">*</span>用户名</li>
          <li><span style="color:red;">*</span>手机号码</li>
          <li><span style="color:red;">*</span>验证码</li>
          <li><span style="color:red;">*</span>手机验证码</li>
          <li><span style="color:red;">*</span>登录密码</li>
          <li><span style="color:red;">*</span>再次输入密码</li>
        </ul>
        <ul class="signIn_message">
          <li><input type="text" value=""/></li>
          <li><input type="text" value=""/></li>
          <li><input type="text" value=""/></li>
          <li><input type="text" value=""/><span>获取短信验证码</span></li>
          <li><input type="text" value=""/></li>
          <li><input type="text" value=""/></li>
        </ul>
      </div>
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
    width: 26%;
    height:52%;
    margin:0 auto;
    margin-top:10%!important;
    border:1px solid  red;
    border-radius: 12px;
    min-height: 437px;
    min-width: 442px;
    .sgin_in_title{
      width: 100%;
      text-align: center;
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 2%;
      background: linear-gradient(180deg,rgba(0,165,255,1),rgba(0,108,253,1));;
      height:70px;
      line-height: 70px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      color:white;
    }
    .signIn_mes{
      width: 100%;
      height:56%;
      margin:0 auto;
      display: flex;
      padding-top:4%;
      .signIn_title{
        width: 50%;
        height:100%;
        text-align: right;
        li{
          padding-right:18%;
          margin-bottom: 7.2%;
        }
      }
      .signIn_message{
        width: 50%;
        text-align:left;
        margin-left:-6%;
        li{
          margin-bottom:4%;
          input{
            min-height: 24px;
            font-size: 14px;
            border:1px solid #ccc;
            width: 80%;
          }
        }
        li:nth-child(3){
          input{
            width: 50%;
          }
        }
        li:nth-child(4){
          input{
            width: 44%;
          }
          span{
            background: #FF452C;
            padding:.5%;
            font-size: 12px;
            border-radius:3px;
            color:white;
            margin-left:.5%;
            cursor:pointer;
          }
        }
      }
    }
    .ment{
      width: 100%;
      text-align: center;
      margin-top: 1%;
      input{
        width: 12px;
        height:12px;
      }
    }
    .turnSignin{
      width: 100%;
      text-align: center;
      margin-top: 4%;
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
