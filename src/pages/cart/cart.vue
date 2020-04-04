<template>
  <div class="cart">
    <div class="page-header">
      <van-nav-bar
        :title="title"
        right-text="编辑"
        @click-right="onRightEdit"
      />
    </div>
    <div class="page-content">
      <div v-if="cartItems.length > 0 ? true : false">
      <div v-for="(item,index) in cartItems" :key="index" class='cart-cell'>
        <div :data-id="item.id"  class='cart-box' :data-index="index">
            <div class='icon'>
                <van-icon :name="iconXz" v-if="item.selected" @click="selectedCart" :data-index="index" size="20px"/>
                <van-icon :name="iconWxz" v-else @click="selectedCart" :data-index="index" size="20px"/>
            </div>

            <div class='cart-main'>
              <div class='left'>
                <div class='left_imgae'>
                    <img class="cart-image" v-lazy="item.icon"/>
                </div>

                <div class='left_box'>
                    <span class="cart-title">{{item.title}}</span>
                    <span class="cart-price">￥{{item.price}}</span>
                    <span class="cart-specif">{{item.specif}}</span>
                    <span @click='reduce'  class="input cart-reduce"  :data-index="index">-</span>
                    <span class="input cart-text">{{item.value}}</span>
                    <span @click='add' class="input cart-add"  :data-index="index">+</span>
                </div>
              </div>
            </div>

          
            <!-- 底部 -->
            <div v-if="showVal">
              <div class="del-bottom">
                <div class='cart-bottom-cell' @click='cancel'>取消</div>
                <div class='cart-bottom-cell del-color' @click='del'>删除({{delCount}})</div>
              </div>
            </div>
            <div v-else>
              <div class="cart-bottom">
                <div class=cart-bottom-icon>
                  <van-icon :name="iconXz" v-if="CheckAll" @click="select" :data-index="index" size="20px"/>
                  <van-icon :name="iconWxz" v-else @click="select" :data-index="index"  size="20px"/>
                </div>
                <div class='checkAll'>全选</div>
                <div class='cart-sum'>
                    <span class='sum_text'>合计：</span>
                    <span class='sum_color'>￥{{total}}元</span>
                </div>
                <div class='cart-pay'>
                  <span class='cart_pay' @click="payOrder" :data-id="item.id">结算({{goodsCount}})</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      <!--如果无数据，则显示数据-->
      <div class="nodata_text" v-else>
        <img src='../../assets/no-result.png'/>
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
  import cart from "./cart";
  export default cart;
</script>

<style lang="stylus" scoped>
  @import './cart.stylus'
</style>