<template>
    <!--左侧好友对话菜单-->
    <div class="scrollbar test-1">
        <!--滚动条-->
        <router-link :to="'/chat/dialogueList/' + item.user_id" class="item" v-for="item in list" :class="{is_active:$route.params.userId==item.user_id+''}">
            <img :src="item.img" alt="">
            <span>{{item.uname}}</span>
            <b>{{item.time}}</b>
            <p>{{item.msg}}</p>
        </router-link>

    </div>
</template>

<script>
    export default {
        name: "DialogueList",
        data() {
            return {
                list: [
                    {
                        user_id: 1,
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲",
                        time: "14:30",
                        msg: "这是一条信息"
                    },
                    {
                        user_id: 2,
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲",
                        time: "14:30",
                        msg: "这是一条信息"
                    },

                    {
                        user_id: 3,
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲",
                        time: "14:30",
                        msg: "这是一条信息"
                    },

                    {
                        user_id: 4,
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲",
                        time: "14:30",
                        msg: "这是一条信息"
                    },

                    {
                        user_id: 5,
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲",
                        time: "14:30",
                        msg: "这是一条信息"
                    },

                    {
                        user_id: 6,
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲",
                        time: "14:30",
                        msg: "这是一条信息"
                    },


                ]
            }
        },

    }
</script>

<style scoped>
    .is_active{
        background: #3a3f45;
    }
</style>