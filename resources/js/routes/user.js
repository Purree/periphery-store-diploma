export default [
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/user/Profile.vue'),
        meta: {
            layout: 'MainLayout',
            loggedInRoute: true,
            transition: 'none'
        }
    }
]
