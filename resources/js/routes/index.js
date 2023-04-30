import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/routes/middleware/loadLayout.js'
import { redirectFromAuthRoutes } from '@/routes/middleware/redirectFromAuthRoutes'
import { redirectFromRoutesRequiredAuth } from '@/routes/middleware/redirectFromRoutesRequiredAuth'
import { saveQueryParametersBetweenAuthRoutes } from '@/routes/middleware/saveQueryParametersBetweenAuthRoutes'
import { restrictOpeningOfProtectedRoutes } from '@/routes/middleware/restrictOpeningOfProtectedRoutes'

import user from '@/routes/user'
import auth from '@/routes/auth'
import errors from '@/routes/errors'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            layout: 'HomeLayout',
            transition: 'none'
        }
    },
    {
        path: '/product/:slug',
        name: 'Product',
        component: () => import('@/views/products/Product.vue'),
        meta: {
            layout: 'ProductLayout'
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/search/Search.vue'),
        meta: {
            layout: 'SearchLayout'
        }
    },
    ...errors,
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

router.beforeEach(loadLayoutMiddleware)
router.beforeEach(redirectFromAuthRoutes)
router.beforeEach(redirectFromRoutesRequiredAuth)
router.beforeEach(saveQueryParametersBetweenAuthRoutes)
router.beforeEach(restrictOpeningOfProtectedRoutes)

export default router
