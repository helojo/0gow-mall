<template>
    <header class="searchBar" :class="{topBarShow : isTopBarShow}">
        <div class="searchIcon">
            <i class="fa fa-search"></i>
        </div>
        <div class="topTitle" v-show="isTopBarShow">
            爱购商城
        </div>
        <div class="msgContent">
            <i class="fa fa-comment"></i>
            <span class="msgNums" :class="{msgShow : isTopBarShow}">1</span>
        </div>
    </header>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        data(){
            return {

            }
        },
        computed : {
            ...mapState(['isTopBarShow'])
        }
    }
</script>
<style>
.searchBar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 1.3333rem;
    line-height: 1.33rem;
    padding:0 0.2667rem;
    background-color: rgba(0,0,0, 0);
    display: flex;
    justify-content: space-between;
    z-index: 10;
}
.topBarShow{
    background-color: #fff;
}
.searchIcon, .msgContent{
    flex: none;
    width: 0.8rem;
    height: 0.8rem;
}
.searchIcon .fa-search, .msgContent .fa-comment{
    font-size: 0.6rem;
    color: red;
}
.topTitle{
    height: 1.33rem;
    text-align: center;
    line-height: 1.33rem;
    color: red;
    font-size: 0.5rem;
    flex: 2 1 auto;
    align-items: flex-start;
}
.msgContent{
    position: relative;
}
.msgContent .msgNums{
    width: 0.2667rem;
    height: 0.2667rem;
    border-radius: 50%;
    text-align: center;
    line-height: 1;
    font-size: 10px;
    background-color: #fff;
    color: #333;
    position: absolute;
    top: 6px;
    right: 5px;
}
.msgNums.msgShow{
    background-color: red;

}
</style>