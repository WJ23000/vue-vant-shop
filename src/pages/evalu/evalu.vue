<template>
  <div class="evalu">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div class='order-cell'>
          <div class='order-cell-shop'>
            <div class='shop-img'>
              <img class='img' src='../../assets/shop1.png'/>
            </div>
            <div class='shop-fx'>
              <span class='shop-label'>智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版优惠大放送</span>
              <span class='shop-price'>￥3500.00</span>
              <span class='shop-specif'>蓝色</span>
            </div>
          </div>
        </div>
        <div style="float:left;width:100%;">
          <form @submit.prevent="formSubmitEvalu">
            <div>
              <van-cell-group>
                <van-cell title="描述相符">
                  <van-rate v-model="formText.descScore" name="descScore" @change="onDesc" :size="16" color="#3982f6"/>
                </van-cell>
                <van-cell title="服务态度">
                  <van-rate v-model="formText.tudeScore" name="tudeScore" @change="onTude" :size="16" color="#3982f6"/>
                </van-cell>
                <van-field
                  v-model="formText.leave"
                  name="leave"
                  clearable
                  type="textarea"
                  placeholder="留个言给其他小伙伴做个参考呗"
                  rows="1"
                  autosize
                  :border="false"
                />
                <div class="evalu-upload">
                  <van-uploader :after-read="afterRead" @delete="delImg" v-model="fileList" accept="image/*" multiple/>
                </div>
                <van-switch-cell
                  v-model="formText.checked"
                  name="switch"
                  title="是否匿名"
                />
              </van-cell-group>
            </div>
            <div>
              <button class='address-add-btn'  form-type="submit">发布</button>
            </div>
          </form>
        </div>
        
    </div>
  </div>
</template>

<script>
  import evalu from "./evalu";
  export default evalu;
</script>

<style lang="stylus" scoped>
  @import './evalu.stylus'
</style>