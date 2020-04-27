<template>
  <div class="orderDetail">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div class='order-static'>
            <span>商品已发货</span>
        </div>
        <div class='address-cell'>
            <div class='address-cell-left'>
            <div class='address-option'>
                <div class='option-user'>朱果</div>
                <div class='option-phone'>13856657880</div>
            </div>
            <div class='address-conn'>
                <div>浙江省杭州市西湖区留下街道石马社区88号楼区8888室</div>
            </div>
            </div>
            <div class='address-cell-right'>
            <van-icon name="arrow" color='#999999' size="15px"/>
            </div>
        </div>
        <div class='order-cell'>
            <div class='order-cell-store'>
                <div class='store-img'>
                    <img class='img' src='../../assets/images/order-icon.png'/>
                </div>
                <div class='store-left'>乐购商城</div>
                <div class='store-right'>已评价</div>
            </div>
            <div class='order-cell-shop'>
            <div class='shop-img'>
                <img class='img' src='../../assets/images/shop1.png'/>
            </div>
            <div class='shop-fx'>
                <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                <div class='shop-price'>￥3500.00</div>
                <div class='shop-specif'>蓝色<div class='count'>×2</div></div>
            </div>
            </div>
        </div>
        <div class='bottomPd'>
            <van-cell-group :border="false">
                <van-cell
                    title="商品总额"
                    value="7000.00"
                    :border="false"
                />
                <van-cell
                    title="活动折扣"
                    value="-0"
                    :border="false"
                />
                <van-cell
                    title="优惠券折扣"
                    value="-0"
                    :border="false"
                />
                <van-cell
                    title="运费"
                    value="包邮"
                    :border="false"
                />
                <van-cell
                    title="实付款(含运费)"
                    value="7000.00"
                    size="large"
                    :border="false"
                />
            </van-cell-group>
        </div>
        <div class='topPd' style='margin-top:20rpx;'>
            <van-cell-group :border="false">
                <van-cell
                    title="买家留言"
                    value="商品质优,服务态度好"
                    :border="false"
                    bind:click="onLeave"
                />
                <van-cell
                    title="订单编号"
                    value="SH2017021520305432"
                    :border="false"
                />
                <van-cell
                    title="下单时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
                <van-cell
                    title="付款时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
                <van-cell
                    title="发货时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
                <van-cell
                    title="成交时间"
                    value="2018-12-19 16:29:33"
                    :border="false"
                />
            </van-cell-group>
        </div>
        <!-- <div class='order-detail-btn'>
            <button class='goods-btn'>确认收货</button>
            <button open-type='contact' class='contact-btn'>联系商家</button>
        </div> -->
    </div>
  </div>
</template>

<script>
  import orderDetail from "./orderDetail";
  export default orderDetail;
</script>

<style lang="stylus" scoped>
  @import './orderDetail.stylus'
</style>