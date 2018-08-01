<template lang="html">
  <div class="paper_details">
    <div class="paper_details_con">
      <p class="paper_details_title">海绵海绵我是大星科技有限公司</p>
      <div class="paper_mes">
        <div class="mes">
          <p>票据类型:<span></span></p>
          <p>汇票到期日:<span></span></p>
          <p>票据金额:<span></span></p>
          <p>出票日期:<span></span></p>
          <p>剩余天数:<span></span></p>
          <p>期望利率:<span></span></p>
        </div>
        <div class="place">
          <p class="num">已有23家机构报价</p>
          <div class="table">
            <p>报价金额:<input type="text" value="" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>报价利率:<input type="text" value="" alt=""/>%</p>
            <p>每10万加:<input type="text" value=""/>元</p>
            <p><button type="button">确认报价</button></p>
          </div>
        </div>
      </div>
      <p class="paper_pic_title">
        <span>汇票图片</span>
      </p>
      <div class="paper_pic">
        <p>Pic</p>
      </div>
    </div>
    <Footer :height="minHeight"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      minHeight:'10%'
    }
  },
  components:{
    Footer:resolve=>{
      require(['@/components/footer-all'],resolve)
    }
  }
}
</script>

<style lang="scss" scoped>
.paper_details{
  width: 100%;
  height:100%;
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
        }
      }
      .place{
        width: 50%;
        height:100%;
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
      width: 100%;
      height:55%;
      margin-top: 2%;
      margin-bottom:5%;
      border:1px solid #979797;
      P{
        color:#999;
        margin-top:16%;
      }
    }
  }

}
</style>
