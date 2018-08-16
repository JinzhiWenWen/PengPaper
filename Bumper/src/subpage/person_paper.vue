<!-- 用户发布的票据 -->
<template lang="html">
  <div class="person_paper">
    <div class="person_paper_pic">
      <img src="../../static/img/fff.png" alt="">
    </div>
    <p class="person_paper_num">该票据已通知<span>13</span>个票据买家，请耐心等待买家报价</p>
    <p class="person_paper_table">
      <span>报价中</span>
      <span>审核中</span>
    </p>
    <div class="hadRelease">
      <el-row>
        <el-col :span="5"><div class="person_offerIn_title">公司名称</div></el-col>
        <el-col :span="4"><div class="person_offerIn_title limit">成交额</div></el-col>
        <el-col :span="5"><div class="person_offerIn_title">剩余天数</div></el-col>
        <el-col :span="5"><div class="person_offerIn_title time">到期日</div></el-col>
        <el-col :span="5"><div class="person_offerIn_title">交易时间</div></el-col>
      </el-row>
      <el-row v-for="(item,index) in noteList" :key="index">
        <el-col :span="5"><div class="person_offerIn_mes">{{item.acceptor}}</div></el-col>
        <el-col :span="4"><div class="person_offerIn_mes limit">{{item.amount}}</div></el-col>
        <el-col :span="5"><div class="person_offerIn_mes">{{item.releaseDate}}</div></el-col>
        <el-col :span="5"><div class="person_offerIn_mes time">{{item.maturity}}</div></el-col>
        <el-col :span="5"><div class="person_offerIn_mes tradTime">
          <span>2018-07-22</span>
          <span>00:00:00</span>
        </div></el-col>
      </el-row>
    </div>
    <p class="person_paper_tableB">
      <span>已报价（<span></span>）</span>
      <span>未报价（<span></span>）</span>
    </p>
    <div class="hadOffer">
      <el-row>
        <el-col :span="10"><div class="hadOffer_title company">****实业有限公司</div></el-col>
        <el-col :span="7"><div class="hadOffer_title">陆经理</div></el-col>
        <el-col :span="7"><div class="hadOffer_title">13243435446</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import offerInA from '@/subpage/person_offerIn'
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      color:1,
      noteList:[]
    }
  },
  methods:{
    offerIn(){
      this.color=1;
    },
    offerBe(){
      this.color=2;
    },
    getPaper(){
      let Id=getCookie('Iud');
      this.axios.post(this.oUrl+'/bills/getMyBillsQuoted',{
        "uuid":Id,
        "filter":4
      },
      {headers:{
        'Content-Type':'application/json'
      }}
    ).then((res)=>{
      console.log(res)
      this.noteList=res.data
      console.log(this.noteList)
    })
    }
  },
  created(){
    this.getPaper()
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
  .person_paper_tableB{
    width:90%;
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
    margin-top:4%;
    border:1px solid #ccc;
    border-bottom:0;
    .person_offerIn_title{
      min-height: 36px;
      line-height: 36px;
      background: #ebebeb;
      border-bottom:1px solid #ccc;
    }
    .limit{
      border-left:1px solid #ccc;
      border-right:1px solid #ccc;
    }
    .time{
      border-left:1px solid #ccc;
      border-right:1px solid #ccc;
    }
    .person_offerIn_mes{
      min-height: 70px;
      line-height: 70px;
      border-bottom:1px solid #ccc;
      font-size: 14px;
    }
    .tradTime{
      line-height: 0;
      display: flex;
      flex-direction: column;
      span{
        width: 100%;
        height:35px;
        line-height: 45px;
        font-size: 12px;
      }
      span:nth-child(2){
        line-height: 25px;
      }
    }
  }
  .hadOffer{
    width: 90%;
    margin-left:4%;
    margin-top:4%;
    .hadOffer_title{
      min-height: 30px;
      line-height: 30px;
      font-size: 16px;
    }
    .company{
      text-align: left;
      padding-left:25%;
    }
  }
}
</style>
