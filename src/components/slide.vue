<template>
    <div class="slideWrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in swiperData.items" :key="index">
                <a :href = "item.url">
                    <img :src="item.image" class="slideImg" />
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide} from 'vue-awesome-swiper';
    import {mapState, mapActions} from 'vuex';

    export default{
        name : 'carrousel',
        props : ['swiperData'],
        data(){
            return{
                swiperOption : {
                    initialSlide : 1,
                    autoplay : 5000,
                    pagination : '.swiper-pagination',
                    loop : true,
                    setWrapperSize : true,
                    paginationClickable : true,
                    observeParents : true
                }
            }
        },
        computed : {
            ...mapState(['swiperData'])
        },
        methods : {
            ...mapActions(['getSwiperData'])
        },
        mounted(){
            console.log(this.swiperData);
            this.getSwiperData();
        },
        components : {
            swiper,
            swiperSlide
        }
    }
</script>
<style>
    .slideWrap{
        width: 100%;
    }
    .slideImg{
        height: 5rem;
        width: 100%;
    }
</style>