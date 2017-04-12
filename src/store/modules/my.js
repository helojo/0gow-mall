import axios from 'axios'

const CHANGE_MY_PAGE_DATA = 'CHANGE_MY_PAGE_DATA';


const state = {
    myPageData: {}
};

const getters = {
    myPageData: state => state.myPageData
}
const actions = {
    getMyPageData({ commit, state }) {
        axios.get('../mock/myPageData.json').then((response) => {
            if (response.data.code == 1) {
                commit(CHANGE_MY_PAGE_DATA, response.data);
            }
        })
    }
};

const mutations = {
    [CHANGE_MY_PAGE_DATA](state, obj) {
        state.myPageData = obj;
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}