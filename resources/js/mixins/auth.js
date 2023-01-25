export default {
    methods: {
        isLoggedIn() {
            return this.$store.getters['auth/isLoggedIn']
        }
    }
}
