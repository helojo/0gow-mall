<template>
    <ul class="homeCategory">
        <li v-for="(item, index) in homeCategoryData" :key="index">
            <div>
                <a :href="item.url">
                    <img v-lazy="item.image" />
                </a>
            </div>
            <p>{{item.title}}</p>
        </li>
    </ul>
</template>
<script>
    export default{
        props : ['homeCategoryData'],
        data(){
            return{

            }
        }
    }
</script>
<style>
    .homeCategory{
        display: flex;
        flex-wrap : wrap;
        justify-content: space-between;
        align-content: center;
        background-color: #fff;
        margin-top: 0.2rem;
        padding-bottom: 0.1rem;
    }
    .homeCategory li{
        width : 25%;
        height: 2rem;
        flex : 1 1 auto;
        margin-top: 0.2rem;
    }
    .homeCategory li div{
        height: 1.5rem;
        vertical-align: middle;
    }
    .homeCategory li div img{
        height: 80%;
        width: auto;
    }
    .homeCategory li p{
        line-height: 0.5rem;
        font-size: 0.4rem;
        text-align: center;
    }
</style>