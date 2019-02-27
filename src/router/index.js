import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Test from '@/components/test'
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import Index from '@/components/index'
import ReleaseNews from '@/components/children/releaseNews'
import Newslist from '@/components/children/newslist'
import NewsDetail from '@/components/children/newsdetail'
import storelist from '@/components/children/storelist'
import certificatelist from '@/components/children/certificatelist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
		  path: '/index',
		  name: 'Index',
		  component: Index,
			children:[
				{
					path:'/releasenews',
					name:'ReleaseNews',
					component:ReleaseNews
				},
				{
					path:'/newslist',
					name:'Newslist',
					component:Newslist
				},
				{
					path:'/newsdetail',
					name:'NewsDetail',
					component:NewsDetail
				},
				{
					path:'/storelist',
					name:'storelist',
					component:storelist
				},
				{
					path:'/certificatelist',
					name:'certificatelist',
					component:certificatelist
				}
			]
		}
  ]
})
