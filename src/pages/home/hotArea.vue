<template>
    <div class="hotArea">
        <div class="hotArea-title">
            <span>热卖专区</span>
            <a href="">
                <span>更多优惠</span>
                <span>></span>
            </a>
        </div>
        <div class="hotArea-adver">
            <div class="hotArea-adver-left">
                <a :href="hotAreaData.left.url">
                    <img v-lazy="hotAreaData.left.image" />
                </a>
            </div>
            <div class="hotArea-adver-right">
                <div class="hotArea-adver-right-content">
                    <a :href="hotAreaData.right1.url">
                        <img v-lazy="hotAreaData.right1.image" />
                    </a>
                </div>
                <div class="hotArea-adver-right-content">
                    <a :href="hotAreaData.right2.url">
                        <img v-lazy="hotAreaData.right2.image" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props : ['hotAreaData'],
        data(){
            return {

            }
        }
    }
</script>
<style lang="css">
    .hotArea{
        margin-top: 0.2rem;
        background-color: #fff;
    }
    .hotArea img{
        width: 100%;
        height: auto;
    }
    .hotArea-title{
        display: flex;
        padding: 0.3rem 0.1rem;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .hotArea-title  span:first-child{
        line-height: 0.5rem;
        color: red;
        font-size: 0.5rem;
    }
    
    .hotArea-title  span:last-child{
        color: red;
    }
    .hotArea-title  a span:first-child{
        color: #333;
    }
    .hotArea-title  a span:first-child, .hotArea-title  span:last-child{
        line-height: 0.4rem;
        font-size: 0.4rem;
    }
    .hotArea-adver{
        display: flex;
    }
    .hotArea-adver-left, .hotArea-adver-right{
        width: 50%;
        height: 5.5rem;
    }
     .hotArea-adver-left{
         border-right: 1px solid #ccc;
     }
     .hotArea-adver-right div:first-child{
         border-bottom: 1px solid #ccc;
     }
</style>