<template>
    <div class="jingPin">
        <div class="jingPin-title">精品特卖</div>
        <div class="jingPin-content">
            <div class="jingPing-left">
                <a :href="`/#${jingPinData.left.url}`">
                    <img v-lazy="jingPinData.left.image" />
                </a>
            </div>
            <div class="jingPing-right">
                <a :href="`/#${jingPinData.right.url}`">
                    <img v-lazy="jingPinData.right.image" />
                </a>
            </div>
            <div class="jingPing-category">
                <div class="jingPing-category-item"  v-for="(item, index) in jingPinData.category">
                    <a :href="`/#${item.url}`">
                        <img v-lazy="item.image" />
                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default{
        props : ['jingPinData'],
        data(){
            return{

            }
        }
    }
</script>
<style lang="css">
    .jingPin{
        background-color: #fff;
        margin-top: 0.2rem;
    }
    .jingPin img{
        width: 100%;
        height: auto;
    }
    .jingPin-title{
        border-bottom: 1px solid #ccc;
        line-height: 0.5rem;
        padding: 0.25rem;
        color: red;
        font-size: 0.5rem;
        text-align: left;
    }
    .jingPin-content{
        display: flex;
        flex-wrap: wrap;
    }
    .jingPing-left{
        border-right: 1px solid #ccc;
    }
    .jingPing-left, .jingPing-right{
        width: 50%;
        height: 3.5rem;
        border-bottom: 1px solid #ccc;
    }
    .jingPing-category{
        display: flex;
        flex-wrap: wrap;
    }
    .jingPing-category div{
        height: 3.2rem;
        border: 1px solid #ccc;
        border-top: none;
        border-left: none;
        flex: 1 1 auto;
        width: 25%;
    }
    /*.jingPing-category img{
        width: 100%;
        height: auto;
    }*/
    .jingPing-category div:nth-child(4n){
        border-right: none;
    }
</style>