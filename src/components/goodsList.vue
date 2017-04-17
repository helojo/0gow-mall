<template>
    <div class="goodsList" v-infinite-scroll="getGoodsListData" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <ul>
            <li v-for="(item, index) in goodsListData" :key="index" class="goods-item">
                <a :href="`#/product/${item.goods_id}`">
                    <div class="goodsImg lineFont">
                        <img v-lazy="item.default_image" />
                    </div>
                    <p class="goodsDesc pad-left lineFont">
                        <nobr>
                            {{item.goods_title}}
                        </nobr>
                    </p>
                    <p class="goodsPrice pad-left lineFont"> ￥{{item.Price}} </p>
                    <p class="goodsSale pad-left">
                        <span class="goodsSaleNum">已售{{item.sale}}件</span>
                        <span class="goodsHaoPing">好评率{{item.good_rate}}</span>
                    </p>
                </a>
            </li>
        </ul>
        <loading-tips v-if="isShowLoadingTips"></loading-tips>
        <loaded-tips v-if="isShowLoadedTips"></loaded-tips>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex';
    import LoadingTips from './loadingTips.vue'
    import LoadedTips from './loadedTips.vue'
    export default{
        data(){
            return{

            }
        },
        computed: {
            ...mapState(['busy', 'goodsListData', 'isShowLoadingTips', 'isShowLoadedTips'])
        },
        methods : {
            ...mapActions(['getGoodsListData'])
        },
        components: {
            LoadingTips,
            LoadedTips
        }
    }
</script>
<style>
    .goodsList{
        margin-top: 0.2rem;
        background-color: #eee;
        padding-top: 0.2rem;
    }
    .goodsList > p{
        font-size: 0.5rem;
        line-height: 0.5rem;
        color: red;
    }
    .goodsList > ul{
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .goods-item{
        flex: 0 0 auto;
        width: 48%;
        background-color: #fff;
        margin-bottom: 0.15rem;
        padding-bottom: 0.1rem;
    }
    .goodsList > ul>li:nth-child(even){
        margin-right: 1.3%;
    }
    .goodsList > ul>li:nth-child(odd){
        margin-left : 1.3%;
        margin-right: 1.3%;
    }
    .goods-item img{
        width: 100%;
        height: auto;
    }
    .goodsImg{
        height: 5.5rem;
    }
    .goodsDesc{
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.1rem;
        line-height: 0.5rem;
        font-size: 0.3rem;
        text-align: left;
    }
    .goodsSale{
        margin-top: 0.1rem;
        line-height: 0.5rem;
        font-size: 0.3rem;
        text-align: left;
    }
    .goodsPrice{
        text-align: left;
        color: red;
    }
    .pad-left{
        padding-left: 0.2rem;
    }
    .lineFont{
        line-height: 0.6rem;
        font-size: 0.4rem;
    }
</style>