import { getCategoryList } from "@/services/category";

export default {
    name: 'Category',
    data() {
        return {
            navActive: 1,
            cateItems: [],
            curNav: 1,
            curIndex: 0,
            curActive1: "nav_left_items active",
            curActive2: "nav_left_items"
        }
    },
    created() {
        // 获取分类列表
        getCategoryList("category").then((res) => {
            res.forEach(item => {
                item.children.forEach(vv => {
                    vv.imgUrl = require('../../assets/images/category/' + vv.name + '.jpg')
                })
            })
            this.cateItems = res;
            console.log("分类列表", res);
        })
    },
    mounted() {

    },
    methods: {
        //事件处理函数  
        switchRightTab: function (id, index) {
            // 获取item项的id，和数组的下标值  
            var id = id,
                index = parseInt(index);
            // 把点击到的某一项，设为当前index  
            this.curNav = id,
                this.curIndex = index
        }
    }

}