<template lang="html">
  <div class="market_paper">
  <!-- <Header/> -->
  <div class="market_paper_con">
    <p>
      <span>票据类型:</span>
      <span class="checkbox"><input type="checkbox"class="input_check" id="check1" checked="checked"><label for="check1"></label></span>不限
      <span class="checkbox"><input type="checkbox"class="input_check" id="check2"><label for="check2"></label></span>纸银
      <span class="checkbox"><input type="checkbox"class="input_check" id="check3"><label for="check3"></label></span>电银
      <span class="checkbox"><input type="checkbox"class="input_check" id="check4"><label for="check4"></label></span>纸商
      <span class="checkbox"><input type="checkbox"class="input_check" id="check5"><label for="check5"></label></span>电商
    </p>
    <p>
      <span>票据金额:</span>
      <span class="checkbox"><input type="checkbox"class="input_check" id="check6" checked="checked"><label for="check6"></label></span>不限
      <span class="checkbox"><input type="checkbox"class="input_check" id="check7"><label for="check7"></label></span>小于100万
      <span class="checkbox" style="margin-left:1.9%;"><input type="checkbox"class="input_check" id="check8"><label for="check8"></label></span>100万-500万
      <span class="checkbox"><input type="checkbox"class="input_check" id="check9"><label for="check9"></label></span>500万以上
    </p>
    <p>
      <span>到期期限:</span>
      <span class="checkbox"><input type="checkbox"class="input_check" id="check10" checked="checked"><label for="check10"></label></span>不限
      <span class="checkbox"><input type="checkbox"class="input_check" id="check11"><label for="check11"></label></span>小于30天
      <span class="checkbox" style="margin-left:2.6%;"><input type="checkbox"class="input_check" id="check12"><label for="check12"></label></span>1-3个月
      <span class="checkbox" style="margin-left:3.3%;"><input type="checkbox"class="input_check" id="check13"><label for="check13"></label></span>3-6个月
      <span class="checkbox" style="margin-left:3.2%;"><input type="checkbox"class="input_check" id="check14"><label for="check14"></label></span>6个月以上
    </p>
    <div class="market_paper_table_title">
      <el-row>
        <el-col :span="4"><div class="table time">票据类型</div></el-col>
        <el-col :span="3"><div class="table type">兑换方</div></el-col>
        <el-col :span="3"><div class="table acce">金额</div></el-col>
        <el-col :span="3"><div class="table amount">到期日</div></el-col>
        <el-col :span="2"><div class="table data">剩余天数</div></el-col>
        <el-col :span="2"><div class="table status">状态</div></el-col>
        <el-col :span="4"><div class="table status">已有报价数</div></el-col>
        <el-col :span="3"><div class="table status">操作</div></el-col>
      </el-row>
    </div>
    <div class="market_paper_table">
      <el-row v-for="(item,index) in noteList" :key="index">
        <el-col :span="4"><div class="table time">{{item.billType}}</div></el-col>
        <el-col :span="3"><div class="table type">{{item.acceptor}}</div></el-col>
        <el-col :span="3"><div class="table acce">{{item.amount}}</div></el-col>
        <el-col :span="3"><div class="table amount">{{item.maturity}}</div></el-col>
        <el-col :span="2"><div class="table data"></div></el-col>
        <el-col :span="2"><div class="table status">{{item.status}}</div></el-col>
        <el-col :span="4"><div class="table status">0</div></el-col>
        <el-col :span="3"><div class="table status">
          <span style="color:#089e0b;cursor:pointer;" @click="SeeDetails(index)">查看>></span>
          </div></el-col>
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
      noteList:[],
      bill:null
    }
  },
  components:{
    Header:resolve=>{
      require(['@/components/header-all'],resolve)
    },
    Footer:resolve=>{
      require(['@/components/footer-all'],resolve)
    }
  },
  methods:{
    getList(){
      let _this=this;
      _this.axios.get(_this.oUrl+'/bills/getAllBills').then((res)=>{
        console.log(res)
        _this.noteList=res.data;
      })
    },
    SeeDetails(index){
      let bill=this.noteList[index].billNumber;
      this.$router.push({
        name:'Details',
        query:{
          bills:bill
        }
      })
    }
  },
  created(){
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.market_paper{
  width: 100%;
  height:100%;
  .market_paper_con{
    width: 70%;
    height:100%;
    margin-left:15%;
    padding-top:6%;
    p{
      width: 100%;
      text-align: left;
      padding-left:20%;
      margin-bottom: 2%;
      min-width: 1166px;
      position: relative;
      input{
        margin-left: 5%;
      }
      .checkbox{
        position: relative;
        top:2px;
        margin-right: .5%;
        margin-left:5%;
        .input_check{
          position: absolute;
          visibility: hidden;
        }
        .input_check+label{
          display: inline-block;
          width: 13px;
          height: 13px;
          border: 1px solid black;
        }
        .input_check:checked+label:after{
           content: "";
           position: absolute;
           left: 2px;
           bottom: 10px;
           width: 9px;
           height: 4px;
           border: 2px solid black;
           border-top-color: transparent;
           border-right-color: transparent;
           -ms-transform: rotate(-60deg);
           -moz-transform: rotate(-60deg);
           -webkit-transform: rotate(-60deg);
           transform: rotate(-45deg);
        }
      }
    }
    .market_paper_table_title{
      width: 100%;
      height:40px;
      .table{
        min-height: 40px;
        line-height: 40px;
        border:1px solid #cad2df;
      }
    }
    .market_paper_table{
      width: 100%;
      height:42px;
      .table{
        min-height: 42px;
        line-height: 40px;
        border:1px solid #cad2df;
      }
    }
  }
}
</style>
