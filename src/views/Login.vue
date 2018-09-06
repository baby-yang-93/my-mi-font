<template>
    <div class="middle">
        <div class="top">
            <p>欢迎登录AA</p>
            <p>
                每一天，乐在沟通。
            </p>
        </div>
        <div class="center">
            <div class="username">
                <div>
                    <input type="text" placeholder="用户名" name="username">
                </div>
                <p class="error">用户名不可以为空</p>
            </div>
            <div class="password">
                <div>
                    <input type="password" placeholder="密码" name="password">
                </div>
                <p class="error">密码不可以为空</p>
            </div>
            <router-link to="/chat" class="register-button">立即登录</router-link>
        </div>
        <footer>Copyright © 1998-2018Tencent All Rights Reserved</footer>
    </div>

</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    .middle {margin-top: 80px; width: 60%}
    .middle .top p:first-child {
        font-size: 44px;
    }
    .middle .top p:last-child {
        font-size: 28px;
        line-height: 35px;
    }
    .middle .top p:last-child a {
        color: #359eff;
        font-size: 24px;
        float: right;
    }
    .middle .top p:last-child a:hover {
        color: #2b72ff;
    }
    /*input部分*/
    .middle .center {margin-top: 100px;}
    .middle .center input {
        outline-style: none;
    }
    .middle .center > div {
        margin-bottom: 60px;
    }
    .middle .center > div > div {
        padding: 10px 20px;
        border: 1px #aaa solid;
        border-radius: 5px;
        font-size: 20px;
    }
    /*input焦点时候的蓝色*/
    .middle .center > div > div.focus {
        border: 1px #549df8 solid;
    }
    .middle .center > div > div.error {
        border: 1px red solid;
    }
    /**/
    .middle .center > div > div:hover:not(.focus):not(.error) {
        border-color: #414141;
    }
    .middle .center > div > div input {
        border: none;
        width: 100%;
    }
    .middle .center > div > p {
        margin: 8px 0 0 0;
        padding-left: 25px;
        display: none;
    }
    .middle .center > div > p.error {
        color: red;
        background: url("/img/error@2x.png") no-repeat left center;
        background-size: 18px;
    }
    /*+86手机部分*/
    .middle .center .phone86:after {
        content: '';
        clear: both;
        display: block;
    }
    .middle .center .phone86 {
        position: relative;
    }
    .middle .center .phone86 div {
        float: left;
    }
    .middle .center .phone86 div:first-child {
        background: url("/img/down.png") no-repeat 130px center;
        width: 35%;
        margin-right: 18px;
        padding-right: 30px;
    }
    .middle .center .phone86 div:first-child input::-webkit-input-placeholder {
        color: #000;
    }
    .middle .center .phone86 div:nth-child(2) {
        width: 61%;
    }
    .middle .center .phone86 ul {
        height: 200px;
        width: 100%;
        position: absolute;
        border: 1px solid #aaa;
        top: 52px;
        background: #fff;
        overflow: auto;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, .15);
        display: none;
    }
    .middle .center .phone86 ul li {
        font-size: 20px;
        line-height: 50px;
        padding: 0 20px;
    }
    .middle .center .phone86 ul li:hover {
        background: #eeeeee;
    }
    .middle .center .phone86 span {color: #999;line-height: 30px;}
    .middle .center .register-button {
        display: block;
        height: 60px;
        border-radius: 4px;
        border: 1px solid #3083ff;
        background: linear-gradient(0deg, #398bff, #3083ff);
        color: #fff;
        font-size: 24px;
        text-align: center;
        line-height: 58px;
        font-weight: lighter;
        box-shadow: 0 5px 8px 0 rgba(24, 95, 255, .1);
        margin: 35px 0;
    }
    .middle .center .register-button:hover {
        background-image: linear-gradient(0deg, #3580eb, #2c79eb);
    }
    .middle .bottom div:after {
        content: '';
        clear: both;
        display: block;
    }
    .middle .bottom div span {
        font-size: 13px;
        color: #aaa;
        float: left;
        margin: 1px 5px 15px 3px;
    }
    .middle .bottom div i {
        background: url("/img/checkbox_normal@2x.png") no-repeat left;
        width: 18px;
        height: 18px;
        display: inline-block;
        background-size: 18px;
        float: left;
    }
    .middle .bottom div b {
        background: url("/img/down.png") no-repeat bottom;
        width: 12px;
        height: 14px;
        display: inline-block;
        background-size: 12px;
        float: left;
    }
    .middle .bottom {
        position: relative;
    }
    .middle .bottom div:last-child {
        width: 500px;
        position: absolute;
        left: 20px;
        top: 60px;
        display: none;
    }
    .middle .bottom div:last-child a {
        display: block;
        color: #359eff;
    }
    .middle .bottom div:last-child a:hover {
        color: #2b72ff;
    }
    footer {
        color: #bbb;
        text-align: center;
        margin-top: 80px;
    }
</style>