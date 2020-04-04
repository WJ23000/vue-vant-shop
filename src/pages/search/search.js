export default {
    name: 'Search',
    data() {
        return {
            searchVal: "",
            searchList: [],
            searchListSet: [
                {
                    id: 1,
                    title: 'Iphone6sPlus'
                },
                {
                    id: 2,
                    title: '华为荣耀'
                },
                {
                    id: 3,
                    title: '一加'
                },
                {
                    id: 4,
                    title: 'OPPO'
                }
            ],
            showVal: true
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        // 输入内容触发搜索
        onSearch: function () {
            if (this.searchVal.length > 0) {
                this.showVal = false
            } else {
                this.showVal = true
            }
        },
        // 返回首页
        onCancel: function () {
            this.$router.go(-1)
        }
    }

}