import Vue from 'vue'
import Router from 'vue-router'
import { vueRouter } from '@/router/vue.js'
import { uiRouter } from '@/router/ui.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/vue',
      component: () => import(/* webpackChunkName: "vue" */ '@/VueDemo.vue'),
      children:[
        ...vueRouter // 不是父子关系路由
      ]
    },
    {
      path: '/ui',
      component: () => import(/* webpackChunkName: "vue" */ '@/Ui.vue'),
      children:[
        ...uiRouter
      ]
    }
  ]
})
