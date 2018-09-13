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
                        <div>
                            <a href="#" class="button1"></a>
                        </div>
                        <div>
                            <a href="#" class="button2"></a>
                        </div>
                        <div>
                            <a href="#" class="button3"></a>
                        </div>
                    </div>

                    <!--左侧好友对话菜单-->
                    <div class="scrollbar test-1">
                        <!--滚动条-->
                        <div class="item" @onclick="">
                            <img src="../../public/img/chatImage/touxiang.jpg" alt="">
                            <span>董菲</span>
                            <b>14:30</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang2.png" alt="">
                            <span>星星的记号</span>
                            <b>14:53</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                        <div class="item">
                            <img src="../../public/img/chatImage/touxiang3.png" alt="">
                            <span>秦影</span>
                            <b>14:12</b>
                            <p>这是一条信息</p>
                        </div>
                    </div>
                </div>
                <!--右侧聊天页-->
                <div class="right-all">
                    <!--没选择好友时默认显示的div-->
                    <div class="unselected">
                        <p></p>
                        <div class="wx-background"><span>未选择聊天</span></div>

                    </div>
                </div>
            </div>
            <footer> © 1998 - 2018 Tencent Inc. All Rights Reserved 帮助</footer>
        </div>
    </div>

</template>

<script>
    import "../../public/css/char.css";

    export default {
        name: "Chat"
    }
</script>

<style scoped>
</style>