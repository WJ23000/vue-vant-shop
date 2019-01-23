<template>
  <div class="page">
    <div class="page-header">
      <HeaderTwo :titleVal="title"></HeaderTwo>
    </div>
    <div class="page-content">
        <div class="mine-cell">
          <router-link to="/BindPhone">
            <van-cell title="绑定手机号" is-link />
          </router-link>
        </div>
        <div class="mine-cell">
          <van-cell title="清除缓存" @click="clearCache" is-link />
        </div>
    </div>
  </div>
</template>

<script>
import HeaderTwo from '@/components/HeaderTwo';
export default {
  name: 'Set',
  components:{
    HeaderTwo
  },
  data () {
    return {
      title:"设置"
    }
  },
  created () {

  },
  mounted () {
  
  },
  methods:{
    clearCache: function () {
      this.$dialog.confirm({
        title: '温馨提示',
        message: '请问您确认要清除应用缓存吗？'
      }).then(() => {
        var storage = window.localStorage;
        storage.clear();
        this.$router.push({ path: '/' ,params:{id:"1"}});
      }).catch(() => {
        // on cancel
      });
    }
  }
  
}
</script>
<style scoped>
  .mine-cell{
    border-bottom: 1px solid #f2f2f2;
  }
</style>
