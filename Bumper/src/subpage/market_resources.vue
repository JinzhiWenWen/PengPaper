<template lang="html">
  <div class="market_resources">
    <div class="market_resources_con">
      <p class="resources_title">
        <span>批量收票请去我的报价</span><br>
        <span>模版发布收票价格</span>
      </p>
      <div class="market_resources_list">
        <el-row>
          <el-col :span="4"><div class="market_resources_title">票据类型</div></el-col>
          <el-col :span="4"><div class="market_resources_title acceptance">承兑方</div></el-col>
          <el-col :span="4"><div class="market_resources_title">金额</div></el-col>
          <el-col :span="4"><div class="market_resources_title rate">利率</div></el-col>
          <el-col :span="2"><div class="market_resources_title">联系人</div></el-col>
          <el-col :span="3"><div class="market_resources_title status">状态</div></el-col>
          <el-col :span="3"><div class="market_resources_title">操作</div></el-col>
        </el-row>
        <el-row class="market_resources_box" v-for="(item,index) in noteList" :key="index" ref="market_resources_box">
          <el-col :span="4"><div class="market_resources_mes">{{item.billType}}</div></el-col>
          <el-col :span="4"><div class="market_resources_mes acceptance">{{item.other}}</div></el-col>
          <el-col :span="4"><div class="market_resources_mes">{{item.amount}}万</div></el-col>
          <el-col :span="4"><div class="market_resources_mes rate">{{item.limit}}%</div></el-col>
          <el-col :span="2"><div class="market_resources_mes">{{item.people}}</div></el-col>
          <el-col :span="3"><div class="market_resources_mes status">
            <span v-show="item.status=='1'">已成交</span>
            <span v-show="item.status=='2'">收票中</span>
          </div></el-col>
          <el-col :span="3"><div class="market_resources_mes opera">
            <button type="button" name="button"
            @click="showTurn(index)" ref="showTurn"
            >我要贴</button>
            <button type="button" name="button"
            @click="hideTurn(index)" ref="hideTurn"
            >我要贴</button>
          </div></el-col>
          <p ref="ads">123</p>
        </el-row>
      </div>
      <!-- <div class="market_resources_listB">
          <el-row>
            <el-col :span="4"><div class="resourcesListB">国股</div></el-col>
            <el-col :span="5"><div class="resourcesListB much">10W-49.9W</div></el-col>
            <el-col :span="5"><div class="resourcesListB">12.28后到期加0.10</div></el-col>
            <el-col :span="5"><div class="resourcesListB unknow">4.25+40</div></el-col>
            <el-col :span="5"><div class="resourcesListB opera">
              <button type="button" name="button" @click="bb()">找TA贴现</button>
            </div></el-col>
          </el-row>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showS:true,
      showH:false,
      noteList:[
        {
          billType:'电银',
          other:'国有',
          amount:'100-500',
          limit:'4.05',
          people:'赵经理',
          status:1    //1为已成交,2为收票中
        },
        {
          billType:'电银',
          other:'国有',
          amount:'100-500',
          limit:'4.05',
          people:'赵经理',
          status:2
        },
        {
          billType:'电银',
          other:'国有',
          amount:'100-500',
          limit:'4.05',
          people:'赵经理',
          status:1
        },
        {
          billType:'电银',
          other:'国有',
          amount:'100-500',
          limit:'4.05',
          people:'赵经理',
          status:1
        }
      ]
    }
  },
  methods:{
    showTurn(index){
      let _this=this;
      for(let v in _this.$refs.market_resources_box){
        if(_this.$refs.market_resources_box[v].$el.style.height=='200px'){
          _this.$refs.market_resources_box[v].$el.style.height='40px';
        }
      }
      for(let x in _this.$refs.hideTurn){
        _this.$refs.hideTurn[x].style.display='none';
      }
      for(let x in _this.$refs.showTurn){
        _this.$refs.showTurn[x].style.display='block';
      }
      _this.$refs.market_resources_box[index].$el.style.height='200px';
      _this.$refs.showTurn[index].style.display='none';
      _this.$refs.hideTurn[index].style.display='block';
      _this.$refs.ads[index].style.opacity='1'
    },
    hideTurn(index){
      let _this=this;
      _this.$refs.market_resources_box[index].$el.style.height='40px';
      _this.$refs.showTurn[index].style.display='block';
      _this.$refs.hideTurn[index].style.display='none';
      _this.$refs.ads[index].style.opacity='0'
    },
    // getList(){
    //   let _this=this;
    //   _this.axios.get(this.oUrl+'').then((res)=>{
    //
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.market_resources{
  width: 100%;
  height:100%;
  min-width: 1376px;
  .market_resources_con{
    width: 70%;
    margin:0 auto;
    height:100%;
    padding-top:3%;
    .resources_title{
      width: 15%;
      min-height: 70px;
      background-color: rgba(255,71,46,1);
      color:white;
      border-radius:8px;
      cursor:pointer;
      font-size: 15px;
      padding-top:1.2%;
      box-sizing: border-box;
      min-width: 180px;
      margin-left: 70%;
    }
    .market_resources_list{
      width: 75%;
      margin:0 auto;
      margin-top:3%;
      .market_resources_box{
        transition: all .5s;
        position: relative;
        overflow: hidden;
        p{
          position: absolute;
          top:40px;
          opacity: 0;
          transition: all .5s;
        }
      }
      .market_resources_box:nth-of-type(even){
        background: #f7f7f7;
      }
      .market_resources_title{
        min-height: 40px;
        line-height: 40px;
        background: #f45643;
        color:white;
      }
      .market_resources_mes{
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        button{
          min-width:74px;
          min-height: 30px;
          background: linear-gradient(180deg,rgba(255,125,91,1),rgba(255,71,46,1));;
          border-radius:5px;
          color:white;
        }
      }
      .opera{
        position: relative;
        button{
          position: absolute;
          left:50%;
          margin-left:-37px;
          top:12%;
        }
      }
    }
    .market_resources_listB{
      width: 75%;
      margin:0 auto;
      border:1px solid #ccc;
      border-bottom:0;
      margin-top: 10%;
      .resourcesListB{
        min-height: 40px;
        line-height: 40px;
        border-bottom:1px solid #ccc;
      }
      .much{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .unknow{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .opera{
        button{
          width: 80px;
          height:28px;
          border-radius:5px;
          background: linear-gradient(180deg,rgba(255,125,91,1),rgba(255,71,46,1));
          color:white;
        }
      }
    }
  }
}
</style>
