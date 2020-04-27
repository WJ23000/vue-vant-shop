import { getGoodsList } from "@/services/index";
import Grid from "@/components/Grid";
import Notice from "@/components/Notice";
import GoodsList from "@/components/GoodsList";
import ToTop from "@/components/ToTop";

export default {
    name: "Index",
    components: {
        Grid,
        Notice,
        GoodsList,
        ToTop
    },
    data() {
        return {
            navActive: 0,
            images: [
                require("../../assets/images/banner1.jpg"),
                require("../../assets/images/banner2.jpg"),
                require("../../assets/images/banner3.jpg"),
                require("../../assets/images/banner4.jpg")
            ],
            gridList: [
                {
                    id: 0,
                    name: "量版专售",
                    img_src: require("../../assets/images/index-lb1.png")
                },
                {
                    id: 1,
                    name: "极致好货",
                    img_src: require("../../assets/images/index-lb2.png")
                },
                {
                    id: 2,
                    name: "智能家居",
                    img_src: require("../../assets/images/index-lb3.png")
                },
                {
                    id: 3,
                    name: "生活助手",
                    img_src: require("../../assets/images/index-lb4.png")
                }
            ],
            notice: "云逸商贸1周年，冬季大酬宾，各类电子商品、家居用品大优惠",
            goodsList: [ ]
        };
    },
    created() { 
        // 获取商品列表
        getGoodsList("goods").then((res) => {
            res.forEach(item => {
                item.imgUrl = require('../../assets/images/goods/' + item.title + '.jpg')
            })
            this.goodsList = res;
            console.log("商品列表", res);
        })
    },
    mounted() {
        // 监听scroll事件
        window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed() {
        // 销毁scroll事件
        window.removeEventListener('scroll', this.scrollToTop)
    },
    methods: {

    }
};