<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" @click="swipeImgPreview"/>
          </van-swipe-item>
        </van-swipe>
        <div>
          <!-- 商品信息 -->
          <div class="detail">
            <div class="title" name="title">高空航拍无人机至尊荣耀版</div>
            <div class="price" name="price">￥3501.00</div>
          </div>
          <div style='margin-top:10px;'>
            <van-field
              v-model="specifValue"
              name="address"
              label="已选"
              icon="arrow"
              placeholder="请选择规格"
              @click="onSpecif"
              :border="false"
              :readonly="true"
              title-width="40px"
            />
            <van-popup
              v-model="show"
              position="bottom"
              bind:click-overlay="onClose"
            >
              <div class='specif-count'>
                <div class='specif-header'>
                  <div class='specif-img'>
                    <img class='img' :src='specif.img'/>
                  </div>
                  <div class='specif-detail'>
                    <div class='specif-price'>￥{{specif.price}}</div>
                    <div class='specif-inventory'>库存{{specif.inventory}}件</div>
                    <div class='specif-title'>{{specif.title}}</div>
                  </div>
                  <div class='specif-close-icon'>
                    <van-icon name="close" size="20px" @click='closeSpecif'/>
                  </div>
                </div>
                <div class='specif-cation'>
                  <div class='search-history-title'>规格</div>
                  <div class='search-cell' v-for="(item, index) in specifDetail" :key="index">
                    <div :class="curNav == item.specif_id ?  curActive1 : curActive2" @click="xzSpecif(item.specif_id,index,item.img,item.price,item.name,item.inventory)" >{{item.name}}</div>
                  </div>
                </div>
                <div style='margin-bottom:44px;'>
                  <van-cell title="数量" size="large">
                    <van-stepper name="count" v-model="specifCount" bind:change="onCount"/>
                  </van-cell>
                </div>
                <van-goods-action>
                  <van-goods-action-big-btn text="加入购物车" @click="onCart"/>
                  <van-goods-action-big-btn primary text="立即购买" @click="onBuy"/>
                </van-goods-action>  
              </div>
            </van-popup>
            <!-- 商品评价 -->
            <div class="separate"></div>
            <van-cell title="商品评价(0)" size="large" :border="false"></van-cell>
            <div class="text-remark">东西还可以，好评~</div>
            <div class="separate"></div>
          </div>
          <!-- 商品详情 -->
          <div style='margin-top:10px;margin-bottom:50px;'>
            <van-cell title="商品详情" size="large"></van-cell>
            <div v-for="(item, index) in detailImg" :key="index">
              <img class="image_detail" :src="item.img"/>
            </div>
          </div>
        </div>
        <!-- 底部悬浮栏 -->
        <van-goods-action>
          <van-goods-action-mini-btn icon="star-o" text="收藏"/>
          <van-goods-action-mini-btn icon="cart-o" text="购物车" @click="tzCart"/>
          <van-goods-action-big-btn text="加入购物车" @click="onCart"/>
          <van-goods-action-big-btn primary text="立即购买" @click="onBuy"/>
        </van-goods-action>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'GoodsDetail',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"商品详情",   
      isLike: true,
      images: [
        require('../assets/s-banner1.jpg'),
        require('../assets/s-banner2.jpg')
      ],
      // 商品详情介绍
      detailImg: [
        {img:require('../assets/sp-detail1.png')},
        {img:require('../assets/sp-detail2.png')}
      ],
      // 规格
      specif: {
        img: require('../assets/shop1.png'),
        title: "选择 规格参数",
        price: "3500-4000",
        inventory: "5000"
      },
      specifDetail: [
        {
          specif_id: 1,
          img: require('../assets/shop1.png'),
          name: "星空蓝",
          price: "3501.00",
          inventory: "881"
        }, 
        {
          specif_id: 2,
          img: require('../assets/shop1.png'),
          name: "炫紫",
          price: "3502.00",
          inventory: "882"
        },
        {
          specif_id: 3,
          img: require('../assets/shop1.png'),
          name: "玫瑰金",
          price: "3503.00",
          inventory: "883"
        },
        {
          specif_id: 4,
          img: require('../assets/shop1.png'),
          name: "星空灰",
          price: "3504.00",
          inventory: "884"
        },
        {
          specif_id: 5,
          img: require('../assets/shop1.png'),
          name: "炫黑",
          price: "3505.00",
          inventory: "885"
        },
      ],
      curNav: 0,
      curIndex: 0,
      curActive1: "search-option active",
      curActive2: "search-option",
      show: false,
      specifValue: 1,
      specifCount: 1
    }
  },
  created () {
    this.$toast("商品id:"+this.$route.query.goodsId); 
  },
  mounted () {
    
  },
  methods:{
    // 获取当前选中的规格参数
    xzSpecif: function (id,index,img,price,name,inventory) {
      // 获取item项的id，和数组的下标值  
      var id = id,
      index = parseInt(index);
      // 把点击到的某一项，设为当前index  
      this.curNav= id,
      this.curIndex= index,
      this.specif.price= price,
      this.specif.inventory= inventory,
      this.specif.title= '已选:"'+name+'"',  
      console.log(id,index,img,price,name,inventory);
    },
    //打开商品规格和购买数量
    onSpecif: function () {  
      this.show= true
    },
    closeSpecif: function () {
      this.show= false
    },
    //点击蒙层商品规格和购买数量弹层
    onClose: function () {
      this.show= false
    },
    //收藏
    addLike() {
      this.isLike= !this.data.isLike
    },
    //跳到购物车
    tzCart() {
      this.$router.push({ path: '/Cart' ,params:{id:"1"}});
    },
    //加入购物车
    onCart() {
      this.show= true
    },
    //立即购买
    onBuy() {
      this.show= true
    },
    //图片预览
    swipeImgPreview: function () {
      ImagePreview(this.images);
    }
  }
  
}
</script>
<style scoped>
.van-swipe-item img{
  float: left;
  width: 100%;
}
.detail {
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
}
.title {
  background: #ffffff;
  color: black;
  font-size: 16px;
  padding: 10px 15px;
  text-align: justify;
}
.price {
  background: #ffffff;
  color: #3982f6;
  font-size: 16px;
  padding: 10px 15px;
}
.line_flag {
  width: 40px;
  height: 1px;
  display: inline-block;
  margin: 10px auto;
  background-color: gainsboro;
  text-align: center;
}
.line {
  width: 100%;
  height: 1px;
  display: inline-block;
  margin: 10px 0px;
  background-color: gainsboro;
  text-align: center;
}
.detail-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  float: left;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
}
.button-green {
  background-color: #4caf50; /* Green */
}
.button-red {
  background-color: #f44336; /* 红色 */
}
.image_detail {
  width: 100%;
}
button {
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 0px;
  width: 50%;
  height: 100%;
  line-height: 50px;
}
.detail-nav image {
  width: 35px;
  height: 25px;
  margin: 10px 20px;
}
.line_nav {
  width: 2.5px;
  height: 100%;
  background-color: gainsboro;
}
/* 占位 */
.temp {
  height: 50px;
}
.text-remark {
  background: #ffffff;
  color: #aaaaaa;
  display: block;
  font-size: 12px;
  padding: 10px 15px;
}

