import HeaderTwo from '@/components/HeaderTwo';
import validator from '@/utils/validator';

export default {
    name: 'BindPhone',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "绑定手机号",
            formText: {
                phone: "",
                sms: ""
            },
            rules: {
                phone: [
                    {
                        validator: (rule, value, callback) => {
                            if (!value) {
                                callback('请输入手机号码');
                            } else if (/^[1][0-9]{10}$/.test(value)) {
                                callback();
                            } else {
                                callback('请输入正确的手机号码');
                            }
                        }
                    }
                ],
                sms: [
                    { required: true, message: '请输入验证码' }
                ]
            }
        }
    },
    created() {
        this.validator = validator(this.rules, this.formText);
    },
    mounted() {

    },
    methods: {
        //正则验证方法
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
        //提交表单
        formSubmitPhone: function () {
            //触发表单正则校验且通过校验提交数据
            this.validate((errors, fields) => {
                console.log(fields.length);
                if (fields.length == 0) {
                    this.$toast("此处处理表单数据");
                    console.log(this.formText);
                } else {
                    return false;
                }
            })
        }
    }

}