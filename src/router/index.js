import Vue from 'vue'
import Router from 'vue-router'
//主页
import Index from '@/pages/Index'
import Class from '@/pages/Class'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'
//业务模块
import Search from '@/pages/Search'
import SearchOrderList from '@/pages/SearchOrderList'
import GoodsDetail from '@/pages/GoodsDetail'
import PayOrder from '@/pages/PayOrder'
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

export default new Router({
  //mode: 'history',开发时使用
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/OrderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/OrderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/EvaluList',
      name: 'EvaluList',
      component: EvaluList
    },
    {
      path: '/Evalu',
      name: 'Evalu',
      component: Evalu
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/AddressAdd',
      name: 'AddressAdd',
      component: AddressAdd
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set
    },
    {
      path: '/BindPhone',
      name: 'BindPhone',
      component: BindPhone
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/SearchOrderList',
      name: 'SearchOrderList',
      component: SearchOrderList
    },
    {
      path: '/GoodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/PayOrder',
      name: 'PayOrder',
      component: PayOrder
    }
  ]
})
