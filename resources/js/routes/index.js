import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/routes/middleware/loadLayout.js'
import { redirectFromAuthRoutes } from '@/routes/middleware/redirectFromAuthRoutes'
import { redirectFromRoutesRequiredAuth } from '@/routes/middleware/redirectFromRoutesRequiredAuth'
import { saveQueryParametersBetweenAuthRoutes } from '@/routes/middleware/saveQueryParametersBetweenAuthRoutes'
import { restrictOpeningOfProtectedRoutes } from '@/routes/middleware/restrictOpeningOfProtectedRoutes'

import user from '@/routes/user'
import auth from '@/routes/auth'
import errors from '@/routes/errors'
import PermissionsEnum from '@/helpers/enums/PermissionsEnum'
import { waitForUserLoading } from '@/routes/middleware/waitForUserLoading'
import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'
import products from '@/routes/products'
import orders from '@/routes/orders'
import { addRedirectQueryToAuthRoutes } from '@/routes/middleware/addRedirectQueryToAuthRoutes'
import SearchKeywordsEnum from '@/helpers/enums/SearchKeywordsEnum'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            layout: 'HomeLayout',
            transition: 'none',
            [GuardedRouteMetaEnum.needPermissionsOrGuest]: PermissionsEnum.view_products,
            withoutPermissionRedirectTo: 'Profile'
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/search/Search.vue'),
        meta: {
            title: route => {
                const searchBy = route.query[SearchKeywordsEnum.searchBy]
                return searchBy
                    ? ['titles.searchBy', { searchBy }]
                    : ['titles.search']
            },
            layout: 'SearchLayout',
            [GuardedRouteMetaEnum.needPermissionsOrGuest]: PermissionsEnum.view_products,
            withoutPermissionRedirectTo: 'Profile'
        }
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/cart/Cart.vue'),
        meta: {
            title: 'titles.cart',
            layout: 'CartLayout',
            [GuardedRouteMetaEnum.needPermissions]: PermissionsEnum.buy_products,
            withoutPermissionRedirectTo: 'Home'
        }
    },
    ...products,
    ...errors,
    ...orders,
    ...auth,
    ...user,
    {
        path: '/:catchAll(.*)', // Unrecognized path automatically matches 404
        redirect: { name: 'PageNotExist' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(waitForUserLoading)
router.beforeEach(loadLayoutMiddleware)
router.beforeEach(redirectFromAuthRoutes)
router.beforeEach(redirectFromRoutesRequiredAuth)
router.beforeEach(saveQueryParametersBetweenAuthRoutes)
router.beforeEach(addRedirectQueryToAuthRoutes)
router.beforeEach(restrictOpeningOfProtectedRoutes)

export default router
