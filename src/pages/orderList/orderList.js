import HeaderTwo from '@/components/HeaderTwo';

export default {
    name: 'OrderList',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "我的订单",
            active: 0
        }
    },
    created() {
        this.active = this.$route.query.indexId;
    },
    mounted() {

    },
    methods: {
        //TAB页切换
        onTab(index, title) {
            this.$toast(title);
        },
        //提醒商家发货
        remindGoods: function () {
            this.$dialog.confirm({
                title: '订单',
                message: '是否提醒商家发货'
            }).then(() => {
                this.$notify({
                    message: '提醒发货成功',
                    background: '#3982f6'
                });
            }).catch(() => {
                // on cancel
            });
        },
        //确认收货
        okGoods: function () {
            this.$dialog.confirm({
                title: '订单',
                message: '是否确认收货'
            }).then(() => {
                this.$notify({
                    message: '确认收货成功',
                    background: '#3982f6'
                });
            }).catch(() => {
                // on cancel
            });
        }
    }

}