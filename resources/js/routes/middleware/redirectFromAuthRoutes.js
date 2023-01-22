import store from '@/store'

export async function redirectFromAuthRoutes(to, from, next) {
    if (to.meta.authRoute && store.getters['auth/isLoggedIn']) {
        return next({
            name: 'Home'
        })
    }
    return next()
}
