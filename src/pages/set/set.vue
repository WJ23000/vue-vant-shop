<template>
  <div class="set">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <van-cell title="绑定手机号" is-link :to="{path:'/bindPhone'}"/>
      <van-cell title="清除缓存" @click="clearCache" is-link/>
    </div>
  </div>
</template>

<script>
  import set from "./set";
  export default set;
</script>

<style lang="stylus" scoped>
  @import './set.stylus'
</style>