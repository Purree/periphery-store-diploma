import { themesEnum } from '@/helpers/enums/ThemesEnum'

export const themedElement = document.documentElement;

export default {
    methods: {
        changeTheme() {
            const activeThemeClass = this.getCurrentThemeClass()

            if (activeThemeClass === 'dark') {
                this.$store.dispatch('theme/changeTheme', 'light')
            } else {
                this.$store.dispatch('theme/changeTheme', 'dark')
            }
        },
        getCurrentThemeClass() {
            return Object.values(themesEnum).find(el => themedElement.classList.contains(el))
        }
    }
}
