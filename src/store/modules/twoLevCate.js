import axios from 'axios'
import { delay } from 'lodash'


const GET_TWO_LEV_CATE_DATA = 'GET_TWO_LEV_CATE_DATA';
const GET_NEXT_PAGE_DATA = 'GET_NEXT_PAGE_DATA';
const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE';
const CHANGE_CUR_PAGE_COUNT = 'CHANGE_CUR_PAGE_COUNT';

const createComparisonFunc = (sortType, downOrUp = "down") => {

    return (prev, next) => {
        let value1 = prev[sortType];
        let value2 = next[sortType];
        if ((sortType == "Price" && 　downOrUp == "down") || (sortType == "sale") || (sortType == "add_time")) {

            if (value1 < value2) {
                return 1;
            } else if (value1 > value2) {
                return -1;
            } else {
                return 0;
            }
        } else if (sortType == "Price" && 　downOrUp == "up") {

            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }
        }
    }
};

const state = {
    data: {},
    curPageCount: 1,
    sort: {
        priceUpSort: false,
        priceDownSort: false,
        hotSaleSort: false,
        newSaleSort: false
    },
    goodsListData: [],
    busy: false,
    isShowLoadingTips: false,
    isShowLoadedTips: false
};

const mutations = {
    [GET_NEXT_PAGE_DATA](state, data) {
        state.goodsListData.push(...data.list);
    },
    [GET_TWO_LEV_CATE_DATA](state, data) {
        state.data = data;
    },
    [CHANGE_SORT_TYPE](state, sortType) {
        for (let key in state.sort) {
            if (state.sort.hasOwnProperty(key)) {
                if (key === "priceUpSort" && sortType === "priceUpSort") {
                    state.sort[key] = true;
                    // sort(state.goodsListData, "price", "up");
                    state.goodsListData.sort(createComparisonFunc("Price", "up"));
                } else if (key === "priceDownSort" && sortType === "priceDownSort") {
                    state.sort[key] = true;
                    state.goodsListData.sort(createComparisonFunc("Price"));
                    // sort(state.goodsListData, "price");
                } else if (key === "hotSaleSort" && sortType === "hotSaleSort") {
                    state.sort[key] = true;
                    state.goodsListData.sort(createComparisonFunc("sale"));
                    // sort(state.goodsListData, "sale", );
                } else if (key === "newSaleSort" && sortType === "newSaleSort") {
                    state.sort[key] = true;
                    state.goodsListData.sort(createComparisonFunc("add_time"));
                    // sort(state.goodsListData, "add_time");
                } else {
                    state.sort[key] = false;
                }
            }
        }
    },
    [CHANGE_CUR_PAGE_COUNT](state) {
        state.curPageCount += 1;
        console.log('state.curPageCount : ' + state.curPageCount);
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
        let sortType = e.target.className;
        commit(CHANGE_SORT_TYPE, sortType);
    },
    getNextGoodsListPageData({ commit, state }) {
        state.busy = true;
        state.isShowLoadingTips = true;
        if (state.curPageCount > 5) {
            state.isShowLoadingTips = false;
            state.isShowLoadedTips = true;
            state.busy = true;
            return false;
        }
        delay(function() {
            axios.get('../mock/goodsList.json').then(response => {
                if (response.data.code == 1) {
                    commit(CHANGE_CUR_PAGE_COUNT);
                    commit(GET_NEXT_PAGE_DATA, response.data);
                    state.busy = false;
                    state.isShowLoadingTips = false;
                }
            });
        }, 500);
    }
};

export default {
    state,
    actions,
    mutations
}