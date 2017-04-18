<template>
    <div class="toTop" v-show="isToTopBarShow" @click="toTop"> 
        <i class="fa fa-arrow-up"></i>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import {debounce, throttle} from 'lodash'

    export default{
        data(){
            return{
                showData : false
            }
        },
        computed: {
            ...mapState(['isToTopBarShow'])
        },
        methods : {
            toTop :function(){
               document.body.scrollTop = 0;     
             },
             ...mapActions(['handleScroll'])
        },
        mounted(){
            window.addEventListener('scroll', throttle(this.handleScroll, 500));
           
        }
    }
</script>
<style lang="css">
    .toTop{
        position: fixed;
        right: 0.5rem;
        bottom: 2rem;
        display:inline-block;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 0.8rem;
        background-color: rgba(0,0,0,1);
        border-radius: 50%;
    }
    .fa.fa-arrow-up{
        font-size: 0.5rem;
        color: #fff;
    }
</style>