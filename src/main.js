// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
window.jquery = window.$ = jquery
import ElementUI from 'element-ui'
//import LayUI from 'layui-layer'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
//Vue.prototype.$ = jquery

Vue.config.productionTip = false
Vue.use(ElementUI,router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
