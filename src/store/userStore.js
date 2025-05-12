import { defineStore } from 'pinia';

export const userStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '',
      themeDark: false,

      tabsActive: 1,
      code: '',
    };
  },
  getters: {},
  actions: {
    setCode(code) {
      this.code = code;
    },
  },
  // 开启数据缓存
  persist: true,
});
