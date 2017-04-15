import axios from 'axios';

const CHANGE_LIKE = 'CHANGE_LIKE';
const GET_PRODUCT_PAGE_DATA = 'GET_PRODUCT_PAGE_DATA';
const REDUCE_BUY_NUMS = 'REDUCE_BUY_NUMS';
const CHANGE_SPECIFICATION = 'CHANGE_SPECIFICATION';
const PLUS_BUY_NUMS = 'PLUS_BUY_NUMS';


const state = {
    productPageData: {},
    buyNums: 1,
    specificationIndex: 0,
    like: false
};

const getters = {
    specification: state => state.specificationIndex,
    buyNums: state => {
        if (state.buyNums < 1) {
            return 1;
        }
    }
};

const mutations = {
    [CHANGE_LIKE](state, boolean) {
        state.like = boolean;
    },
    [GET_PRODUCT_PAGE_DATA](state, data) {
        state.productPageData = data;
    },
    [REDUCE_BUY_NUMS](state) {
        if (state.buyNums < 2) {
            return;
        }
        state.buyNums = --state.buyNums;
    },
    [PLUS_BUY_NUMS](state) {
        state.buyNums = ++state.buyNums;
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
        console.log('product id : ' + id);

        axios.get('../mock/product.json').then(response => {
            if (response.data.code == 1) {
                commit(GET_PRODUCT_PAGE_DATA, response.data);
            }
        })
    },
    changeBuyNums({ commit, state }, event) {
        console.log(event.target.className);
        let className = event.target.className;
        if (className == "reduce") {
            commit(REDUCE_BUY_NUMS);
        } else if (className == "plus") {
            commit(PLUS_BUY_NUMS);
        }

    },
    changeSpecification({ commit, state }, event) {
        let index = event.target.getAttribute('data-index');
        commit(CHANGE_SPECIFICATION, index);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};