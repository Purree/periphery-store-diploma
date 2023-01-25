import store from '@/store'

export async function redirectFromLoggedInRoutes(to, from, next) {
    if (to.meta.loggedInRoute && !store.getters['auth/isLoggedIn']) {
        return next({
            name: 'Login'
        })
    }
    return next()
}
