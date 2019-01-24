// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import { Lazyload } from 'vant'
import 'vant/lib/index.css'
import '../src/styles/app.css'

// 使用axios请求方式
import axios from 'axios'
// 改为原型组件使用方式
Vue.prototype.$http = axios

// 全局工具类引用
//rem基准值
import './utils/rem'


Vue.config.productionTip = false

// 开启google浏览器debug开发模式
Vue.config.devtools = true

// 注册中间件
Vue.use(Vant)
Vue.use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
