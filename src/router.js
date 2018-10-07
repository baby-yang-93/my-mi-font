import Vue from "vue";
import Router from "vue-router";
import login from "./views/Login.vue";
import register from "./views/Register.vue";
import loginReg from "./views/LoginReg.vue";
import chat from "./views/Chat.vue";
import dialogueList from "./views/DialogueList.vue";
import news from "./views/News.vue";
import friends from "./views/FirendsList.vue";
import formal from "./views/Formalchat.vue";
import newsContent from "./views/NewsContent.vue";

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
                {path: "", redirect: "login"},
                {path: "login", name: "login", component: login},
                {path: "register", name: "register", component: register}
            ],
            beforeEnter: (to, from, next) => {
                next();
                return;
                if (window.localStorage.getItem("login-token")) {

                    next("/chat")

                } else {
                    next()
                }
            }
        },
        {
            path: "/chat",
            component: chat,
            children: [
                {path: "", redirect: "dialogueList"},
                {
                    path: "dialogueList/:userId?", name: "dialogueList",
                    components: {
                        default: dialogueList,
                        right: formal
                    }
                },
                {
                    path: "news/:id?", name: "news", components: {
                        default: news,
                        right: newsContent
                    }
                },
                {path: "friends", name: "friends", component: friends},
            ],
            beforeEnter(to,from,next){
                // next();
                // return;
                if(window.localStorage.getItem("login-token")){
                    next();
                }else {
                    next("/login-reg");
                }
            }
        },


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
