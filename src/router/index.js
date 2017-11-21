import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import MyFavor from 'components/my-favor/my-favor'
import Record from 'components/record/record'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/myFavor',
      component: MyFavor
    },
    {
      path: '/record',
      component: Record
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
