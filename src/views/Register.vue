<template>
    <div class="main">
        <div class="top">
            <p>欢迎注册AA</p>
            <p>
                每一天，乐在沟通。
                <a href="#">免费靓号</a>
            </p>
        </div>
        <div class="center">
            <input-border class-border="username" type="text" name="username" placeholder="用户名" v-model="username">
                <template slot-scope="inputBorder">
                    <p class="error" v-if="inputBorder.error">用户名不可以为空</p>
                </template>
            </input-border>

            <input-border class-border="password" type="password" name="password" placeholder="密码" v-model="password">
                <template slot-scope="inputBorder">
                    <p class="error" v-if="inputBorder.error">密码不可以为空</p>
                    <template v-if="inputBorder.isFocus">
                        <p class="ok">不能包括空格</p>
                        <p class="info">长度为8-16个字符</p>
                        <p class="info">必须包含字母、数字、符号中至少两种</p>
                    </template>

                </template>
            </input-border>
            <div class="phone86">
                <div class="no86">
                    <input type="text" placeholder="+86" @focus="phone86 = true" @blur="phone86 = false">
                </div>
                <div>
                    <input type="text" placeholder="手机号码" v-model="phone">
                </div>
                <ul v-if="phone86">
                    <li>中国+86</li>
                    <li>中国+87</li>
                    <li>中国+88</li>
                    <li>中国+89</li>
                    <li>中国+90</li>
                    <li>中国+91</li>
                    <li>中国+92</li>
                    <li>中国+93</li>
                    <li>中国+94</li>
                    <li>中国+945</li>
                </ul>
                <span>可通过该手机号找回密码</span>
            </div>

            <router-link to="#" class="register-button" @click.native="onReg">立即注册</router-link>

        </div>
        <div class="bottom">
            <div>
                <span :class="{selected:ok1}" @click="ok1 = !ok1">同时开通QQ空间</span>
            </div>
            <div>
                <span @click="ok2 = !ok2" :class="{selected:ok2}">我已阅读并同意相关服务条款和隐私政策</span><b
                    @click="up = !up" :class="{up:up}"></b>
            </div>
            <div v-if="up" class="last-child">
                <a href="#">《AA号码规则》</a>
                <a href="#">《隐私政策》</a>
                <a href="#">《AA空间服务协议》</a>
            </div>
        </div>
    </div>
</template>

<script>
    import inputBorder from "../components/input-border.vue";

    var lock;
    export default {
        name: "register",
        components: {
            "input-border": inputBorder
        },
        created:function(){
            lock = false;
        },
        data() {
            return {
                ok1: false,
                ok2: false,
                up: false,
                phone86: false,
                username: "",
                password: "",
                phone: ""
            }
        },
        methods: {
            onReg: function () {
                if (lock) return;
                lock = true;
                this.$http.post("register", {
                    username: this.username,
                    password: this.password,
                    phone: this.phone
                }, {
                    headers: {"Content-type": "application/x-www-form-urlencoded;charset=UTF-8"},
                    emulateJSON: true
                }).then(response => {
                    if (response.body.code !== 0) {
                        alert(response.body.msg);
                    }else{
                        this.$router.push("/login-reg/login")
                    }
                    lock = false;
                    console.log(response);
                }, response => {
                    lock = false;
                    console.log(response);
                })
            }
        }
    }
</script>

<style scoped>
    .main .center .ok {
        background: url("/img/green@2x.png") no-repeat left center;
        background-size: 18px;
    }
    .main .center .info {
        background: url("/img/info@2x.png") no-repeat left center;
        background-size: 18px;
    }
    .main .bottom div .selected {
        background: url("/img/checkbox_check@2x.png") no-repeat left center;
        background-size: 18px;
    }
    .main .bottom div b {
        background: url("/img/down.png") no-repeat left center;
        display: inline-block;
        width: 20px;
        height: 20px;
        background-size: 12px;
    }
    .main .bottom div b.up {
        background-image: url("/img/up.png");
    }
</style>