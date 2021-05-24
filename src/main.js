import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const cors = require('cors');


createApp(App).use(store).use(router).mount('#app');

