<!-- 用户报价中的票据 -->
<template lang="html">
  <div class="person_offerIn">
    <el-row>
      <el-col :span="5"><div class="person_offerIn_title">公司名称</div></el-col>
      <el-col :span="4"><div class="person_offerIn_title limit">成交额</div></el-col>
      <el-col :span="5"><div class="person_offerIn_title">剩余天数</div></el-col>
      <el-col :span="5"><div class="person_offerIn_title time">到期日</div></el-col>
      <el-col :span="5"><div class="person_offerIn_title">交易时间</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="5"><div class="person_offerIn_mes">恒大广州集团</div></el-col>
      <el-col :span="4"><div class="person_offerIn_mes limit">100W</div></el-col>
      <el-col :span="5"><div class="person_offerIn_mes">5天</div></el-col>
      <el-col :span="5"><div class="person_offerIn_mes time">2018-07-30</div></el-col>
      <el-col :span="5"><div class="person_offerIn_mes tradTime">
        <span>2018-07-22</span>
        <span>00:00:00</span>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.person_offerIn{
  width: 100%;
  height:100%;
  border:1px solid #ccc;
  border-bottom:0;
  margin-top: 4%;
  .person_offerIn_title{
    min-height: 36px;
    line-height: 36px;
    background: #ebebeb;
    border-bottom:1px solid #ccc;
  }
  .limit{
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
  }
  .time{
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
  }
  .person_offerIn_mes{
    min-height: 70px;
    line-height: 70px;
    border-bottom:1px solid #ccc;
    font-size: 14px;
  }
  .tradTime{
    line-height: 0;
    display: flex;
    flex-direction: column;
    span{
      width: 100%;
      height:35px;
      line-height: 45px;
      font-size: 12px;
    }
    span:nth-child(2){
      line-height: 25px;
    }
  }
}
</style>
