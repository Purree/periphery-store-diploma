export default {
    methods: {
        changeLanguage() {
            const activeLanguage = this.$store.getters['language/getLanguage']

            if (activeLanguage === 'ru') {
                this.$store.dispatch('language/changeLanguage', 'en')
            } else {
                this.$store.dispatch('language/changeLanguage', 'ru')
            }
        }
    }
}
