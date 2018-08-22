<template lang="html">
  <div class="page" ref="page">
    <Swiper/>
    <div class="page_con">
      <router-link to="/release" tag="p" class="page_release">急速发票</router-link>
      <div class="page_title_f">          <!--票据行情标题 -->
        <img src="../../static/img/page_title1.png" alt="">
      </div>
      <div class="page_options">
        <ul class="list">
          <li @mouseenter="Be()" @mouseleave="Af()">
            <img src="../../static/img/calculatorBe.png" ref="CaBe" class="Be" alt="" style="width:50%;height:50%;margin-right:25%;" >
            <img src="../../static/img/calculator.png" ref="CaAf" title="" class="Af" alt="" style="width:50%;height:50%;display:none;" />
          </li>
          <li><p>法&nbsp;务</p><p>咨&nbsp;询</p></li>
          <li @click="backTop()"><p>回&nbsp;到</p><p>顶&nbsp;部</p></li>
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
        <el-row v-for="(item,index) in roteList" :key="index" class="page_mark_title">
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
      <p class="page_opera_one">
        <router-link to="/marketpa" tag="button">查看更多>></router-link>
        </p>
      <div class="page_title_l">      <!--实时利率标题 -->
        <img src="../../static/img/page_title2.png" alt="">
        </div>
      <div class="page_table">
        <el-row>
          <el-col :span="4"><div class="table time">票据类型</div></el-col>
          <el-col :span="4"><div class="table type">承兑方</div></el-col>
          <el-col :span="4"><div class="table acce">金额</div></el-col>
          <el-col :span="4"><div class="table amount">利率</div></el-col>
          <el-col :span="4"><div class="table data">联系人</div></el-col>
          <el-col :span="4"><div class="table status">状态</div></el-col>
        </el-row>
      </div>
      <div class="page_table_mes">
        <el-row v-for="(item,index) in roteListLimit" :key="index" class="page_mark_title">
          <el-col :span="4"><div class="tableMes time">
            <span style="color:#ff823f;" v-show="item.type=='1'">银票</span>
            <span style="color:#3d83c8;" v-show="item.type=='2'">商票</span>
          </div></el-col>
          <el-col :span="4"><div class="tableMes type">
            <span v-show="item.other=='1'">国有</span>
            <span v-show="item.other=='2'">私有</span>
          </div></el-col>
          <el-col :span="4"><div class="tableMes acce">{{item.amount}}</div></el-col>
          <el-col :span="4"><div class="tableMes amount">{{item.amount}}</div></el-col>
          <el-col :span="4"><div class="tableMes data">{{item.limit}}%</div></el-col>
          <el-col :span="4"><div class="tableMes status">
            <button type="button" name="button">收票中</button>
          </div></el-col>
        </el-row>
      </div>
      <p class="page_opera_one">
        <router-link to="/resources" tag="button">查看更多>></router-link>
        </p>
       <div class="page_title_In"> <!--流程介绍标题 -->
        <img src="../../static/img/page_title3.png" alt="">
      </div>
      <div class="page_alt_In"> <!--流程介绍详情 -->
       <img src="../../static/img/page_alt1.png" alt="">
      </div>
     <div class="page_alt_Ad"> <!--平台优势 -->
      <img src="../../static/img/page_alt2.png" alt="">
        </div>
      <div class="page_alt_De"> <!--优势详情 -->
       <img src="../../static/img/page_alt3.png" alt="">
     </div>
    </div>
    <Footer :height="minHeight"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      minHeight:'147.8%',
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
      ],
      roteListLimit:[
        {
          type:1,     //1为银票，2为商票
          other:1,   //1为国有，2为私有
          amount:'100-500万',
          limit:'1.98',
          status:'已成交'
        },
        {
          time:'2018-06-12',
          type:1,     //1为银票，2为商票
          other:2,
          amount:'100-500万',
          limit:'9.66',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:2,     //1为银票，2为商票
          other:2,
          amount:'100-500万',
          limit:'6.64',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:1,     //1为银票，2为商票
          other:1,
          amount:'100-500万',
          limit:'7.01',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:2,     //1为银票，2为商票
          other:2,
          amount:'100-500万',
          limit:'6.22',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:1,     //1为银票，2为商票
          other:2,
          amount:'100-500万',
          limit:'5.65',
          status:'已成交'
        },
        {
          time:'2018-06-12',
          type:1,     //1为银票，2为商票
          other:2,
          amount:'100-500万',
          limit:'6.12',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:2,     //1为银票，2为商票
          other:2,
          amount:'100-500万',
          limit:'8.06',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:1,     //1为银票，2为商票
          other:1,
          amount:'100-500万',
          limit:'5.5',
          status:'已成交'
        },
        {
          time:'2018-07-23',
          type:2,     //1为银票，2为商票
          other:1,
          amount:'100-500万',
          limit:'4.05',
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
  },
  methods:{
    Be(){
      let _this=this;
      _this.$refs.CaBe.style.display='none';
      _this.$refs.CaAf.style.display='block';
    },
    Af(){
      let _this=this;
      _this.$refs.CaBe.style.display='block';
      _this.$refs.CaAf.style.display='none';
    },
    backTop(){
      document.documentElement.scrollTop-=150;
      if (document.documentElement.scrollTop>0) {
        var c=setTimeout(()=>this.backTop(150),16);
      }else {
        clearTimeout(c);
      }
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
    margin:0 auto;
    position:relative;
    z-index: 5;
    .page_release{
      width: 15%;
      height:10%;
      min-height: 86px;
      background: #f45643;
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
      height:28%;
      min-height: 276px;
      img{
        width: 100%;
        height:100%;
      }
    }
    .page_table{
      width: 100%;
      .table{
        min-height: 40px;
        background: #f45643;
        text-align: center;
        line-height: 40px;
        color:white;
      }
    }
    .page_table_mes{
      width: 100%;
      font-size: 14px;
      .page_mark_title:nth-of-type(even){
        background:#f7f7f7;
      }
      .page_mark_title:hover{
        background: #fffbee;
      }
      .tableMes{
        min-height: 40px;
        line-height: 40px;
      }
      .status{
        button{
          width: 40%;
          min-height: 28px;
          border-radius:8px;
          background: #ff6600;
          color:white;
        }
      }
    }
    .page_opera_one{
      width: 100%;
      height:3.5%;
      margin-top:28px;
      min-height: 33px;
      button{
        width: 11%;
        height:100%;
        background: #ff6600;
        border-radius: 18px;
        color:white;
      }
    }
    .page_title_l{
      width: 100%;
      height:276px;
      min-height: 220px;
      margin-top:10px;
      img{
        width: 100%;
        height:100%;
      }
    }
    .page_title_In{
      width: 100%;
      height:300px;
      min-height: 300px;
      img{
        width: 100%;
        height:100%;
      }
    }
    .page_alt_In{
      width: 150%;
      height:688px;
      margin-left:-22%;
      img{
        width: 100%;
        height:100%;
      }
    }
    .page_alt_Ad{
      width: 150%;
      height:740px;
      margin-left:-22%;
      img{
        width: 100%;
        height:100%;
      }
    }
    .page_alt_De{
      width: 150%;
      margin-left: -22%;
      height:540px;
      img{
        width: 100%;
        height:100%;
      }
    }
    .page_options{
      width: 4%;
      height:25%;
      background: #f7f7f7;
      position: fixed;
      right:5vh;
      top:40vh;
      min-height: 208px;
      min-width: 70px;
      z-index:20;
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
            color:#ff4200;
            font-weight: bold;
            font-size: 24px;
            margin-top: -11%;
          }
          img{
            margin-top: 24%;
            margin-left:25%;
          }
        }
        li:hover{
          background: #ff4200;
          p{
            color:white;
          }
        }
      }
    }
  }
}
</style>
