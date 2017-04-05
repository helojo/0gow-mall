import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex);

// 定义项目全局的state,用户储存数据
const state = {
    isFixedHeader: false,
    isShowSearchComp: false,
    homePageData: {},
    categoryPageData: {},
    myPageData: {},
    tabBarData: {},
    cartPageData: {},
    isShowLoadingTips: false,
    isShowLoadedTips: false,
    busy: false,
    swiperData: {}
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})