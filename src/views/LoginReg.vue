<template>
    <div id="box">
        <!--左侧幻灯片-->
        <div class="big-logo">
            <img src="../../public/img/logo.png" alt="">
            <span>AA</span>
        </div>
        <div id="left-box" :style="{backgroundImage:'url(' + leftImages[nowIndex] + ')'}"></div>

        <!--右侧整体-->
        <div id="right-box">
            <div class="top-menu">
                <ul>
                    <li class="pretty">
                        <a href="#">
                            <img src="img/logo.png"/>
                            <span>AA靓号</span>
                        </a>
                        <!--隐藏的搜索框-->
                        <div class="search">
                            <div>
                                <input type="text" placeholder="搜索AA靓号，如“1314”，“520”">
                                <a href="/search.html">
                                    <i></i>
                                </a>
                            </div>
                            <div>
                                <a href="/search.html">生日</a>
                                <a href="/search.html">星座</a>
                                <a href="/search.html">爱情</a>
                                <a href="/search.html">手机</a>
                            </div>
                        </div>
                    </li>
                    <li class="email">
                        <a href="#">
                            <span>邮箱账号</span>
                        </a>
                    </li>
                    <li class="lang">
                        <span>简体中文</span>
                        <div>
                            <a href="#">繁体中文</a>
                            <a href="#">English</a>
                        </div>
                    </li>
                    <li>
                        <router-link v-if="$route.path === '/login-reg/login'" to="register">立即注册</router-link>
                        <router-link v-else to="/login-reg/login">立即登录</router-link>
                    </li>
                </ul>
            </div>

            <div class="middle">
                <router-view/>
            </div>
            <footer class="footer">Copyright © 1998-2018Tencent All Rights Reserved</footer>
        </div>
    </div>
</template>
<script>
    import "../../public/css/login-reg.css";

    export default {
        data() {
            return {
                leftImages: [
                    '/img/01-1.jpg',
                    '/img/01-4.jpg',
                    '/img/01-3.jpg',
                ],
                nowIndex: 0
            }
        },
        created() {
            this.getImage();
        },
        methods: {
            getImage: function () {
                var $this = this;
                setInterval(function () {
                    if ($this.nowIndex >= $this.leftImages.length - 1) {
                        $this.nowIndex = 0;
                    } else {
                        $this.nowIndex += 1;
                    }
                }, 2000)
            }
        }
    }
</script>
<style>

</style>
