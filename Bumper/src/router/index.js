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
        }
      ],
      redirect:'/release/data'
    }
  ]
});
export default router;
