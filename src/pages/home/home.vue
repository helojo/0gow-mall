<template>
    <div class="homeContent">
        <search-bar></search-bar>
        <slide :swiperData="homePageData.topBanner.items"></slide>
        <div v-if="homePageData.adBanner" class="adverBanner">
            <a :href="`/#${homePageData.adBanner.url}`">
                <img v-lazy="homePageData.adBanner.image" />
            </a>
        </div>
        <home-category :homeCategoryData="homePageData.icons"></home-category>
        <hot-area :hotAreaData = "homePageData.hot"></hot-area>
        <jing-pin :jingPinData = "homePageData.jingpin"></jing-pin>
        <goods-list></goods-list>
        <to-top></to-top>
    </div>
</template>
<script>
    import SearchBar from '../../components/searchBar.vue'
    import Slide from '../../components/slide.vue'
    import HomeCategory from './homeCategory.vue'
    import HotArea from './hotArea.vue'
    import JingPin from './jingPin.vue'
    import GoodsList from './goodsList.vue'
    import ToTop from '../../components/toTop.vue'

    import { mapState, mapActions} from 'vuex'
    import {debounce, throttle} from 'lodash'

    export default{
        data(){
            return{
            }
        },
        computed : {
            ...mapState(['homePageData', 'isShowLoadingTips'])
        },
        methods : {
            ...mapActions(['getHomePageData', 'handleScroll'])
        },
        mounted(){
            this.getHomePageData();
            window.addEventListener('scroll', throttle(this.handleScroll, 500));
        },
        components : {
            SearchBar,
            Slide,
            HomeCategory,
            HotArea,
            JingPin,
            GoodsList,
            ToTop
        }
    }
</script>
<style>
    .adverBanner{
        margin-top: 0.2667rem;
    }
    .adverBanner img{
        width: 100%;
        height: 3.5rem;
    }
</style>