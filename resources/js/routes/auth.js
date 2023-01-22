export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/authorization/Login.vue'),
        meta: {
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
            layout: 'AuthorizationLayout',
            transition: 'none',
            authRoute: true
        }
    }
]
