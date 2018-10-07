<template>
    <div class="main">
        <div class="top">
            <p>欢迎登录AA</p>
            <p>
                每一天，乐在沟通。
            </p>
        </div>
        <div class="center">
            <input-border border-class="username" type="text" name="username" placeholder="用户名" v-model="username">
                <template slot-scope="inputBorder">
                    <p class="error" v-if="inputBorder.error">用户名不可以为空</p>
                </template>
            </input-border>
            <input-border class-border="password" type="password" name="password" placeholder="密码" v-model="password">
                <template slot-scope="inputBorder">
                    <p class="error" v-if="inputBorder.error">密码不可以为空</p>
                </template>
            </input-border>
            <router-link to="#" class="register-button" @click.native="onLogin">立即登录</router-link>
        </div>

    </div>

</template>

<script>
    import inputBorder from "../components/input-border.vue";

    var lock;
    export default {
        name: "login",
        created() {
            lock = false;
        },
        data: function () {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            onLogin: function () {
                // this.$router.push("/chat");
                // return;
                console.log("nonioni");
                if (lock) return;
                lock = true;
                this.$http.post("login", {
                    username: this.username,
                    password: this.password,
                }, {
                    headers: {"Content-type": "application/x-www-form-urlencoded;charset=UTF-8"},
                    emulateJSON: true
                }).then(response => {
                    console.log(response);
                    if (response.body.code !== 0) {
                        alert(response.body.msg);
                        lock = false;
                    } else {
                        window.localStorage.setItem("login-token", response.body.result.token);
                        this.$router.push("/chat");
                        console.log("123");
                    }


                }, response => {
                    lock = false;
                    console.log(response);
                })
            }
        },
        components: {
            "input-border": inputBorder
        }

    }
</script>