import {
    IS_FIXED_HEADER,
    IS_SHOW_SEARCH_COMP,
    GET_HOME_PAGE_DATA,
    GET_CATEGORY_PAGE_DATA,
    GET_CART_PAGE_DATA,
    GET_MY_PAGE_DATA,
    GET_TABBAR_DATA,
    IS_SHOW_LOADING_TIPS,
    IS_SHOW_LOADED_TIPS
} from './mutation-types.js'

export default {
    [IS_FIXED_HEADER](state, bool) {
        state.isFixedHeader = bool;
    },
    [IS_SHOW_SEARCH_COMP](state, bool) {
        state.isShowSearchComp = bool;
    },
    [GET_HOME_PAGE_DATA](state, obj) {
        state.homePageData = obj;
    },
    [GET_CATEGORY_PAGE_DATA](state, obj) {
        state.categoryPageData = obj;
    },
    [GET_TABBAR_DATA](state, obj) {
        state.tabBarData = obj;
    },
    [GET_CART_PAGE_DATA](state, obj) {
        state.cartPageData = obj;
    },
    [GET_MY_PAGE_DATA](state, obj) {
        state.myPageData = obj;
    },
    [IS_SHOW_LOADING_TIPS](state, bool) {
        state.isShowLoadingTips = bool;
    },
    [IS_SHOW_LOADED_TIPS](state, bool) {
        state.isShowLoadedTips = bool
    }
}