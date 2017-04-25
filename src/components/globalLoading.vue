<template>
    <div class="globalLoading">
        <div class="globalLoading-content">
            <i class="fa fa-spinner"></i>
            <span>加载中...</span>
        </div>
    </div>
</template>
<script>
    
</script>
<style>
    .globalLoading{
        z-index: 100;
        position: absolute;
        background-color: #fff;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .globalLoading.hide{
        display: none;
    }
    .globalLoading-content{
        position: absolute;
        top: 50%;
        left: 45%;
    }
    .globalLoading-content .fa-spinner{
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