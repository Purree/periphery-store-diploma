import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/routes/middleware/loadLayout.js'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            layout: 'MainLayout'
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
