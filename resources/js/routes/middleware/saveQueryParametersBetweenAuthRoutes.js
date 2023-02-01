function hasQueryParams(route) {
    return !!Object.keys(route.query).length
}

export async function saveQueryParametersBetweenAuthRoutes(to, from, next) {
    if (to.meta.authRoute && from.meta.authRoute && hasQueryParams(from) && !hasQueryParams(to)) {
        next({
            ...to,
            query: from.query
        })
    } else {
        next()
    }
}
