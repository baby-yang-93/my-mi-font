<template>
    <div>
        <div class="bg">
            <!--整体对话框相应式-->
            <div class=" drag">
                <div class="dialogue-all">
                    <div class="left">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat"
    }
</script>

<style scoped>
    body {
        overflow: hidden;
    }
    body .bg {
        width: 100%;
        height: 800px;
        position: relative;
        background: url("/img/dialogue-bj.jpg") no-repeat fixed;
        background-size: cover;
        padding: 1px;
        box-sizing: border-box;
        z-index: 1;
    }
    .bg:after {
        content: "";
        width: 100%;
        height: 800px;
        position: absolute;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(20px);
        z-index: 2;
    }
    .drag .dialogue-all {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 600px;
        text-align: center;
        z-index: 11;
        background: #fff;
        border-radius: 3px;
    }
    .drag .dialogue-all .left{
        background: #2e3238;
        width: 280px;
        height: 600px;
        border-radius: 3px 0 0 3px;
    }

</style>