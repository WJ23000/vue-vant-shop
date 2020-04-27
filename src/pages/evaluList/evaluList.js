import HeaderTwo from '@/components/HeaderTwo';

export default {
    name: 'EvaluList',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "我的评价",
            evaluListVuex: [
                {
                    id: 1,
                    name: "乐购商城",
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3500.00,
                    static: "已评价",
                    specif: "蓝色",
                    count: 2,
                    url: '',
                    icon: require('../../assets/images/shop1.png')
                },
                {
                    id: 2,
                    name: "乐购商城",
                    title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                    price: 3500.00,
                    static: "已评价",
                    specif: "蓝色",
                    count: 2,
                    url: '',
                    icon: require('../../assets/images/shop1.png')
                }
            ]
        }
    },
    created() {
        // 调用vuex的ations设置评论列表的值
        this.$store.dispatch("setEvaluListFn", this.evaluListVuex);
    },
    mounted() {

    },
    computed: {
        evaluList: function () {
            // 通过vuex的getters方法来获取state里面的数据
            return this.$store.getters.getEvaluListFn;
        }
    },
    methods: {

    }

}