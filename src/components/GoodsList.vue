<template>
    <div class='goods-list'>
        <div class='goods-grid' v-for="(item,index) in goodsListData" :key="index">
            <router-link :to="{path:'/GoodsDetail',query: {goodsId: item.id}}">
                <div class='goods-icon'>
                    <img :src="item.icon"/>
                </div>
                <div class='goods-detail'>
                    <span class='goods-title'>{{item.title}}</span>
                    <span class='goods-price'>￥{{item.price}}</span>
                    <span class='goods-sell'>已出售{{item.sell}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'goodsList',
    props:['goodsListVal'],
    data () {
        return {
            goodsListData: this.goodsListVal
        }
    },
    created () {
        
    }
}
</script>
<style>
    /* 商品列表 */
    .goods-list{
        float: left;
        width: 100%;
        padding: 10px 10px;
        background: #ffffff;
        box-sizing: border-box;
        margin-top: 44px;
    }
    .goods-grid{
        float: left;
        width: 45.3%;
        margin: 2%;
        border: 1px solid #f2f2f2;
        border-radius: 5px;
    }
    .goods-grid a{
        float: left;
        color: #333333;
    }
    .goods-grid .goods-icon img{
        float: left;
        width: 100%;
    }
    .goods-grid .goods-detail{
        float: left;
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box; 
    }
    .goods-grid .goods-title{
        float: left;
        width: 100%;
        height: 38px;
        font-size: 14px;
        display:-webkit-box;
        /*! autoprefixer: off */
        -webkit-box-orient:vertical;
        /* autoprefixer: on */
        overflow:hidden;
        -webkit-line-clamp:2;
    }
    .goods-grid .goods-price{
        float: left;
        text-align: left;
        font-size: 14px;
        color: #3982f6;
    }
    .goods-grid .goods-sell{
        float: right;
        margin-top: 2px;
        text-align: right;
        font-size: 12px;
        color: #999999;
    }
</style>

