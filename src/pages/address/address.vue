<template>
  <div class="address">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <div class="address-cell-list">
        <div class="address-cell">
          <div class="address-cell-left">
            <div class="address-option">
              <div class="option-user">朱果</div>
              <div class="option-phone">13856657880</div>
            </div>
            <div class="address-conn">
              <span class="address-mr">默认</span>
              <span>浙江省杭州市西湖区留下街道石马社区91号楼</span>
            </div>
          </div>
          <div class="address-cell-right">
            <div class="edit">编辑</div>
          </div>
        </div>
        <div class="address-cell">
          <div class="address-cell-left">
            <div class="address-option">
              <div class="option-user">朱果</div>
              <div class="option-phone">13856657880</div>
            </div>
            <div class="address-conn">
              <span>浙江省杭州市西湖区天目山路钱江浙商创投中心B座</span>
            </div>
          </div>
          <div class="address-cell-right">
            <div class="edit">编辑</div>
          </div>
        </div>
        <div class="address-cell">
          <div class="address-cell-left">
            <div class="address-option">
              <div class="option-user">朱果</div>
              <div class="option-phone">13856657880</div>
            </div>
            <div class="address-conn">
              <span>浙江省杭州市西湖区留下街道石马社区91号楼</span>
            </div>
          </div>
          <div class="address-cell-right">
            <div class="edit">编辑</div>
          </div>
        </div>
      </div>
      <div class="address-add-btn" @click="addressAdd">新增收货地址</div>
    </div>
  </div>
</template>

<script>
  import address from "./address";
  export default address;
</script>

<style lang="stylus" scoped>
  @import './address.stylus'
</style>
