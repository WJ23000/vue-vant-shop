import requestUrl from "@/utils/commonUrl";

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
                    icon: require("../../assets/mine-order1.png")
                },
                {
                    id: 1,
                    name: "已发货",
                    url: "",
                    icon: require("../../assets/mine-order2.png")
                },
                {
                    id: 2,
                    name: "待收货",
                    url: "",
                    icon: require("../../assets/mine-order3.png")
                },
                {
                    id: 3,
                    name: "待评价",
                    url: "",
                    icon: require("../../assets/mine-order4.png")
                }
            ]
        };
    },
    created() { },
    mounted() {
        this.getUserInfo();
    },
    methods: {
        //请求用户信息
        getUserInfo: function () {
            var _this = this;
            let params = "";
            let url = requestUrl.testUrl + "/userInfo";
            this.$http
                .post(url, params)
                .then(function (res) {
                    let resData = res.data;
                    _this.userImg = resData.userImg;
                    _this.userName = resData.userName;
                })
                .catch(function (error) {
                    alert(error);
                });
        }
    }
};