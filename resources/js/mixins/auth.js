export default {
    methods: {
        checkIsLoggedIn() {
            return this.$store.getters['auth/isLoggedIn']
        }
    }
}
