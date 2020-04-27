<template>
  <div class="category">
    <div class="page-header">
      <router-link to="/search">
        <van-search  placeholder="请输入搜索关键词" disabled="true"/>
      </router-link>
    </div>
    <div class="page-content">
      <!--主盒子-->
      <!--左侧栏-->
      <div class="content-left-right"> 
        <div class="content-left">
          <div class="nav_left">
            <div v-for="(item,index) in cateItems" :key="index">
              <!--当前项的id等于item项的id，那个就是当前状态-->
              <!--用data-index记录这个数据在数组的下标位置，使用data-id设置每个item的id值，供打开2级页面使用-->
            <div :class="curNav == item.cate_id ?  curActive1 : curActive2" @click="switchRightTab(item.cate_id,index)">{{item.cate_name}}</div>
            </div>
          </div>
        </div>
      
        <!--右侧栏-->
        <div class="content-right">
          <div class="nav_right">
            <!--如果有数据，才遍历项-->
            <div v-if="cateItems[curIndex].ishaveChild">
              <div v-for="(item,index) in cateItems[curIndex].children" :key="index">
                <div class="nav_right_items">
                <!--界面跳转 -->
                  <router-link :to="{path:'/searchOrderList',query: {goodsId: item.child_id}}">
                    <img v-lazy="item.image"/>
                    <span>{{item.name}}</span>
                  </router-link>
                </div>
              </div>
            </div>
            <!--如果无数据，则显示数据-->
            <div class="nodata_text" v-else>
              <img src="../../assets/images/no-result.png"/>
            </div>
          </div>
        </div>
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
  import category from "./category";
  export default category;
</script>

<style lang="stylus" scoped>
  @import './category.stylus'
</style>