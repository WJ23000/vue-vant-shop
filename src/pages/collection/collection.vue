<template>
  <div class="collection">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller" refresh-layer-color="#3982f6"
      loading-layer-color="#3982f6" style="top:44px;">
        <div class="collection-list" v-for="(item,index) in collectionList" :key="index">
          <div v-if="showVal"></div>
          <div v-else>
          <div class='icon'>
            <van-icon :name="iconXz" v-if="item.selected" @click="selectSingle" :data-index="index" size="20px"/>
            <van-icon :name="iconWxz" v-else @click="selectSingle" :data-index="index" size="20px"/>
          </div>
          </div>
          <router-link :to="{path:'/goodsDetail',query: {goodsId: item.id}}">
            <div :class="showVal ?  curActive1 : curActive2">
                <div class='order-cell-shop'>
                    <div class='shop-img'>
                        <img class='img' v-lazy="item.icon"/>
                    </div>
                    <div class='shop-fx'>
                        <div class='shop-label'>{{item.title}}</div>
                        <div class='shop-price'>￥{{item.price}}</div>
                    </div>
                </div>
            </div>
          </router-link>
        </div> 
      </scroller>
      <!-- 底部 -->
      <div class="cart-bottom">
        <div v-if="showVal">
          <div class='cart-bottom-edit' @click='edit'>编辑</div>
        </div>
        <div v-else>
          <div class='cart-bottom-cell' @click='cancel'>取消</div>
          <div class='cart-bottom-cell' @click='selectAll'>全选</div>
          <div class='cart-bottom-cell del-color' @click='del'>删除({{delCount}})</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  import collection from "./collection";
  export default collection;
</script>

<style lang="stylus" scoped>
  @import './collection.stylus'
</style>