import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { viteMockServe } from 'vite-plugin-mock';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 为 Element Plus 按需引入样式。
import ElementPlus from 'unplugin-element-plus/vite';
// https://vitejs.dev/config/

export default defineConfig(env => {
  // 获取到当前开发模式（dev/pro）下对应的环境文件对象值
  const evnMap = loadEnv(env.mode, process.cwd());
  console.log('evnMap', evnMap);
  return {
    plugins: [
      vue(),
      vueDevTools(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({
        // options
      }),
      viteMockServe({
        mockPath: 'mock', // mock文件夹路径
        enable: evnMap.VITE_USER_NODE_ENV === 'development', // 只有开发环境才开启mock
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: evnMap.VITE_PORT, // 启动端口
      // 反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
      proxy: {
        '/api': {
          target: evnMap.VITE_API_URL, // 目标服务器地址
          changeOrigin: true, // 改变源到目标服务器
          rewrite: path => path.replace(/^\/api/, '/api'), // 重写真实路径,替换/api
          bypass: (req, res, options) => {
            const proxyUrl = options.target + options.rewrite(req.url);
            console.log(`真实请求的完整地址proxyUrl: ${proxyUrl}`);
          },
        },
      },
    },
    // vite 配置
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      'process.env': { ...env, ...evnMap },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
        },
      },
    },
  };
});
