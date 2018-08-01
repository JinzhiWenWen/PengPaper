<template lang="html">
  <div class="release_paper">
    <!-- <Header/> -->
    <div class="release_paper_con">
      <p class="release_paper_title"><span>票据信息</span></p>
      <div class="release_paper_mes">
        <div class="mes_left">
          <p>票据号码<input type="text" vlaue="" placehoder=""/></p>
          <p>票据金额<input type="text" vlaue="" placehoder=""/></p>
          <p>票据到期日
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            </p>
          <p>承兑人全称<input type="text" vlaue="" placehoder=""/></p>
          <p>是否可签转<input type="text" vlaue="" placehoder=""/></p>
          <p class="amount">期望价格<input type="text" vlaue="" placeholder="年化利率"/>&nbsp;%</p>
          <p class="obtain">
            <button type="button" name="button">保存</button>
            <button type="button" name="button">发布</button>
          </p>
        </div>
        <div class="mes_right">
          <div class="paper_is">
            <span><img src="../../static/img/pic_icon.png" alt="" title="" /></span>
            <span>上传票据正面</span>
            <input type="file" accept="image/jpg" name="" value="">
          </div>
          <div class="paper_the">
            <span><img src="../../static/img/pic_icon.png" alt="" title="" /></span>
            <span>上传票据反面</span>
            <input type="file" accept="image/jpg" name="" value="">
          </div>
        </div>
      </div>
    </div>
    <Footer :height="minHeight"/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      minHeight:'10%',
      value1:null
    }
  },
  components:{
    Header:resolve=>{
      require(['@/components/header-all'],resolve)
    },
    Footer:resolve=>{
      require(['@/components/footer-all'],resolve)
    }
  }
}
</script>

<style lang="scss">
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 205px;
}
.el-input__inner{
  width: 200px;
  height:28px!important;
  border-radius: 0;
}
.el-input__icon{
  line-height: 0;
}
.release_paper{
  width: 100%;
  height:100%;
  min-width: 1920px;
  .release_paper_con{
    width: 70%;
    height:60%;
    margin-left: 15%;
    padding-top:5%;
    .release_paper_title{
      width: 100%;
      border-bottom: 1px solid #999;
      text-align: left;
      span{
        font-size: 16px;
        padding-bottom:.5%;
        font-weight: bold;
        border-bottom: 4px solid #ff462c;
        letter-spacing:2px;
      }
    }
    .release_paper_mes{
      width: 100%;
      height:100%;
      display: flex;
      margin-top: 3%;
      .mes_left{
        width: 70%;
        height:100%;
        p{
          width: 65%;
          text-align: right;
          margin-top: 2%;
          input{
            width: 200px;
            height:24px;
            border:1px solid black;
            font-size: 16px;
            margin-left:2%;
          }
          input::-webkit-input-placeholder{
            font-size: 14px;
            color:#ccc;
          }
        }
        .amount{
          padding-right:8.7%;
          box-sizing: border-box;
          input{
            width: 100px;
          }
        }
        .obtain{
          width: 100%;
          text-align: center;
          margin-top: 10%;
          button{
            width:150px;
            height:40px;
            background: #fc4027;
            color:white;
            font-size: 16px;
            border-radius: 5px;
          }
        }
      }
      .mes_right{
        width: 30%;
        height:100%;
        .paper_is{
          width: 50%;
          height:40%;
          background: #f7f7f7;
          padding-top:13%;
          position: relative;
          img{
            width: 30%;
            height:40%;
          }
          input{
            width: 100%;
            height:100%;
            position: absolute;
            top:0;
            left:0;
            cursor:pointer;
            opacity: 0;
          }
        }
        .paper_the{
          width: 50%;
          height:40%;
          background: #f7f7f7;
          padding-top:13%;
          margin-top: 10%;
          position: relative;
          img{
            width: 30%;
            height:40%;
          }
          input{
            width: 100%;
            height:100%;
            position: absolute;
            top:0;
            left:0;
            cursor:pointer;
            opacity: 0;
          }
        }
      }
    }
  }
}
</style>
