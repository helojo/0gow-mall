<template>
    <div class="product">
        <slide :swiperData="product.productPageData.sliders"></slide>
        <div class="prodcut-info">
            <h2>{{product.productPageData.info.goods_name}}</h2>
            <h3>{{product.productPageData.info.goods_des}}</h3>
            <ul>
                <li>
                    市场价格 : <span class="scPrice">{{product.productPageData.info.scPrice}}</span>
                </li>
                <li>
                    特价包邮 ： <span class="price">{{product.productPageData.info.price}}</span>
                </li>
                <li>
                    用户好评率 ： {{product.productPageData.info.good_rate}}
                </li>
                <li>
                    用户投诉率 : 0%
                </li>
            </ul>
            <div class="selectSpecification">
                <div>选择规格</div>
                <div>
                    <i class="fa fa--arrow-right"></i>
                </div>
            </div>
            <div class="store">
                <div>
                    {{product.productPageData.info.store_name}}
                </div>
                <a :href="`/store/${product.productPageData.info.store_id}`">
                    进店逛逛<i class="fa  fa-angle-double-right">
                </a>
            </div>
        </div>
        <div class="product-other">
            <ul>
                <li>详情</li>
                <li>评价</li>
                <li>成交记录</li>
            </ul>
            <div class="detail"></div>
            <div class="pingjia"></div>
            <div class="record"></div>
        </div>
    </div>

</template>
<script>
    import {mapState, mapActions} from 'vuex';
    import Slide from '../../components/slide.vue';


    export default{
        data(){
            return{

            }
        },
        computed: {
            ...mapState(['product'])
        },
        methods: {
            ...mapActions(['changeLike', 'getProductPageData','changeBuyNums','changeSpecification'])
        },
        mounted(){
            this.getProductPageData();
        },
        components : {
            Slide
        }
    }
</script>
<style>
    
</style>