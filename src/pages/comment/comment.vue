<template>
  <div class="comment">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div v-if="commentList.length > 0 ? true : false"  class='comment-content'>    
            <div v-for="(item,index) in commentList" :key="index">
                <div class='comment-cell'>
                    <div class='user-nickname'>
                        <img class='user-icon' v-lazy='item.userImg'/>
                        <span class='nickname'>{{item.userName}}</span>
                        <!-- <text class='comment-time'>{{item.createTime}}</text> -->
                    </div>
                    <span class='commentDetail'>{{item.content}}</span>
                    <div class='comment-img'>
                        <div v-for="(items, zindex) in item.goodsImg" :key="zindex">
                            <img v-lazy='items'  @click="commentImgPreview(zindex,item.goodsImg)"/>
                        </div>
                    </div>
                    <div class='time-heart' @click="likeZan" :data-index="index">
                        <span class='dianzan'>{{item.likeNum}}</span>
                        <img class='heart-icon' :src='okZan' v-if="item.isLike == 1"/>
                        <img class='heart-icon' :src='noZan' v-else/>
                    </div>
                </div>
            </div>
        </div>
        <!-- 如果无数据，则显示数据 -->
        <div class="nodata_text" v-else>
            <img src='../../assets/no-result.png'/>
        </div>
        <!-- 底部评论框 -->
        <div class="page-footer">
            <van-cell-group>
                <van-field
                    v-model="commentVal"
                    center
                    clearable
                    placeholder="请发表您的评论"
                >
                    <van-button slot="button" size="small" type="primary" @click="onConfirm">发送</van-button>
                </van-field>
            </van-cell-group>
        </div>
    </div>
  </div>
</template>

<script>
  import comment from "./comment";
  export default comment;
</script>

<style lang="stylus" scoped>
  @import './comment.stylus'
</style>