export default {
    methods: {
        changeTheme() {
            const activeTheme = this.$store.getters.getTurnedOnThemeStyle

            if (activeTheme === 'dark') {
                this.$store.dispatch('changeTheme', 'light')
            } else {
                this.$store.dispatch('changeTheme', 'dark')
            }
        }
    }
}
