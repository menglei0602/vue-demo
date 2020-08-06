import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import common from '@/util/common.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


Vue.use(iView)
Vue.use(Antd)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.common = common

router.beforeEach((to, from, next) => {
  next()
})

Vue.prototype.$Event = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
