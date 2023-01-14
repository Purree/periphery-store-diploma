export default {
    methods: {
        changeTheme() {
            const activeTheme = this.$store.getters['theme/getTurnedOnThemeStyle']

            if (activeTheme === 'dark') {
                this.$store.dispatch('theme/changeTheme', 'light')
            } else {
                this.$store.dispatch('theme/changeTheme', 'dark')
            }
        }
    }
}
