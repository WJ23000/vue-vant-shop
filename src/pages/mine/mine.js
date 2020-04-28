import { getUserInfo } from "@/services/mine";

export default {
    name: "Mine",
    data() {
        return {
            navActive: 3,
            userImg: "",
            userName: "测试用户",
            gridsList: [
                {
                    id: 0,
                    name: "代付款",
                    url: "",
                    icon: require("../../assets/images/mine-order1.png")
                },
                {
                    id: 1,
                    name: "已发货",
                    url: "",
                    icon: require("../../assets/images/mine-order2.png")
                },
                {
                    id: 2,
                    name: "待收货",
                    url: "",
                    icon: require("../../assets/images/mine-order3.png")
                },
                {
                    id: 3,
                    name: "待评价",
                    url: "",
                    icon: require("../../assets/images/mine-order4.png")
                }
            ]
        };
    },
    created() {
        // 获取用户信息
        getUserInfo("user").then((res) => {
            this.userName = res.userName;
            this.userImg = require('../../assets/images/user.png');
        })
    },
    mounted() {

    },
    methods: {
        
    }
};