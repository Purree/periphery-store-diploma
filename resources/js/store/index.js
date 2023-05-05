import { createStore } from 'vuex'
import theme from '@/store/theme'
import language from '@/store/language'
import user from '@/store/user'
import cart from '@/store/cart'

const store = createStore({
    modules: { theme, language, auth: user, cart }
})

export default store
