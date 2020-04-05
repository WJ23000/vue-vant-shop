<template>
  <div class="index">
    <div class="page-header">
      <router-link to="/search">
        <van-search placeholder="请输入搜索关键词" disabled="true"/>
      </router-link>
    </div>
    <div class="page-content">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image">
        </van-swipe-item>
      </van-swipe>
      <Grid :gridVal="gridList"></Grid>
      <div style="margin-top:10px;">
        <Notice :noticeVal="notice"></Notice>
      </div>
      <div style="float:left;margin-bottom:50px;">
        <GoodsList :goodsListVal="goodsList" style="margin-top:0px;"></GoodsList>
      </div>
      <!-- backTop 回顶部的组件 -->
      <ToTop/>
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
  import index from "./index";
  export default index;
</script>

<style lang="stylus" scoped>
  @import './index.stylus'
</style>
