import axios from 'axios';
import * as types from './mutation-types.js';


export default {
    getHomePageData() {

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

    }
}