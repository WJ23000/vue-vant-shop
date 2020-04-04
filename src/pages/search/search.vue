<template>
  <div class="search">
    <div class="page-header">
      <van-search
        v-model="searchVal"
        placeholder="请输入搜索关键词"
        show-action
        v-on:input="onSearch"
      >
        <div slot="action" @click="onCancel">取消</div>
      </van-search>
    </div>
    <div class="page-content" style="background: #ffffff;">
      <div v-if="showVal">
        <div class='search-history-title'>搜索历史</div>
        <div class='search-cell'>
          <div class='search-option'>手机</div>
          <div class='search-option'>衣服</div>
          <div class='search-option'>化妆品</div>
          <div class='search-option'>首饰</div>
          <div class='search-option'>皮包</div>
        </div>
      </div>
      <div v-else>
        <div v-for="(item,index) in searchListSet" :key="index">
          <router-link :to="{path:'/searchOrderList',query: {searchId: item.id}}">
            <van-cell-group>
              <van-cell
                :title="item.title"
              />
            </van-cell-group>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import search from "./search";
  export default search;
</script>

<style lang="stylus" scoped>
  @import './search.stylus'
</style>