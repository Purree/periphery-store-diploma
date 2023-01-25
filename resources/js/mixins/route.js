export default {
    methods: {
        getRouteByName(name) {
            return this.$router.resolve({
                name
            })
        },
        getRoutePathByName(name) {
            return this.getRouteByName(name).fullPath
        },
        getRouteByNameIfLoggedInElseGetLoginRoute(name) {
            if (this.$store.getters['auth/isLoggedIn']) {
                return this.getRouteByName(name)
            } else {
                return this.getRouteByName('Login')
            }
        },
        getRoutePathByNameIfLoggedInElseGetLoginRoute(name) {
            return this.getRouteByNameIfLoggedInElseGetLoginRoute(name).fullPath
        }
    }
}
