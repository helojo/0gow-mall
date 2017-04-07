<template>
    <ul class="tabbar">
        <li v-for="item in tabBarData.tabbar">
            <router-link :to="item.url" class="link" active-class="active">
                <div class="default">
                    <img :src="item.dafaultIcon" />
                </div>
                <div class="active">
                    <img :src="item.activeIcon" />
                </div>
                <p class="tabbar-title">{{item.title}}</p>
            </router-link>
        </li>
    </ul>
</template>
<script>
    import {mapState, mapActions} from 'vuex';
    export default{
        data(){
            return{

            }
        },
        computed : {
            ...mapState(['tabBarData'])
        },
        methods : {
            ...mapActions(['getTabbarData'])
        },
        mounted(){
            this.getTabbarData();
        }
    }
</script>
<style>
    a{
        color : black;
    }
    a:hover,a:active,a:link,a:visited{
        text-decoration: none;
    }
    .tabbar{
        position : fixed;
        left : 0;
        right : 0;
        bottom : 0;
        display : flex;
        border-top: 1px solid #ccc;
        background-color: #fff;
        z-index: 20;
    }
    .tabbar li{
        display : block;
        flex : 1;
    }
    .link .active{
        display: none;
    }
    .link.active .default{
        display: none;
    } 
    .link.active .active{
        display: block;
    }
    .link.active p{
        color: red;
    }
    .default, div.active{
        margin: 0.1rem 0;
        height: 0.7rem;
        text-align: center;
    }
    .default img, div.active img{
        height: 100%;
        width: auto;
    }
    .tabbar-title{
        line-height: 1;
        font-size: 0.2667rem;
        padding: 0.1333rem 0;
        text-align: center;
    }
</style>