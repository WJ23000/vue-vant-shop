<template>
  <div class="searchOrderList">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
      <div class='sort-wrap'>
        <div class='sort-btn' :data-index="textIndex" @click="textSort">
          <div :class="textColor">综合</div>
        </div>
        <div class='sort-btn' :data-index="sortIndex1" @click="searchSort1">
          销量
          <img :src="sortImg1"/>
        </div>
        <div class='sort-btn' :data-index="sortIndex2" @click="searchSort2">
          价格
          <img :src="sortImg2"/>
        </div>
        <div class='sort-btn' :data-index="viewIndex" @click="viewSort">
          <img :src="viewImg" class='view-Img'/>
        </div>
      </div>
      <div class="goods-content">
        <GoodsList :goodsListVal="goodsList" :viewWayVal="viewWay"></GoodsList>
      </div>
    </div>
  </div>
</template>

<script>
  import searchOrderList from "./searchOrderList";
  export default searchOrderList;
</script>

<style lang="stylus" scoped>
  @import './searchOrderList.stylus'
</style>