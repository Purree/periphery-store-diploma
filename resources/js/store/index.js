import { createStore } from 'vuex'
import theme from '@/store/theme'
import language from '@/store/language'

const store = createStore({
    modules: { theme, language }
})

export default store
