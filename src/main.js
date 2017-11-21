import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from 'router/index'
import store from './store'
import Vuelazyload from 'vue-lazyload'

import 'common/stylus/main.styl'

fastclick.attach(document.body)

Vue.use(Vuelazyload, {
  loading: require('common/image/default.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
