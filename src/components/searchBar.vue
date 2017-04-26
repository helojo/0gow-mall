<template>
    <header class="searchBar" :class="{topBarShow : isTopBarShow}">
        <div class="searchIcon" @click="changeSearchPageShow">
            <i class="fa fa-search"></i>
        </div>
        <div class="topTitle" v-show="isTopBarShow">
            爱购商城
        </div>
        <div class="msgContent">
            <i class="fa fa-comment"></i>
            <span class="msgNums" :class="{msgShow : isTopBarShow}">1</span>
        </div>
        <div class="searchPage" v-show="searchPageShow">
            <form class="searchForm">
                <div class="search-wrap">
                    <input type="text" name="key" placeholder="输入想要的...">
                    <span>搜索</span>
                </div>
                <div class="cancel" @click="changeSearchPageShow">取消</div>
            </form>
        </div>
    </header>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        data(){
            return {
                searchPageShow : false
            }
        },
        computed : {
            ...mapState(['isTopBarShow'])
        },
        methods :{
            changeSearchPageShow : function(){
                this.searchPageShow = !this.searchPageShow;
            }
        }
    }
</script>
<style>
.searchPage{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background-color: #ccc;
    display: flex;
    justify-content: space-between;
}
.searchForm{
    padding: 0.2rem;
    background-color: #fff;
    height: 1.2rem;
    flex-wrap: nowrap;
    display: flex;
    width : 100%;
    justify-content: space-between;
}
.search-wrap{
    display: flex;
    
}
.search-wrap input{
    flex: 0 0 auto;
    height: 0.8rem;
    width: 60vw;
    border-radius: 5px;
}
.search-wrap span{
    height: 0.8rem;
    width: 16vw;
    line-height: 0.8rem;
    font-size: 0.5rem;
    padding: 0 0.1rem;
    color: #fff;
    background-color: red;
    border-radius: 5px;
}
.cancel{
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.1rem;
    font-size: 0.5rem;
}
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