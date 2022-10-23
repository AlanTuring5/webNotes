# 1、项目搭建

## 创建项目

```VUE
npm install -g @vue/cli
```

```VUE
vue create constellation-pro
```

![image-20221010145701100](assets/image-20221010145701100.png)

```vue
vue add vue-next
```



## 配置跨域

```vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 跨域
  devServer: {
    proxy: {
      '/api': {
        // 目标源
        // target: 'http://web.juhe.cn:8080/',
        target: 'http://localhost:5555/',
        // 换源
        changeOrigin: true,
        // websocket
        ws: true,
        // 不检查https
        secure: false,
        // 目录重写
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  // 设置是否在开发环境下每次保存代码时都启用eslint验证
  lintOnSave: false,
})
```



## 结构分析与划分

assets 资源

- css
- img
- js

components 组件

- common
- header
- tab

config 配置

- keys.js

data 存放页面公共静态数据

- nav.js
- tab.js
- error.js

libs 工具类

- https.js
- utils.js

router 路由

- index.js

servies 请求

- index.js
- request.js

store 全局变量

- index.js

views 页面



# 2、数据请求与接口请求的封装

## 安装

```
yarn add -S axios qs
```



# 3、vuex数据存储





# 4、底部菜单栏（路由切换）

components→tab

> 实现效果：点击底部菜单栏，跳转不同的页面，点击时样式发生改变

在底部tab组件内，使用router-link

```
<router-link :to="path" class="tab-icon">
    <i class="icon">{{iconText}}</i>
    <p><slot></slot></p>
</router-link>
```

router-link被点击时会新增.router-link-active的class，用于编写点击时的样式

```CSS
.router-link-active {
    i {
        background-color:$activeColor;
    }
    p {
        color:$activeColor
    }
}
```



# 5、组件缓存

```
<router-view v-slot="{ Component }">
    <keep-alive>
    	<component :is="Component" />
    </keep-alive>
</router-view>
```



# 6、滚动导航视图

components→NavBar

> 实现效果：顶部菜单可横向滑动，点击时样式发生改变

⭕横向滚动的实现

⭕`:class`多个属性

```html
:class="['nav-item',{'nav-cur':index === curIdx}
```

- 多个属性用[]
- {}表达式为true，则增加该class

⭕动态更新点击项

- 子组件判断index===curIdx，使用点击事件传递点击的index
- 父组件使用点击事件传递的index更新curIdx



# 7、滚动导航自定义指令

directives→navCurrent

> 封装，复用

1、编写自定义指令

```JS
export default {
    //初始状态
    mounted(el, binding) {
        // console.log(el, binding)
        const { className, activeClass, curIdx } = binding.value,
            oNavItems = el.getElementsByClassName(className);
		//点击时，增加类名
        oNavItems[curIdx].className += ` ${activeClass}`;
    },
    //更新
    updated(el, binding) {
        const { className, activeClass, curIdx } = binding.value,
            oOptions = binding.oldValue,
            oNavItems = el.getElementsByClassName(className);
		//点击时将之前增加的类名删除掉
        oNavItems[curIdx].className += ` ${activeClass}`;
        //点击时，增加类名
        oNavItems[oOptions.curIdx].className = className;

    }
}
```

2、子组件中，使用data-XXX

```html
<div class='nav-item' :data-index="index">{{item}}</div>
```

3、父组件

- 父节点使用自定义指令v-nav-current

- 将index通过props传输给子组件

```htaccess
<div class="nav-bar" v-nav-current="{
    className:'nav-item',
    activeClass:'nav-current',
    curIdx,
  }"
@click="navClick($event)">


<script>
import {navCurrent} from '@/directives'
export default{
	directives:{
        navCurrent,
    },
}
</script>
```



# 8、注册全局组件

> 将Card组件注册为全局组件，不需要在页面使用components引入即可全局使用

Component/Common/index.js

```JS
import ConsCard from './Card.vue'

let MyPlugin = {};

MyPlugin.install = function (Vue) {
    Vue.component(ConsCard.name, ConsCard);
}

export default MyPlugin;
```

main.js

```JS
……
import MyPlugin from '@/components/Common'
createApp(App).use(store).use(router).use(MyPlugin).mount('#app')
```

