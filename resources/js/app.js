import './bootstrap'

/* Font awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Font awesome */

import ElementPlus from 'element-plus'
import '@@/app.scss'

import { createApp } from 'vue'

/* Translation */
import i18n from '@/lang/index.js'
/* Translation */

import store from '@/store/index.js'
import router from '@/routes/index.js'

// Load this component because it throws infinitive loop
import ReviewRepliesBlock from '@/components/product/reviews/replies/ReviewRepliesBlock.vue'

import App from '@/App.vue'

library.add(fas)

const app = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(i18n)

app.component('ReviewRepliesBlock', ReviewRepliesBlock)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
