<template lang="html">
  <div class="page">
    <Swiper/>
    <div class="page_con">
      <router-link to="/release" tag="p" class="page_release">急速发票</router-link>
      <p class="page_title_f">实时<span>票据</span>行情</p>
      <div class="page_options">
        <ul class="list">
          <li><img src="../../static/img/calculator.png" title="" alt="" style="width:50%;height:50%;" /></li>
          <li><p>法&nbsp;务</p><p>咨&nbsp;询</p></li>
          <li></li>
        </ul>
      </div>
      <div class="page_table">
        <el-row>
          <el-col :span="4"><div class="table time">成交时间</div></el-col>
          <el-col :span="3"><div class="table type">票据类型</div></el-col>
          <el-col :span="8"><div class="table acce">承兑人</div></el-col>
          <el-col :span="4"><div class="table amount">票据金额</div></el-col>
          <el-col :span="3"><div class="table data">到期日</div></el-col>
          <el-col :span="2"><div class="table status">状态</div></el-col>
        </el-row>
      </div>
      <div class="page_table_mes">
        <el-row v-for="(item,index) in roteList" :key="index">
          <el-col :span="4"><div class="tableMes time">{{item.time}}</div></el-col>
          <el-col :span="3"><div class="tableMes type">
            <span style="color:#ff823f;" v-show="item.type=='1'">银票</span>
            <span style="color:#3d83c8;" v-show="item.type=='2'">商票</span>
          </div></el-col>
          <el-col :span="8"><div class="tableMes acce">{{item.acce}}</div></el-col>
          <el-col :span="4"><div class="tableMes amount">{{item.amount}}</div></el-col>
          <el-col :span="3"><div class="tableMes data">{{item.data}}</div></el-col>
          <el-col :span="2"><div class="tableMes status">{{item.status}}</div></el-col>
        </el-row>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      roteList:[
        {
          time:'2018-07-23',
          type:1,     //1为银票，2为商票
          acce:'中国电建集团财务有限责任公司',
          amount:'1,000,000.25',
          data:'2018-10-20',
          status:'已成交'
        },
        {
          time:'2018-06-12',
          type:1,     //1为银票，2为商票
          acce:'中交财务有限公司',
          amount:'200,000.00',
          data:'2019-02-11',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:2,     //1为银票，2为商票
          acce:'中铁财务有限责任公司',
          amount:'500,000.00',
          data:'2018-12-11',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:1,     //1为银票，2为商票
          acce:'中华工程财务集团有限责任公司',
          amount:'2300,000.00',
          data:'2020-10-19',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:2,     //1为银票，2为商票
          acce:'华润置地（重庆）有限公司',
          amount:'1,518,2332.75',
          data:'2019-05-16',
          status:'已成交'
        },
      ]
    }
  },
  components:{
    Header:resolve=>{
      require(['@/components/header-all'],resolve)
    },
    Swiper:resolve=>{
      require(['@/components/swiper_page'],resolve)
    },
    Footer:resolve=>{
      require(['@/components/footer-all'],resolve)
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height:100%;
  min-width: 1378px;
  .page_con{
    width: 70%;
    height:100%;
    margin-left: 15%;
    position:relative;
    z-index: 5;
    .page_release{
      width: 15%;
      height:10%;
      min-height: 86px;
      background: #140079;
      text-align: center;
      line-height: 95px;
      position: absolute;
      top:-40px;
      color:white;
      font-size: 18px;
      cursor:pointer;
      border-radius: 5px;
    }
    .page_title_f{
      font-size: 30px;
      width: 100%;
      height:30%;
      line-height: 285px;
      min-height: 285px;
      span{
        font-size: 38px;
      }
    }
    .page_table{
      width: 100%;
      .table{
        min-height: 40px;
        background: #43609c;
        text-align: center;
        line-height: 40px;
        color:white;
      }
      .type{
        border-left: 1px solid #8b9bbd;
        border-right: 1px solid #8b9bbd;
      }
      .amount{
        border-left: 1px solid #8b9bbd;
        border-right: 1px solid #8b9bbd;
      }
      .status{
        border-left: 1px solid #cad2df;
      }
    }
    .page_table_mes{
      width: 100%;
      font-size: 14px;
      .tableMes{
        min-height: 40px;
        line-height: 40px;
        border-bottom:1px solid #cad2df;
      }
      .time{
        border-left: 1px solid #cad2df;
        border-right: 1px solid #cad2df;
      }
      .acce{
        border-left: 1px solid #cad2df;
        border-right: 1px solid #cad2df;
      }
      .data{
        border-left: 1px solid #cad2df;
        border-right: 1px solid #cad2df;
      }
      .status{
        border-right: 1px solid #cad2df;
      }
    }
    .page_options{
      width: 4%;
      height:25%;
      background: #120076;
      position: fixed;
      right:5vh;
      top:65vh;
      min-height: 208px;
      min-width: 70px;
      border-radius: 5px;
      z-index: 500;
      .list{
        width: 100%;
        height:100%;
        display: flex;
        flex-direction:column;
        li{
          width: 100%;
          height:33.33%;
          line-height: 62px;
          cursor:pointer;
          border-bottom:1px solid white;
          box-sizing: border-box;
          overflow: hidden;
          p{
            height:50%;
            color:white;
            font-weight: bold;
            font-size: 24px;
            margin-top: -8%;
          }
          img{
            margin-top: 24%;
          }
        }
        li:hover{
          background: black;
        }
      }
    }
  }
}
</style>
