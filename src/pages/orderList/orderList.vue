<template>
  <div class="orderList">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <van-tabs :active="active" @click="onTab" color="#3982f6" animated>
          <van-tab title="待付款">
            <div class='order-cell'>
              <router-link :to="{path:'/orderDetail',query: {orderId: 1}}">
                <div class='order-cell-store'>
                    <div class='store-img'>
                      <img class='img' src='../../assets/order-icon.png'/>
                    </div>
                    <div class='store-left'>乐购商城</div>
                    <div class='store-right'>待付款</div>
                </div>
                <div class='order-cell-shop'>
                  <div class='shop-img'>
                    <img class='img' src='../../assets/shop1.png'/>
                  </div>
                  <div class='shop-fx'>
                    <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                    <div class='shop-price'>￥3500.00</div>
                    <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                  </div>
                  <div class='shop-amount'>合计：￥7000.00</div>
                </div>
              </router-link>
              <div class='order-cell-btn'>
                <router-link :to="{path:'/payOrder',query: {orderId: 1}}">
                  <button class='btn-zf'>去付款</button>
                </router-link>
              </div>
            </div>
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>待付款</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button class='btn-zf'>去付款</button>
              </div>
            </div>
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>待付款</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button class='btn-zf'>去付款</button>
              </div>
            </div>
          </van-tab>
          <van-tab title="已发货">
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>已付款</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button @click="remindGoods" class='btn-zf'>提醒发货</button>
              </div>
            </div>
          </van-tab>
          <van-tab title="待收货">
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>已发货</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                  <button @click="okGoods" class='btn-zf'>确认收货</button>
              </div>
            </div>
          </van-tab>
          <van-tab title="待评价">
            <div class='order-cell'>
              <div class='order-cell-store'>
                  <div class='store-img'>
                    <img class='img' src='../../assets/order-icon.png'/>
                  </div>
                  <div class='store-left'>乐购商城</div>
                  <div class='store-right'>已收货</div>
              </div>
              <div class='order-cell-shop'>
                <div class='shop-img'>
                  <img class='img' src='../../assets/shop1.png'/>
                </div>
                <div class='shop-fx'>
                  <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                  <div class='shop-price'>￥3500.00</div>
                  <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
                </div>
                <div class='shop-amount'>合计：￥7000.00</div>
              </div>
              <div class='order-cell-btn'>
                <router-link :to="{path:'/evalu',query: {orderId: 1}}">
                  <button class='btn-zf'>立即评价</button>
                </router-link>
              </div>
            </div>
          </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
  import orderList from "./orderList";
  export default orderList;
</script>

<style lang="stylus" scoped>
  @import './orderList.stylus'
</style>
