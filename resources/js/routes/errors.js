export default [
    {
        path: '/404',
        name: 'PageNotExist',
        component: () => import('@/views/Errors/PageNotFound.vue'),
        meta: {
            layout: 'ErrorLayout'
        }
    },
    {
        path: '/403',
        name: 'Forbidden',
        component: () => import('@/views/Errors/Forbidden.vue'),
        meta: {
            layout: 'ErrorLayout'
        }
    }
]
