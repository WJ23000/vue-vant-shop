<template>
  <div class="login">
    <div class="page-header">
      <Header :titleVal="title"></Header>
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
        <div class="btn-cell">
            <van-button type="primary" size="large" form-type="submit" class="login-btn">登录</van-button>
        </div>  
      </form>
      <div class="login-option-title">第三方登录</div>
      <div class="login-option-content">
          <span class="login-author" @click="qqLogin"><img src="../../assets/images/qq-icon.png"/></span>
          <span class="login-author" @click="wxLogin"><img src="../../assets/images/wx-icon.png"/></span>
      </div>
    </div>
  </div>
</template>

<script>
  import login from "./login";
  export default login;
</script>

<style lang="stylus" scoped>
  @import './login.stylus'
</style>