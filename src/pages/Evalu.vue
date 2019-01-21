<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div class='order-cell'>
          <div class='order-cell-shop'>
            <div class='shop-img'>
              <img class='img' src='../assets/shop1.png'/>
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
                  label="留言"
                  type="textarea"
                  placeholder="请输入留言"
                  rows="1"
                  autosize
                />
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
import HeaderTwo from '@/components/HeaderTwo';
import areaVal from '@/utils/areaList'
export default {
  name: 'Evalu',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"评论详情",
      formText:{
        descScore: 0,
        tudeScore: 0,
        leave:"",
        checked:false
      }, 
    }
  },
  created () {

  },
  mounted () {

  },
  methods:{
    //星形评分
    onDesc: function (value) {
      this.descScore= value
    },
    onTude: function (value) {
      this.tudeScore= value
    },
      //提交表单
      formSubmitEvalu: function() {
          console.log(this.formText);
      }
  }
  
}
</script>
<style scoped>
.order-cell{
  float: left;
  width: 100%;  
  background: #ffffff;
  margin-bottom: 10px;
}
.order-cell-store{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-store .store-img{
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 0.2rem;
}
.order-cell-store .store-img .img{
  width: 100%;
  height: 20px;
}
.order-cell-store .store-left{
  float: left;
  font-size: 14px;
}
.order-cell-store .store-right{
  float: right;
  font-size: 14px;
  color: #3982f6;
}
.order-cell-shop{
  float: left;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-shop .shop-img{
  float: left;
  width: 90px;
  height: 90px;
  margin-right: 0.2rem;
}
.order-cell-shop .shop-img .img{
  width: 100%;
  height: 90px;
}
.order-cell-shop .shop-fx .shop-label{
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.order-cell-shop .shop-fx .shop-price{
  font-size: 14px;
}
.order-cell-shop .shop-fx .shop-specif{
  font-size: 14px;
  color: #aaaaaa;
}
.order-cell-shop .shop-fx .shop-specif .count{
  float: right;
}
.order-cell-shop .shop-amount{
  float: right;
  text-align: right;
  width:  100%;
  font-size: 14px;
}
.order-cell-btn{
  float: right;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
}
.order-cell-btn .btn-zf{
  float: right;
  width: 80px;
  height: 32px;
  line-height: 29px;
  text-align: center;
  background: #ffffff;
  color: #3982f6;
  border: 1px solid #3982f6;
  font-size: 14px;
  border-radius: 25px;
}
.address-add-btn{
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 44px;
  line-height:normal; 
  padding:10px 0; 
  background:linear-gradient(63deg,rgba(50,125,218,1),rgba(50,66,218,1));
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border: 0;
  border-radius: 0;
}
</style>
