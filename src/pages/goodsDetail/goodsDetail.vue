<template>
  <div class="goodsDetail">
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
          <div style='margin: 10px 0px;'>
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
                    <img class='img' v-lazy='specifImg' @click="specifImgPreview(specifImg)"/>
                  </div>
                  <div class='specif-detail'>
                    <div class='specif-price'>￥{{specifPrice}}</div>
                    <div class='specif-inventory'>库存{{specifStock}}件</div>
                    <div class='specif-title'>{{specifTitle}}</div>
                  </div>
                  <div class='specif-close-icon'>
                    <van-icon name="close" size="20px" @click='closeSpecif'/>
                  </div>
                </div>
                <div class='specif-cation' v-for="(pItem, findex) in specif_list" :key="findex">
                  <div class='search-history-title'>{{pItem.pName}}</div>
                  <ul class='search-cell' v-for="(oItem, zindex) in pItem.info" :key="zindex">
                    <li @click="xzSpecif(oItem.spec_id,findex,$event,zindex)" :class="[oItem.isShow?'':'noneActive',subIndex[findex] == zindex?'productActive':'']">{{oItem.spec_val}}</li>
                  </ul>
                </div>
                <div style='margin-bottom:44px;'>
                  <van-cell title="数量" size="large">
                    <van-stepper name="count" v-model="specifCount" bind:change="onCount"/>
                  </van-cell>
                </div>
                <van-goods-action>
                  <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="onCart"
                  />
                  <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    primary
                    @click="onBuy"
                  />
                </van-goods-action>  
              </div>
            </van-popup>
          </div>
          <!-- 商品评价 -->
          <van-cell title="商品评价(1)" value="查看全部" to="/Comment" is-link size="large" :border="false"></van-cell>
          <div v-if="commentList.length > 0">
            <div v-for="(item,index) in commentList" :key="index">
              <div class='comment-cell'>
                <div class='user-nickname'>
                  <img class='user-icon' v-lazy="item.userImg"/>
                  <span class='nickname'>{{item.userName}}</span>
                </div>
                <span class='commentDetail'>{{item.content}}</span>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="text-remark">东西还可以，好评~</div>
          </div> 
          
          <!-- 商品详情 -->
          <div style='margin-top:10px;margin-bottom:50px;'>
            <van-cell title="商品详情" size="large"></van-cell>
            <div v-for="(item, index) in detailImg" :key="index">
              <img class="image_detail" v-lazy="item.img"/>
            </div>
          </div>
        </div>
        <!-- 底部悬浮栏 -->
        <van-goods-action>
          <van-goods-action-icon
            icon="star"
            text="收藏"
            @click="addLike" 
            v-if="isLike"
          />
          <van-goods-action-icon
            icon="star-o"
            text="收藏"
            @click="addLike"
            v-else
          />
          <van-goods-action-icon
            info="5"
            icon="cart-o"
            text="购物车"
            @click="tzCart"
          />
          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="onCart"
          />
          <van-goods-action-button
            type="danger"
            text="立即购买"
            primary
            @click="onBuy"
          />
        </van-goods-action>
        <!-- backTop 回顶部的组件 -->
        <ToTop/>
    </div>
  </div>
</template>

<script>
  import goodsDetail from "./goodsDetail";
  export default goodsDetail;
</script>

<style lang="stylus" scoped>
  @import './goodsDetail.stylus'
</style>