<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
        <div class="collection-list" v-for="(item,index) in collectionList" :key="index">
          <div class='order-cell'>
              <div class='order-cell-shop'>
                  <div class='shop-img'>
                      <img class='img' :src="item.icon"/>
                  </div>
                  <div class='shop-fx'>
                      <div class='shop-label'>{{item.title}}</div>
                      <div class='shop-price'>￥{{item.price}}</div>
                      <div class='shop-del' @click='del(index)'>删除</div>
                      <router-link :to="{path:'/GoodsDetail',query: {goodsId: item.id}}">
                          <span class='shop-buy'>查看</span>
                      </router-link>
                  </div>
              </div>
          </div>
        </div> 
      </scroller>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
import VueScroller from 'vue-scroller';
Vue.use(VueScroller)
export default {
  name: 'Collection',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"我的收藏",   
      collectionList: [
        {
            id: 1,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3001.00,
            sell: 101,
            url: '',
            icon: require('../assets/shop1.png')
        },
        {
            id: 2,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3002.00,
            sell: 102,
            url: '',
            icon: require('../assets/shop1.png')
        },
        {
            id: 3,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3003.00,
            sell: 103,
            url: '',
            icon: require('../assets/shop1.png')
        },
        {
            id: 4,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3004.00,
            sell: 104,
            url: '',
            icon: require('../assets/shop1.png')
        },
        {
            id: 5,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3005.00,
            sell: 105,
            url: '',
            icon: require('../assets/shop1.png')
        },
        {
            id: 6,
            title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
            price: 3006.00,
            sell: 106,
            url: '',
            icon: require('../assets/shop1.png')
        }
      ]  
    }
  },
  created () {

  },
  mounted () {

  },
  methods:{
    //删除
    del: function (indexVal) {
        let collectionList = this.collectionList  //获取购物车列表
        let index = indexVal  //获取当前点击事件的下标索引
        collectionList.splice(index, 1)
        this.collectionList= collectionList
        if (collectionList.length) {
            this.cartList= false
        }
        localStorage.setItem("collectionList", collectionList)
    }
  }
  
}
</script>
<style scoped>
.order-cell{
  float: left;
  width: 100%;  
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
}
.order-cell-store{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-store .store-img{
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 0.2rem;
}
.order-cell-store .store-img .img{
  width: 100%;
  height: 20px;
}
.order-cell-store .store-left{
  float: left;
  font-size: 14px;
}
.order-cell-store .store-right{
  float: right;
  font-size: 14px;
  color: #3982f6;
}
.order-cell-shop{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.collection-list a{
  color: #333333;
}
.order-cell-shop .shop-img{
  float: left;
  width: 120px;
  height: 120px;
  margin-right: 0.2rem;
}
.order-cell-shop .shop-img .img{
  width: 100%;
  height: 120px;
}
.order-cell-shop .shop-fx{
  position: relative;
  height: 120px;
}
.order-cell-shop .shop-fx .shop-label{
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.order-cell-shop .shop-fx .shop-price{
  position: absolute;
  bottom: 4px;
  margin-left: 120px;
  font-size: 14px;
  color: #3982f6;
  height: 20px;
  line-height: 20px;
}
.order-cell-shop .shop-fx .shop-del{
  position: absolute;
  bottom: 0;
  right: 60px;
  padding: 2px 12px;
  font-size: 12px;
  color: #aaaaaa;
  height: 20px;
  /* line-height: 18px; */
  border: 1px solid #aaaaaa;
  border-radius: 25px
}
.order-cell-shop .shop-fx .shop-buy{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2px 12px;
  font-size: 12px;
  background: #3982f6;
  color: #ffffff;
  height: 20px;
  /* line-height: 18px; */
  border: 1px solid #3982f6;
  border-radius: 25px
}
.order-cell-shop .shop-fx .shop-specif{
  font-size: 14px;
  color: #aaaaaa;
}
.order-cell-shop .shop-fx .shop-specif .count{
  float: right;
}
.order-cell-shop .shop-amount{
  float: right;
  text-align: right;
  width:  100%;
  font-size: 14px;
}
.order-cell-btn{
  float: right;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-btn .btn-zf{
  float: right;
  width: 80px;
  height: 32px;
  line-height: 29px;
  text-align: center;
  background: #ffffff;
  color: #3982f6;
  border: 1px solid #3982f6;
  font-size: 14px;
  border-radius: 25px;
}
</style>
