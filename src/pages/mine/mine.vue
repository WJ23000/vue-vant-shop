<template>
  <div class="mine">
    <div class="page-content" style="margin-top:0;">
      <div class="tx">
        <div class="mine-header" style="margin-top:20px;">
          <div class="mine-left">
            <img class="mine-img" v-lazy="userImg">
          </div>
          <div class="mine-right" style="margin-top:2px;">
            <div class="mine-welcome">您好,</div>
            <div class="mine-username">{{userName}}</div>
          </div>
        </div>
      </div>
      <div class="mine-order-grids">
        <div class="weui-grids" style="margin-bottom:10px;">
          <div class="weui-grid" v-for="(item,index) in gridsList" :key="index">
            <router-link :to="{path:'/orderList',query: {indexId: item.id}}">
              <div class="weui-grid__icon">
                <img v-lazy="item.icon">
              </div>
              <span class="weui-grid__label">{{item.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div>
        <van-cell title="我的评价" :icon="require('../../assets/mine-evalu.png')" is-link :to="{path:'/evaluList'}"/>
        <van-cell title="收货地址" :icon="require('../../assets/mine-address.png')" is-link :to="{path:'/address'}"/>
        <van-cell title="我的收藏" :icon="require('../../assets/mine-collection.png')" is-link :to="{path:'/collection'}"/>
        <van-cell title="我的邀请码" :icon="require('../../assets/mine-code.png')" is-link :to="{path:'#'}"/>
        <van-cell title="设置" :icon="require('../../assets/mine-set.png')" is-link :to="{path:'/set'}"/>
      </div>
    </div>
    <van-tabbar v-model="navActive">
      <van-tabbar-item :to="{path:'/'}" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item :to="{path:'/category'}" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item :to="{path:'/cart'}" icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item :to="{path:'/mine'}" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import mine from "./mine";
  export default mine;
</script>

<style lang="stylus" scoped>
  @import './mine.stylus'
</style>
