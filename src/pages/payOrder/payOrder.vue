<template>
  <div class="payOrder">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
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
        <!-- <div class='order-jg' style='margin-bottom:10px;'></div> -->
        <div class='shop-order-content'>
            <div class='order-cell'>
                <div class='order-cell-store'>
                    <div class='store-img'>
                        <img class='img' src='../../assets/images/order-icon.png'/>
                    </div>
                    <div class='store-left'>乐购商城</div>
                </div>
                <div class='order-cell-shop'>
                <div class='shop-img'>
                    <img class='img' src='../../assets/images/shop1.png'/>
                </div>
                <div class='shop-fx'>
                    <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                    <div class='shop-price'>￥{{ 3500.00 }}</div>
                    <div class='shop-specif'>默认</div>
                </div>
                </div>
                <div class="order-cell-detail">
                    <van-cell-group>
                        <van-field
                            v-model="courier"
                            name="delive"
                            label="运费"
                            icon="arrow"
                            disabled
                            input-align="right"
                        />
                        <van-field
                            v-model="leave"
                            name="leave"
                            label="买家留言"
                            placeholder="请输入留言"
                            title-width="74px"
                            autosize
                            :border="false"
                        /> 
                    </van-cell-group>
                </div>  
            </div>
            <div class='order-cell'>
                <div class='order-cell-store'>
                    <div class='store-img'>
                        <img class='img' src='../../assets/images/order-icon.png'/>
                    </div>
                    <div class='store-left'>乐购商城</div>
                </div>
                <div class='order-cell-shop'>
                <div class='shop-img'>
                    <img class='img' src='../../assets/images/shop1.png'/>
                </div>
                <div class='shop-fx'>
                    <div class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</div>
                    <div class='shop-price'>￥{{ 3500.00 }}</div>
                    <div class='shop-specif'>默认</div>
                </div>
                </div>
                <div class="order-cell-detail">
                    <van-cell-group>
                        <van-field
                            v-model="courier"
                            name="delive"
                            label="运费"
                            icon="arrow"
                            disabled
                            input-align="right"
                        />
                        <van-field
                            v-model="leave"
                            name="leave"
                            label="买家留言"
                            placeholder="请输入留言"
                            title-width="74px"
                            autosize
                            :border="false"
                        /> 
                    </van-cell-group>
                </div>  
            </div>
        </div>
        <div class='order-btn'>
            <div class='order-amount'><div class='o-hj'>合计：</div><div class='o-price'>￥7000.00</div></div>
            <div class='order-pay-btn' bindtap='goPay'>支付</div>
        </div>
    </div>
  </div>
</template>

<script>
  import payOrder from "./payOrder";
  export default payOrder;
</script>

<style lang="stylus" scoped>
  @import './payOrder.stylus'
</style>