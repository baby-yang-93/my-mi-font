<template>
    <div class="msg-box">
        <!--没选择好友时默认显示的div-->
        <div class="unselected" v-if="!$route.params.userId">
            <p></p>
            <div class="wx-background"><span>未选择聊天</span></div>
        </div>
        <template v-else>
            <p class="friend-name">董非</p>
            <!--对话-->
            <div class="messages">
                <template v-for="item in list">
                    <div class="mgs-item msg-me" v-if="user_id == item.user_id">
                        <span>{{item.content}}</span>
                        <img :src="users[item.user_id].avatar" alt="">
                    </div>
                    <div class="mgs-item" v-else>
                        <img :src="users[item.user_id].avatar" alt="">
                        <span>{{item.content}}</span>
                    </div>
                </template>


            </div>
            <!--发送消息-->
            <div class="edit-msg">
                <div>
                    <i class="i1"></i>
                    <i class="i2"></i>
                    <i class="i3"></i>
                </div>
                <div class="edit-content">

                </div>
                <div class="send-msg">
                    <a href="#">发送</a>
                </div>
            </div>

        </template>
    </div>
</template>

<script>
    export default {
        name: "Formalchat",
        data() {
            return {
                user_id: 1,
                list: [
                    {
                        message_id: 1,
                        user_id: 1,
                        content: "今天周杰伦演唱会"
                    },
                    {
                        message_id: 1,
                        user_id: 2,
                        content: "还有谁"
                    },
                    {
                        message_id: 1,
                        user_id: 1,
                        content: "好多"
                    }
                ],
                users: {
                    "1": {avatar: "/img/chatImage/header.png"},
                    "2": {avatar: "/img/chatImage/touxiang.jpg"}
                }
            }
        }
    }
</script>

<style scoped>
    .friend-name {
        font-size: 15px;
        color: #000;
        text-align: center;
        line-height: 30px;
    }
    .msg-box {
        position: relative;
        height: 100%;
    }
    .msg-box .messages {
        /*background: darkred;*/
        position: absolute;
        top: 51px;
        bottom: 180px;
        width: 100%;
        overflow-y: scroll;
        padding: 5px 20px;
        box-sizing: border-box;
    }
    .edit-msg {
        height: 180px;
        border-top: 1px solid #d6d6d6;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .edit-msg > div {
        padding: 5px 10px;
    }
    .edit-msg > div i {
        padding: 0 3px;
    }
    .edit-msg .i1 {
        background-repeat: no-repeat;
        background-position: -402px -398px;
        background-image: url("/img/chatImage/pictorAll.png");
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: -10px;
    }
    .edit-msg .i2 {
        background-repeat: no-repeat;
        background-position: -30px -432px;
        background-image: url("/img/chatImage/pictorAll.png");
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: -10px;
    }
    .edit-msg .i3 {
        background-repeat: no-repeat;
        background-position: -120px -432px;
        background-image: url("/img/chatImage/pictorAll.png");
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: -10px;
    }
    .edit-content {
        height: 84px;
        width: 100%;
        /*padding: 0 19px;*/
        box-sizing: border-box;
    }
    .send-msg a {
        background: #fff;
        font-size: 14px;
        color: #222;
        padding: 6px 25px;
        border: 1px solid #c1c1c1;
        border-radius: 4px;
        position: absolute;
        right: 30px;
    }
    .send-msg a:hover {
        background: #f8f8f8;
    }
    .mgs-item {
        margin: 10px 0;
        clear: both;
    }
    .msg-me {
        float: right;
    }
    .messages .mgs-item.msg-me span {
        background: #b2e281;
        margin-right: 10px;
    }
    .messages .mgs-item img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .messages .mgs-item span {
        background: #fff;
        padding: 9px 17px;
        border-radius: 4px;
        font-size: 13px;
    }
</style>