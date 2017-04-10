import axios from 'axios';
import * as types from './mutation-types.js';


export default {
    getHomePageData({ commit, state }) {
        axios.get('../mock/homePageData.json').then((response) => {
            if (response.data.code == 1) {
                console.log(response);
                commit(types.GET_HOME_PAGE_DATA, response.data);
            }
        })
    },
    getTabbarData({ commit, state }) {
        axios.get('../mock/tabbar.json').then((response) => {
            console.log(response);
            if (response.data.tabbar.length > 0) {
                commit(types.GET_TABBAR_DATA, response.data);
            }
        })
    },
    getCategoryPageData({ commit, state }) {
        axios.get('../mock/categoryPageData.json').then((response) => {
            if (response.data.code == 1) {
                commit(types.GET_CATEGORY_PAGE_DATA, response.data.list);
                commit(types.CHANGE_CATEGORY_RIGHT_DATA, 0);
            }
        })
    },
    changeCategoryRightData({ commit, state }, index) {
        commit(types.CHANGE_CATEGORY_RIGHT_DATA, index);
        commit(types.CHANGE_INITINDEX, index);
    },
    getMyPageData() {

    },
    handleScroll({ commit, state }) {
        console.log("from handleScroll");
        let _scrollTop = document.body.scrollTop;
        if (_scrollTop > 50) {
            state.isTopBarShow = true;
            state.isToTopBarShow = true;
        } else {
            state.isTopBarShow = false;
            state.isToTopBarShow = false;
        }
    },
    getSwiperData({ commit, state }) {
        axios.get('../mock/homePageData.json').then((response) => {
            if (response.data.code == 1) {
                commit(types.GET_SWIPER_DATA, response.data.topBanner);
            }
        })
    },
    getGoodsListData({ commit, state }) {
        state.busy = true;
        state.isShowLoadingTips = true;
        if (state.goodsListNums > 5) {
            state.isShowLoadingTips = false;
            state.isShowLoadedTips = true;
            state.busy = true;
            return false;
        }
        axios.get('../mock/goodsList.json').then((response) => {
            if (response.data.code == 1) {
                commit(types.GET_GOODS_LIST_DATA, response.data.list);
                commit(types.CHANGE_GOODS_LIST_NUMS, ++state.goodsListNums);
                state.busy = false;
                state.isShowLoadingTips = false;
            }
        })
    }
}