import Vue from 'vue'
import Router from 'vue-router'
//主页
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import Class from '@/pages/Class'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'
//业务模块
import Search from '@/pages/Search'
import SearchOrderList from '@/pages/SearchOrderList'
import GoodsDetail from '@/pages/GoodsDetail'
import PayOrder from '@/pages/PayOrder'
import Comment from '@/pages/Comment'
//Mine模块
import OrderList from '@/pages/OrderList'
import OrderDetail from '@/pages/OrderDetail'
import EvaluList from '@/pages/EvaluList'
import Evalu from '@/pages/Evalu'
import Address from '@/pages/Address'
import AddressAdd from '@/pages/AddressAdd'
import Collection from '@/pages/Collection'
import Set from '@/pages/Set'
import BindPhone from '@/pages/BindPhone'


Vue.use(Router)


export const constantRoutes = [
  {
    path: '/',
    name: 'Index',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Index
  },
  {
    path: '/Login',
    name: 'Login',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Login
  },
  {
    path: '/Class',
    name: 'Class',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Class
  },
  {
    path: '/Cart',
    name: 'Cart',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Cart
  },
  {
    path: '/Mine',
    name: 'Mine',
    meta: { index: 0 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Mine
  },
  {
    path: '/OrderList',
    name: 'OrderList',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: OrderList
  },
  {
    path: '/OrderDetail',
    name: 'OrderDetail',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: OrderDetail
  },
  {
    path: '/EvaluList',
    name: 'EvaluList',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: EvaluList
  },
  {
    path: '/Evalu',
    name: 'Evalu',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Evalu
  },
  {
    path: '/Address',
    name: 'Address',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Address
  },
  {
    path: '/AddressAdd',
    name: 'AddressAdd',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: AddressAdd
  },
  {
    path: '/Collection',
    name: 'Collection',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Collection
  },
  {
    path: '/Set',
    name: 'Set',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Set
  },
  {
    path: '/BindPhone',
    name: 'BindPhone',
    meta: { index: 3 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: BindPhone
  },
  {
    path: '/Search',
    name: 'Search',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Search
  },
  {
    path: '/SearchOrderList',
    name: 'SearchOrderList',
    meta: { index: 1 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: SearchOrderList
  },
  {
    path: '/GoodsDetail',
    name: 'GoodsDetail',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: GoodsDetail
  },
  {
    path: '/PayOrder',
    name: 'PayOrder',
    meta: { index: 2 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: PayOrder
  },
  {
    path: '/Comment',
    name: 'Comment',
    meta: { index: 3 },//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    component: Comment
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
