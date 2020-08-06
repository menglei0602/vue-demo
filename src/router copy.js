import Vue from 'vue'
import Router from 'vue-router'
import DynamicRouting from './views/user/DynamicRouting.vue'
import User from './views/user/User.vue'
import UserHome from './views/user/UserHome.vue'
import UserPosts from './views/user/UserPosts.vue'
import UserProfile from './views/user/UserProfile.vue'
import RouteParamsId from './views/RouteParamsId.vue'
import Less from './views/less/Less.vue'
import Vmodel from './views/vmodel/Index.vue'
import Modal from './components/modal/edit/Index1.vue'
import Render from '@/views/render/Index.vue'
import Slot from './views/slot/A.vue'
import Prop from './views/prop/Father.vue'
import Save from './views/stateSave/Save.vue'
import SaveDefault from './views/stateSave/SaveDefault.vue'
import SaveFirst from './views/stateSave/SaveFirst.vue'
import SaveSecond from './views/stateSave/SaveSecond.vue'
import SaveSecondDetail from './views/stateSave/SaveSecondDetail.vue'
import Img from './views/img/Img.vue'
import Validator from './views/validator/ValidatorIndex.vue'
import ComponentCommunication from './views/componentCommunication/Index.vue'
import ComponentCommunicationFirst from './views/componentCommunication/first/Index.vue'
import ComponentCommunicationSecond from './views/componentCommunication/second/Index.vue'
import ComponentCommunicationThird from './views/componentCommunication/third/Index.vue'
import ComponentCommunicationFourth from './views/componentCommunication/fourth/Index.vue'
import ComponentCommunicationFifth1 from './views/componentCommunication/fifth-1/Index.vue'
import ComponentCommunicationFifth2 from './views/componentCommunication/fifth-2/Index.vue'
import ComponentCommunicationSixth from './views/componentCommunication/sixth/Index.vue'
import Lifecycle from './views/lifecycle/Index.vue'
import Es6Proxy from './views/es6/proxy/Es6Index.vue'
import NavGuardA from './views/navGuard/A.vue'
import NavGuardB from './views/navGuard/B.vue'
import MultiRoute from './views/multiRoute/Index.vue'
import MultiRouteHelloWorld from './views/multiRoute/HelloWorld.vue'
import MultiRouteH1 from './views/multiRoute/H1.vue'
import MultiRouteH2 from './views/multiRoute/H2.vue'

import Other from './views/other/Index.vue'
import notFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 嵌套路由
    {
      path: '/user/:id',
      component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        {
          path: '',
          component: UserHome
        },

        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        {
          path: 'profile',
          component: UserProfile
        },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        {
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    // this.$router
    {
      path: '/dynamicRouting/:id',
      component: DynamicRouting
    },
    {
      path: '/routeParamsId/:id',
      component: RouteParamsId
    },
    {
      path: '/less',
      component: Less
    },
    {
      path: '/vmodel',
      component: Vmodel
    },
    {
      path: '/modal',
      component: Modal
    },
    {
      path: '/render',
      component: Render
    },
    {
      path: '/slot',
      component: Slot
    },
    {
      path: '/prop',
      component: Prop
    },
    {
      path: '/state-save',
      component: Save,
      children: [
        {
          path: '',
          component: SaveDefault
          // meta:{keepAlive: false} //缓存第2种方式
        },
        {
          path: 'first',
          component: SaveFirst
          // meta:{keepAlive: true} //缓存第2种方式
        },
        {
          path: 'second',
          component: SaveSecond,
          children: [
            {
              path: 'detail',
              component: SaveSecondDetail
            }
          ]
        }
      ]
    },
    {
      path: '/img',
      component: Img
    },
    {
      path: '/validator',
      component: Validator
    },
    {
      path: '/componentCommunication',
      component: ComponentCommunication,
      children: [
        {
          path: 'first',
          component: ComponentCommunicationFirst
        },
        {
          path: 'second',
          component: ComponentCommunicationSecond
        },
        {
          path: 'third',
          component: ComponentCommunicationThird
        },
        {
          path: 'fourth',
          component: ComponentCommunicationFourth
        },
        {
          path: 'fifth1',
          component: ComponentCommunicationFifth1
        },
        {
          path: 'fifth2',
          component: ComponentCommunicationFifth2
        },
        {
          path: 'sixth',
          component: ComponentCommunicationSixth
        }
      ]
    },
    {
      path: '/lifecycle',
      component: Lifecycle
    },
    {
      path: '/es6Proxy',
      name: Es6Proxy,
      component: Es6Proxy
    },
    {
      path: '/navGuardA',
      name: NavGuardA,
      component: NavGuardA
    },
    {
      path: '/navGuardB',
      name: NavGuardB,
      component: NavGuardB
    },
    {
      path: '/multiRoute/:id',
      component: MultiRoute,
      children: [
        {
          path: 'h1',
          name: 'MultiRouteH1',
          components: {
            default: MultiRouteHelloWorld,
            left: MultiRouteH1, // 显示H1组件内容'I am H1 page,Welcome to H1'
            right: MultiRouteH2// 显示H2组件内容'I am H2 page,Welcome to H2'
          }
        },
        {
          path: 'h2',
          name: 'MultiRouteH2',
          components: {
            default: MultiRouteHelloWorld,
            left: MultiRouteH2, // 显示H2组件内容
            right: MultiRouteH1// 显示H1组件内容
          }
        }
      ]
    },
    {
      // 会匹配所有路径
      path: '/other',
      component: Other
    },
    {
      // 会匹配所有路径
      path: '*',
      component: notFound
    }
  ]
})
