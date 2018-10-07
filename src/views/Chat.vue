<template>
    <div class="bg">
        <!--整体对话框相应式-->
        <div class=" drag">
            <!--对话框-->
            <div class="dialogue-all">
                <!--左侧好友列表-->
                <div class="left">
                    <div class="top">
                        <a href="#" @click="showUserInfo = !showUserInfo">
                            <img :src="userInfo.avatar" alt="">
                        </a>
                        <span>{{userInfo.username}}</span>
                        <a href="#" @click="showSetUp = !showSetUp"></a>
                    </div>
                    <!--隐藏的设置部分，点击后显示-->
                    <div class="set-up" v-if="showSetUp">
                        <ul>
                            <li><a href="#"><b class="b1"></b><span>关闭桌面通知</span></a></li>
                            <li><a href=""><b class="b2"></b><span>打开声音</span></a></li>
                            <li><a href=""><b class="b3"></b><span>意见反馈</span></a></li>
                            <li>
                                <router-link to="#" @click.native="onLogout"><b class="b4"></b><span>退出</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!--隐藏的个人信息部分，点击头像就会后显示-->
                    <div class="data" v-if="showUserInfo">
                        <img :src="userInfo.avatar" alt="">
                        <div class="details">
                            <div class="uname">
                                <span>{{userInfo.username}}</span>
                                <b></b>
                                <i></i>
                            </div>
                            <p>
                                <span>备注:</span>
                                <span>This is test</span>
                            </p>
                            <p>
                                <span>地区:</span>
                                <span>This is test</span>
                            </p>
                        </div>
                    </div>
                    <div class="search">
                        <i></i><input type="text" name="" id="" placeholder="搜索">
                    </div>

                    <div class="buttons">
                        <div>
                            <router-link to="/chat/dialogueList" class="button1"
                                         :class="{is_active:$route.name === 'dialogueList'}">
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/chat/news" class="button2"
                                         :class="{is_active:$route.name === 'news'}"></router-link>
                        </div>
                        <div>
                            <router-link to="/chat/friends" class="button3"
                                         :class="{is_active:$route.name === 'friends'}"></router-link>
                        </div>
                    </div>
                    <router-view/>

                </div>
                <!--右侧聊天页-->
                <div class="right-all">
                    <router-view name="right"/>
                </div>


            </div>
            <footer> © 1998 - 2018 Tencent Inc. All Rights Reserved 帮助</footer>
        </div>
    </div>

</template>

<script>
    import "../../public/css/char.css";

    export default {
        name: "Chat",
        data() {
            return {
                showUserInfo: false,
                showSetUp: false,
                userInfo: {}
            }
        },
        created: function () {
            // return;
            var token = window.localStorage.getItem("login-token");
            this.$http.get("check-token", {
                params: {
                    token: token
                }
            }).then(response => {
                if (response.body.code == 0) {
                    this.userInfo = response.body.result.user_info;
                    this.userInfo.avatar = this.$http.options.root + this.userInfo.avatar;
                } else {
                    alert(response.body.msg);
                    this.onLogout();
                }

            })
        },
        methods: {
            onLogout: function () {
                window.localStorage.removeItem("login-token");
                this.$router.push("/login-reg");
            }
        }
    }
</script>

<style scoped>
</style>