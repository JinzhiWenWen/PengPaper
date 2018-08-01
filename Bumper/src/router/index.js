import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/page'
    },
    {
      path:'/page',
      name:'Page',
      component:resolve=>require(['@/subpage/page'],resolve)
    },
    {
      path:'/release',
      name:'Release',
      component:resolve=>require(['@/subpage/release'],resolve),
      children:[
        {
          path:'/release/data',
          name:'Data',
          component:resolve=>require(['@/subpage/person_data'],resolve)
        },
        {
          path:'/trad',//平台担保交易
          name:'Trad',
          component:resolve=>require(['@/subpage/platform_trading'],resolve)
        }
      ],
      redirect:'/release/data'
    },
    {
      path:'/sginIn',
      name:'SginIn',
      component:resolve=>require(['@/subpage/signIn'],resolve)
    },
    {
      path:'/releasepa',//发布票据
      name:'ReleasePa',
      component:resolve=>require(['@/subpage/release_paper'],resolve)
    },
    {
      path:'/marketpa',//票据市场
      name:'MarketPa',
      component:resolve=>require(['@/subpage/market_paper'],resolve)
    },
    {
      path:'/details',//票据详情
      name:'Details',
      component:resolve=>require(['@/subpage/paper_details'],resolve)
    }
  ]
});
export default router;
