<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <div class='sort-wrap'>
        <div class='sort-btn'>
          综合
        </div>
        <div class='sort-btn' :data-index="sortIndex1" @click="searchSort1">
          销量
          <img :src="sortImg1"/>
        </div>
        <div class='sort-btn' :data-index="sortIndex2" @click="searchSort2">
          价格
          <img :src="sortImg2"/>
        </div>
      </div>
      <div style="float:left;">
        <GoodsList :goodsListVal="goodsList"></GoodsList>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
import GoodsList from '@/components/GoodsList';
export default {
  name: 'searchOrderList',
  components:{
    HeaderTwo,
    GoodsList
  },
  data () {
    return {
      title:"商品列表",   
      sortImg1: require('../assets/sort-up.png'),
      sortIndex1: 0,
      sortImg2: require('../assets/sort-down.png'),
      sortIndex2: 0,
      goodsList: [
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
    //TAB切换
    searchSort1: function (e) {
      if (this.sortIndex1 == 0) {
        this.sortImg1= require('../assets/sort-up.png'),
        this.sortIndex1=1
      } else {
        this.sortImg1= require('../assets/sort-down.png'),
        this.sortIndex1= 0
      }
    },
    searchSort2: function (e) {
      if (this.sortIndex2 == 0) {
        this.sortImg2= require('../assets/sort-up.png'),
        this.sortIndex2=1
      } else {
        this.sortImg2= require('../assets/sort-down.png'),
        this.sortIndex2= 0
      }
    }
  }
  
}
</script>
<style scoped>
.sort-wrap{
  position: fixed;
  width: 100%;
  z-index: 1;
  height:44px;
  background-color:#fff;
  border-bottom: 1px solid #f2f2f2; 
}
.sort-btn{
  width:33.333%;
  float:left;
  text-align: center;
  height:44px;
  line-height:44px;
  font-size: 14px;
  color:#333;
}
.sort-btn img{
  margin-top: 4px;
  width: 20px;
  height: 36px;
  margin-left:3px;
  vertical-align: top;
}
</style>
