import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Release from '@/pages/release'
import Login from '@/pages/login'
import Reg from '@/pages/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:'/release',
      name:'release',
      component: Release
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/reg',
      name:'reg',
      component: Reg
    },
    {
      path:'/test1',
      name:'test1',
      component: Release
    },
    {
      path:'/test2',
      name:'test2',
      component: Release
    },
    {
      path:'/test3',
      name:'test3',
      component: Release
    },
    {
      path:'/test4',
      name:'test4',
      component: Release
    },
    {
      path:'/test5',
      name:'test5',
      component: Release
    },
    {
      path:'/test6',
      name:'test6',
      component: Release
    },
    {
      path:'/test7',
      name:'test7',
      component: Release
    },
    {
      path:'/test8',
      name:'test8',
      component: Release
    },
    {
      path:'/test9',
      name:'test9',
      component: Release
    },
  ]
})
