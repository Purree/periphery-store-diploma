import './bootstrap'

/* Font awesome */
// import { fas } from '@fortawesome/free-solid-svg-icons'
import {
    faHome,
    faTrash,
    faPen,
    faXmark,
    faCheck,
    faPlus,
    faUser,
    faSpinner,
    faChevronDown,
    faCircleInfo,
    faStar,
    faCartShopping,
    faSearch,
    faArrowLeft,
    faArrowRight,
    faSun,
    faMoon,
    faBox
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(fas)
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

library.add(faHome,
    faTrash,
    faPen,
    faXmark,
    faCheck,
    faPlus,
    faUser,
    faSpinner,
    faChevronDown,
    faCircleInfo,
    faStar,
    faCartShopping,
    faSearch,
    faArrowLeft,
    faArrowRight,
    faSun,
    faMoon,
    faBox)

const app = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(i18n)

app.component('ReviewRepliesBlock', ReviewRepliesBlock)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
