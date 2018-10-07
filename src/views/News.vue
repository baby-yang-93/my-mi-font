<template>
    <div>
        <div class="card" v-for="item in list">
            <div class="card-top">
                <div class="header-left">
                    <img :src="item.img">
                    <span>{{item.title}}</span>
                </div>
                <span>16:58</span>
            </div>
            <router-link :to="'/chat/news/'+i.id" class="card-bottom" v-for="i in item.newsList" :class="{is_active:$route.params.id==i.id}">
                <span>{{i.info}}</span>
                <img :src="i.img" alt="">
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                list: [
                    {
                        img:"/img/news/e.png",
                        title: "ECharts",
                        newsList: [
                            {
                                id: 1,
                                info: "ECharts 饼图",
                                img: "/img/news/bing.png"
                            },
                            {
                                id: 2,
                                info: "ECharts 线图",
                                img: "/img/news/xian.png"
                            },
                            {
                                id: 3,
                                info: "ECharts 柱图",
                                img: "/img/news/zhu.png"
                            },
                        ]
                    },
                    {
                        img:"/img/news/b.png",
                        title: "baidu map",
                        newsList: [
                            {
                                id: 4,
                                info: "地图定位",
                                img: "/img/news/xian.png"
                            }
                        ]
                    },
                    {
                        title: "ECharts",
                        newsList: [
                            {
                                id:5,
                                info:"ECharts 柱图",
                                img:"/img/news/zhu.png"
                            }
                        ]
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    .card::after{
        content: "";
        display: block;
        background: #292d32;
        width: 100%;
        height: 14px;
    }
    .card-top {
        height: 30px;
        line-height: 30px;
        padding: 5px 20px;
        justify-content: space-between;
        display: flex;
        color: #888;
        font-size: 13px;
    }
    .card-top .header-left img {
        border-radius: 50%;
        width: 34px;
        height: 34px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .card-bottom {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #292c33;
        height: 60px;
        padding: 0 20px;
    }
    .card-bottom img {
        width: 45px;
        height: 43px;
        vertical-align: middle;
    }
    .is_active{
        background: #3a3f45;
    }
</style>