import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'

export default [
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/user/Profile.vue'),
        meta: {
            title: 'titles.profile',
            [GuardedRouteMetaEnum.requiresAuth]: true,
            transition: 'none'
        }
    }
]
