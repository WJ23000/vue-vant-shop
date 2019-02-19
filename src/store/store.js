import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        evaluList:[
            {
                id: 1,
                name: "乐购商城",
                title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                price: 3500.00,
                static: "已评价",
                specif: "蓝色",
                count: 2,
                url: '',
                icon: require('../assets/shop1.png')
            },
            {
                id: 2,
                name: "乐购商城",
                title: '智能飞行器高空拍摄续航6小时，高清在线生成远景视频，蓝色荣耀奢华版',
                price: 3500.00,
                static: "已评价",
                specif: "蓝色",
                count: 2,
                url: '',
                icon: require('../assets/shop1.png')
            }
        ]
    },

    // 2. getters(此处方法给其他页面提供用户数据)
    getters:{
        // 参数列表state指的是state数据
        getEvaluListFn(state){
            return state.evaluList;
        }
    },
    // 3. actions
    // 通常跟api接口打交道(此处方法给其他页面提供数据返回用户数据)
    actions:{
        // 设置用户信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
        setEvaluListFn({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setEvaluList", name);
        }
    },
    // 4. mutations
    mutations:{
        // state指的是state的数据
        // name传递过来的数据
        setEvaluList(state, name){
            state.evaluList = name;//将传参设置给state的user
        }
    }
});

export default store;