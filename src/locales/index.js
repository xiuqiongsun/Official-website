import { createI18n } from 'vue-i18n'; // 引入vue-i18n组件
import zh from './lang/zh';

export const setCurrLang = () => {
  // const localLang = navigator.language.split('-')[0]; // 浏览器语言
  return 'zh';
};

// 注册i18n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  locale: setCurrLang(), // set default locale
  fallbackLocale: setCurrLang(), // set fallback locale
  messages: {
    zh,
  },
});

export default i18n;
