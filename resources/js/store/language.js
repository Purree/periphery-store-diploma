import LanguagesEnum from '@/helpers/enums/LanguagesEnum'
import 'dayjs/locale/ru.js'

export default {
    state: {
        language: 'ru',
        locale: LanguagesEnum.ru
    },
    getters: {
        getLanguage(state) {
            return state.language
        }
    },
    mutations: {
        setLanguage(state, language) {
            state.language = language
            state.locale = LanguagesEnum[language]
        }
    },
    actions: {
        changeLanguage({ commit }, language) {
            if (!LanguagesEnum[language]) {
                language = 'ru'
            }

            localStorage.setItem('language', language)
            commit('setLanguage', language)
        }
    },
    namespaced: true
}
