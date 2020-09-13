import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import dexp1 from '@/components/dexp/dexp1'
import dexp2 from '@/components/dexp/dexp2'
import dexp3 from '@/components/dexp/dexp3'
import Index from '@/views/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'dexp1',
          component: dexp1
        },
        {
          path: '/',
          name: 'dexp2',
          component: dexp2
        },
        {
          path: '/',
          name: 'dexp3',
          component: dexp3
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
