<template>
    <div class="homeContent">
        <search-bar></search-bar>
        <slide></slide>
        <div v-if="homePageData.adBanner" class="adverBanner">
            <img :src="homePageData.adBanner.image" />
        </div>
    </div>
</template>
<script>
    import SearchBar from '../../components/searchBar.vue'
    import Slide from '../../components/slide.vue'
    import { mapState, mapActions} from 'vuex'

    export default{
        data(){
            return{
            }
        },
        computed : {
            ...mapState(['homePageData'])
        },
        methods : {
            ...mapActions(['getHomePageData'])
        },
        mounted(){
            this.getHomePageData();
        },
        components : {
            SearchBar,
            Slide
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