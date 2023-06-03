export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/authorization/Login.vue'),
        meta: {
            title: 'titles.login',
            layout: 'AuthorizationLayout',
            transition: 'none',
            authRoute: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/authorization/Register.vue'),
        meta: {
            title: 'titles.register',
            layout: 'AuthorizationLayout',
            transition: 'none',
            authRoute: true
        }
    }
]
