import HeaderTwo from '@/components/HeaderTwo';
import areaVal from '@/utils/areaList'
import validator from '@/utils/validator';

export default {
    name: 'Evalu',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "评论详情",
            formText: {
                descScore: 0,
                tudeScore: 0,
                leave: "",
                checked: false
            },
            rules: {
                descScore: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value) {
                                callback('请选择描述相符星级');
                            } else if (/^[1-5]\d*$/.test(value)) {
                                callback();
                            } else {
                                callback('请选择描述相符星级');
                            }
                        }
                    }
                ],
                tudeScore: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value) {
                                callback('请选择服务态度星级');
                            } else if (/^[1-5]\d*$/.test(value)) {
                                callback();
                            } else {
                                callback('请选择服务态度星级');
                            }
                        }
                    }
                ],
                leave: [
                    { required: true, message: '请输入留言' }
                ]
            },
            uploaderList: [],
            fileList: []  // 服务端图片回显
        }
    },
    created() {
        this.validator = validator(this.rules, this.formText);
    },
    mounted() {

    },
    methods: {
        // 正则验证方法
        validate(callback, data) {
            this.validator.validate((errors, fields) => {
                if (errors) {
                    fields.forEach(item => {
                        this.$toast(item.message);
                    })
                }
                callback && callback(errors, fields)
            }, data);
        },
        // 提交表单
        formSubmitEvalu: function () {
            // 触发表单正则校验且通过校验提交数据
            this.validate((errors, fields) => {
                console.log(fields.length);
                if (fields.length == 0) {
                    this.$toast("此处处理表单数据");
                    console.log(this.formText);
                } else {
                    return false;
                }
            })
        },
        // 星形评分
        onDesc: function (value) {
            this.descScore = value
        },
        onTude: function (value) {
            this.tudeScore = value
        },
        // 图片选择后上传服务端新增
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        // 点击图片后上传服务端移除
        delImg(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        }
    }

}