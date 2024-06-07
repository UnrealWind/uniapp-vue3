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
})
