<template>
    <div class="bg">
        <!--整体对话框相应式-->
        <div class=" drag">
            <!--对话框-->
            <div class="dialogue-all">
                <!--左侧好友列表-->
                <div class="left">
                    <div class="top">
                        <a href="#"><img src="img/chatImage/header.png" alt=""></a>
                        <span>福尔摩洋</span>
                        <a href="#"></a>
                    </div>
                    <div class="search">
                        <i></i><input type="text" name="" id="" placeholder="搜索">
                    </div>
                    <div class="buttons">
                        <a href="#" class="button1"></a>
                        <a href="#" class="button2"></a>
                        <a href="#" class="button3"></a>
                    </div>
                </div>
                <!--右侧聊天页-->
            </div>
            <footer> © 1998 - 2018 Tencent Inc. All Rights Reserved 帮助</footer>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Chat"
    }
</script>

<style scoped>

    html, body {
        overflow: hidden;
        height: 100%;
    }

    body .bg {
        width: 100%;
        height: 100%;
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
        height: 100%;
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
        height: 80%;
        /*text-align: center;*/
        z-index: 11;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
    }

    .drag .dialogue-all .left {
        background: #2e3238;
        width: 280px;
        height: 100%;
    }

    .drag footer {
        position: absolute;
        left: 50%;
        top: 97%;
        transform: translate(-50%, -50%);
        z-index: 11;
        color: #e3e3e3;
        font-size: 12px;
    }

    .dialogue-all .left .top {
        padding: 18px;
        display: flex;
        justify-content: space-between;
    }

    .dialogue-all .left .top img {
        width: 40px;
    }

    .dialogue-all .left .top span {
        display: inline-block;
        color: #fff;
        font-size: 18px;
        line-height: 40px;
    }

    .dialogue-all .left .top a {
        background-repeat: no-repeat;
        background-position: -438px -396px;
        background-image: url("/img/chatImage/pictorAll.png");
        width: 30px;
        height: 30px;
        display: inline-block;
    }

    .dialogue-all .left .search {

        padding: 0 18px;
    }

    .dialogue-all .left .search i {
        background-repeat: no-repeat;
        background-position: -60px -432px;
        background-image: url("/img/chatImage/pictorAll.png");
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align:-10px;
        background-color: #26292e;
    }

    .dialogue-all .left .search input {
        line-height: 30px;
        border: none;
        color: #fff;
        width: 86%;
        background-color: #26292e;
    }

</style>