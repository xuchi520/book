import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../pages/Home.vue'),
      meta:{keepAlive:true} // 缓存 this.$route.meta.keepAlive
    },
    {
      path: '/list',
      name: 'list',
      component: ()=>import('../pages/List.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: ()=>import('../pages/Add.vue'),
    },
    {
      path: '/detail/:ids',
      name: 'detail',
      component: ()=>import('../pages/Detail.vue'),
    },
    {
      path: '/collect',
      name: 'collect',
      component: ()=>import('../pages/Collect.vue')
    }
  ]
})
