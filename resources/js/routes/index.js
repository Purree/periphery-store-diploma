import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/routes/middleware/loadLayout.js'
import auth from '@/routes/auth'
import { redirectFromAuthRoutes } from '@/routes/middleware/redirectFromAuthRoutes'
import { redirectFromRoutesRequiredAuth } from '@/routes/middleware/redirectFromRoutesRequiredAuth'
import user from '@/routes/user'
import { saveQueryParametersBetweenAuthRoutes } from '@/routes/middleware/saveQueryParametersBetweenAuthRoutes'
import { restrictOpeningOfProtectedRoutes } from '@/routes/middleware/restrictOpeningOfProtectedRoutes'
import errors from '@/routes/middleware/errors'

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
