<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <form @submit.prevent="formSubmitAddress">
          <div>
            <van-cell-group>
              <van-field
                v-model="formText.username"
                name="username"
                clearable
                icon="arrow"
                placeholder="收货人"
                bind:click-icon="onClickIcon"
              />
              <van-field
                v-model="formText.phone"
                name="phone"
                clearable
                icon="arrow"
                placeholder="手机号码"
                bind:click-icon="onClickIcon"
              />
              <van-field
                v-model="formText.address"
                name="address"
                icon="arrow"
                placeholder="选择地区"
                @click.native="onAddress"
                disabled
              />
              <van-popup
                v-model="showSet"
                position="bottom"
                bind:click-overlay="onClose"
              >
                <van-area :area-list="areaList" @cancel="closeArea" @confirm="okArea"/>
              </van-popup>
              <van-field
                v-model="formText.city"
                name="city"
                clearable
                icon="arrow"
                placeholder="详细地址"
              />             
              <van-switch-cell
                v-model="formText.checked"
                name="switch"
                title="设为默认"
              />
            </van-cell-group>   
          </div>
          <div>
            <button class='address-add-btn'  form-type="submit">保存</button>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
import areaVal from '@/utils/areaList'
export default {
  name: 'AddressAdd',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"收货地址",
      formText:{
        username:"",
        phone:"",
        address:"",
        city:"",
        checked:false
      },
      showSet: false,
      areaList: areaVal.areaList,
    }
  },
  created () {

  },
  mounted () {

  },
  methods:{
      
      //打开地址选择器
      onAddress: function () {
        this.showSet= true 
      },
      //点击蒙层关闭地址选择器弹层
      onClose: function () {
        this.showSet= false 
      },
      //关闭地址选择器
      closeArea: function () {
        this.showSet= false 
      },
      //确认地址选择器地址
      okArea: function (value) {
        const addressVal = value;
        console.log(addressVal);
        const provinceVal=addressVal[0].name+",";
        const cityVal = addressVal[1].name + ",";
        const countyVal = addressVal[2].name;
        
        this.formText.address= provinceVal + cityVal + countyVal,
        this.showSet= false 
      },
      //提交表单
      formSubmitAddress: function() {
          console.log(this.formText);
      }
  }
  
}
</script>
<style scoped>
.address-add-btn{
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 44px;
  line-height:44px; 
  background:linear-gradient(63deg,rgba(50,125,218,1),rgba(50,66,218,1));
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border: 0;
  border-radius: 0;
}
</style>
