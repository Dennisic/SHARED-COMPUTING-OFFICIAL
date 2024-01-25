import { createApp } from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import router from "./router";
import "./design/main.css";
import "./design/app.less";

createApp(App).mount('#app')

const app = createApp(App);

app.use(Antd);
app.use(router);
app.mount("#app");
