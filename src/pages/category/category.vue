<template>
   <div class="category">
       <search-bar></search-bar>
       <ul class="hotSearch">
            <li class="hotSearch-item" v-for="(item, index) in hotSearchData" :key="index">
                <a :href="item.url">
                    {{item.text}}
                </a>
            </li>
       </ul>
       <div class="category-content">
           <ul class="category-content-left">
               <li class="category-content-left-item" :class="{active : initIndex == index ? true : false}" v-for="(item, index) in categoryPageData" :key="index" @click="changeCategoryRightData(index)" :data-index="index">
                    {{item.name}}
               </li>
           </ul>
           <!--<template v-for="item in categoryPageData" v-if="">
                <ul class="category-content-right">
                    <li class="category-content-right-item" v-for="(item2, index) in item.list">
                        <a :href="`\/${item2.cat_id}`">
                            <div class="subCateImg">
                                <img v-lazy="item2.img">
                            </div>
                            <h3>{{item2.name}}</h3>
                        </a>
                    </li>
                </ul>
           </template>-->
           <ul class="category-content-right">
                <li class="category-content-right-item" v-for="(item, index) in categoryRightData">
                    <a :href="`\/${item.cat_id}`">
                        <div class="subCateImg">
                            <img v-lazy="item.img">
                        </div>
                        <h3 class="subCateName">{{item.name}}</h3>
                    </a>
                </li>
            </ul>
       </div>
   </div>
</template>

<script>
    import SearchBar from '../../components/searchBar.vue';
    import {mapState, mapActions} from 'vuex';

    let processData = async function(fn, ctx){
        await fn();
        ctx.categoryRightData = ctx.categoryPageData[ctx.initIndex];
    };
    export default{
        data(){
            return{
                hotSearchData : [
                    {
                        url : '/cheap',
                        text : '白菜价'
                    },
                    {
                        url : '/category/shoes',
                        text : '鞋子'
                    },
                    {
                        url : '/category/clothes',
                        text : '运动服'
                    },
                    {
                        url : '/cheap',
                        text : '白菜价'
                    },
                    {
                        url : '/category/shoes',
                        text : '鞋子'
                    },
                    {
                        url : '/category/clothes',
                        text : '运动服'
                    },
                ]
            }
        },
        computed : {
            ...mapState(['categoryPageData', 'categoryRightData', 'initIndex'])
        },
        methods : {
            ...mapActions(['getCategoryPageData','changeCategoryRightData'])
            // changeRightContentData(event){
            //     let index = event.target.getAttribute('data-index');
            //     console.log('index : '+ index);
            //     if(index == this.initIndex)return;
            //     this.changeCategoryRightData(index);
            //     this.initIndex = index;
            // }
        },
        mounted(){
            this.getCategoryPageData();
        },
        components : {
            SearchBar
        }
    }
</script>
<style lang="css">
    .category{
        height: 100%;
        margin-top: 1.33rem;
    }
    .hotSearch{
        display: flex;
        flex-wrap : wrap;
        justify-content: space-between;
        background-color: #fff;
        border-top: 1px solid #ccc;
        padding: 0.2rem 0.5rem;
    }
    .hotSearch-item{
        flex: 0 0 auto;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.2rem;
        margin-top: 0.2rem;
        margin-right: 0.2rem;
        border-radius: 15%;
        border: 1px solid #ccc;
    }
    .category-content{
        margin-top: 0.2rem;
        display: flex;
        flex-wrap: nowrap;
    }
    .category-content-left{
        flex: 1 1 auto;
        width: 25%;
    }
    .category-content-left-item{
        line-height: 1rem;
        height: 1rem;
        padding: 0 0.3rem;
        text-align: center;
        background-color: #eee;
        border-bottom: 1px solid #fff;
    }
    .category-content-left-item.active{
        background-color: #fff;
        box-shadow: inset 4px 0px 3px -1px  orange;
    }
    .category-content-right{
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 70%;
        flex: 1 1 auto;
        padding: 10% 5%;
        align-content: flex-start
    }
    .category-content-right-item{
        width: 33%;
        height: 2.3rem;
        flex : 0 0 auto;
        margin-bottom: 0.2rem;
    }
    .subCateImg{
        height: 1.5rem;
        width: 100%;
    }
    .subCateImg img{
        width: 100%;
        height: auto;
    }
    .subCateName{
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        margin-top: 0.3rem;
    }
</style>