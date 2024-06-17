import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCss from "unocss/vite";
import presetUno from '@unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    uni(),
    UnoCss({
      presets: [
        presetUno()
      ]
    }),
    AutoImport({
      imports: ["vue"]
    })
  ],
  server:{
    host:'0.0.0.0' ,//ip地址
    port: 8080, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
  }
})
