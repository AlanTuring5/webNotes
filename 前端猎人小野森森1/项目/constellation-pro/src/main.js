import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MyPlugin from '@/components/Common'

createApp(App).use(store).use(router).use(MyPlugin).mount('#app')
