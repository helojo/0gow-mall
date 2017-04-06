<template>
    <div class="loading">
        <i class="fa fa-spinner"></i>
        <span>加载中...</span>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style lang="css">
    .loading{
        height: 1rem;
        background-color: #fff;
        text-align: center;
        line-height: 1rem;
    }
    .loading .fa-spinner{
        font-size: 0.5rem;
        color: red;
        animation: tranScale  1s ease 0s infinite backwards;
    }
    @keyframes tranScale{
        0%{
            transform : rotateZ(36deg)
        }
        10%{
            transform :rotateZ(72deg)
        }
        20%{
            transform :rotateZ(108deg)
        }
        30%{
            transform :rotateZ(144deg)
        }
        40%{
            transform :rotateZ(180deg)
        }
        50%{
            transform :rotateZ(216deg)
        }
        60%{
            transform :rotateZ(252deg)
        }
        70%{
            transform :rotateZ(288deg)
        }
        80%{
            transform :rotateZ(324deg)
        }
        90%{
           transform : rotateZ(360deg)
        }
        100%{
            transform : rotateZ(0deg)
        }

    }
</style>