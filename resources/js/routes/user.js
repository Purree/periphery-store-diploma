export default [
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/user/Profile.vue'),
        meta: {
            layout: 'MainLayout',
            requiresAuth: true,
            transition: 'none'
        }
    }
]
