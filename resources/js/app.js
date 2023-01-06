import './bootstrap'

import '@@/app.scss'

/* Font awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Font awesome */

/* ElementPlus */
import ElementPlus from 'element-plus'
import '~/element-plus/dist/index.css'
/* ElementPlus */

import { createApp } from 'vue'

import store from '@/store/index.js'
import router from '@/routes/index.js'

import App from '@/App.vue'

library.add(fas)

const app = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
