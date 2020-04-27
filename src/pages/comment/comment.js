import { ImagePreview } from 'vant';
import HeaderTwo from '@/components/HeaderTwo';

export default {
    name: 'Comment',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "商品评价",
            commentList: [
                {
                    id: 1,
                    userImg: require('../../assets/images/user.png'),
                    userName: "大黑",
                    content: "商家很靠谱，物美价廉、商品质量真的很不错，下次还会再来的",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg'),
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg'),
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-25 15:23:30",
                    likeNum: 554,
                    isLike: 1
                },
                {
                    id: 2,
                    userImg: require('../../assets/images/user.png'),
                    userName: "二黑",
                    content: "商品质量真的很不错2",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg'),
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-26 17:23:30",
                    likeNum: 699,
                    isLike: 0
                },
                {
                    id: 3,
                    userImg: require('../../assets/images/user.png'),
                    userName: "三黑",
                    content: "商品质量真的很不错3",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg'),
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-27 19:23:30",
                    likeNum: 255,
                    isLike: 1
                },
                {
                    id: 4,
                    userImg: require('../../assets/images/user.png'),
                    userName: "四黑",
                    content: "商品质量真的很不错4",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-25 15:23:30",
                    likeNum: 388,
                    isLike: 1
                },
                {
                    id: 5,
                    userImg: require('../../assets/images/user.png'),
                    userName: "五黑",
                    content: "商品质量真的很不错5",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-26 17:23:30",
                    likeNum: 552,
                    isLike: 0
                },
                {
                    id: 6,
                    userImg: require('../../assets/images/user.png'),
                    userName: "六黑",
                    content: "商品质量真的很不错6",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg'),
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg'),
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-27 19:23:30",
                    likeNum: 6666,
                    isLike: 1
                },
                {
                    id: 7,
                    userImg: require('../../assets/images/user.png'),
                    userName: "五黑",
                    content: "商品质量真的很不错7",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg'),
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-26 17:23:30",
                    likeNum: 788,
                    isLike: 0
                },
                {
                    id: 8,
                    userImg: require('../../assets/images/user.png'),
                    userName: "六黑",
                    content: "商品质量真的很不错8",
                    goodsImg: [
                        require('../../assets/images/goods/官方正品TOMFORD RosePrick 玫瑰花香调.jpg')
                    ],
                    createTime: "2019-02-27 19:23:30",
                    likeNum: 866,
                    isLike: 1
                }
            ],
            commentVal: "",
            okZan: require('../../assets/images/ok-zan.png'),
            noZan: require('../../assets/images/no-zan.png'),
            height: 0,
            adjustVal: false,
            confirmVal: true
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {
        // 发送评论
        onConfirm: function () {
            this.$toast(this.commentVal)
        },
        // 确认点赞和取消点赞
        likeZan: function (e) {
            let commentList = this.commentList  //获取评论列表
            let index = e.currentTarget.dataset.index;
            console.log(index);
            let isLike = commentList[index].isLike;
            console.log(isLike);
            let onum = commentList[index].likeNum;
            if (isLike) {
                commentList[index].likeNum = (onum - 1);
                commentList[index].isLike = false;
                this.$toast("已取消点赞")
            } else {
                commentList[index].likeNum = (onum + 1);
                commentList[index].isLike = true;
                this.$toast("已点赞")
            }
            this.commentList = commentList
        },
        // 评论商品图图片预览
        commentImgPreview: function (index, img) {
            ImagePreview(img);
        }
    }

}