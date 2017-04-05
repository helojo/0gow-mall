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
    getCategoryPageData() {

    },
    getCartPageData() {

    },
    getMyPageData() {

    },
    handleScroll() {

    },
    getSwiperData({ commit, state }) {
        axios.get('../mock/homePageData.json').then((response) => {
            if (response.data.code == 1) {
                commit(types.GET_SWIPER_DATA, response.data.topBanner);
            }
        })
    }
}