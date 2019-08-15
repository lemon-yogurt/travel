import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

// 导出一组路由配置项
export default new Router({
  // 当你访问根路径时，对应hello world
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