.specif-count{
  float: left;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 10px 0px;
  box-sizing: border-box;
}
.specif-count .specif-header{
  padding: 10px 15px;
  box-sizing: border-box;
}
.specif-count .specif-img{
  float: left;
  width: 35%;
  height: 120px;
  margin-right: 0.2rem;
}
.specif-count .specif-img .img{
  width: 100%;
  height: 120px;
}
.specif-count .specif-detail{
  float: left;
  width: 55%;
}
.specif-count .specif-close-icon{
  float: left;
  width: 5%;
  margin-top: -15px;
}
.specif-count .specif-price{
  color: #3982f6;
  font-size:18px;
  margin-top: 20px;
}
.specif-count .specif-inventory{
  font-size: 14px;
  color: #aaaaaa;
  margin-top: 5px;
}
.specif-count .specif-title{
  font-size: 14px;
  margin-top: 10px;
}

.specif-count .specif-cation{
  float: left;
  width: 100%;
}
.search-history-title{
  float: left;
  width: 100%;
  font-size: 16px;
  padding: 10px 15px;
  box-sizing: border-box;
}
.search-cell .search-option{
  float: left;
  margin: 5px 15px;
  text-align: center;
  padding: 5px 15px;
  font-size: 14px;
  background: #f2f2f2;
  color: #666666;
  border-radius: 25px;
}
/*规格item被选中时*/  
.search-cell .search-option.active{  
  background: #3982f6;  
  color: #ffffff; 
}  

.van-button--danger{
  background-color: #3982f6 !important;
  border:2rpx solid #3982f6 !important;
}
.van-info{
  background-color: #3982f6 !important;
} 
button{
  border: 0;
}
</style>
