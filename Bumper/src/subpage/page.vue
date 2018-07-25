<template lang="html">
  <div class="page">
    <Header/>
    <div class="page_con">

    </div>
  </div>
</template>

<script>
// import Header from '@/components/header-all'
export default {
  components:{
    Header:resolve=>{
      require(['@/components/header-all'],resolve)
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height:100%;
  .page_con{
    width: 70%;
    height:100%;
    background: blue;
    margin-left: 15%;
  }
}
</style>
