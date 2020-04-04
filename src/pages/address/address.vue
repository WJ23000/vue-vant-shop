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
<<<<<<< HEAD:src/pages/address/address.vue

<style lang="stylus" scoped>
  @import './address.stylus'
=======
<style lang="stylus" scoped>
.address-cell-list {
  float: left;
  width: 100%;
}
.address-cell {
  display: flex;
  align-items: center;
  float: left;
  width: 100%;
  padding: 10px 15px;
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
}
.address-cell-left {
  float: left;
  width: 88%;
}
.address-cell-right {
  float: left;
  width: 12%;
  color: #aaaaaa;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  text-align: right;
  display: table-cell;
  vertical-align: middle;
}
.address-cell-right .edit {
  border-left: 1px solid #f2f2f2;
}
.address-option {
  float: left;
  width: 100%;
  height: 26px;
  line-height: 26px;
}
.address-option .option-user {
  float: left;
  font-size: 16px;
  margin-right: 10px;
}
.address-option .option-phone {
  font-size: 12px;
  color: #aaaaaa;
}
.address-conn {
  float: left;
  width: 98%;
  padding-right: 15px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.address-conn .address-mr {
  padding: 2px 4px;
  background: #3982f6;
  color: #ffffff;
  font-size: 12px;
}
.address-add-btn {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: linear-gradient(
    63deg,
    rgba(50, 125, 218, 1),
    rgba(50, 66, 218, 1)
  );
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border: 0;
  border-radius: 0;
}
>>>>>>> af20230ec1158711725ccd958782d84d0f6666af:src/pages/Address.vue
</style>
