<template>
  <div class="page">
    <div class="page-header">
      <van-search
        v-model="searchVal"
        placeholder="请输入搜索关键词"
        show-action
        bind:search="onSearch"
      >
        <div slot="action" @click="onCancel">取消</div>
      </van-search>
    </div>
    <div class="page-content" style="background: #ffffff;">
        <div class='search-history-title'>搜索历史</div>
        <div class='search-cell'>
          <div class='search-option'>手机</div>
          <div class='search-option'>衣服</div>
          <div class='search-option'>化妆品</div>
          <div class='search-option'>首饰</div>
          <div class='search-option'>皮包</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchVal:""
    }
  },
  created () {

  },
  mounted () {
  
  },
  methods:{
    onCancel: function () {
      this.$router.go(-1)
    }
  }
  
}
</script>
<style scoped>
  .search-history-title{
    float: left;
    width: 100%;
    font-size: 16px;
    padding: 10px 15px;
    box-sizing: border-box;
  }
  .search-cell{
    padding: 10px 0px;
  }
  .search-cell .search-option{
    float: left;
    margin: 5px 15px;
    text-align: center;
    padding: 5px 15px;
    font-size: 14px;
    background: #f2f2f2;
    color: #666666;
    border-radius: 25px;
  }
</style>
