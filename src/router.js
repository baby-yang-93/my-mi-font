import Vue from "vue";
import Router from "vue-router";
import login from "./views/Login.vue";
import register from "./views/Register.vue";
import loginReg from "./views/LoginReg.vue";
import chat from "./views/Chat.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {path: "/", redirect: "/login-reg"},
        {
            path: "/login-reg",
            component: loginReg,
            children: [
                {path: "/", redirect: "/login"},
                {path: "/login", name: "login", component: login},
                {path: "/register", name: "register", component: register}
            ],
            beforeEnter:(to,from,next) => {
                next();
            }
        },
        {path: "/chat", component: chat, children: []},


        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});
