import { createApp } from 'vue';
import microApp from '@micro-zoe/micro-app';
// collapse
import { ElCollapseTransition } from 'element-plus';
// fade/zoom
import 'element-plus/theme-chalk/base.css';
// vue router
import router from '@/router/index';
// pinia
import store from '@/store';
import 'virtual:windi.css';
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import 'virtual:windi-devtools';
import '@/assets/styles/index.scss';
import App from './App.vue';

microApp.start();

const app = createApp(App);

app.component(ElCollapseTransition.name, ElCollapseTransition);
app.use(router);
app.use(store);
app.mount('#app');
