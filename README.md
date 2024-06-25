##  框架说明

vue3 + vite + uniapp + pinia + axios + Unocss + vant

框架基于 https://github.com/dcloudio/uni-preset-vue@vite 

###  vue3 

https://cn.vuejs.org/guide/introduction.html

### vite

https://vitejs.cn/vite3-cn/guide/

### uniapp

https://github.com/dcloudio/uni-preset-vue  <br>
Q： 为啥没用vite-ts ?   <br>
A： 也在一些项目用了用ts，感觉如果只是用于业务开发的话，最佳选择应该是 js + jsdoc  <br>
Q： 那你也没用js-doc啊？   <br>
A： 因为懒...  <br>

### pinia 

 https://pinia.vuejs.org/zh/ <br>
 目前如果使用pinia 2.1+版本会造成项目无法启动问题， 本次使用版本为  pinia@2.0.36
 
### axios

https://www.axios-http.cn/docs/intro

### Unocss

  https://unocss.nodejs.cn/ <br>
  tailwindcss 编译速度较慢， Unocss为tailwindcss的200倍，且可无缝支持 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等写法

  也可自预设自己的规则,  原子化 + sass 简直无敌

  fydebugger  unocss在 uniapp run dev时 会报css编译错误，打包无此问题，uniapp真是个垃圾

### vant

 https://vant-contrib.gitee.io/vant-weapp/#/home <br>
 老朋友vant，需注意dist目录下文件必须放入wxcomponents中,否则props不会生效
