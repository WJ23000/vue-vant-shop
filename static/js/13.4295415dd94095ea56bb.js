webpackJsonp([13],{"7K+U":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("UNd4"),a=n("w3CS"),s={name:"BindPhone",components:{HeaderTwo:o.a},data:function(){return{title:"绑定手机号",formText:{phone:"",sms:""},rules:{phone:[{validator:function(t,e,n){e?/^[1][0-9]{10}$/.test(e)?n():n("请输入正确的手机号码"):n("请输入手机号码")}}],sms:[{required:!0,message:"请输入验证码"}]}}},created:function(){this.validator=Object(a.a)(this.rules,this.formText)},mounted:function(){},methods:{validate:function(t,e){var n=this;this.validator.validate(function(e,o){e&&o.forEach(function(t){n.$toast(t.message)}),t&&t(e,o)},e)},formSubmitPhone:function(){var t=this;this.validate(function(e,n){if(console.log(n.length),0!=n.length)return!1;t.$toast("此处处理表单数据"),console.log(t.formText)})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bindPhone"},[n("div",{staticClass:"page-header"},[n("HeaderTwo",{attrs:{titleVal:t.title}})],1),t._v(" "),n("div",{staticClass:"page-content"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.formSubmitPhone(e)}}},[n("van-cell-group",[n("van-field",{attrs:{name:"phone",clearable:"",icon:"arrow",placeholder:"手机号码","bind:click-icon":"onClickIcon"},model:{value:t.formText.phone,callback:function(e){t.$set(t.formText,"phone",e)},expression:"formText.phone"}}),t._v(" "),n("van-field",{attrs:{name:"sms",clearable:"",placeholder:"请输入短信验证码","use-button-slot":""},model:{value:t.formText.sms,callback:function(e){t.$set(t.formText,"sms",e)},expression:"formText.sms"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"primary"},slot:"button"},[t._v("发送验证码")])],1)],1),t._v(" "),n("button",{staticClass:"address-add-btn",attrs:{"form-type":"submit"}},[t._v("提交")])],1)])])},staticRenderFns:[]};var i=n("VU/8")(s,r,!1,function(t){n("pV6V")},"data-v-b87dda8e",null);e.default=i.exports},pV6V:function(t,e){}});
//# sourceMappingURL=13.4295415dd94095ea56bb.js.map