<!-- 求贴意向 -->
<template lang="html">
  <div class="person_intention">
    <div class="person_intention_pic">
      <img src="../../static/img/intention.png" alt="">
    </div>
    <div class="person_intention_con">
      <div class="person_intention_title">
        <el-row>

          <el-col :span="5">
            <router-link to="/release/intention/all"
            tag="div" class="intention_title"
            @click.native="intentionAll()"
            :class="{intentionAc:color==1}"
            >全部报价</router-link>
          </el-col>
          <el-col :span="5">
            <router-link to="/release/intention/confirmed"
            tag="div" class="intention_title confirmed"
            @click.native="intentionConFirmed()"
            :class="{intentionAc:color==2}"
            >待买家确认</router-link>
          </el-col>
          <el-col :span="5">
            <router-link to="/release/intention/haveBeen"
            tag="div" class="intention_title"
            @click.native="intentionHaveBeen()"
            :class="{intentionAc:color==3}"
            >买家已确认</router-link>
          </el-col>
          <el-col :span="5">
            <router-link to="/release/intention/refused"
            tag="div" class="intention_title rejected"
            @click.native="IntentionRefused()"
            :class="{intentionAc:color==4}"
            >买家已拒绝</router-link>
          </el-col>
          <el-col :span="4">
            <router-link to="/release/intention/audit"
            tag="div" class="intention_title"
            @click.native="IntentionAudit()"
            :class="{intentionAc:color==5}"
            >审核中</router-link>
          </el-col>
        </el-row>
      </div>
      <div class="person_intention_view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      color:1
    }
  },
  methods:{
    intentionAll(){
      this.color=1;
    },
    intentionConFirmed(){
      this.color=2;
    },
    intentionHaveBeen(){
      this.color=3;
    },
    IntentionRefused(){
      this.color=4;
    },
    IntentionAudit(){
      this.color=5;
    }
  }
}
</script>

<style lang="scss" scoped>
.intentionAc{
  background: linear-gradient(180deg,rgba(255,120,83,1),rgba(255,67,41,1));
  color:white;
}
.person_intention{
  width: 100%;
  height:100%;
  .person_intention_pic{
    width: 100%;
    height:8%;
    margin-top: 5%;
    text-align: left;
    padding-left:8%;
    img{
      width:75%;
      height:80%;
    }
  }
  .person_intention_con{
    width: 96%;
    margin-left:4%;
    margin-top:3%;
    .person_intention_title{
      width: 65%;
      border:1px solid #ccc;
      .intention_title{
        min-height: 32px;
        line-height: 32px;
        cursor:pointer;
      }
      .confirmed{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
      .rejected{
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
      }
    }

  }
}
</style>
