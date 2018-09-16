<template>
    <!--左侧好友对话菜单-->
    <div class="scrollbar test-1">
        <!--滚动条-->
        <router-link :to="'/chat/dialogueList/' + item.user_id" class="item" v-for="item in list" >
            <img :src="item.img" alt="">
            <span>{{item.uname}}</span>
            <b>{{item.time}}</b>
            <p>{{item.msg}}</p>
        </router-link>
        <!--<router-link class="item">-->
        <!--<img src="../../public/img/chatImage/touxiang2.png" alt="">-->
        <!--<span>星星的记号</span>-->
        <!--<b>14:53</b>-->
        <!--<p>这是一条信息</p>-->
        <!--</router-link>-->
        <!--<div class="item">-->
        <!--<img src="../../public/img/chatImage/touxiang3.png" alt="">-->
        <!--<span>秦影</span>-->
        <!--<b>14:12</b>-->
        <!--<p>这是一条信息</p>-->
        <!--</div>-->
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

</style>