<template>
    <div class="store">
        <div class="store-banner">
            <div class="store-avatar">
                <img :src="store.storePageData.store_info.store_avatar" />
            </div>
            <div class="store-info">
                <h2 class="store-name">{{store.storePageData.store_info.store_name}}</h2>
                <h3 class="store-desc">{{store.storePageData.store_info.store_desc}}</h3>
                <div class="store-kefu-like">
                    <div class="store-kefu">联系客服</div>
                    <div class="store-like" @click="changeLike(!store.like)">
                        <i class="fa fa-star-o" :class="{active : store.like}"></i>
                        <p>收藏</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="store-newProducts">
            <h3>最新上架</h3>
            <ul>
                <li v-for="(item, index) in store.storePageData.newProducts" class="store-product-item">
                    <a :href="`/#/product/${item.goods_id}`">
                        <div class="store-product-img">
                            <img v-lazy="item.default_image" />
                        </div>
                        <h4 class="store-product-name">{{item.goods_name}}</h4>
                        <div class="store-product-price">
                            <span>￥{{item.Price}}</span>
                            <span>￥{{item.scPrice}}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="store-hotProducts">
            <h3>热销商品</h3>
            <ul>
                <li v-for="(item, index) in store.storePageData.hotProducts" class="store-product-item">
                    <a :href="`/#/product/${item.goods_id}`">
                        <div class="store-product-img">
                            <img v-lazy="item.default_image" />
                        </div>
                        <h4 class="store-product-name">{{item.goods_name}}</h4>
                        <div class="store-product-price">
                            <span>￥{{item.Price}}</span>
                            <span>￥{{item.scPrice}}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions} from 'vuex';

    export default{
        data(){
            return{

            }
        },
        computed: {
            ...mapState(['store'])
        },
        methods: {
            ...mapActions(['getStorePageData', 'changeLike'])
        },
        mounted(){
            this.getStorePageData();
        }
    }
</script>
<style>
    .store{
        height: 100%;
        width: 100%;
    }
    .store-banner{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        background-color: red;
        background-color:rgba(0, 122, 255, 0.59)
    }
    .store-avatar{
        height: 4rem;
        line-height: 4rem;
        flex: 0 0 20%;
        padding: 0 0.2rem;
        vertical-align: middle;
    }
    .store-avatar img{
        width: 100%;
        height: auto;
        border-radius: 50%;
        margin-top: 70%;
    }
    .store-info{
        color: #fff;
        text-align: left;
        padding: 0.2rem;
    }
    .store-name{
        font-size: 0.4rem;
        height: 1rem;
        line-height: 1rem;
        margin-top: 0.1rem;
    }
    .store-desc{
        font-size: 0.5rem;
        line-height: 0.8rem;
    }
    .store-kefu-like{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 0.2rem;
    }
    .store-kefu{
        padding: 0.1rem;
        font-size: 0.4rem;
        border: 1px solid #fff;
        border-radius: 5px;
        height: 0.8rem;
    }
    .fa.fa-star-o{
        font-size: 0.8rem;
    }
    .fa.fa-star-o.active{
        color: red;
    }
    .store-like p{
        font-size: 0.3rem;
    }
    .store-newProducts, .store-hotProducts{
        margin-bottom: 0.4rem;
        background-color: #fff;
    }
    .store-newProducts h3, .store-hotProducts h3{
        padding-left: 0.2rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: left;
        border-bottom: 1px solid #ccc;
        font-size: 0.5rem;
    }   
    .store-newProducts ul, .store-hotProducts ul{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .store-newProducts ul li:nth-child(odd), .store-hotProducts ul li:nth-child(odd){
        border-right: 1px solid #ccc;
    }
    .store-product-item{
        flex: 0 0 50%;
        /*margin-bottom: 0.2rem;*/
        border-bottom: 1px solid #ccc;
    }
    .store-product-item a{
        display: block;
    }
    .store-product-img{
        width: 100%;
        height: 5rem;
    }
    .store-product-img img{
        width: 100%;
        height: auto;
    }
    .store-product-name, .store-product-price{
        font-size: 0.4rem;
        padding-left: 0.2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: left;
    }
    .store-product-price span:first-child{
        color: red;
        margin-right: 0.2rem
    }
    .store-product-price span:last-child{
        color: #ccc;
        text-decoration: line-through;
    }
</style>