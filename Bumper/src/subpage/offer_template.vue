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
          <el-col :span="5"><div class="oper_title">票据金额</div></el-col>
          <el-col :span="5"><div class="oper_title limit">期限</div></el-col>
          <el-col :span="5"><div class="oper_title">国股</div></el-col>
          <el-col :span="5"><div class="oper_title city">城商</div></el-col>
          <el-col :span="4"><div class="oper_title">电商</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="5"><div class="oper_mes">233</div></el-col>
          <el-col :span="5"><div class="oper_mes limit">233</div></el-col>
          <el-col :span="5"><div class="oper_mes">233</div></el-col>
          <el-col :span="5"><div class="oper_mes city">233</div></el-col>
          <el-col :span="4"><div class="oper_mes">233</div></el-col>
        </el-row>
      </div>
      <p class="place_oper">
        <button type="button" name="button">重置</button>
        <button type="button" name="button">确认修改</button>
      </p>
    </div>
  </div>
</template>

<script>
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
    width: 650px;
    height:200px;
    background: white;
    position: absolute;
    top:15%;
    left:50%;
    margin-left: -270px;
    z-index: 601;
    padding-top:1.5%;
    transition: all 1s;
    opacity: 0;
    display: none;
    .message_box{
      width: 80%;
      margin-left: 10%;
      border:1px solid #ccc;
      border-bottom:0;
      .oper_title{
        min-height: 50px;
        line-height: 50px;
        border-bottom:1px solid #ccc;
      }
      .oper_mes{
        min-height: 50px;
        line-height: 50px;
        border-bottom:1px solid #ccc;
        font-size: 14px;
      }
      .limit{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .city{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
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
