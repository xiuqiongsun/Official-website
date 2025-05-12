import { createApp } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import i18n from './locales/index';
import './styles/tailwind.css';
import './styles/index.scss';
// 导入store
import store from './store';
import '@/utils/vconsole.js';

const app = createApp(App);
// eslint-disable-next-line no-restricted-syntax
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(i18n);
// 使用store
app.use(store);
app.use(router); // 注册路由
app.mount('#app');
