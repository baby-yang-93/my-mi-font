<template>
    <div class="main">
        <div class="top">
            <p>欢迎登录AA</p>
            <p>
                每一天，乐在沟通。
            </p>
        </div>
        <div class="center">
            <input-border class-border="username" type="text" name="username" placeholder="用户名">
                <template slot-scope="inputBorder">
                    <p class="error" v-if="inputBorder.error">用户名不可以为空</p>
                </template>
            </input-border>
            <input-border class-border="password" type="password" name="password" placeholder="密码">
                <template slot-scope="inputBorder">
                    <p class="error" v-if="inputBorder.error">密码不可以为空</p>
                </template>
            </input-border>
            <router-link to="/chat" class="register-button">立即登录</router-link>
        </div>

    </div>

</template>

<script>
    import inputBorder from "../components/input-border.vue";

    export default {
        name: "login",
        components: {
            "input-border": inputBorder
        }
        // data() {
        //     return {
        //         username: {
        //             error: false,
        //             borderColor: "#aaa",
        //             value: "",
        //             isFocus: false
        //         }
        //     }
        // },
        // methods: {
        //     onFocus(obj) {
        //         obj.borderColor = "blue";
        //         obj.isFocus = true;
        //     },
        //     onBlur(obj) {
        //         if (obj.value === "") {
        //             obj.error = true;
        //             obj.borderColor = "red";
        //         } else {
        //             obj.error = false;
        //             obj.borderColor = "#aaa";
        //         }
        //         obj.isFocus = false;
        //     },
        //     onMouseOut(obj) {
        //         if (!obj.error && !obj.isFocus) {
        //             obj.borderColor = "#aaa";
        //         }
        //     },
        //     onMouseOver(obj) {
        //         if (!obj.error && !obj.isFocus) {
        //             obj.borderColor = "#000";
        //         }
        //     }
        //
        // }
    }
</script>