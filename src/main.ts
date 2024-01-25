import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from "ant-design-vue";
import "./design/main.css";
import "./design/app.less";

createApp(App).mount('#app')

const app = createApp(App);

app.use(Antd);
app.mount("#app");
