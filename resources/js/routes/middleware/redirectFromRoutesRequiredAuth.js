import store from '@/store'

export async function redirectFromRoutesRequiredAuth(to, from, next) {
    if (to.meta.requiresAuth && !store.getters['auth/isLoggedIn']) {
        return next({
            name: 'Login'
        })
    }
    return next()
}
