export default [
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/user/Profile.vue'),
        meta: {
            requiresAuth: true,
            transition: 'none'
        }
    }
]
