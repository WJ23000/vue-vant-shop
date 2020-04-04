import Header from '@/components/Header';

export default {
    name: 'Cart',
    data() {
        return {
            title: "购物车",
            navActive: 2,
            cartItems: [
                {
                    id: 1,
                    title: '智能飞行器',
                    price: 3500.00,
                    specif: "默认",
                    value: 1,
                    sell: 101,
                    url: '',
                    selected: false,
                    icon: require('../../assets/shop1.png')
                },
                {
                    id: 2,
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3500.00,
                    specif: "蓝色",
                    value: 2,
                    sell: 102,
                    url: '',
                    selected: false,
                    icon: require('../../assets/shop1.png')
                }
            ],
            total: 0,
            CheckAll: false,
            goodsCount: 0,
            delCount: 0,
            showVal: false,
            iconXz: require('../../assets/check-xz.png'),
            iconWxz: require('../../assets/check-Wxz.png'),

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        //全选
        select: function (e) {
            var CheckAll = this.CheckAll;

            CheckAll = !CheckAll
            var cartItems = this.cartItems

            for (var i = 0; i < cartItems.length; i++) {
                cartItems[i].selected = CheckAll
            }

            this.cartItems = cartItems,
                this.CheckAll = CheckAll
            //计算总金额
            this.getSumTotal()
            //计算商品数量
            this.getGoodsCount();
            //计算删除数量
            this.delGoodsCount();
        },
        //加
        add: function (e) {
            var cartItems = this.cartItems   //获取购物车列表
            console.log(cartItems);
            var index = e.currentTarget.dataset.index //获取当前点击事件的下标索引
            console.log(index);
            var value = cartItems[index].value  //获取购物车里面的value值

            value++
            cartItems[index].value = value;
            this.cartItems = cartItems
            this.getSumTotal()
        },
        //减
        reduce: function (e) {
            var cartItems = this.cartItems  //获取购物车列表
            var index = e.currentTarget.dataset.index  //获取当前点击事件的下标索引
            var value = cartItems[index].value  //获取购物车里面的value值

            if (value == 1) {
                value--
                cartItems[index].value = 1
            } else {
                value--
                cartItems[index].value = value;
            }
            this.cartItems = cartItems
            this.getSumTotal()
        },
        //单选
        selectedCart: function (e) {
            var cartItems = this.cartItems   //获取购物车列表
            var index = e.currentTarget.dataset.index;  //获取当前点击事件的下标索引
            var selected = cartItems[index].selected;    //获取当前点击事件的下标索引是否选中

            //取反
            cartItems[index].selected = !selected;
            this.cartItems = cartItems
            //计算总金额
            this.getSumTotal();
            //计算商品数量
            this.getGoodsCount();
            //计算删除数量
            this.delGoodsCount();
        },

        //删除
        del: function (e) {
            let delState = true;
            let cartItems = this.cartItems  //获取购物车列表
            console.log(cartItems.length)
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].selected == delState) {
                    cartItems.splice(i, 1)
                    //更新删除数量数据
                    this.delCount = i
                    i = i - 1;
                }
            }
            this.cartItems = cartItems
            this.total = 0,
                this.goodsCount = 0,
                this.CheckAll = false
        },

        //删除数量方法
        delGoodsCount: function () {
            let count = 0;
            let i = 0;
            for (i; i < this.cartItems.length; i++) {
                if (this.cartItems[i].selected) {
                    count = count + 1;
                }
            }
            //更新删除数量数据
            this.delCount = count
        },

        //结算
        payOrder: function () {
            this.$router.push({ path: '/payOrder', params: { orderId: 1 } });
        },
        //合计
        getSumTotal: function () {
            console.log("触发了嘛");
            console.log(this.cartItems);
            var sum = 0
            for (var i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].selected) {
                    sum += this.cartItems[i].value * this.cartItems[i].price
                }
            }
            //更新数据
            this.total = sum
        },
        //商品总数量
        getGoodsCount: function () {
            var count = 0;
            var i = 0;
            for (i; i < this.cartItems.length; i++) {
                if (this.cartItems[i].selected) {
                    count = count + 1;
                }
            }
            //更新数据
            this.goodsCount = count
        },
        //编辑
        onRightEdit() {
            this.showVal = true
        },
        //取消删除功能
        cancel() {
            this.showVal = false
        }
    }

}