<!-- 用户全部报价 -->
<template lang="html">
  <div class="person_intention_all">
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
      <div class="" v-for="(item,index) in noteList" :key="index">
        <el-row>
          <el-col :span="3"><div class="intention_mes">{{item.billType}}</div></el-col>
          <el-col :span="3"><div class="intention_mes bankMes">{{item.acceptor}}</div></el-col>
          <el-col :span="3"><div class="intention_mes">{{item.amount/10000}}w</div></el-col>
          <el-col :span="3"><div class="intention_mes date">{{item.releaseDate}}</div></el-col>
          <el-col :span="3"><div class="intention_mes">{{item.transacDate}}</div></el-col>
          <el-col :span="3"><div class="intention_mes amountMes">
            <span class="interest">年化：<span>10%</span></span>
            <span class="premium">每10w加：<span>***</span></span>
          </div></el-col>
          <el-col :span="3"><div class="intention_mes">{{item.status}}</div></el-col>
          <el-col :span="3"><div class="intention_mes operaMes">
            <button type="button" name="button">查看进度</button>
          </div></el-col>
        </el-row>
        <p class="person_intention_contact">
          <span>张家湾****有限公司</span>
          <span class="pople">赵经理</span>
          <span>13240891337</span>
          <button type="button" name="button" @click="paperMes(index)">查看详情</button>
        </p>
      </div>
      <div class="intention_mes_details" ref="intention_mes_details">
        <div class="intention_mes_pic" ref="intention_mes_pic">
          <img src="../../static/img/banner1.jpg" alt="" ref="PaperIs">
        </div>
        <div class="intention_mes_message">
          <div class="message_left">
            <ul>
              <li>票据金额：<span>{{amount/10000}}w</span></li>
              <li>每10w加：<span>{{xPerLakh}}</span></li>
              <li>出票日期：<span>{{transacDate}}</span></li>
            </ul>
          </div>
          <div class="message_right">
            <ul>
              <li>承对方：<span>{{bank}}</span></li>
              <li>汇票到期日：<span>{{releaseDate}}</span></li>
              <li>剩余天数：<span>99天</span></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <div class="intention_mes_mask" v-show="intentionMaskShow" @click="closePics()">

    </div>
  </div>
</template>

<script>
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      noteList:[],
      intentionMaskShow:false,
      amount:null,
      xPerLakh:null,
      transacDate:null,
      bank:null,
      releaseDate:null
    }
  },
  methods:{
    getIntenTionList(){
      let _this=this;
      let Id=getCookie('Iud');
      _this.axios.post(this.oUrl+'/bills/getBillsIntentions',{
        "uuid":Id,
        "IntentionType":'1'
      },
      {headers:{
        'Content-Type':'application/json'
      }}
    ).then((res)=>{
      console.log(res)
      _this.noteList=res.data;
    })
  },
    paperMes(index){
      let _this=this;
      let billNumberLoca=_this.noteList[index].billNumber;
      _this.axios.get(_this.oUrl+'/bills/getbill?billNumber='+billNumberLoca).then((res)=>{
        console.log(res)
        _this.amount=_this.noteList[index].amount;
        _this.xPerLakh=_this.noteList[index].xPerLakh;
        _this.transacDate=_this.noteList[index].transacDate;
        _this.bank=_this.noteList[index].acceptor;
        _this.releaseDate=_this.noteList[index].releaseDate;
        _this.axios.get(_this.oUrl+'/bills/getBillPics?billNumber='+billNumberLoca).then((res)=>{
          console.log(res)
          _this.$refs.PaperIs.src=res.data[0].pic1;
          _this.intentionMaskShow=true;
          _this.$refs.intention_mes_details.style.display='block';
          setTimeout(()=>{
            _this.$refs.intention_mes_details.style.top='20%';
            _this.$refs.intention_mes_details.style.opacity='1';
          })
        })
      })
    },
    closePics(){
      this.$refs.intention_mes_details.style.top='15%';
      this.$refs.intention_mes_details.style.opacity='0';
      setTimeout(()=>{
        this.intentionMaskShow=false;
        this.$refs.intention_mes_details.style.display='none';
      },200)
    }
  },
  created(){
    this.getIntenTionList()
  }
}
</script>

<style lang="scss" scoped>
.intention_mes_mask{
  width: 100%;
  height:100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top:0;
  left:0;
  z-index: 500;
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
.intention_mes_details{
  width: 670px;
  height:540px;
  background: white;
  position: absolute;
  left:50%;
  margin-left:-286px;
  top:15%;
  z-index: 501;
  opacity: 0;
  display: none;
  transition: all .5s;
  overflow: hidden;
  .intention_mes_pic{
    width: 670px;
    height:340px;
    background: white;
    img{
      width: 100%;
      height:100%;
    }
  }
  .intention_mes_message{
    width: 100%;
    display: flex;
    height:300px;
    .message_left{
      width: 50%;
      height:100%;
      border-right:1px solid #ccc;
      ul{
        padding-top:12%;
        li{
          margin-bottom: 5%;
        }
      }
    }
    .message_right{
      width: 50%;
      height:100%;
      ul{
        padding-top:12%;
        li{
          margin-bottom: 5%;
        }
      }
    }
  }
}

</style>
