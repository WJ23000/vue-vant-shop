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
            sortImg1: require('../../assets/sort-down.png'),
            sortIndex1: 0,
            sortImg2: require('../../assets/sort-down.png'),
            sortIndex2: 0,
            viewImg: require('../../assets/view-kj.png'),
            viewIndex: 0,
            viewWay: false,
            goodsList: [
                {
                    id: 1,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3001.00,
                    sell: 101,
                    url: '',
                    icon: require('../../assets/shop1.png')
                },
                {
                    id: 2,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3002.00,
                    sell: 102,
                    url: '',
                    icon: require('../../assets/shop1.png')
                },
                {
                    id: 3,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3003.00,
                    sell: 103,
                    url: '',
                    icon: require('../../assets/shop1.png')
                },
                {
                    id: 4,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3004.00,
                    sell: 104,
                    url: '',
                    icon: require('../../assets/shop1.png')
                },
                {
                    id: 5,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3005.00,
                    sell: 105,
                    url: '',
                    icon: require('../../assets/shop1.png')
                },
                {
                    id: 6,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3006.00,
                    sell: 106,
                    url: '',
                    icon: require('../../assets/shop1.png')
                }
            ],
            query1: "参数1",
            query2: "参数2",
            query3: "参数3",
        }
    },
    created() {
        this.loadList()
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
                this.sortImg1 = require('../../assets/sort-up.png'),
                    this.sortIndex1 = 1,
                    this.query2 = "低",
                    this.loadList()
            } else {
                this.sortImg1 = require('../../assets/sort-down.png'),
                    this.sortIndex1 = 0,
                    this.query2 = "高",
                    this.loadList()
            }
        },
        searchSort2: function (e) {
            if (this.sortIndex2 == 0) {
                this.sortImg2 = require('../../assets/sort-up.png'),
                    this.sortIndex2 = 1,
                    this.query3 = "便宜",
                    this.loadList()
            } else {
                this.sortImg2 = require('../../assets/sort-down.png'),
                    this.sortIndex2 = 0,
                    this.query3 = "昂贵",
                    this.loadList()
            }
        },
        viewSort: function (e) {
            if (this.viewIndex == 0) {
                this.viewImg = require('../../assets/view-hj.png'),
                    this.viewIndex = 1,
                    this.viewWay = true
            } else {
                this.viewImg = require('../../assets/view-kj.png'),
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