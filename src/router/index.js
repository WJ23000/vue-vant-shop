import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const staticRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 0,
      needlogin: false
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/login/login.vue'], resolve)
  },
  {
    path: '/error',
    name: 'error',
    meta: {
      index: 0,
      needlogin: false
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/error/error.vue'], resolve)
  },
]

export const constantRoutes = [
  ...staticRoutes,
  {
    path: '/',
    name: 'index',
    meta: { 
      index: 0,
      needlogin: false 
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/index/index.vue'],resolve)
  },
  {
    path: '/category',
    name: 'category',
    meta: { 
      index: 0, 
      needlogin: false 
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/category/category.vue'], resolve)
  },
  {
    path: '/cart',
    name: 'cart',
    meta: { 
      index: 0,
      needlogin: true 
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/cart/cart.vue'], resolve)
  },
  {
    path: '/mine',
    name: 'mine',
    meta: { 
      index: 0,
      needlogin: true 
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/mine/mine.vue'], resolve)
  },
  {
    path: '/orderList',
    name: 'orderList',
    meta: { 
      index: 1,
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/orderList/orderList.vue'], resolve)
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    meta: { 
      index: 2,
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/orderDetail/orderDetail.vue'], resolve)
  },
  {
    path: '/evaluList',
    name: 'evaluList',
    meta: { 
      index: 1,
      needlogin: true   
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/evaluList/evaluList.vue'], resolve)
  },
  {
    path: '/evalu',
    name: 'evalu',
    meta: { 
      index: 2, 
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/evalu/evalu.vue'], resolve)
  },
  {
    path: '/address',
    name: 'address',
    meta: { 
      index: 1, 
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/address/address.vue'], resolve)
  },
  {
    path: '/addressAdd',
    name: 'addressAdd',
    meta: { 
      index: 2, 
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/addressAdd/addressAdd.vue'], resolve)
  },
  {
    path: '/collection',
    name: 'collection',
    meta: { 
      index: 1, 
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/collection/collection.vue'], resolve)
  },
  {
    path: '/set',
    name: 'set',
    meta: { 
      index: 1, 
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/set/set.vue'], resolve)
  },
  {
    path: '/bindPhone',
    name: 'bindPhone',
    meta: { 
      index: 3,
      needlogin: true   
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/bindPhone/bindPhone.vue'], resolve)
  },
  {
    path: '/search',
    name: 'search',
    meta: { 
      index: 1,
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/search/search.vue'], resolve)
  },
  {
    path: '/searchOrderList',
    name: 'searchOrderList',
    meta: { 
      index: 1,
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/searchOrderList/searchOrderList.vue'], resolve)
  },
  {
    path: '/goodsDetail',
    name: 'goodsDetail',
    meta: { 
      index: 2,
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/goodsDetail/goodsDetail.vue'], resolve)
  },
  {
    path: '/payOrder',
    name: 'payOrder',
    meta: { 
      index: 2, 
      needlogin: true  
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/payOrder/payOrder.vue'], resolve)
  },
  {
    path: '/comment',
    name: 'comment',
    meta: { 
      index: 3,
      needlogin: true   
    }, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: resolve => require(['@/pages/comment/comment.vue'], resolve)
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ x: 0,y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
