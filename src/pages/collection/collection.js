import HeaderTwo from '@/components/HeaderTwo';

export default {
    name: 'Collection',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "我的收藏",
            collectionList: [
                {
                    id: 1,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3001.00,
                    sell: 101,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                },
                {
                    id: 2,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3002.00,
                    sell: 102,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                },
                {
                    id: 3,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3003.00,
                    sell: 103,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                },
                {
                    id: 4,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3004.00,
                    sell: 104,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                },
                {
                    id: 5,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3005.00,
                    sell: 105,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                },
                {
                    id: 6,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3006.00,
                    sell: 106,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                }
            ],
            collectionListAdd: [
                {
                    id: 7,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3007.00,
                    sell: 107,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                },
                {
                    id: 8,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3008.00,
                    sell: 108,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                },
                {
                    id: 9,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3009.00,
                    sell: 109,
                    url: '',
                    icon: require('../../assets/shop1.png'),
                    selected: false
                }
            ],
            CheckAll: false,
            delCount: 0,
            showVal: true,
            iconXz: require('../../assets/check-xz.png'),
            iconWxz: require('../../assets/check-Wxz.png'),
            curActive1: "order-cell order-active",
            curActive2: "order-cell",
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        edit: function () {
            this.showVal = false
        },
        cancel: function () {
            this.showVal = true
        },

        // 全选
        selectAll: function (e) {
            let CheckAll = this.CheckAll;
            CheckAll = !CheckAll
            let collectionList = this.collectionList
            for (let i = 0; i < collectionList.length; i++) {
                collectionList[i].selected = CheckAll
            }
            this.collectionList = collectionList,
                this.delList = collectionList,
                this.CheckAll = CheckAll
            // 计算删除数量
            this.delCollectionCount();
        },

        // 单选
        selectSingle: function (e) {
            let collectionList = this.collectionList //获取购物车列表
            let index = e.currentTarget.dataset.index; //获取当前点击事件的下标索引
            let selected = collectionList[index].selected; //获取当前点击事件的下标索引是否选中
            // 取反
            collectionList[index].selected = !selected;
            this.collectionList = collectionList,
                this.delList = collectionList,
                // 计算删除数量
                this.delCollectionCount();
        },

        // 删除
        del: function (e) {
            let delState = true;
            let collectionList = this.collectionList //获取购物车列表
            console.log(collectionList.length)
            for (let i = 0; i < collectionList.length; i++) {
                if (collectionList[i].selected == delState) {
                    collectionList.splice(i, 1)
                    // 更新删除数量数据
                    this.delCount = i
                    i = i - 1;
                }
            }
            this.collectionList = collectionList
        },

        // 删除数量方法
        delCollectionCount: function () {
            let count = 0;
            let i = 0;
            for (i; i < this.collectionList.length; i++) {
                if (this.collectionList[i].selected) {
                    count = count + 1;
                }
            }
            // 更新删除数量数据
            this.delCount = count
        },

        // 下拉刷新
        refresh(done) {
            let that = this;
            that.$toast("已触发下拉刷新")
            setTimeout(() => {
                that.$refs.my_scroller.finishPullToRefresh(); //停止下拉刷新动效
            }, 3000)
        },
        // 上拉加载
        infinite(done) {
            if (this.bottom >= 3) {
                setTimeout(() => {
                    done(true)
                }, 1500)
                return;
            }
            setTimeout(() => {
                let start = 3
                for (let i = 0; i < start; i++) {
                    this.collectionList.push(this.collectionListAdd[i])
                }
                this.bottom = 3;
                setTimeout(() => {
                    done()
                })
            }, 1500)
        }
    }

}