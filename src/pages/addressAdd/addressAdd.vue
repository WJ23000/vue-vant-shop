<template>
  <div class="addressAdd">
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
                placeholder="所在地区"
                @click.native="onAddress"
                disabled
                is-link
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
                type="textarea"
                placeholder="详细地址:如道路、门牌号、小区、楼栋号、单元室等"
              />        
              <div style="margin-top: 10px;">
                <van-switch-cell
                  v-model="formText.checked"
                  name="switch"
                  title="设为默认地址"
                />
              </div>     
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
  import addressAdd from "./addressAdd";
  export default addressAdd;
</script>

<style lang="stylus" scoped>
  @import './addressAdd.stylus'
</style>