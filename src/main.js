// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// 路由配置内容
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
// 挂载到index.js的div#app元素上面，
// 局部组件app，类似于{app:app}
// 显示app组件
new Vue({
  el: '#app',
  router,
  // =》 router:router
  components: { App },
  template: '<App/>'
})
