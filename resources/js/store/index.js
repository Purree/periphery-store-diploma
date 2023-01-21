import { createStore } from 'vuex'
import theme from '@/store/theme'
import language from '@/store/language'
import user from '@/store/user'

const store = createStore({
    modules: { theme, language, auth: user }
})

export default store
