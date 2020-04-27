export default {
    name: 'Category',
    data() {
        return {
            navActive: 1,
            cateItems: [
                {
                    cate_id: 1,
                    cate_name: "护肤",
                    ishaveChild: true,
                    children:
                        [
                            {
                                child_id: 1,
                                name: '洁面皂',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 2,
                                name: '卸妆',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 3,
                                name: '洁面乳',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 4,
                                name: '面部祛角质',
                                image: require('../../assets/images/shop1.png')
                            }
                        ]
                },
                {
                    cate_id: 2,
                    cate_name: "彩妆",
                    ishaveChild: true,
                    children:
                        [
                            {
                                child_id: 1,
                                name: '气垫bb',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 2,
                                name: '修容/高光',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 3,
                                name: '遮瑕',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 4,
                                name: '腮红',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 5,
                                name: '粉饼',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 6,
                                name: '粉底',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 7,
                                name: '蜜粉/散粉',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 8,
                                name: '隔离霜',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 9,
                                name: '腮红',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 10,
                                name: '粉饼',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 11,
                                name: '粉底',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 12,
                                name: '蜜粉/散粉',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 13,
                                name: '隔离霜',
                                image: require('../../assets/images/shop1.png')
                            }
                        ]
                },
                {
                    cate_id: 3,
                    cate_name: "香水/香氛",
                    ishaveChild: true,
                    children:
                        [
                            {
                                child_id: 1,
                                name: '淡香水EDT',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 2,
                                name: '浓香水EDP',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 3,
                                name: '香体走珠',
                                image: require('../../assets/images/shop1.png')
                            },
                            {
                                child_id: 4,
                                name: '古龙香水男士的最爱',
                                image: require('../../assets/images/shop1.png')
                            }
                        ]
                },
                {
                    cate_id: 4,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 5,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 6,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 7,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 8,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 9,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 10,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 11,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 12,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                },
                {
                    cate_id: 13,
                    cate_name: "其他",
                    ishaveChild: false,
                    children: []
                }
            ],
            curNav: 1,
            curIndex: 0,
            curActive1: "nav_left_items active",
            curActive2: "nav_left_items"
        }
    },
    created() {

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