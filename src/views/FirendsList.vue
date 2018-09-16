<template>
    <div>
        <div class="list-top">show all friends</div>
        <router-link to="/" class="lists" v-for="item in list">
            <img :src="item.img" alt="">
            <span>{{item.uname}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "FirendsList",
        data(){
            return{
                list:[
                    {
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲"
                    },
                    {
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲"
                    },
                    {
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲"
                    },
                    {
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲"
                    },
                    {
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲"
                    },
                    {
                        img: "/img/chatImage/touxiang.jpg",
                        uname: "董菲"
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .list-top{
        background-color: #292d32;
        width: 244px;
        height: 22.4px;
        padding: 1px 18px;
        color: #787b87;
        font-size: 14px;
        line-height: 20px;
    }
    .lists img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .lists{
        display: block;
        border: 1px solid #292c33;
        padding: 10px 18px 9px 18px;
        color: #fff;
        font-size: 13px;
        overflow: hidden;
    }


</style>