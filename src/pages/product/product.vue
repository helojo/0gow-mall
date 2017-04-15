<template>
    <div class="product">
        <slide :swiperData="product.productPageData.sliders" id="product-slide"></slide>
        <div class="prodcut-info">
            <h2>{{product.productPageData.info.goods_name}}</h2>
            <h3>{{product.productPageData.info.goods_des}}</h3>
            <ul>
                <li>
                    市场价格 : <span class="scPrice">{{product.productPageData.info.scPrice}}</span>
                </li>
                <li>
                    特价包邮 ： <span class="price">￥{{product.productPageData.info.Price}}</span>
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
                <div @click="showSelectMask(!isSelectMaskShow)">
                    <i class="fa fa-arrow-right"></i>
                </div>
            </div>
            <div class="store">
                <div>
                    {{product.productPageData.info.store_name}}
                </div>
                <a :href="`/#/store/${product.productPageData.info.store_id}`">
                    进店逛逛<i class="fa  fa-angle-double-right"></i>
                </a>
            </div>
        </div>
        <div class="product-other">
            <ul @click="changeProductOtherShow($event)">
                <li :class="{active : 0 == selectIndex ? true : false}" data-index="0">详情</li>
                <li :class="{active : 1 == selectIndex ? true : false}" data-index="1">评价</li>
                <li :class="{active : 2 == selectIndex ? true : false}" data-index="2">成交记录</li>
            </ul>
            <div class="detail" v-show=" 0 == selectIndex">
                <div class="storeDesc" v-for="item in product.productPageData.info.detail.desc">
                    {{item}}
                </div>
                <div class="storePics" v-for="item in product.productPageData.info.detail.pics">
                    <img v-lazy="item" />
                </div>
            </div>
            <div class="pingjia" v-for="item in product.productPageData.info.pingjia" v-show=" 1 == selectIndex">
                <div class="pingjia-item">
                    <span>{{item.name}}</span>
                    <span>{{item.rate}}</span>
                    <span>{{item.time}}</span>
                </div>
                <div>{{item.text}}</div>
            </div>
            <div class="record" v-show=" 2 == selectIndex">
                <table class="recordTabel">
                    <thead>
                        <th>用户</th>
                        <th>数量</th>
                        <th>成交时间</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in product.productPageData.info.deal_records">
                            <td>{{item.name}}</td>
                            <td class="saleNums">{{item.num}}</td>
                            <td>{{item.time}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <footer class="product-footer">
            <div class="toHome">
                <a href="/#/home">
                    <div class="fa-home-box"><i class="fa fa-home"></i></div>
                    <h3>首页</h3>
                </a>
            </div>
            <div class="collect" @click="changeLike(!product.like)">
                <div><i class="fa fa-star-o" :class="{active : product.like ? true : false}"></i></div>
                <h3>收藏</h3>
            </div>
            <div class="kefu">
                <div><i class="fa fa-qq"></i></div>
                <h3>客服</h3>
            </div>
            <div class="addCart">
                加入购物车
            </div>
            <div class="buy">
                立即购买
            </div>
        </footer>
        <div class="selectWrap" v-show="isSelectMaskShow">
            <div class="selectContent">
                <div class="selectTop">
                    <div>亲，您选择的规格是</div>
                    <div @click="showSelectMask(!isSelectMaskShow)">
                        <i class="fa fa-times"></i>
                    </div>
                </div>
                <div class="productSpecification" @click="changeSpecification($event)">
                    <span class="productSpecificationItem" v-for="(item, index) in product.productPageData.info.specification" 
                        :data-index="index" :class="{active : product.specificationIndex == index ? true : false}">
                        {{item}}
                        </span>
                </div>
                <div class="buyNumsArea">
                    <div>
                        购买数量
                    </div>
                    <div @click="changeBuyNums($event)">
                        <span class="reduce">-</span>
                        <input type="text" name="quantity" :value="product.buyNums" :maxlength="product.productPageData.info.goodsNowStock">
                        <span class="plus">+</span>
                    </div>
                </div>
                <button class="submitBtn">确定</button>
            </div>
        </div>
    </div>

</template>
<script>
    import {mapState, mapActions} from 'vuex';
    import Slide from '../../components/slide.vue';


    export default{
        data(){
            return{
                selectIndex : 0,
                isSelectMaskShow : false
            }
        },
        computed: {
            ...mapState(['product'])
        },
        methods: {
            ...mapActions(['changeLike', 'getProductPageData','changeBuyNums','changeSpecification']),
            changeProductOtherShow(e){
                console.log(e.target.getAttribute('data-index'));
                let index = Number.parseInt(e.target.getAttribute('data-index'));
                this.selectIndex = index;
            },
            showSelectMask(bool){
                this.isSelectMaskShow = bool;
            }
        },
        mounted(){
            this.getProductPageData(this.$route.params.id);
        },
        components : {
            Slide
        }
    }
</script>
<style scoped>
    #product-slide img.slideImg{
        height: 7rem;
    }
    .product{
        background-color: #fff;
    }
    .prodcut-info h2, .prodcut-info h3{
        text-align: left;
        padding-left: 0.2rem;
    }
    .prodcut-info h2{
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.5rem;
    }
    .prodcut-info h3{
        height: 1rem;
        line-height: 1rem;
        font-size: 0.4rem;
        color: #ccc;
    }
    .prodcut-info ul{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0.2rem;
        border-bottom: 1px solid #ccc;
    }
    .prodcut-info ul li{
        flex: 1 1 45%;
        height: 1rem;
        line-height: 1rem;
        text-align: left;
    }
    .price{
        color: red;
    }
    .selectSpecification, .store{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        padding: 0 0.2rem;
        border-bottom: 1px solid #ccc;
        /*border-left: none;
        border-right : none;*/
    }
    .selectSpecification div, .store *{
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.5rem
    }
    .selectSpecification div:first-child, .store div:first-child{
        flex: 1 1 auto;
        text-align: left;
    }
    .selectSpecification div:last-child{
        width: 30%;
        flex: 0 0 auto;
        text-align: right;
        padding-right: .2rem;
    }
    .fa.fa-arrow-right, .fa.fa-angle-double-right{
        font-size: 0.5rem;
        margin-left: 0.2rem;
    }
    .store a:last-child{
        flex: 0 0 auto;
    }
    .product-other ul{
        display: flex;
    }
    .product-other ul li{
        flex: 1 1 auto;
        background-color: #ccc;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .product-other ul li.active{
        background-color: #fff;
    }
    .detail{
        padding: 0.2rem;
    }
    .storeDesc{
        line-height: 1.5rem;
        color: #000;
        font-size: 0.8rem;
        margin: 0.1rem 0;
        padding: 0 0.2rem;
        text-align: left;
    }
    .storePics img{
        width: 100%;
        height: auto;
    }
    .pingjia{
        padding:0.2rem;
        border-bottom: 1px solid #ccc;
    }
    .pingjia-item{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        
    }
    .pingjia-item span{
        font-size: 0.4rem;
        flex: 0 0 auto;
    }
    .pingjia-item span:nth-of-type(2){
        background-color: red;
        color: #fff;
        padding: 0.1rem 0.2rem;
        border-radius: 10%;
        margin-left: 0.2rem;
    }
    .pingjia-item span:last-child{
        flex: 1 1 auto;
        padding: 0 0.1rem;
         text-align: right;
        color: #ccc;
    }
    .pingjia div:last-child{
        font-size: 0.5rem;
        text-align: left;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .record{
        padding: 0.2rem;
    }
    .record .saleNums{
        color: red;
    }
    .record tabel tr{
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #ccc;
    }
    .product-footer{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 30;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        background-color: #fff;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .product-footer  > div{
        flex: 1 1 auto;
        /*height: 100%;*/
        line-height: 1.5rem;
    }
    .toHome, .collect, .kefu{
        padding: 0 0.2rem;
    }
    .fa-home-box,.collect > div, .kefu > div{
        height: 0.7rem;
        line-height: 0.7rem;
    }
    .toHome a{
        display: block;
    }
    .toHome h3, .collect h3, .kefu h3{
        font-size: 0.4rem;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .fa.fa-home, .fa.fa-star-o, .fa.fa-qq{
        font-size: 0.7rem;
        margin-top: 0.1rem;
    }
    .fa.fa-qq{
        color: red;
    }
    .fa.fa-star-o.active{
        color: red;
    }
    .addCart, .buy{
        height: 1.5rem;
        line-height: 1.5rem;
        color: #fff;
        font-size: 0.5rem;
        padding: 0 0.2rem;
    }
    .addCart{
        background-color: orange;
    }
    .buy{
        background-color: red;
    }
    .selectWrap{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: rgba(0,0,0,.5);
    }
    .selectContent{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
    }
    .selectTop{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .selectTop div{
        font-size: 0.4rem;
        height: 1rem;
        line-height: 1rem;
        padding: 0 0.2rem;
    }
    .fa.fa-times{
        font-size: 0.5rem;
    }
    .selectTop div:first-child{
        flex: 1 1 auto;
        text-align: left;
    }
    .selectTop div:last-child{
        flex: 0 0 auto;
    }
    .productSpecification{
        display: flex;
        justify-content: flex-start;
    }
    .productSpecification span{
        border: 1px solid #ccc;
        padding: 0.1rem;
        font-size: 0.4rem;
        flex: 0 0 auto;
        margin: 0.2rem;
    }    
    .productSpecification span.active{
        border: 1px solid orange;
        color: orange;
    }
    .buyNumsArea{
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        margin-bottom: 0.2rem;
    }
    .buyNumsArea div:first-child{
        flex: 1 1 auto;
        text-align: left;
        padding-left: 0.2rem;
        font-size: 0.4rem;
    }
    .buyNumsArea div:last-child{
        flex: 0 0 auto;
        display: flex;
    }
    .buyNumsArea div:last-child span{
        width: 1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.4rem;
        flex: 0 0 auto;
        border: 1px solid #ccc;
    }
    .buyNumsArea div:last-child input{
        width: 1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border: 1px solid #ccc;
        border-left: none;
        border-right: none;
        text-align: center;
    }
    .submitBtn{
        display: block;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.6rem;
        color: #fff;
        background-color: red;
        border: none;
    }
    .recordTabel{
        width: 100%;
        margin-top: 0.3rem;
        padding: 0 0.2rem;
    }
    .recordTabel thead th, .recordTabel tbody tr{
        text-align: center;
        font-size: 0.5rem;
        line-height: 1rem;
        border-bottom: 1px solid #ccc;
    }
    .recordTabel thead th:first-child, .recordTabel tbody tr td:first-child{
        text-align: left;
    }
</style>