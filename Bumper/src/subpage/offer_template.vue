<!-- 报价模板 -->
<template lang="html">
  <div class="offer_template">
    <div class="template_mes">
      <el-row>
        <el-col :span="4"><div class="template_title">票面金额</div></el-col>
        <el-col :span="4"><div class="template_title limit">期限</div></el-col>
        <el-col :span="4"><div class="template_title">国股</div></el-col>
        <el-col :span="4"><div class="template_title city">城商</div></el-col>
        <el-col :span="4"><div class="template_title">农商</div></el-col>
        <el-col :span="4"><div class="template_title oper">操作</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="template_message">233</div></el-col>
        <el-col :span="4"><div class="template_message limit">233</div></el-col>
        <el-col :span="4"><div class="template_message">233</div></el-col>
        <el-col :span="4"><div class="template_message city">233</div></el-col>
        <el-col :span="4"><div class="template_message">233</div></el-col>
        <el-col :span="4"><div class="template_message oper">233</div></el-col>
      </el-row>
    </div>
    <p class="add_offer">
      <button type="button" name="button" @click="showOper()">增加报价</button>
    </p>
    <p class="oper_offer">
      <button type="button" name="button">回到资源市场</button>
      <button type="button" name="button">查看我的资源池报价</button>
    </p>
    <div class="template_mask" v-show="templateShow" @click="hideTemplate()">

    </div>
    <div class="template_oper" ref="template_oper">
      <div class="message_box">
        <el-row>
          <el-col :span="4"><div class="oper_title">票据金额</div></el-col>
          <el-col :span="4"><div class="oper_title limit">期限</div></el-col>
          <el-col :span="4"><div class="oper_title">国股+国有</div></el-col>
          <el-col :span="4"><div class="oper_title city">大商</div></el-col>
          <el-col :span="4"><div class="oper_title">授信城商</div></el-col>
          <el-col :span="4"><div class="oper_title">村镇银行</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="oper_mes">
            <input type="text" ref="amount" name="" value="" placeholder="例：10w-50w">
          </div></el-col>
          <el-col :span="4"><div class="oper_mes limit">
            <input type="text" ref="date" name="" value="" placeholder="例：0-3个月">
          </div></el-col>
          <el-col :span="4"><div class="oper_mes">
            <input type="text" ref="interestCun" name="" value="" placeholder="请输入利率">
          </div></el-col>
          <el-col :span="4"><div class="oper_mes city">
            <input type="text" ref="interestCity" name="" value="" placeholder="请输入利率">
          </div></el-col>
          <el-col :span="4"><div class="oper_mes">
            <input type="text" ref="interestDi" name="" value="" placeholder="请输入利率">
          </div></el-col>
          <el-col :span="4"><div class="oper_mes">
            <input type="text" ref="interestTowns" name="" value="" placeholder="请输入利率">
          </div></el-col>
        </el-row>
      </div>
      <p class="place_oper">
        <button type="button" name="button">重置</button>
        <button type="button" name="button" @click="postList()">确认添加</button>
      </p>
    </div>
  </div>
</template>

<script>
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      templateShow:false
    }
  },
  methods:{
    showOper(){
      this.templateShow=true;
      this.$refs.template_oper.style.display="block"
      setTimeout(()=>{
        this.$refs.template_oper.style.top="30%";
        this.$refs.template_oper.style.opacity="1";
      },200)
    },
    hideTemplate(){
      setTimeout(()=>{
        this.$refs.template_oper.style.display="none";
        this.templateShow=false;
      },300)
      this.$refs.template_oper.style.top="15%";
      this.$refs.template_oper.style.opacity="0";
    },
    postList(){
      let _this=this;
      let Id=getCookie('Iud');
      let amount=_this.$refs.amount.value;
      let date=_this.$refs.date.value;
      let cun=_this.$refs.interestCun.value;//国股利率
      let city=_this.$refs.interestCity.value;//城商利率
      let di=_this.$refs.interestDi.value;//电商利率
      let towns=_this.$refs.interestTowns.value;//村镇银行利率
      if(amount==''||date==''||cun==''||city==''||di==''||towns==''){
        alert('请先完善报价信息！')
      }else{
        _this.axios.post(_this.oUrl+'/resourceMarket/add',{
          "resourceMarketInfo":{
            "orderId":"ewrewrwwewr11were2654",
            "buyerId":Id,
            "amountRange":amount,
            "timeLimit":date,
            "type1":cun,
            "type2":city,
            "type3":di,
            "type4":towns,
            "billType":"电银",
            "priority":"2",
            "updateDate":"2018-08-20",
            "note":"Surprise MontherFuck!"
          }
        },
        {headers:{
          'Content-Type':'application/json'
        }}
        ).then((res)=>{
            console.log(res)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.offer_template{
  width: 100%;
  height:100%;
  padding-top:10%;
  .template_mes{
    width: 80%;
    margin-left: 6%;
    border:1px solid #ccc;
    border-bottom:0;
    .template_title{
      min-height: 36px;
      line-height: 36px;
      border-bottom:1px solid #ccc;
    }
    .limit{
      border-left:1px solid #ccc;
      border-right:1px solid #ccc;
    }
    .city{
      border-left:1px solid #ccc;
      border-right:1px solid #ccc;
    }
    .oper{
      border-left:1px solid #ccc;
    }
    .template_message{
      min-height: 70px;
      line-height: 70px;
      font-size: 14px;
      border-bottom:1px solid #ccc;
    }
  }
  .add_offer{
    width: 80%;
    margin-left: 6%;
    text-align: left;
    margin-top:2%;
    button{
      width: 80px;
      height:26px;
      border-radius:5px;
      background: linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
      color:white;
    }
  }
  .oper_offer{
    width: 80%;
    margin-left:6%;
    text-align: center;
    margin-top: 4%;
    button{
      width: 110px;
      min-height: 28px;
      border-radius:5px;
      background: linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
      color:white;
    }
    button:nth-child(2){
      width: 150px;
    }
  }
  .template_mask{
    width: 100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,.5);
    z-index: 600;
  }
  .template_oper{
    width: 800px;
    height:200px;
    background: white;
    position: absolute;
    top:15%;
    left:50%;
    margin-left: -400px;
    z-index: 601;
    padding-top:1.5%;
    transition: all .5s;
    opacity: 0;
    display: none;
    .message_box{
      width: 80%;
      margin-left: 10%;
      .oper_title{
        min-height: 40px;
        line-height: 40px;
        background: #ebebeb;
      }
      .oper_mes{
        min-height: 50px;
        line-height: 50px;
        font-size: 14px;
      }
      input{
        width: 80%;
        margin:0 auto;
        height:26px;
        font-size: 16px;
        text-align: center;
      }
      input::-webkit-input-placeholder{
        font-size: 14px;
      }
    }
    .place_oper{
      width: 100%;
      text-align: center;
      margin-top: 3%;
      button{
        min-height: 34px;
        min-width: 60px;
        font-size: 12px;
        border-radius:5px;
      }
      button:nth-child(1){
        background: white;
        border:1px solid rgba(254,68,43,1);
        margin-right: 20px;
      }
      button:nth-child(2){
        background: rgba(254,68,43,1);
        margin-left: 20px;
        color:white;
      }
    }
  }
}
</style>
