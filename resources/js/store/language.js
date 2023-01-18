import LanguagesEnum from '@/helpers/enums/LanguagesEnum'
import 'dayjs/locale/ru.js'
import i18n from '@/lang'
import apiRequest from '@/helpers/apiRequest'
import { API_CHANGE_LANGUAGE_URL } from '@/api/language'

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
        async changeLanguage({ commit }, language) {
            if (!LanguagesEnum[language]) {
                language = 'ru'
            }
            i18n.global.locale = language

            localStorage.setItem('language', language)
            apiRequest(API_CHANGE_LANGUAGE_URL, { locale: language })
            commit('setLanguage', language)
        }
    },
    namespaced: true
}
