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
                { url: require("../../assets/s-banner1.jpg") },
                { url: require("../../assets/s-banner2.jpg") }
            ],
            gridList: [
                {
                    id: 0,
                    name: "量版专售",
                    img_src: require("../../assets/index-lb1.png")
                },
                {
                    id: 1,
                    name: "极致好货",
                    img_src: require("../../assets/index-lb2.png")
                },
                {
                    id: 2,
                    name: "智能家居",
                    img_src: require("../../assets/index-lb3.png")
                },
                {
                    id: 3,
                    name: "生活助手",
                    img_src: require("../../assets/index-lb4.png")
                }
            ],
            notice: "云逸商贸1周年，冬季大酬宾，各类电子商品、家居用品大优惠",
            goodsList: [
                {
                    id: 1,
                    title:
                        "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
                    price: 3001.0,
                    sell: 101,
                    url: "",
                    icon: require("../../assets/shop1.png")
                },
                {
                    id: 2,
                    title:
                        "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
                    price: 3002.0,
                    sell: 102,
                    url: "",
                    icon: require("../../assets/shop1.png")
                },
                {
                    id: 3,
                    title:
                        "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
                    price: 3003.0,
                    sell: 103,
                    url: "",
                    icon: require("../../assets/shop1.png")
                },
                {
                    id: 4,
                    title:
                        "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
                    price: 3004.0,
                    sell: 104,
                    url: "",
                    icon: require("../../assets/shop1.png")
                },
                {
                    id: 5,
                    title:
                        "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
                    price: 3005.0,
                    sell: 105,
                    url: "",
                    icon: require("../../assets/shop1.png")
                },
                {
                    id: 6,
                    title:
                        "智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版",
                    price: 3006.0,
                    sell: 106,
                    url: "",
                    icon: require("../../assets/shop1.png")
                }
            ]
        };
    },
    created() { },
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