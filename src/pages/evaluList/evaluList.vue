<template>
  <div class="evaluList">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <div v-if="evaluList.length > 0 ? true : false">
        <div class="order-cell-list" v-for="(item,index) in evaluList" :key="index">
            <div class='order-cell'>
                <div class='order-cell-store'>
                    <div class='store-img'>
                    <img class='img' src='../../assets/images/order-icon.png'/>
                    </div>
                    <div class='store-left'>{{item.name}}</div>
                    <div class='store-right'>{{item.static}}</div>
                </div>
                <div class='order-cell-shop'>
                <div class='shop-img'>
                    <img class='img' v-lazy="item.icon"/>
                </div>
                <div class='shop-fx'>
                    <div class='shop-label'>{{item.title}}</div>
                    <div class='shop-price'>￥{{item.price}}</div>
                    <div class='shop-specif'>{{item.specif}}<div class='count'>×{{item.count}}</div></div>
                </div>
                <div class='shop-amount'>合计：￥{{item.price*item.count}}</div>
                </div>
                <div class='order-cell-btn'>
                  <router-link :to="{path:'/evalu',query: {evaluId: item.id}}">
                    <button class='btn-zf'>查看</button>
                  </router-link>
                </div>
            </div>
        </div>
      </div>
      <!--如果无数据，则显示数据-->
      <div class="nodata_text" v-else>
        <img src='../../assets/images/no-result.png'/>
      </div>
    </div>
  </div>
</template>

<script>
  import evaluList from "./evaluList";
  export default evaluList;
</script>

<style lang="stylus" scoped>
  @import './evaluList.stylus'
</style>