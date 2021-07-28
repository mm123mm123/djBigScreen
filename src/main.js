import {createApp} from "vue";
import App from "./App.vue";
import "./index.scss";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import {scrollBoard} from "@jiaminghi/data-view";

const app = createApp(App);
app.use(router).use(ElementPlus).use(scrollBoard);
app.mount("#app");
