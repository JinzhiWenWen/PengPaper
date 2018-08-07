<template lang="html">
  <div class="person_detailed">
    <div class="person_detailed_pic">
      <img src="../../static/img/process.png" alt="">
    </div>
    <div class="person_detailed_mes">
      <ul class="alt">
        <li>银行监管账号</li>
        <li>担保交易专席客服联系方式</li>
        <li>票据总额</li>
        <li>承兑方</li>
        <li>卖方</li>
        <li>票据图片</li>
      </ul>
      <ul class="me">
        <li>62394893080495804985</li>
        <li>010-05968596/13456950695</li>
        <li><input type="text" value=""></li>
        <li><input type="text" value=""></li>
        <li>中景实业有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;135883299890</li>
        <li>
          <span class="Is"></span>
          <span class="The"></span>
        </li>
      </ul>
    </div>
    <p class="havelook">
      <button type="button" name="button">查看交易进度</button>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.person_detailed{
  width: 100%;
  height:100%;
  .person_detailed_pic{
    width: 100%;
    height:30%;
    img{
      width: 100%;
      height:100%;
    }
  }
  .person_detailed_mes{
    width: 95%;
    margin-left: 5%;
    display: flex;
    font-size: 15px;
    .alt{
      text-align: right;
      li{
        margin-bottom: 10%;
      }
    }
    .me{
      text-align: left;
      margin-left: 5%;
      padding-top:.15%;
      font-size: 14px;
      li{
        margin-bottom: 10.5%;
        input{
          width: 60%;
          border:1px solid #ccc;
          height:22px;
        }
      }
      li:nth-child(3){
        margin-top:-4%;
      }
      li:nth-child(4){
        margin-top:-5%;
      }
      li:nth-child(5){
        margin-top:-3.5%;
      }
      li:last-child{
        background-color: red;
        margin-top: -1%;
        position: relative;
        span{
          position: absolute;
          width: 130px;
          height:130px;
          background-color: #ccc;
        }
        span:nth-child(2){
          left:70%;
        }
      }
    }
  }
  .havelook{
    width: 80%;
    margin-top: 20%;
    text-align: center;
    margin-left: 5%;
    button{
      min-width: 40%;
      min-height: 34px;
      background:linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
      color:white;
      border-radius: 8px;
    }
  }
}
</style>
