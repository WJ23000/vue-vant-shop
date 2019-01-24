<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <form @submit.prevent="formSubmitPhone">
            <van-cell-group>
                <van-field
                    v-model="formText.phone"
                    name="phone"
                    clearable
                    icon="arrow"
                    placeholder="手机号码"
                    bind:click-icon="onClickIcon"
                />
                <van-field
                    v-model="formText.sms"
                    name="sms"
                    clearable
                    placeholder="请输入短信验证码"
                    use-button-slot
                >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </van-cell-group>   
            <button class='address-add-btn'  form-type="submit">提交</button>
        </form>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
import validator from '@/utils/validator';
export default {
  name: 'BindPhone',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"绑定手机号",
      formText:{
        phone:"",
        sms:""
      },
      
    }
  },
  created () {

  },
  mounted () {

  },
  methods:{
    //提交表单
    formSubmitPhone: function() {
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
    line-height:normal; 
    padding: 10px 0; 
    background:linear-gradient(63deg,rgba(50,125,218,1),rgba(50,66,218,1));
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    border: 0;
    border-radius: 0;
  }
</style>
