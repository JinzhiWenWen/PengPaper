<template lang="html">
  <div class="person_data">
    <div class="person_data_process">
      <img src="../../static/img/process.png" alt="">
    </div>
    <p class="person_data_company">
      <span>企业信息</span>
    </p>
    <div class="company_mes">
      <p style="">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;公司名称&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value="" /></span>
      </p>
      <p class="">
        <span>联系人姓名&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value=""/></span>
      </p>
      <p class="">
        <span>联系人电话&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value=""/></span>
      </p>
      <p class="">
        <span>联系人邮箱&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value=""/></span>
      </p>
    </div>
    <p class="person_data_company">
      <span>上传营业执照</span>
    </p>
    <div class="company_license">
      <div class="reprod">
        <img src="../../static/img/pic_icon.png" alt="">
        <p>点击上传营业执照</p>
        <input type="file" name="" accept="image/jpg" value="" @change="upLoadBusiness">
        <img src="../../static/img/page_alt1.png" alt=""  class="showPic"  ref="Business">
      </div>
    </div>
    <p class="person_data_company">
      <span>对公银行账户</span>
      </p>
    <div class="company_mes">
      <p>
        <span>账户名称&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value=""/></span>
        </p>
      <p class="">
        <span>开户地址&nbsp;&nbsp;&nbsp;&nbsp;
          <select>
            <option value ="volvo">海绵宝宝</option>
            <option value ="saab">派大星</option>
            <option value="opel">章鱼哥</option>
            <option value="audi">蟹老板</option>
          </select>
        </span>
      </p>
      <p class="">
        <span>开户银行&nbsp;&nbsp;&nbsp;&nbsp;
          <select>
            <option value ="volvo">海绵宝宝</option>
            <option value ="saab">派大星</option>
            <option value="opel">章鱼哥</option>
            <option value="audi">蟹老板</option>
          </select>
        </span>
      </p>
      <p class="">
        <span>开户支行&nbsp;&nbsp;&nbsp;&nbsp;
          <select>
            <option value ="volvo">海绵宝宝</option>
            <option value ="saab">派大星</option>
            <option value="opel">章鱼哥</option>
            <option value="audi">蟹老板</option>
            <option value="audi">苏珊</option>
          </select>
        </span>
      </p>
      <p class="">
        <span>银行账号&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value=""/></span>
      </p>
    </div>
    <p class="person_data_company">
      <span>设置联系QQ</span>
      </p>
    <div class="company_mes">
      <p>
        <span>请输入QQ号码&nbsp;&nbsp;<input type="text" value=""/></span>
      </p>
    </div>
    <p class="saveMes">
      <button type="button" name="button">确认</button>
      </p>
  </div>
</template>

<script>
export default {
  methods:{
    upLoadBusiness(e){
      let _this=this;
      if (e.target.files[0]) {
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function() {
        img.src = this.result
      }
      let img = new Image,
        width = 1024, //image resize   压缩后的宽
        quality = 0.8, //image quality  压缩质量
        canvas = document.createElement("canvas"),
        drawer = canvas.getContext("2d");
        img.onload = function() {
          canvas.width = width;
          canvas.height = width * (img.height / img.width);
          drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
          let base64 = canvas.toDataURL("image/jpeg", quality); //压缩后的base64图片
          _this.$refs.Business.src=base64;
          window.localStorage.setItem('Business',base64);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.person_data{
  width: 100%;
  height:100%;
  .person_data_process{
    width: 100%;
    height:25%;
    img{
      width: 100%;
      height:100%;
    }
  }
  .person_data_company{
    width: 82%;
    border-bottom:1px solid #999;
    margin-left: 18%;
    text-align: left;
    span{
      padding-bottom:1%;
      border-bottom: 4px solid #FF452C;
      font-weight: bold;
      font-size: 16px;
      color:#FF452C;
      letter-spacing:2px;
    }
  }
  .company_mes{
    width: 82%;
    height:auto;
    padding-top:7%;
    padding-bottom:7%;
    margin-left: 18%;
    text-align: center;
    p{
      width: 100%;
      text-align: center;
      color:#333333;
      margin-bottom: 2%;
      input{
        border:1px solid #979797;
        height:24px;
        width: 260px;
      }
      select{
        border:1px solid #979797;
        height:30px;
        width: 260px;
        margin-left:-2%;
      }
    }
  }
  .company_license{
    width: 82%;
    margin-left: 18%;
    height:378px;
    text-align: center;
    position: relative;
    .reprod{
      width: 60%;
      height:75%;
      min-width: 390px;
      position: absolute;
      left:50%;
      margin-left: -30%;
      top:55%;
      margin-top:-18%;
      border:1px solid #ccc;
      line-height: 210px;
      .showPic{
        width: 100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
      }
      img{
        width: 20%;
        height:25%;
        position: absolute;
        top:25%;
        left:40%;
      }
      p{
        position: absolute;
        top:30%;
        left:36%;
        color:#999;
      }
      input{
        width: 100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background: red;
        cursor:pointer;
        opacity: 0;
        z-index: 1;
      }
    }
  }
  .saveMes{
    width: 82%;
    height:28px;
    margin-left: 18%;
    text-align: center;
    margin-bottom:5%;;
    button{
      width: 60%;
      height:100%;
      background: #FF452C;
      font-size: 14px;
      color:white;
      border-radius: 5px;
    }
  }
}
</style>
