<template lang="html">
  <div class="paper_details">
    <div class="paper_details_con">
      <p class="paper_details_title">海绵海绵我是大星科技有限公司</p>
      <div class="paper_mes">
        <div class="mes">
          <p>票据编号:<span>{{billType}}</span></p>
          <p>汇票到期日:<span>{{billDate}}</span></p>
          <p>票据金额:<span>{{amount}}</span></p>
          <p>出票日期:<span>{{billTime}}</span></p>
          <p>剩余天数:<span></span></p>
          <p>期望利率:<span></span></p>
        </div>
        <div class="place">
          <p class="num">已有23家机构报价</p>
          <div class="table">
            <p>报价金额:<input type="text" value="" alt="" ref="amount"/>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>报价利率:<input type="text" value="" alt="" ref="interest"/>%</p>
            <p>每10万加:<input type="text" value="" ref="xPerLakh"/>元</p>
            <p><button type="button" @click="detailSprompt()">确认报价</button></p>
          </div>
        </div>
      </div>
      <p class="paper_pic_title">
        <span>汇票图片</span>
      </p>
      <div class="paper_pic">
        <img src="../../static/img/banner2.jpg" alt="" ref="billPic">
      </div>
    </div>
    <div class="success_mes" ref="success_mes">
      <p class="success_mes_title">您已成功报价</p>
      <p class="success_mes_oper">
        <button type="button" name="button" @click="closeSprompt()">继续报价</button>
        <router-link to="/release/offer" tag="button">查看我的报价</router-link>
      </p>
    </div>
    <div class="paper_details_mask" v-show="detailsMaskShow">

    </div>
    <Footer :height="minHeight"/>
  </div>
</template>

<script>
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      minHeight:'5%',
      detailsMaskShow:false,
      bill:null,
      billType:'',
      billDate:'',
      amount:'',
      billTime:'',
      day:''
    }
  },
  components:{
    Footer:resolve=>{
      require(['@/components/footer-all'],resolve)
    }
  },
  methods:{
    detailSprompt(){
      let _this=this;
      let amount=this.$refs.amount.value;
      let interest=this.$refs.interest.value;
      let xPerLakh=this.$refs.xPerLakh.value;
      let Id=getCookie('Iud')
      if(amount==''||interest==''||xPerLakh==''){
        alert('请完善报价信息')
      }else{
        _this.axios.post(_this.oUrl+'/quote/addQuote',{
          "billNumber":_this.bill,//票号
        	"quoterId":Id,//用户Id
        	"quoteAmount":amount,
        	"interest":interest,//利率
        	"xPerLakh":xPerLakh,//每10w加
        	"status":"ok",
        	"quoteDate":"2018-08-09"//报价时间
        }).then((res)=>{
          console.log(res)
          this.detailsMaskShow=true;
          this.$refs.success_mes.style.display="block";
          setTimeout(()=>{
            this.$refs.success_mes.style.top="30%";
            this.$refs.success_mes.style.opacity="1";
          })
        })
      }

    },
    closeSprompt(){
      this.$refs.success_mes.style.top="15%";
      this.$refs.success_mes.style.opacity="0";
      setTimeout(()=>{
        this.$refs.success_mes.style.display="none";
        this.detailsMaskShow=false;
      },200)
    },
    getBill(){//获取票号
      this.bill=this.$route.query.bills;
      this.axios.get(this.oUrl+'/bills/getbill?billNumber='+this.bill).then((res)=>{
        this.billType=res.data[0].billNumber;
        this.billDate=res.data[0].maturity;
        this.amount=res.data[0].amount;
        this.billTime=res.data[0].releaseDate;
      })
    },
    getPics(){
      let _this=this;
      _this.axios.get(_this.oUrl+'/bills/getBillPics?billNumber='+_this.bill).then((res)=>{
        _this.$refs.billPic.src=res.data[0].pic1;
      })
    }
  },
  created(){
    this.getBill()
  },
  mounted(){
     this.getPics()
  }
}
</script>

<style lang="scss" scoped>
.paper_details{
  width: 100%;
  min-width: 1631px;
  height:100%;
  min-height: 900px;
  .paper_details_con{
    width: 70%;
    height:100%;
    margin-left: 15%;
    padding-top:4%;
    .paper_details_title{
      width: 100%;
      text-align: left;
      font-size: 20px;
      letter-spacing:1px
    }
    .paper_mes{
      width: 100%;
      height:40%;
      margin-top: 2%;
      display: flex;
      .mes{
        width: 50%;
        height:100%;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        p{
          width: 100%;
          text-align: left;
          font-size: 14px;
          padding-left:2%;
          span{
            margin-left:4%;
          }
        }
      }
      .place{
        width: 50%;
        height:100%;
        min-height: 300px;
        position: relative;
        background: #ff540c;
        padding-left:10%;
        padding-top:3%;
        .num{
          font-size: 20px;
          width: 80%;
          text-align: left;
          color:white;
        }
        .table{
          width: 60%;
          height:60%;
          min-height: 170px;
          min-width: 388px;
          position: absolute;
          background: white;
          top:25%;
          padding-left:10%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          p{
            width: 80%;
            font-size: 14px;
            input{
              width: 60%;
              border:1px solid black;
              min-height:26px;
              margin-left:10%;
              font-size: 16px;
            }
            button{
              width: 90%;
              height:32px;
              border-radius: 5px;
              background: #ff452c;
              color:white;
            }
          }
        }
      }
    }
    .paper_pic_title{
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #979797;
      margin-top:3%;
      span{
        color:#ff452c;
        border-bottom: 4px solid #ff452c;
        padding-bottom:.5%;
      }
    }
    .paper_pic{
      width: 70%;
      height:45%;
      margin:0 auto;
      margin-top: 4%;
      margin-bottom:5%;
      border:1px solid #979797;
      img{
        width: 100%;
        height:100%;
      }
    }
  }
  .success_mes{
    width: 30%;
    height:30%;
    position: absolute;
    background: white;
    top:15%;
    left:50%;
    margin-left:-250px;
    z-index: 502;
    transition: all .5s;
    display: none;
    opacity:0;
    .success_mes_title{
      width: 100%;
      height: 60%;
      line-height: 230px;
      font-size: 16px;
      font-weight: bold;
      color:#FF0000;
    }
    .success_mes_oper{
      width: 100%;
      padding-top:5%;
      button{
        padding:1%;
        border-radius:5px;
        background: linear-gradient(180deg,rgba(254,126,89,1),rgba(252,72,45,1));
        color:white;
      }
      button:nth-child(1){
        margin-right:10px;
      }
      button:nth-child(2){
        margin-left: 20px;
      }
    }
  }
  .paper_details_mask{
    width: 100%;
    height:100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left:0;
    z-index: 501;
  }
}
</style>
