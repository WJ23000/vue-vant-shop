import HeaderTwo from '@/components/HeaderTwo';
import areaVal from '@/utils/areaList'
import validator from '@/utils/validator';

export default {
    name: 'AddressAdd',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "收货地址",
            formText: {
                username: "",
                phone: "",
                address: "",
                city: "",
                checked: false
            },
            rules: {
                username: [
                    { required: true, message: '请输入收货人' }
                ],
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
                address: [
                    { required: true, message: '请选择地址' }
                ],
                city: [
                    { required: true, message: '请输入详细地址' }
                ]
            },
            showSet: false,
            areaList: areaVal.areaList,
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
        formSubmitAddress: function () {
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
        },
        //打开地址选择器
        onAddress: function () {
            this.showSet = true
        },
        //点击蒙层关闭地址选择器弹层
        onClose: function () {
            this.showSet = false
        },
        //关闭地址选择器
        closeArea: function () {
            this.showSet = false
        },
        //确认地址选择器地址
        okArea: function (value) {
            const addressVal = value;
            console.log(addressVal);
            const provinceVal = addressVal[0].name + ",";
            const cityVal = addressVal[1].name + ",";
            const countyVal = addressVal[2].name;

            this.formText.address = provinceVal + cityVal + countyVal,
                this.showSet = false
        }
    }

}