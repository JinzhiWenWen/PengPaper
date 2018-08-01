<template lang="html">
  <div class="release">
    <!-- <Header/> -->
    <div class="release_con">
      <div class="release_con_table">
        <el-row>
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>报价管理</span>
                </template>
                <el-menu-item index="1-1"  @click="data()" text-color="#ffd04b">我的数据</el-menu-item>
                <el-menu-item index="1-2">我的报价</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>我的订单</span>
                </template>
                <el-menu-item index="1-1">我卖出的</el-menu-item>
                <el-menu-item index="1-2">我买入的</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </template>
                <el-menu-item index="1-1">企业认证信息</el-menu-item>
                <el-menu-item index="1-2">账户信息</el-menu-item>
                <el-menu-item index="1-3">我的消息</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="release_con_mes">
        <router-view></router-view>
      </div>
    </div>
    <Footer :height="minHeight"/>
  </div>
</template>

<script>
export default {
	data(){
		return {
      minHeight:'50%'
		}
	},
	methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    data(){
      let _this=this;
      _this.$router.push('/release/data')
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

<style lang="scss" scoped>
.release{
  width: 100%;
  height:100%;
  min-width: 1378px;
  .release_con{
    width: 70%;
    height:100%;
    margin-left: 15%;
    display: flex;
    .release_con_table{
      width: 22%;
      height:100%;
      background: white;
    }
    .release_con_mes{
      width: 70%;
      height:100%;
    }
  }
}
</style>
