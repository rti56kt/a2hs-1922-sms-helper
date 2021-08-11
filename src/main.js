import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import i18n from './i18n'
import './registerServiceWorker'
import 'ant-design-vue/dist/antd.css';

createApp(App).use(Antd).use(i18n).mount('#app')
