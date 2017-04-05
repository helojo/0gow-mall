<template>
    <header class="searchBar">
        <div class="searchIcon">
            <i class="fa fa-search"></i>
        </div>
        <div class="msgContent">
            <i class="fa fa-comment"></i>
            <span class="msgNums">1</span>
        </div>
    </header>
</template>
<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
<style>
.searchBar{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1.3333rem;
    padding: 0.2667rem;
    background-color: rgba(0,0,0, 0);
    display: flex;
    justify-content: space-between;
    z-index: 10;
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
    top: -2px;
    right: 5px;
}
</style>