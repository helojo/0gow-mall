<template>
    <div class="twoLevCate">
        <div class="twoLevCate-topBanner">
            <div class="priceSort" @click="changePriceSortShow" :class="{active : twoLevCate.sort.priceUpSort || twoLevCate.sort.priceDownSort }">
                价格排序<i class="fa fa-chevron-down" :class="{active : priceSortShow}"></i>
                <div class="priceSortContent" v-show="priceSortShow">
                    <div class="priceUpSort" :class="{active : twoLevCate.sort.priceUpSort}"  @click="changeSortType($event)">价格从低到高</div>
                    <div class="priceDownSort" :class="{active : twoLevCate.sort.priceDownSort}"  @click="changeSortType($event)">价格从高到低</div>
                </div>
            </div>
            <div class="hotSaleSort" :class="{active : twoLevCate.sort.hotSaleSort}"  @click="changeSortType($event)">热销</div>
            <div class="newSaleSort" :class="{active : twoLevCate.sort.newSaleSort}"  @click="changeSortType($event)">上新</div>
        </div>
        <goods-list @getNextPageData="getNextGoodsListPageData" :goodsListData = "twoLevCate.goodsListData" 
            :busy = "twoLevCate.busy" :isShowLoadingTips = "twoLevCate.isShowLoadingTips" :isShowLoadedTips = "twoLevCate.isShowLoadedTips"></goods-list>
        <to-top></to-top>
    </div>
</template>
<script>
    import { mapState, mapActions} from 'vuex';
    import GoodsList from '../../components/goodsList.vue';
    import ToTop from '../../components/toTop.vue';

    export default{
        data(){
            return{
                priceSortShow : false
            }
        },
        computed: {
            ...mapState(['twoLevCate'])
        },
        methods: {
            ...mapActions(['getTwoLevCateData', 'changeSortType', 'getNextGoodsListPageData']),
            changePriceSortShow(){
                this.priceSortShow = !this.priceSortShow;
            }

        },
        mounted(){
            this.getTwoLevCateData({id : this.$route.params.id});
            // this.getNextGoodsListPageData();
        },
        components : {
            GoodsList,
            ToTop
        }
    }
</script>
<style>
    .twoLevCate{
        height: 100%;
        width: 100%;
        padding-top: 1.1rem;
    }
    .twoLevCate-topBanner{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        z-index: 30;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        box-shadow: 2px 2px 1px rgba(0,0,0,.5);
    }
    .twoLevCate-topBanner > div{
        flex: 1 1 33%;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.4rem;
        
    }
    .priceSortContent{
        position: absolute;
        top: 1.52rem;
        left: 0;
        right: 0;
        z-index: 31;
        background-color: #fff;
        
    }
    .priceSortContent div{
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: left;
        border-bottom: 1px solid #ccc;
        padding-left: 0.6rem;
        color: black;
    }
    .fa.fa-chevron-down{
        font-size: 0.4rem;
        margin-left: 0.1rem
    }
    .fa.fa-chevron-down.active{
        transform: rotateZ(180deg);
    }
    .priceSort.active, .priceUpSort.active, .priceDownSort.active, .hotSaleSort.active, .newSaleSort.active{
        color: red;
    }
</style>