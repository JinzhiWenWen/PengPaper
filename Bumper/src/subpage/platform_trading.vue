<template lang="html">
  <div class="platform_trading">
    <p class="platform_trading_title">平台担保交易流程</p>
    <div class="pic_trad">
      <img src="../../static/img/process.png" alt="">
    </div>
    <p class="pay pay_way">支付方式：买卖双方协商，银行转账</p>
    <p class="pay pay_alt">交易方式：平台担保交易</p>
    <p class="trad_mes">买卖联系人：<input type="text" vlaue="" placeholder="海绵宝宝"/></p>
    <p class="trad_mes">&nbsp;&nbsp;&nbsp;&nbsp;联系方式：<input type="text" vlaue="" placeholder="1324891337"/></p>
    <p class="trad_mes">&nbsp;&nbsp;&nbsp;&nbsp;年化利率：<input type="text" vlaue="" placeholder=""/></p>
    <p class="trad_mes">&nbsp;&nbsp;&nbsp;&nbsp;每10万加：<input type="text" vlaue="" placeholder=""/></p>
    <p class="trad_mes">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      总额：<input type="text" vlaue="" placeholder=""/></p>
      <p class="pay" style="margin-top:2%;">担保交易专席客服联系方式 010-43435454/13400994433</p>
      <p class="have_look"><button type="button">查看订单进度</button></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.platform_trading{
  width: 100%;
  height:100%;
  padding-top:3%;
  min-width: 934px;
  .platform_trading_title{
    width: 100%;
    text-align: left;
    font-size:18px;
    font-weight: bold;
    padding-left:6%;
  }
  .pic_trad{
    width: 100%;
    height:23%;
    text-align: left;
    img{
      width: 85%;
      height:100%;
    }
  }
  .pay{
    width: 40%;
    text-align: left;
    padding-left:9.8%;
    font-size: 14px;
  }
  .pay_alt{
    margin-top: 1.5%;
  }
  .trad_mes{
    width: 40%;
    text-align: center;
    margin-top:2%;
    font-size: 14px;
    padding-left:3.3%;
    input{
      border:1px solid #979797;
      min-height: 26px;
      font-size: 15px;
    }
  }
  .have_look{
    width: 30%;
    height:4%;
    margin-left: 10%;
    button{
      width: 100%;
      height:100%;
      background:linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
      border-radius: 8px;
      color:white;
      margin-top: 4%;
    }
  }
}
</style>
