<!-- 用户个人发出的报价 -->
<template lang="html">
  <div class="person_offer">
    <div class="offer_pic">
      <img src="../../static/img/offer.png" alt="">
    </div>
    <p class="offer_title">
      <el-row>
        <el-col :span="6"><router-link to="/release/offer/offerAll"
           tag="div" class="offer_tit"
           @click.native="offerAll()"
           :class="{offer:color==1}"
           >全部报价</router-link></el-col>
        <el-col :span="6"><router-link to="/release/offer/offerAccepted"
          tag="div" class="offer_tit offer_choes"
          @click.native="offerAcc()"
          :class="{offer:color==2}"
          >卖家接收的报价</router-link></el-col>
        <el-col :span="6"><router-link to="/release/offer/offerPrices"
          tag="div" class="offer_tit"
          @click.native="offerPri()"
          :class="{offer:color==3}"
          >报价中</router-link></el-col>
        <el-col :span="6"><router-link to="/release/offer/offerCancel"
          tag="div" class="offer_tit offer_choesT"
          @click.native="offerCan()"
          :class="{offer:color==4}"
          >失效报价</router-link></el-col>
      </el-row>
    </p>
    <div class="person_offer_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      color:1
    }
  },
  methods:{
    offerAll(){
      this.color=1;
    },
    offerAcc(){
      this.color=2;
    },
    offerPri(){
      this.color=3;
    },
    offerCan(){
      this.color=4;
    }
  }
}
</script>

<style lang="scss" scoped>
.person_offer{
  width: 100%;
  height:100%;
  .offer_pic{
    width: 100%;
    height:10%;
    margin-top: 5%;
    text-align: left;
    padding-left:18%;
    margin-bottom:3%;
    img{
      width:75%;
      height:80%;
    }
  }
  .offer_title{
    width: 60%;
    border:1px solid #979797;
    min-height: 36px;
    line-height: 36px;
    margin-left: 4%;
    .offer{
      background: linear-gradient(180deg,rgba(255,120,83,1),rgba(255,67,41,1));
      color:white;
    }
    .offer_tit{
      cursor:pointer;
    }
    .offer_choes{
      border-left:1px solid #979897;
      border-right: 1px solid #979897;
    }
    .offer_choesT{
      border-left:1px solid #979897;
    }
  }

}
</style>
