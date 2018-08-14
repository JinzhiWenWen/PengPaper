<!-- 用户个人发出的报价 -->
<template lang="html">
  <div class="person_offer">
    <div class="offer_pic">
      <img src="../../static/img/process.png" alt="">
    </div>
    <p class="offer_title">
      <el-row>
        <el-col :span="6"><div class="">全部报价</div></el-col>
        <el-col :span="6"><div class="offer_choes">已被卖家认领</div></el-col>
        <el-col :span="6"><div class="">报价中</div></el-col>
        <el-col :span="6"><div class="offer_choesT">失效报价</div></el-col>
      </el-row>
    </p>
    <div class="offer_mes">
      <el-row>
        <el-col :span="3"><div class="mes_title">票据类型</div></el-col>
        <el-col :span="3"><div class="mes_title bank">承兑银行</div></el-col>
        <el-col :span="3"><div class="mes_title">金额</div></el-col>
        <el-col :span="3"><div class="mes_title date">到期日</div></el-col>
        <el-col :span="3"><div class="mes_title">剩余天数</div></el-col>
        <el-col :span="3"><div class="mes_title amount">报价</div></el-col>
        <el-col :span="3"><div class="mes_title">状态</div></el-col>
        <el-col :span="3"><div class="mes_title opera">操作</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="3"><div class="mes">票据类型</div></el-col>
        <el-col :span="3"><div class="mes bank">承兑银行</div></el-col>
        <el-col :span="3"><div class="mes">金额</div></el-col>
        <el-col :span="3"><div class="mes date">到期日</div></el-col>
        <el-col :span="3"><div class="mes">剩余天数</div></el-col>
        <el-col :span="3"><div class="mes amount mes_chose">
          <div class="rate">
            <p>利率：</p>
          </div>
          <div class="premium">
            <p>每10w加：</p>
          </div>
        </div></el-col>
        <el-col :span="3"><div class="mes pula">
          <span>已被卖家接受</span>
        </div></el-col>
        <el-col :span="3"><div class="mes operaMes">
          <p><button type="button" name="button">交易</button></p>
          <p><button type="button" name="button">放弃</button></p>
        </div></el-col>
      </el-row>
      <div class="mes_bot">
        <p>
          <span>张家湾****贸易有限公司</span>
          <span>赵总</span>
          <span>13240891337</span>
          <button type="button" name="button">查看详情</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.person_offer{
  width: 100%;
  height:100%;
  .offer_pic{
    width: 100%;
    height:30%;
    img{
      width: 100%;
      height:100%;
    }
  }
  .offer_title{
    width: 60%;
    border:1px solid #979797;
    min-height: 40px;
    line-height: 40px;
    margin-left: 4%;
    .offer_choes{
      border-left:1px solid #979897;
      border-right: 1px solid #979897;
    }
    .offer_choesT{
      border-left:1px solid #979897;
    }
  }
  .offer_mes{
    width: 100%;
    margin-left: 4%;
    margin-top: 4%;
    border:1px solid #ccc;
    border-bottom:0;
    .mes_title{
      background:#ebebeb;
      border-bottom:1px solid #ccc  ;
      min-width: 40px;
      line-height: 40px;
    }
    .bank{
      border-left:1px solid #ccc;
      border-right:1px solid #ccc;
    }
    .date{
      border-left:1px solid #ccc;
      border-right:1px solid #ccc;
    }
    .amount{
      border-left:1px solid #ccc;
      border-right:1px solid #ccc;
    }
    .mes{
      min-height: 100px;
      border-bottom:1px solid #ccc;
      line-height: 100px;
      font-size: 14px;
    }
    .opera{
      border-left:1px solid #ccc;
    }
    .mes_chose{
      display: flex;
      flex-direction: column;
      .rate{
        width: 100%;
        height:50%;
        margin-top: -3px;
        p{
          width: 100%;
          text-align: center;
          border-bottom:1px solid #ccc;
          height:100%;
          line-height: 51px;
          font-size: 14px;
        }
      }
      .premium{
        width: 100%;
        height:50%;
        p{
          width: 100%;
          line-height: 51px;
          font-size: 14px;
        }
      }
    }
    .operaMes{
      border-left:1px solid #ccc;
      line-height: 0;
      display: flex;
      flex-direction: column;
      p{
        width: 100%;
        height:50px;
        line-height: 50px;

        button{
          min-width: 60px;
          height:30px;
          border-radius: 3px;
          background: linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
          color:white;
        }
      }
      p:nth-child(2){
        button{
          background: white;
          border:1px solid #FE452C;
          color:#FE452C;
        }
      }
    }
    .mes_bot{
      min-height: 40px;
      line-height: 40px;
      border-bottom:1px solid #ccc;
      font-size: 14px;
      position: relative;
      p{
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        button{
          width:105px;
          height:30px;
          border-radius:3px;
          background:linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
          color:white;
          position: absolute;
          right:2%;
          top:12%;
        }
      }
    }

  }
}
</style>
