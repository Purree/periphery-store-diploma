export async function addRedirectQueryToAuthRoutes(to, from, next) {
    if (to.meta.authRoute && !from.meta.authRoute && !to.query.redirect) {
        next({
            ...to,
            query: {
                redirect: from.path
            }
        })
    } else {
        next()
    }
}
