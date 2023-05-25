import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 重置样式
// import '@unocss/reset/tailwind.css'
import './assets/main.css'
// 引入uno.css，不引入不生效
import 'uno.css'
import JsonViewer from "vue3-json-viewer"
//添加样式
import "vue3-json-viewer/dist/index.css";
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(JsonViewer)

app.mount('#app')
