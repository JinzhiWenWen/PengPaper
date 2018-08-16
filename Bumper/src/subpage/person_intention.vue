<!-- 求贴意向 -->
<template lang="html">
  <div class="person_intention">
    <div class="person_intention_pic">
      <img src="../../static/img/intention.png" alt="">
    </div>
    <div class="person_intention_con">
      <div class="person_intention_title">
        <el-row>
          <el-col :span="5"><div class="intention_title">全部报价</div></el-col>
          <el-col :span="5"><div class="intention_title confirmed">待买家确认</div></el-col>
          <el-col :span="5"><div class="intention_title">买家已确认</div></el-col>
          <el-col :span="5"><div class="intention_title rejected">买家已拒绝</div></el-col>
          <el-col :span="4"><div class="intention_title">审核中</div></el-col>
        </el-row>
      </div>
      <div class="person_intention_mes">
        <el-row>
          <el-col :span="3"><div class="intention_mes_title">票据类型</div></el-col>
          <el-col :span="3"><div class="intention_mes_title bank">承兑银行</div></el-col>
          <el-col :span="3"><div class="intention_mes_title">金额</div></el-col>
          <el-col :span="3"><div class="intention_mes_title date">到期日</div></el-col>
          <el-col :span="3"><div class="intention_mes_title">剩余天数</div></el-col>
          <el-col :span="3"><div class="intention_mes_title amount">报价</div></el-col>
          <el-col :span="3"><div class="intention_mes_title">状态</div></el-col>
          <el-col :span="3"><div class="intention_mes_title opera">操作</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="3"><div class="intention_mes">电银</div></el-col>
          <el-col :span="3"><div class="intention_mes bankMes">中国招商银行朝阳分行</div></el-col>
          <el-col :span="3"><div class="intention_mes">100W</div></el-col>
          <el-col :span="3"><div class="intention_mes date">2018-07-30</div></el-col>
          <el-col :span="3"><div class="intention_mes">7天</div></el-col>
          <el-col :span="3"><div class="intention_mes amountMes">
            <span class="interest">年化：<span>10%</span></span>
            <span class="premium">每10w加：<span>***</span></span>
          </div></el-col>
          <el-col :span="3"><div class="intention_mes">已确认</div></el-col>
          <el-col :span="3"><div class="intention_mes operaMes">
            <button type="button" name="button">查看进度</button>
          </div></el-col>
        </el-row>
        <p class="person_intention_contact">
          <span>张家湾****有限公司</span>
          <span class="pople">赵经理</span>
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
.person_intention{
  width: 100%;
  height:100%;
  .person_intention_pic{
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
  .person_intention_con{
    width: 96%;
    margin-left:4%;
    margin-top:3%;
    .person_intention_title{
      width: 65%;
      border:1px solid #ccc;
      .intention_title{
        min-height: 32px;
        line-height: 32px;
        cursor:pointer;
      }
      .confirmed{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .rejected{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
    }
    .person_intention_mes{
      width: 90%;
      border:1px solid #ccc;
      border-bottom:0;
      margin-top:3%;
      .intention_mes_title{
        background: #ebebeb;
        min-height: 30px;
        line-height: 30px;
        border-bottom:1px solid #ccc;
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
      .opera{
        border-left:1px solid #ccc;
      }
      .intention_mes{
        min-height: 60px;
        max-height:70px;
        line-height:70px;
        font-size: 12px;
        border-bottom:1px solid #ccc;
      }
      .bankMes{
        line-height: 28px;
        padding-top:14%;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .amountMes{
        line-height: 0;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
        display: flex;
        flex-direction: column;
        .interest{
          height:35px;
          line-height: 35px;
          border-bottom:1px solid #ccc;
        }
        .premium{
          height:35px;
          line-height: 35px;
        }
      }
      .operaMes{
        border-left:1px solid #ccc;
        button{
          width: 70%;
          min-height: 20px;
          font-size: 12px;
          border:1px solid #FE442B;
          color:#FE442B;
          background:white;
          border-radius:3px;
        }
      }
      .person_intention_contact{
        width:100%;
        min-height: 40px;
        border-bottom:1px solid #ccc;
        line-height: 40px;
        font-size: 14px;
        position: relative;
        button{
          position: absolute;
          right:2%;
          min-height: 28px;
          width: 12%;
          top:14%;
          color:white;
          border-radius:3px;
          background: linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
        }
        .pople{
          margin-left: 80px;
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
