import axios from 'axios'

const GET_TWO_LEV_CATE_DATA = 'GET_TWO_LEV_CATE_DATA';
const GET_NEXT_PAGE_DATA = 'GET_NEXT_PAGE_DATA';
const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE';


const state = {
    data: {},
    curPageCount: 1,
    sort: {
        priceUpSort: true,
        priceDownSort: false,
        hotSaleSort: false,
        newSaleSort: false
    },
    goodsList: []
};

const mutations = {
    [GET_TWO_LEV_CATE_DATA](state, data) {
        state.data = data;
    },
    [CHANGE_SORT_TYPE](state, sortType) {
        for (let key in state.sort) {
            if (state.sort.hasOwnProperty(key)) {
                if (key === "priceUpSort" && sortType === "priceUpSort") {
                    state.sort[key] = true;
                } else if (key === "priceDownSort" && sortType === "priceDownSort") {
                    state.sort[key] = true;
                } else if (key === "hotSaleSort" && sortType === "hotSaleSort") {
                    state.sort[key] = true;
                } else if (key === "newSaleSort" && sortType === "newSaleSort") {
                    state.sort[key] = true;
                } else {
                    state.sort[key] = false;
                }
            }
        }
    }
};
const actions = {
    getTwoLevCateData({ commit, state }, { id }) {
        console.log(' twoLevID : ' + id);
        axios.get('../mock/twoLevCate.json').then(response => {
            if (response.data.code == 1) {
                commit(GET_TWO_LEV_CATE_DATA, response.data);
            }
        })
    },
    changeSortType({ commit, state }, e) {
        // let sortType = e.target.className;
        let sortType = e.target.classList;

        // if (sortType == "priceSort" || sortType == "priceSort active") {
        //     console.log("click from : " + sortType);
        //     return;
        // } else {
        //     commit(CHANGE_SORT_TYPE, sortType);
        // }
        if (sortType.has("priceSort") || sortType.has("fa")) {
            console.log("click from : " + sortType);
            return;
        } else {
            commit(CHANGE_SORT_TYPE, sortType);
        }
    }
};

export default {
    state,
    actions,
    mutations
}