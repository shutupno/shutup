import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/login',
			name: 'login',
			component: resolve => require(['../pages/login/login.vue'], resolve),
			meta: {
				title: '登录'
			}
		},
		{
			path: '/',
			name: 'home',
			component: resolve => require(['../pages/home/home.vue'], resolve),
			children: [
				{
					path: '/',
					name: 'index',
					component: resolve => require(['../pages/index/index.vue'], resolve),
					meta: {
						title: '首页'
					}
				},
				// {
				// 	path: '/company',
				// 	name: 'company',
				// 	component: resolve => require(['../pages/personnel/company.vue'], resolve),
				// 	meta: {
				// 		title: '公司管理',
				// 		keepAlive: true, //该字段表示该页面需要缓存
        //     isBack: false //用于判断上一个页面是哪个
				// 	}
				// }
			]
		}
  ]
})
