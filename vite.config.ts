/*
 * @Author: 陆晓夫
 * @Date: 2022-03-22 10:32:35
 * @LastEditors: 陆晓夫
 * @LastEditTime: 2022-03-23 15:28:41
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    //ant-design-vue组件按需加载
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
});
