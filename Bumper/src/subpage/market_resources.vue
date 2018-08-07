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
        <el-row>
          <el-col :span="4"><div class="market_resources_mes">电银</div></el-col>
          <el-col :span="4"><div class="market_resources_mes acceptance">国有</div></el-col>
          <el-col :span="4"><div class="market_resources_mes">100万-500万</div></el-col>
          <el-col :span="4"><div class="market_resources_mes rate">4.05%</div></el-col>
          <el-col :span="2"><div class="market_resources_mes">赵经理</div></el-col>
          <el-col :span="3"><div class="market_resources_mes status">收票中</div></el-col>
          <el-col :span="3"><div class="market_resources_mes">
            <button type="button" name="button">我要贴</button>
          </div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      border:1px solid #ccc;
      border-bottom:0;
      margin-top:3%;
      .market_resources_title{
        min-height: 40px;
        line-height: 40px;
        border-bottom:1px solid #ccc;
      }
      .acceptance{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .rate{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .status{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .market_resources_mes{
        min-height: 60px;
        line-height: 60px;
        border-bottom:1px solid #ccc;
        font-size: 14px;
        button{
          min-width:74px;
          min-height: 30px;
          background: white;
          border-radius:5px;
          border:1px solid #666;
        }
      }
    }
  }
}
</style>
