<!-- 求贴意向 -->
<template lang="html">
  <div class="person_intention">
    <div class="person_intention_pic">
      <img src="../../static/img/intention.png" alt="">
    </div>
    <div class="person_intention_con">
      <div class="person_intention_title_external">
        <div class="person_intention_title">
          <el-row>
            <el-col :span="5">
              <router-link to="/release/intention/all"
              tag="div" class="intention_title"
              @click.native="intentionAll()"
              :class="{intentionAc:color==1}"
              >全部报价
              <span class="person_intention_add"></span>
              <span class="person_intention_triangle"></span>
            </router-link>
            </el-col>
            <el-col :span="5">
              <router-link to="/release/intention/confirmed"
              tag="div" class="intention_title confirmed"
              @click.native="intentionConFirmed()"
              :class="{intentionAc:color==2}"
              >待买家确认
              <span class="person_intention_add"></span>
              <span class="person_intention_triangle"></span>
            </router-link>
            </el-col>
            <el-col :span="5">
              <router-link to="/release/intention/haveBeen"
              tag="div" class="intention_title"
              @click.native="intentionHaveBeen()"
              :class="{intentionAc:color==3}"
              >买家已确认
              <span class="person_intention_add"></span>
              <span class="person_intention_triangle"></span>
            </router-link>
            </el-col>
            <el-col :span="5">
              <router-link to="/release/intention/refused"
              tag="div" class="intention_title rejected"
              @click.native="IntentionRefused()"
              :class="{intentionAc:color==4}"
              >买家已拒绝
              <span class="person_intention_add"></span>
              <span class="person_intention_triangle" ref="person_intention_triangle_c"></span>
            </router-link>
            </el-col>
            <el-col :span="4">
              <router-link to="/release/intention/audit"
              tag="div" class="intention_title"
              @click.native="IntentionAudit()"
              :class="{intentionAc:color==5}"
              >审核中
              <span class="person_intention_add"></span>
              <span class="person_intention_triangle" ref="person_intention_triangle_s"></span>
            </router-link>
            </el-col>
          </el-row>
        </div>
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
      this.$refs.person_intention_triangle_c.style.top='-134.5%';
      this.$refs.person_intention_triangle_c.style.right='-11%'
    },
    IntentionAudit(){
      this.color=5;
      this.$refs.person_intention_triangle_s.style.right='-13.5%'
    }
  }
}
</script>

<style lang="scss" scoped>
.intentionAc{
  background: #F15749;
  color:white;
  .person_intention_add{
    width: 100%;
    height:14px;
    background: #F15749;
    position: absolute;
    top:-40%;
    left:0;
  }
  .person_intention_triangle{
    width:0;
    height:0;
    border-width:0 10px 10px;
    border-style:solid;
    border-color:transparent transparent #AF2600;
    margin:40px auto;
    position: absolute;
    top:-134%;
    right:-10.5%;
    transform:rotate(-135deg);
  }
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
    min-height: 500px;
    .person_intention_title_external{
      width: 100%;
      height:50px;
      position: relative;
      .person_intention_title{
        position: absolute;
        bottom:0;
        width: 65%;
        border-bottom:1px solid #ccc;
        .intention_title{
          min-height: 36px;
          line-height: 36px;
          cursor:pointer;
          position: relative;
        }
      }
    }
  }
}
</style>
