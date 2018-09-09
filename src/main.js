import Vue from "vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueResource from "vue-resource";
import App from "./App.vue";
import "../public/css/reset.css";
import address from "address";
import MintUi from "mint-ui";

Vue.use(MintUi);
Vue.use(VueResource);

Vue.http.options.root = `http://${address.ip()}:8888`;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
