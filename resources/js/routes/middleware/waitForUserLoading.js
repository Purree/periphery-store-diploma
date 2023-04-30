import store from '@/store'
import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'

export async function waitForUserLoading(to, from, next) {
    if (
        to.matched.some(
            route => (
                (
                    Object.values(GuardedRouteMetaEnum).some((metaKey) =>
                        route.meta[metaKey]
                    )
                ) &&
                (store.getters['auth/isLoggedIn'] && Object.values(store.getters['auth/getUser'] === {}).length === 0)
            )
        )
    ) {
        await store.dispatch('auth/changeStatusToLoggedIn')
    }

    return next()
}
