export default {
    methods: {
        changeLanguage() {
            const activeTheme = this.$store.getters['language/getLanguage']

            if (activeTheme === 'ru') {
                this.$store.dispatch('language/changeLanguage', 'en')
            } else {
                this.$store.dispatch('language/changeLanguage', 'ru')
            }
        }
    }
}
