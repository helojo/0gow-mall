<template>
    <div class="my">
        <div class="msg">
            <i class="fa fa-comment fa-msg"></i>
        </div>
        <div class="userInfo">
            <div class="userAvatar">
                <img :src="my.myPageData.user.avatar">
            </div>
            <div class="userName">
               昵称 ： {{my.myPageData.user.nickname}}
            </div>
            <div class="userID">
                <span>ID : {{my.myPageData.user.uid}}</span>
                <span>关注时间{{my.myPageData.user.addtime}}</span> 
            </div>
        </div>
        <ul class="thh">
            <li class="thh-item" v-for="(item, index) in my.myPageData.thh">
                <a :href="item.url">
                    <div class="thh-item-img">
                        <img :src="item.imgSrc" />
                    </div>
                    <h3 class="my-title">{{item.title}}</h3>
                </a>
            </li>
        </ul>
        <div class="tools-content">
            <h2>必备工具</h2>
            <ul class="tools">
                <li class="tools-item" v-for="(item, index) in my.myPageData.tools">
                    <a :href="item.url">
                        <div class="tools-item-img">
                            <img :src="item.imgSrc" />
                        </div>
                       <h3 class="my-title">{{item.title}}</h3>
                    </a>
                </li>
            </ul>
        </div>
        <div class="lingyou-content">
            <h2>零友圈</h2>
            <ul class="lingyou">
                <li class="lingyou-item" v-for="(item, index) in my.myPageData.lingyouquan">
                    <a :href="item.url">
                        <div class="lingyou-item-img">
                            <img :src="item.imgSrc" />
                        </div>
                        <h3 class="my-title">{{item.title}}</h3>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex';

    export default{
        data(){
            return{

            }
        },
        computed : {
            ...mapState(['my'])
        },
        methods: {
            ...mapActions(['getMyPageData'])
        },
        mounted(){
            this.getMyPageData();
        }
    }
</script>
<style>
    .my{
        height: 100%;
    }
    .msg{
        position: fixed;
        top: 10px;
        right: 10px;
        width: 0.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .fa.fa-comment.fa-msg{
        font-size: 0.5rem;
        color: #fff;
    }
    .userInfo{
        background-color: orangered;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .userAvatar{
        height: 1.5rem;
        width: 1.5rem;
        flex: 0 1 auto;
    }
    .userAvatar img{
        border-radius: 50%;
        height: 100%;
        width: auto;
    }
    .userName{
        color: #fff;
        width: 40%;
        flex: 0 1 auto;
        line-height: 1.5rem;
    }
    .userID{
        color: #fff;
        /*width: 45%;*/
        flex: 0 1 auto;
        margin-top: 0.2rem;
        align-self: center;
    }
    .userID span{
        margin-right: 0.2rem; 
    }
    .thh{
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        margin-bottom: 0.2rem;
        background-color: #fff;
    }
    .thh-item{
        flex: 1 1 auto;
    }
    .thh-item a{
        display: block;
    }
    .thh-item-img{
        width: 100%;
        height: 1rem;
        margin-top: 0.2rem;
    }
    .thh-item-img img{
        width: auto;
        height: 100%;
    }
    .my-title{
        font-size: 0.4rem;
        text-align: center;
        margin: 0.2rem 0;
    }
    .tools-content h2, .lingyou-content h2{
        font-size: 0.5rem;
        height: 1rem;
        line-height: 1rem;
        padding-left: 0.5rem;
        background-color: #fff;
        text-align: left;
    }
    .tools, .lingyou{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 0.2rem;
        background-color: #fff;
    }
    .tools-item, .lingyou-item{
        width: 25%;
        flex: 1 1 auto;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .tools li:nth-child(4n), .lingyou li:nth-child(4n){
        border-right: none;
    }
    .tools-item-img, .lingyou-item-img{
        height: 1rem;
        margin-top: 0.2rem;
    }
    .tools-item-img img, .lingyou-item-img img{
        width: auto;
        height: 100%;
    }
</style>