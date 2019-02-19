<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div class="order-cell-list" v-for="(item,index) in evaluList" :key="index">
            <div class='order-cell'>
                <div class='order-cell-store'>
                    <div class='store-img'>
                    <img class='img' src='../assets/order-icon.png'/>
                    </div>
                    <div class='store-left'>{{item.name}}</div>
                    <div class='store-right'>{{item.static}}</div>
                </div>
                <div class='order-cell-shop'>
                <div class='shop-img'>
                    <img class='img' :src="item.icon"/>
                </div>
                <div class='shop-fx'>
                    <div class='shop-label'>{{item.title}}</div>
                    <div class='shop-price'>￥{{item.price}}</div>
                    <div class='shop-specif'>{{item.specif}}<div class='count'>×{{item.count}}</div></div>
                </div>
                <div class='shop-amount'>合计：￥{{item.price*item.count}}</div>
                </div>
                <div class='order-cell-btn'>
                  <router-link :to="{path:'/Evalu',query: {evaluId: item.id}}">
                    <button class='btn-zf'>查看</button>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'EvaluList',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"我的评价"
      // evaluList:[
      //   {
      //       id: 1,
      //       name: "乐购商城",
      //       title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
      //       price: 3500.00,
      //       static: "已评价",
      //       specif: "蓝色",
      //       count: 2,
      //       url: '',
      //       icon: require('../assets/shop1.png')
      //   },
      //   {
      //       id: 2,
      //       name: "乐购商城",
      //       title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
      //       price: 3500.00,
      //       static: "已评价",
      //       specif: "蓝色",
      //       count: 2,
      //       url: '',
      //       icon: require('../assets/shop1.png')
      //   }
      // ]
    }
  },
  created () {

  },
  mounted () {

  },
  computed:{
    evaluList:function() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getEvaluListFn;
    }
  },
  methods:{
    
  }
  
}
</script>
<style scoped>
.order-cell-list{
  float: left;
  width: 100%;  
}
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
  float: left;
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
.order-cell-shop .shop-img{
  float: left;
  width: 90px;
  height: 90px;
  margin-right: 0.2rem;
}
.order-cell-shop .shop-img .img{
  width: 100%;
  height: 90px;
}
.order-cell-shop .shop-fx .shop-label{
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.order-cell-shop .shop-fx .shop-price{
  font-size: 14px;
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
  line-height: 32px;
  text-align: center;
  background: #ffffff;
  color: #3982f6;
  border: 1px solid #3982f6;
  font-size: 14px;
  border-radius: 25px;
}
</style>
