<template lang="html">
  <div class="release_paper_rapid">
    <div class="fill_mes">
      <ul class="tit">
        <li>票据类型</li>
        <li>票据正面</li>
        <li>票据反面</li>
        <li>手机号</li>
        <li>短信验证码</li>
      </ul>
      <ul class="alt">
        <li>
          <select class="" name="">
            <option value="">纸银</option>
            <option value="">电银</option>
          </select>
        </li>
        <li class="Is">
          <input type="file" accept="image/jpg" name="" value="">
        </li>
        <li class="The">
          <input type="file" accept="image/jpg" name="" value="">
        </li>
        <li style="margin-top:5%;">
          <input type="text" name="" value="">
        </li>
        <li style="margin-top:6%;">
          <input type="text" name="" value="">
          <span>获取验证码</span>
        </li>
      </ul>
    </div>
    <p class="release_rapid">
      <button type="button" name="button">发布</button>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.release_paper_rapid{
  width: 100%;
  height:100%;
  font-size: 15px;
  padding-top:6%;
  min-width: 900px;
  .fill_mes{
    width: 100%;
    display: flex;
    .tit{
      width: 50%;
      text-align: left;
      li{
        padding-left:70%;
        margin-bottom: 8%;
      }
      li:nth-child(3){
        margin-top: 33%;
      }
      li:nth-child(4){
        margin-top: 33%;
      }
    }
    .alt{
      width: 50%;
      text-align: left;
      li{
        select{
          width: 40%;
          outline: none;
          min-height: 24px;
        }
        input{
          width: 40%;
          border:1px solid #ccc;
          min-height: 22px;
          font-size: 15px;
        }
      }
      li:last-child{
        position: relative;
        input{
          width: 25%;
        }
        span{
          width: 14%;
          padding-left:.5%;
          box-sizing: border-box;
          font-size: 12px;
          background:linear-gradient(180deg,rgba(255,120,83,1),rgba(255,67,41,1));
          min-height: 24px;
          line-height: 24px;
          margin-top: -1%!important;
          border-radius:3px;
          color:white;
          cursor:pointer;
          position: absolute;
          right:60%;
          top:20%;
        }
      }
      .Is{
        width: 150px;
        height:150px;
        background-color: #ccc;
        margin-top: 7%;
        input{
          width: 100%;
          height:100%;
          cursor:pointer;
          opacity: 0;
        }
      }
      .The{
        width: 150px;
        height:150px;
        background-color: #ccc;
        margin-top: 5%;
        input{
          width: 100%;
          height:100%;
          cursor:pointer;
          opacity: 0;
        }
      }
    }
  }
  .release_rapid{
    button{
      min-width: 36%;
      min-height: 34px;
      background:linear-gradient(180deg,rgba(255,121,86,1),rgba(254,68,43,1));
      color:white;
      border-radius: 8px;
      margin-left: 5%;
    }
  }
}
</style>
