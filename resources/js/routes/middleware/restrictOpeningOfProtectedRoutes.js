import store from '@/store'
import { isUserHasPermissions, isUserHasRoles } from '@/helpers/accessRights'
import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'

export async function restrictOpeningOfProtectedRoutes(to, from, next) {
    const user = store.getters['auth/getUser']

    if (to.meta[GuardedRouteMetaEnum.needRoles]) {
        if (!isUserHasRoles(user, to.meta[GuardedRouteMetaEnum.needRoles])) {
            return denyAccessToRoute(to, next)
        }
    }

    if (
        to.meta[GuardedRouteMetaEnum.needPermissions] ||
        (to.meta[GuardedRouteMetaEnum.needPermissionsOrGuest] && store.getters['auth/isLoggedIn'])
    ) {
        if (!isUserHasPermissions(
            user,
            (to.meta[GuardedRouteMetaEnum.needPermissions] || to.meta[GuardedRouteMetaEnum.needPermissionsOrGuest])
        )) {
            return denyAccessToRoute(to, next)
        }
    }

    return next()
}

function denyAccessToRoute(to, next) {
    return next({
        name: to.meta.withoutPermissionRedirectTo || 'Forbidden'
    })
}
