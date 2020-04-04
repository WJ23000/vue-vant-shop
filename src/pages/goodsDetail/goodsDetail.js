import { ImagePreview } from 'vant';
import HeaderTwo from '@/components/HeaderTwo';
import ToTop from "@/components/ToTop";

export default {
    name: 'GoodsDetail',
    components: {
        HeaderTwo,
        ToTop
    },
    data() {
        return {
            title: "商品详情",
            goodsId: "",
            isLike: false,
            images: [
                require('../../assets/s-banner1.jpg'),
                require('../../assets/s-banner2.jpg')
            ],
            // 商品详情介绍
            detailImg: [
                { img: require('../../assets/sp-detail1.png') },
                { img: require('../../assets/sp-detail2.png') }
            ],
            // 评价列表
            commentList: [
                {
                    id: 1,
                    userImg: require('../../assets/user.png'),
                    userName: "大黑",
                    content: "商家很靠谱，物美价廉、商品质量真的很不错，下次还会再来的",
                    goodsImg: [
                        require('../../assets/shop1.png'),
                        require('../../assets/shop1.png'),
                        require('../../assets/shop1.png')
                    ],
                    createTime: "2019-02-25 15:23:30",
                    likeNum: 554,
                    isLike: true
                }
            ],
            // 规格
            specifImg: require('../../assets/shop1.png'),
            specifTitle: "选择 规格参数",
            specifPrice: "3500-4000",
            specifStock: "5000",
            skuId: "",
            sku_list: [
                {
                    id: 1,
                    sku_id: 1001001,
                    img: "/image/shop1.png",
                    title: "亮黑色 至尊版",
                    price: 3000,
                    stock: 10,
                    spec_key: "101,101"
                },
                {
                    id: 2,
                    sku_id: 1001002,
                    img: "/image/shop1.png",
                    title: "亮黑色 荣耀版",
                    price: 4000,
                    stock: 0,
                    spec_key: "101,102"
                },
                {
                    id: 3,
                    sku_id: 1001003,
                    img: "/image/shop1.png",
                    title: "炫紫色 至尊版",
                    price: 5000,
                    stock: 20,
                    spec_key: "102,101"
                },
                {
                    id: 4,
                    sku_id: 1001004,
                    img: "/image/shop1.png",
                    title: "炫紫色 荣耀版",
                    price: 6000,
                    stock: 15,
                    spec_key: "102,102"
                }
            ],
            specif_list: [
                {
                    pId: 101,
                    pName: "颜色",
                    info: [
                        {
                            id: 0,
                            spec_id: 101,
                            spec_val: "亮黑色",
                            is_click: 0
                        },
                        {
                            id: 1,
                            spec_id: 102,
                            spec_val: "炫紫色",
                            is_click: 0
                        }
                    ]
                },
                {
                    pId: 102,
                    pName: "版本",
                    info: [
                        {
                            spec_id: 101,
                            spec_val: "至尊版",
                            is_click: 0
                        },
                        {
                            spec_id: 102,
                            spec_val: "荣耀版",
                            is_click: 0
                        }
                    ]
                }
            ],
            arrId: [],
            selectArr: [], //存放被选中的值
            shopItemInfo: {}, //存放要和选中的值进行匹配的数据
            subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断


            show: false,
            specifValue: "选择 商品规格",
            specifCount: 1
        }
    },
    created() {
        let that = this;
        that.$toast({
            message: "商品id:" + that.$route.query.goodsId,
            duration: 500
        });
        that.goodsId = that.$route.query.goodsId;

        //商品规格初始化
        for (var i in that.sku_list) {
            that.shopItemInfo[that.sku_list[i].spec_key] = that.sku_list[i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
        }
        that.checkItem();
    },
    mounted() {

    },
    methods: {
        //获取当前选中的规格参数z
        xzSpecif: function (item, findex, event, zindex) {
            let that = this;
            if (that.selectArr[findex] != item) {
                that.selectArr[findex] = item;
                that.subIndex[findex] = zindex;

            } else {
                that.selectArr[findex] = "";
                that.subIndex[findex] = -1; //去掉选中的颜色 
            }

            //初始化arrId
            let arrId = that.arrId;
            //把点击的规格名称和规格id存起来
            arrId[findex] = item;
            //拼接规格id（后台返回的数据是这个）
            let selectGuigeId = arrId.join(',');
            //匹配skuId
            for (let i = 0; i < that.sku_list.length; i++) {
                //找对应的规格组合
                if (that.sku_list[i].spec_key == selectGuigeId) {
                    let guilists = that.sku_list[i];
                    //设置规格预览效果
                    that.skuId = guilists.sku_id;
                    that.specifImg = guilists.img;
                    that.specifPrice = guilists.price;
                    that.specifStock = guilists.stock;
                    that.specifTitle = '已选:"' + guilists.title + '"';
                    that.specifValue = '已选:"' + guilists.title + '"';
                }
            }
            that.checkItem();
        },
        checkItem: function () {
            let that = this;
            var option = that.specif_list;
            var result = [];  //定义数组存储被选中的值
            for (var i in option) {
                result[i] = that.selectArr[i] ? that.selectArr[i] : '';
            }
            for (var i in option) {
                var last = result[i];  //把选中的值存放到字符串last去
                for (var k in option[i].info) {
                    result[i] = option[i].info[k].spec_id; //赋值，存在直接覆盖，不存在往里面添加name值
                    option[i].info[k].isShow = that.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
                }
                result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
            }
            that.$forceUpdate(); //重绘
        },
        isMay: function (result) {
            let that = this;
            let guilists = {};
            for (var i in result) {
                if (result[i] == '') {
                    return true; //如果数组里有为空的值，那直接返回true
                }
            }
            return that.shopItemInfo[result].stock == 0 ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false  
        },



        //打开商品规格和购买数量
        onSpecif: function () {
            this.show = true
        },
        closeSpecif: function () {
            this.show = false
        },
        //点击蒙层商品规格和购买数量弹层
        onClose: function () {
            this.show = false
        },
        //收藏
        addLike() {
            let likeId = this.goodsId;
            console.log(likeId);
            let likeState = this.isLike;
            if (likeState == true) {
                this.isLike = !this.isLike;
                this.$toast("已取消收藏")
            } else {
                this.isLike = !this.isLike;
                this.$toast("收藏")
            }
        },
        //跳到购物车
        tzCart() {
            this.$router.push({ path: '/cart', params: { id: "1" } });
        },
        //加入购物车
        onCart() {
            this.show = true
        },
        //立即购买
        onBuy() {
            this.show = true
        },
        //轮播图图片预览
        swipeImgPreview: function () {
            ImagePreview(this.images);
        },
        //商品规格图片预览
        specifImgPreview: function (img) {
            let imgArray = [];
            imgArray.push(img)
            ImagePreview(imgArray);
        }
    }

}