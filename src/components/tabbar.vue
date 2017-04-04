<template>
    <ul class="tabbar">
        <li v-for="item in tabBarData.tabbar">
            <router-link :to="item.url">
                {{item.title}}
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
    .tabbar{
        position : fixed;
        left : 0;
        right : 0;
        bottom : 0;
        display : flex;
    }
    .tabbar li{
        display : block;
        flex : 1;
    }
</style>