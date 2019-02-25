<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  created () {
    
  },
  watch: {
    $route(to, from) {
      alert("路由跳转")
      this.login();
    }
  },
  methods: {
    reload () {
      this.isRouterAlive=false
      this.$nextTick(function(){
        this.isRouterAlive=true
        this.$toast.loading({
          mask: true,
          message: '加载中...'
        })
      })
    },
    login () {
      let loginMsg=this.$store.getters.getLoginFn;
      if(loginMsg == null || loginMsg == ""){
        this.$router.push('/Login');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page-content{
  float: left;
  width: 100%;
  background: #f2f2f2;
}
</style>
