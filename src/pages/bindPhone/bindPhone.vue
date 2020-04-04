<template>
  <div class="bindPhone">
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
  import bindPhone from "./bindPhone";
  export default bindPhone;
</script>

<style lang="stylus" scoped>
  @import './bindPhone.stylus'
</style>