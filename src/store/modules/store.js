import axios from 'axios';

const GET_STORE_PAGE_DATA = 'GET_STORE_PAGE_DATA';
const CHANGE_LIKE = 'CHANGE_LIKE';

const state = {
    storePageData: {},
    like: false
};

const getters = {
    storePageData: state => state.storePageData,
    like: state => state.like
};

const mutations = {
    [GET_STORE_PAGE_DATA](state, data) {
        state.storePageData = data;
    },
    [CHANGE_LIKE](state, bool) {
        state.like = bool;
    }
};

const actions = {
    getStorePageData({ commit, state }) {
        axios.get('../mock/storePageData.json').then(response => {
            if (response.data.code == 1) {
                commit(GET_STORE_PAGE_DATA, response.data);
            }
        })
    },
    changeLike({ commit, state }, bool) {
        setTimeout(function() {
            commit(CHANGE_LIKE, bool);
        }, 300);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}