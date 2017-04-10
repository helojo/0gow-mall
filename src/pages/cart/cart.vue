<template>
    <div class="cart">
        <div class="store" v-for="(store, index) in cart.cartPageData">
            <div class="storeInfo">
                <div class="store-check" @click="checkStoreAllProduct({storeID : store.store_id, boolean: !store.checked})">
                    <i class="fa fa-circle-o" v-if="!store.checked"></i>
                    <i class="fa fa-check-circle-o" v-else></i>
                </div>
                <div class="store-name-content">
                    <div class="storeIcon">
                    </div>
                    <h3 class="store-name">{{store.store_name}}</h3>
                </div>
                <i class="fa fa-qq"></i>
            </div>
            <ol class="product">
                <li class="product-item" v-for="(product, index) in store.goods">
                    <div class="product-item-info" :data-index="index">
                        <div class="product-check" @click="checkSingleProduct({storeID : store.store_id, productID : product.goods_id, boolean : !product.checked})">
                            <i class="fa fa-circle-o" v-if="!product.checked"></i>
                            <i class="fa fa-check-circle-o" v-else></i>
                        </div>
                        <a :href="`\/product\/${product.goods_id}`" class="product-detail-content">
                            <div class="product-img">
                                <img v-lazy="product.product_info.default_image" />
                            </div>
                            <div class="product-detail">
                                <h3>{{product.product_info.goods_name}}</h3>
                                <p>
                                    <span class="product-price">现价:￥{{product.product_info.Price}}</span>
                                    <span class="product-wlprice">邮费:￥{{product.product_info.wlPrice}}</span>
                                </p>
                            </div>
                        </a>
                        <div class="saleNum">x{{product.quantity}}</div>
                        
                    </div>
                    <div class="edit">
                        <button>编辑</button>
                        <span>|</span>
                        <button @click="deleteProduct({storeID : store.store_id, productID : product.goods_id})" >删除</button>
                    </div>
                </li>
            </ol>
        </div>
        <div class="account">
            <div class="check" @click="checkCartAllProduct(!cart.cartAllChecked)">
                <i class="fa fa-circle-o" v-if="!cart.cartAllChecked"></i>
                <i class="fa fa-check-circle-o" v-else></i>
                <span>全选</span>
            </div>
            <div class="total">
                合计：<span>￥{{cart.total | fixed2}}</span>
            </div>
            <div class="goCount">
                去结算({{cart.checked_product_nums}})
            </div>
        </div>

    </div>
</template>
<script>
    import {mapState, mapActions, mapMutations} from "vuex";


    export default{
        data(){
            return{
                total : 0,
                product_nums : 0,
            }
        },
        computed : {
            // ...mapState(['cartPageData', 'cartAllChecked', 'total', 'checked_product_nuns', 'goCountActive']),
            ...mapState(['cart'])
            
        },
        methods: {
            ...mapActions(['getCartPageData']),
            ...mapMutations({ checkStoreAllProduct : 'CHECK_STORE_ALL_PRODUCT'}),
            ...mapMutations({ checkSingleProduct : 'CHECK_SINGLE_PRODUCT'}),
            ...mapMutations({ checkCartAllProduct : 'CHECK_CART_ALL_PRODUCT'}),
            ...mapMutations({ deleteProduct : 'DELETE_PRODUCT'})
            
        },
        mounted(){
            this.getCartPageData();
        },
        filters : {
            fixed2 (val){
                if(val.toFixed(2).indexOf("-") > -1){
                    return val.toFixed(2).substring(1);
                }else{
                    return val.toFixed(2);
                }
            }
        }
    }
</script>
<style scoped>
    .cart{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        font-size: 0.5rem
    }
    .store{
        margin-bottom: 0.2rem;
        background-color: #fff
    }
    .storeInfo{
        display: flex;
        justify-content: flex-start;
        height: 1rem;
        line-height: 1rem;
        padding: 0 0.2rem;
    }
     .storeInfo *{
         flex: 0 0 auto;
     }
    .fa.fa-circle-o, .fa.fa-check-circle-o, .fa.fa-qq{
        font-size: 0.5rem;
    }
    .fa.fa-circle-o{
        color: #ccc;
    }
    .fa.fa-check-circle-o{
        color: red;
    }
    .fa.fa-qq{
        color: red;
        align-self: center;
    }
    .storeIcon{
        width: 0.8rem;
        height: 0.8rem;
        background: url(https://ojn8rdkav.qnssl.com/1462944439cart-store.png) no-repeat;
        background-position: center 0.3rem;
        background-size: 80% 120%;
    }
    /*.storeIcon img{
        width: 100%;
        height: auto;
        align-self: flex-end;
    }*/
    .store-name-content{
        display: flex;
        justify-content: flex-start;
        margin-left: 0.2rem;
        font-size: 0.4rem;
        letter-spacing: 2px;
        flex: 1;
    }
    .store-name-content *{
        flex: 0 0 auto;
    }
    .product-item{
        border-top: 1px solid #ccc;
    }
    .product-item-info{
        height: 3rem;
        line-height: 3rem;
        display: flex;
        padding: 0 0.2rem;
        justify-content: flex-start;
        flex-wrap : nowrap;
    }
    .product-check{
        padding: 0 0.2rem;
    }
    .product-detail-content{
        display: flex;
        justify-content: flex-start;
        margin-left: 3%;
        flex: 1;
    }
    .product-detail{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .product-detail > *{
        height: 1rem;
        line-height: 1rem;
        text-align: left;
        padding-left: 0.2rem;
        font-size: 0.4rem;
    }
    .product-price{
        color: red;
    }
    .product-wlprice{
        color: #ccc;
    }
    .product-img{
        width: 2.5rem;
        height: 2.5rem;
        align-self: center;
    }
    .product-img img{
        width: 100%;
        height: auto;
    }
    .saleNum{
        /*margin-left: 22%;*/
        font-size: 0.4rem;
    }
    .edit{
        text-align: right;
        padding: 0 0.4rem 0.2rem 0;
    }
    .edit button{
        border: none;
        line-height: 0.5rem;
        background-color: #fff;
    }
    .edit span{
        margin: 0 0.2rem;
    }
    .account{
        display: flex;
        justify-content: flex-start;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 1.5rem;
        z-index: 10;
        height: 1.5rem;
        line-height: 1.5rem;
        background-color: #fff;
        border-top: 1px solid #ccc;
        padding-left: 0.2rem;
    }
    .account div{
        flex: 0 0 auto;
        font-size: 0.4rem;
    }
    div.total{
        flex: 1;
        text-align: right;
        padding-right: 0.4rem;
    }
    .total span{
        color: red;
    }
    .goCount{
        text-align: center;
        color: #fff;
        font-weight: bolder;
        background-color: red;
        padding: 0 0.2rem;
    }
</style>