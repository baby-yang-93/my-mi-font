<template>
    <div id="box">
        <!--左侧幻灯片-->
        <div id="left-box"></div>
        <!--右侧整体-->
        <div id="right-box">
            <div class="top">
                <ul class="top-menu">
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
                        <router-link v-if="$route.path === '/login'" to="/register">立即注册</router-link>
                        <router-link v-else to="/login">立即登录</router-link>
                    </li>
                </ul>
            </div>
            <router-view />
        </div>
    </div>
</template>
<script>
    export default{
        data(){

        },
        methods:{

        }
    }
</script>
<style>
    /*注册页*/
    a:hover {
        text-decoration: none;
    }
    /*左侧幻灯片*/
    html, body, #box {
        height: 100%;
    }
    #box {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    #left-box {
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('https://4.url.cn/zc/v3/img/01-1.jpg');
        background-size: cover;
        width: 30%;
    }
    #right-box {
        width: 50%;
        height: 100%;
    }
    /*右侧选择菜单头部*/
    .top-menu {
        list-style: none;
        padding: 0;
        font-size: 16px;
        margin-top: 30px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 65%;
        float: right;
        margin-right: 55px;
    }
    #right-box > .top:after {
        display: block;
        content: "";
        clear: both;
    }
    .top-menu li {line-height: 30px;color: #000000; opacity: .6;}
    .top-menu li a {color: #000;display: inline-block;}
    .top-menu .pretty, .top-menu .lang { position: relative;}
    .top-menu .pretty, .top-menu li:hover {opacity: 1;}
    .top-menu .pretty > a:first-child {
        padding-left: 10px;
    }
    .top-menu .pretty > a:first-child img {
        width: 22px;
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    /*AA靓号下面隐藏的div*/
    .top-menu .pretty .search {
        width: 290px;
        height: 114px;
        position: absolute;
        top: 26px;
        right: 0;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, .12);
        border-radius: 7px;
        border: 1px solid #f0f0f0;
        display: none;
        overflow: hidden;
        background: #fff;
        z-index: 1;
    }
    .top-menu .pretty:hover .search {
        display: block;
    }
    /*  div的上半部分*/
    .top-menu .pretty .search div:first-child {
        height: 49px;
        border-bottom: 1px solid #f0f0f0;
    }
    .top-menu .pretty .search div input {
        border: none;
        outline-style: none;
        width: 228px;
        margin: 10px 10px 0 10px;
        float: left;
    }
    .top-menu .pretty .search div input::-webkit-input-placeholder {
        color: #aaa;
    }
    .top-menu .pretty .search div:first-child a {
        display: inline-block;
        width: 40px;
        height: 100%;
        border-left: 1px solid #f0f0f0;
        line-height: 50px;
        text-align: center;
    }
    .top-menu .pretty .search div:first-child a:hover {
        background: linear-gradient(54deg, #fc4754, #ff794c);
    }
    .top-menu .pretty .search div:first-child i {
        background: url("/img/search.png") no-repeat center;
        width: 16px;
        height: 16px;
        display: inline-block;
    }
    .top-menu .pretty .search div:first-child a:hover i {
        background-image: url("/img/search-hover.png");
    }
    /*div的下半部分*/
    .top-menu .pretty .search div:last-child {
        text-align: center;
        line-height: 65px;
    }
    .top-menu .pretty .search div:last-child a {
        margin: 0 5px;
        color: #359eff;
        font-size: 16px;
    }
    .top-menu .pretty .search div:last-child a:hover {
        color: #2b72ff;
    }
    /*AA靓号背景颜色*/
    .top-menu .pretty span {
        background: linear-gradient(35deg, #fc4754, #ff794c);
        border-radius: 5px;
        display: inline-block;
        padding: 0 10px 0 18px;
        line-height: 21px;
        color: #fff;
    }
    .top-menu .email a {
        background: url("/img/mail-entry@2x.png") no-repeat left;
        background-size: 18px;
        padding-left: 21px;
    }
    .top-menu .lang span {
        background: url("/img/down.png") no-repeat right center;
        display: inline-block;
        padding-right: 17px;
        background-size: 11px;
    }
    .top-menu .lang {position: relative;}
    /*简体中文的隐藏div*/
    .top-menu .lang:hover span {
        background-image: url("/img/up.png");
    }
    .top-menu .lang div {
        width: 80px;
        height: 85px;
        margin-top: 5px;
        display: none;
        position: absolute;
        top: 24px;
    }
    .top-menu .lang:hover div {
        display: block;
    }
    .top-menu .lang:hover div a {
        opacity: .6;
    }
    .top-menu .lang div a:hover {
        opacity: 1;
    }
</style>
