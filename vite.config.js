/*
 * @Author: 丁雨阳 dzyyyt@163.com
 * @Date: 2023-01-18 13:20:04
 * @LastEditors: 丁雨阳 dzyyyt@163.com
 * @LastEditTime: 2023-01-19 17:09:33
 * @Description: 
 * 
 * Copyright (c) 2023 by 丁雨阳 dzyyyt@163.com, All Rights Reserved. 
 */
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
