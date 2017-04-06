// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueInfiniteScroll from 'vue-infinite-scroll'


import './assets/css/fonts.css'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
    loading: "http://ojn8rdkav.qnssl.com/1461233716loading.jpg"
});
Vue.use(VueInfiniteScroll);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})