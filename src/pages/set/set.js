import HeaderTwo from '@/components/HeaderTwo';

export default {
    name: 'Set',
    components: {
        HeaderTwo
    },
    data() {
        return {
            title: "设置"
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        clearCache: function () {
            this.$dialog.confirm({
                title: '温馨提示',
                message: '请问您确认要清除应用缓存吗？'
            }).then(() => {
                var storage = window.localStorage;
                storage.clear();
                this.$router.push('/');
            }).catch(() => {
                // on cancel
            });
        }
    }

}