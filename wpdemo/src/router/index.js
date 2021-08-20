import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import(/* webpackChunkName: "demo2" */ '@/components/demo2')
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: () => import(/* webpackChunkName: "demo2" */ '@/components/demo3')
    }
  ]
})
