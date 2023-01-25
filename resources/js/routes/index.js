import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/routes/middleware/loadLayout.js'
import auth from '@/routes/auth'
import { redirectFromAuthRoutes } from '@/routes/middleware/redirectFromAuthRoutes'
import { redirectFromLoggedInRoutes } from '@/routes/middleware/redirectFromLoggedInRoutes'
import user from '@/routes/user'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            layout: 'MainLayout',
            transition: 'none'
        }
    },
    {
        path: '/404',
        name: 'PageNotExist',
        component: () => import('@/views/Errors/PageNotFound.vue'),
        meta: {
            layout: 'ErrorLayout'
        }
    },
    {
        path: '/:catchAll(.*)', // Unrecognized path automatically matches 404
        redirect: { name: 'PageNotExist' }
    },
    ...auth,
    ...user
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(loadLayoutMiddleware)
router.beforeEach(redirectFromAuthRoutes)
router.beforeEach(redirectFromLoggedInRoutes)

export default router
