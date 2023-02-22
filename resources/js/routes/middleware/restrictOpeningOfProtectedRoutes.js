import store from '@/store'
import { isUserHasPermissions, isUserHasRoles } from '@/helpers/accessRights'

export async function restrictOpeningOfProtectedRoutes(to, from, next) {
    const user = store.getters['auth/getUser']

    if (to.meta.needRoles) {
        if (!isUserHasRoles(user, to.meta.needRoles)) {
            return denyAccessToRoute(next)
        }
    }

    if (to.meta.needPermissions) {
        if (!isUserHasPermissions(user, to.meta.needPermissions)) {
            return denyAccessToRoute(next)
        }
    }

    return next()
}

function denyAccessToRoute(next) {
    return next({
        name: 'Forbidden'
    })
}
