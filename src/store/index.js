import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import cart from './modules/cart.js'

Vue.use(Vuex);

// 定义项目全局的state,用户储存数据
const state = {
    isFixedHeader: false,
    isShowSearchComp: false,
    homePageData: {},
    categoryPageData: [],
    categoryRightData: [],
    myPageData: {},
    tabBarData: {},
    isShowLoadingTips: false,
    isShowLoadedTips: false,
    busy: false,
    swiperData: {},
    goodsListData: [],
    goodsListNums: 1,
    isTopBarShow: false,
    isToTopBarShow: false,
    initIndex: 0
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        cart
    }

})