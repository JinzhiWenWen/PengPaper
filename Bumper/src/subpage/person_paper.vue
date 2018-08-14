<!-- 用户发布的票据 -->
<template lang="html">
  <div class="person_paper">
    <div class="person_paper_pic">
      <img src="../../static/img/fff.png" alt="">
    </div>
    <p class="person_paper_num">该票据已通知<span>13</span>个票据买家，请耐心等待买家报价</p>
    <p class="person_paper_table">
      <router-link to="/release/paper/offerIn" @click.native="offerIn()" :class="{avtive:color==1}" tag="span">报价中</router-link>
      <router-link to="/release/paper/offerBe" @click.native="offerBe()" :class="{avtive:color==2}" tag="span">审核中</router-link>
    </p>
    <div class="hadRelease">
      <router-view></router-view>
    </div>
    <p class="person_paper_table">
      <span>已报价（<span>6</span>）</span>
      <span>未报价（<span>12</span>）</span>
    </p>
    <div class="hadOffer">
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
    offerIn(){
      this.color=1;
    },
    offerBe(){
      this.color=2;
    }
  }
}
</script>

<style lang="scss" scoped>
.avtive{
  border-bottom:4px solid #FF452C;
}
.person_paper{
  width: 100%;
  height:100%;
  .person_paper_pic{
    width: 100%;
    height:8%;
    margin-top: 5%;
    text-align: left;
    padding-left:8%;
    img{
      width:75%;
      height:80%;
    }
  }
  .person_paper_num{
    width: 90%;
    color:#FF0000;
    margin-top: 4%;
    font-size: 17px;
  }
  .person_paper_table{
    width:80%;
    margin-left: 4%;
    text-align: left;
    border-bottom:1px solid #ccc;
    margin-top:5%;
    span{
      color:#FF452C;
      font-size: 17px;
      cursor:pointer;
    }
    span:nth-child(2){
      margin-left:20px;
    }
  }
  .hadRelease{
    width: 80%;
    margin-left: 4%;
  }
}
</style>
