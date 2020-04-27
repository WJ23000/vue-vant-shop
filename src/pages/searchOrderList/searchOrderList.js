import { getGoodsList } from "@/services/index";
import HeaderTwo from '@/components/HeaderTwo';
import GoodsList from '@/components/GoodsList';

export default {
    name: 'searchOrderList',
    components: {
        HeaderTwo,
        GoodsList
    },
    data() {
        return {
            title: "商品列表",
            textColor: "",
            textIndex: 0,
            sortImg1: require('../../assets/images/sort-down.png'),
            sortIndex1: 0,
            sortImg2: require('../../assets/images/sort-down.png'),
            sortIndex2: 0,
            viewImg: require('../../assets/images/view-kj.png'),
            viewIndex: 0,
            viewWay: false,
            goodsList: [
                {
                    id: 1,
                    title: 'DJI 大疆 悟2 INSPIRE 2 航拍变形无人机飞行器 遥控飞机',
                    price: 3001.00,
                    sell: 101,
                    url: '',
                    imgUrl: require('../../assets/images/shop1.png')
                },
                {
                    id: 2,
                    title: 'DJI 大疆 悟2 INSPIRE 2 航拍变形无人机飞行器 遥控飞机',
                    price: 3002.00,
                    sell: 102,
                    url: '',
                    imgUrl: require('../../assets/images/shop1.png')
                },
                {
                    id: 3,
                    title: 'DJI 大疆 悟2 INSPIRE 2 航拍变形无人机飞行器 遥控飞机',
                    price: 3003.00,
                    sell: 103,
                    url: '',
                    imgUrl: require('../../assets/images/shop1.png')
                },
                {
                    id: 4,
                    title: 'DJI 大疆 悟2 INSPIRE 2 航拍变形无人机飞行器 遥控飞机',
                    price: 3004.00,
                    sell: 104,
                    url: '',
                    imgUrl: require('../../assets/images/shop1.png')
                },
                {
                    id: 5,
                    title: 'DJI 大疆 悟2 INSPIRE 2 航拍变形无人机飞行器 遥控飞机',
                    price: 3005.00,
                    sell: 105,
                    url: '',
                    imgUrl: require('../../assets/images/shop1.png')
                },
                {
                    id: 6,
                    title: 'DJI 大疆 悟2 INSPIRE 2 航拍变形无人机飞行器 遥控飞机',
                    price: 3006.00,
                    sell: 106,
                    url: '',
                    imgUrl: require('../../assets/images/shop1.png')
                }
            ],
            query1: "参数1",
            query2: "参数2",
            query3: "参数3",
        }
    },
    created() {
        this.loadList()
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

    },
    methods: {
        /*  查询条件   */
        textSort: function (e) {
            if (this.textIndex == 0) {
                this.textColor = "textColor",
                    this.textIndex = 1,
                    this.query1 = "综合",
                    this.loadList()
            } else {
                this.textColor = "",
                    this.textIndex = 0,
                    this.query1 = "默认",
                    this.loadList()
            }
        },
        searchSort1: function (e) {
            if (this.sortIndex1 == 0) {
                this.sortImg1 = require('../../assets/images/sort-up.png'),
                    this.sortIndex1 = 1,
                    this.query2 = "低",
                    this.loadList()
            } else {
                this.sortImg1 = require('../../assets/images/sort-down.png'),
                    this.sortIndex1 = 0,
                    this.query2 = "高",
                    this.loadList()
            }
        },
        searchSort2: function (e) {
            if (this.sortIndex2 == 0) {
                this.sortImg2 = require('../../assets/images/sort-up.png'),
                    this.sortIndex2 = 1,
                    this.query3 = "便宜",
                    this.loadList()
            } else {
                this.sortImg2 = require('../../assets/images/sort-down.png'),
                    this.sortIndex2 = 0,
                    this.query3 = "昂贵",
                    this.loadList()
            }
        },
        viewSort: function (e) {
            if (this.viewIndex == 0) {
                this.viewImg = require('../../assets/images/view-hj.png'),
                    this.viewIndex = 1,
                    this.viewWay = true
            } else {
                this.viewImg = require('../../assets/images/view-kj.png'),
                    this.viewIndex = 0,
                    this.viewWay = false
            }
        },


        // 数据请求
        loadList: function () {
            let param1 = this.query1;
            let param2 = this.query2;
            let param3 = this.query3;
            this.$toast({
                message: "请求参数=" + param1 + ',' + param2 + ',' + param3,
                duration: 1000
            });
        },
    }

}