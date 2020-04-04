import HeaderTwo from "@/components/HeaderTwo";

export default {
    name: "Address",
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "收货地址"
        };
    },
    created() { },
    mounted() { },
    methods: {
        //添加新地址
        addressAdd: function () {
            this.$router.push({ path: "/addressAdd", params: { id: "1" } });
        }
    }
};