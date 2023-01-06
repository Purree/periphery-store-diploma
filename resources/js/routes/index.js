import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/404',
        name: 'PageNotExist',
        component: () => import('@/views/Errors/PageNotFound.vue')
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

export default router
