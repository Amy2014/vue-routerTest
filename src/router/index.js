import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Life from '@/components/life'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/nav/1',
      name: 'home',
      component: Home,
      children:[
      	{
      		path:'nav/:id',
      		name:'nav',
      		component:Life
      	}
      ]
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:Detail
    }
  ]
})
