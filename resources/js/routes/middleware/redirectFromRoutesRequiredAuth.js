import store from '@/store'
import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'

export async function redirectFromRoutesRequiredAuth(to, from, next) {
    if (to.meta[GuardedRouteMetaEnum.requiresAuth] && !store.getters['auth/isLoggedIn']) {
        return next({
            name: 'Login'
        })
    }
    return next()
}
