import { themesEnum } from '@/helpers/Enums/ThemesEnum'
import theme, { themedElement } from '@/mixins/theme'

export default {
    state: {
        theme: 'light'
    },
    mutations: {
        setTheme: (state, theme) => {
            state.theme = theme
        }
    },
    actions: {
        changeTheme: ({
            commit
        }, newTheme) => {
            localStorage.setItem('theme', themesEnum[newTheme])
            commit('setTheme', newTheme)

            const turnedOnThemeStyle = theme.methods.getCurrentThemeClass()
            if (turnedOnThemeStyle) {
                themedElement.classList.remove(turnedOnThemeStyle)
            }
            themedElement.classList.add(themesEnum[newTheme])
        }
    },
    namespaced: true,
    mixins: [theme]
}
