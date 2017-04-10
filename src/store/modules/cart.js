import axios from 'axios';

// cart mutation types
const CHECK_STORE_ALL_PRODUCT = 'CHECK_STORE_ALL_PRODUCT';
const CHECK_SINGLE_PRODUCT = 'CHECK_SINGLE_PRODUCT';
const CHECK_CART_ALL_PRODUCT = 'CHECK_CART_ALL_PRODUCT';
const GET_CART_PAGE_DATA = 'GET_CART_PAGE_DATA';
const DELETE_PRODUCT = 'DELETE_PRODUCT';


const state = {
    cartPageData: [],
    cartAllChecked: false,
    total: 0,
    checked_product_nums: 0
};

const getters = {
    cartAllChecked: state => state.cartAllChecked,
    cartPageData: state => state.cartPageData,
    total: state => state.total,
    checked_product_nums: state => state.checked_product_nums
};

const mutations = {
    [CHECK_STORE_ALL_PRODUCT](state, { storeID, productID, boolean }) {
        let len = state.cartPageData.length;
        let checkedStoreNum = 0;
        state.cartPageData.forEach(store => {
            if (store.store_id == storeID) {
                store.checked = boolean;
                store.goods.forEach(product => {
                    product.checked = boolean;

                    // 计算所选商品的数量和总价
                    if (boolean) {
                        state.checked_product_nums += Number.parseInt(product.quantity);
                        state.total += Number.parseFloat((Number.parseInt(product.quantity) * product.product_info.Price).toFixed(2));
                    } else {
                        state.checked_product_nums -= Number.parseInt(product.quantity);
                        state.total -= Number.parseFloat((Number.parseInt(product.quantity) * product.product_info.Price).toFixed(2));
                    }
                });

            }
            if (store.checked) {
                checkedStoreNum++
                if (checkedStoreNum == len) {
                    state.cartAllChecked = true;
                } else {
                    state.cartAllChecked = false;
                }
            }
        });

    },
    [CHECK_SINGLE_PRODUCT](state, { storeID, productID, boolean }) {
        let storeLen = state.cartPageData.length;
        let storeCheckedLen = 0;
        let localProductCheckedLen = 0;
        state.cartPageData.forEach(store => {
            if (store.store_id == storeID) {
                store.goods.forEach(product => {

                    if (product.goods_id == productID) {
                        product.checked = boolean;
                        if (product.checked) {
                            state.checked_product_nums += Number.parseInt(product.quantity);
                            state.total += Number.parseFloat((Number.parseInt(product.quantity) * product.product_info.Price).toFixed(2));
                        } else {
                            state.checked_product_nums -= Number.parseInt(product.quantity);
                            state.total -= Number.parseFloat((Number.parseInt(product.quantity) * product.product_info.Price).toFixed(2));
                        }
                    }

                    if (product.checked) {
                        localProductCheckedLen++;
                    }
                    if (localProductCheckedLen == store.goods.length && boolean) {
                        store.checked = true;
                    } else {
                        store.checked = false;
                    }

                })
            }

            if (!store.checked) {
                state.cartAllChecked = false;
            } else {
                storeCheckedLen++;
                if (storeCheckedLen == storeLen) {
                    state.cartAllChecked = true;
                }
            }
        })
    },
    [CHECK_CART_ALL_PRODUCT](state, boolean) {
        state.cartAllChecked = boolean;
        state.goCountActive = boolean;
        state.cartPageData.forEach(store => {
            store.checked = boolean;
            store.goods.forEach(product => {
                product.checked = boolean;
                if (boolean) {
                    state.checked_product_nums += Number.parseInt(product.quantity);
                    state.total += Number.parseFloat((Number.parseInt(product.quantity) * product.product_info.Price).toFixed(2));
                } else {
                    state.checked_product_nums = 0;
                    state.total = 0;
                }
            })
        })
    },
    [GET_CART_PAGE_DATA](state, arr) {
        state.cartPageData = arr;
    },
    [DELETE_PRODUCT](state, { productID, storeID }) {
        let checkedProductInStore = 0;
        let checkedStore = 0;
        state.cartPageData.forEach((store, index) => {
            if (store.store_id == storeID) {
                store.goods.forEach((product, index) => {
                    if (product.goods_id == productID) {
                        if (product.checked) {
                            state.checked_product_nums -= Number.parseInt(product.quantity);
                            state.total -= Number.parseFloat((Number.parseInt(product.quantity) * product.product_info.Price).toFixed(2));

                        }

                        store.goods.splice(index, 1);

                    }
                });

                store.goods.forEach(product => {
                    if (product.checked) {
                        checkedProductInStore++
                    }
                })
                if (store.goods.length == 0) {
                    state.cartPageData.splice(index, 1);
                }
                if (store.goods.length == checkedProductInStore) {
                    console.log('checkedProductInStore : ' + checkedProductInStore);
                    store.checked = true;
                } else {
                    console.log('checkedProductInStore : ' + checkedProductInStore);
                    store.checked = false;
                }
            }

            // 计算店铺被选择的数量
            if (store.checked) {
                checkedStore++
            }
        });
        // 如果被选择的店铺数量与总店铺数量相同
        // 则全选为true
        if (checkedStore == state.cartPageData.length) {
            state.cartAllChecked = true;
        } else {
            state.cartAllChecked = false;
        }
    }
};

const actions = {
    getCartPageData({ commit, state }) {
        let list = [];
        axios.get('../mock/cartPageData.json').then((response) => {
            if (response.data.code == 1) {
                response.data.list.forEach(item => {
                    item.checked = false;
                    item.goods.forEach(item => {
                        item.checked = false;
                    })
                    list.push(item);
                });
                commit(GET_CART_PAGE_DATA, list);
            }
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}