import axios from 'axios';

const CHANGE_LIKE = 'CHANGE_LIKE';
const GET_PRODUCT_PAGE_DATA = 'GET_PRODUCT_PAGE_DATA';
const CHANGE_BUY_NUMS = 'CHANGE_BUY_NUMS';
const CHANGE_SPECIFICATION = 'CHANGE_SPECIFICATION';

const state = {
    productPageData: {},
    buyNums: 1,
    specificationIndex: 0,
    like: false
};

const getters = {
    specification: state => state.specificationIndex
};

const mutations = {
    [CHANGE_LIKE](state, boolean) {
        state.like = boolean;
    },
    [GET_PRODUCT_PAGE_DATA](state, data) {
        state.productPageData = data;
    },
    [CHANGE_BUY_NUMS](state, number) {
        state.buyNums = number;
    },
    [CHANGE_SPECIFICATION](state, index) {
        state.specificationIndex = index;
    }
};

const actions = {
    changeLike({ commit, state }, boolean) {
        // 真是开发中。是需要一个接口，进行异步操作，
        // 等待后端返回操作成功后，再通过mutation改变状态，
        // 这里使用settimeout模拟
        setTimeout(function() {
            commit(CHANGE_LIKE, boolean);
        }, 300);

    },
    getProductPageData({ commit, state }, id) {
        axios.get('../mock/product.json').then(response => {
            if (response.data.code == 1) {
                commit(GET_PRODUCT_PAGE_DATA, response.data);
            }
        })
    },
    changeBuyNums({ commit, state }, number) {
        commit(CHANGE_BUY_NUMS, number);
    },
    changeSpecification({ commit, state }, index) {
        commit(CHANGE_SPECIFICATION, index);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};