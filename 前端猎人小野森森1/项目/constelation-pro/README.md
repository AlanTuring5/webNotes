1、创建项目

```VUE
npm install -g @vue/cli
```

```VUE
vue create constelation-pro
```

![image-20221010145701100](assets/image-20221010145701100.png)

```vue
vue add vue-next
```



2、配置跨域

```vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 跨域
  devServer: {
    proxy: {
      '/api': {
        // 目标源
        target: 'http://web.juhe.cn:8080',
        // 换源
        changeOrigin: true,
        // websocket
        ws: true,
        // 不检查https
        secure: false,
        // 目录重写
        pathRewrite: {
          '^api': ''
        }
      }
    },
    overlay: {
      warning: false,
      errors: false,
    }
  },
  // 设置是否在开发环境下每次保存代码时都启用eslint验证
  lintOnSave: false,
})
```



3、安装

```
yarn add -S axios qs
```

