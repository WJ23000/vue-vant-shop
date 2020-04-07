<template>
  <div class="error">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <div class="text">找不到当前页面，请稍后重试！</div>
    </div>
  </div>
</template>

<script>
  import error from "./error";
  export default error;
</script>

<style lang="stylus" scoped>
  @import './error.stylus'
</style>