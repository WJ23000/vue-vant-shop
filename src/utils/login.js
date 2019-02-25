// 通过vuex的getters方法来获取state里面的数据
let loginMsg = this.$store.getters.getLoginFn;
if (loginMsg == "" || loginMsg == null) {
    //没有登录跳到登录页
    this.$router.push('/Login');
}