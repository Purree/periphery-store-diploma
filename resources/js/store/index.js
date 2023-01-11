import { createStore } from 'vuex'
import { themesEnum } from '@/helpers/ThemesEnum'

const themedElement = document.documentElement

const store = createStore({
    state: {
        theme: 'light'
    },
    getters: {
        getTurnedOnThemeStyle: (state) => {
            return Object.values(themesEnum).find(el => themedElement.classList.contains(el))
        }
    },
    mutations: {
        setTheme: (state, theme) => {
            state.theme = theme
        }
    },
    actions: {
        changeTheme: ({
            commit,
            getters
        }, theme) => {
            localStorage.setItem('theme', themesEnum[theme])
            commit('setTheme', theme)

            const turnedOnThemeStyle = getters.getTurnedOnThemeStyle
            if (turnedOnThemeStyle) {
                themedElement.classList.remove(turnedOnThemeStyle)
            }
            themedElement.classList.add(themesEnum[theme])
        }
    }
})

export default store
