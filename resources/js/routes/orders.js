import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'
import PermissionsEnum from '@/helpers/enums/PermissionsEnum'

export default [
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('@/views/orders/Orders.vue'),
        meta: {
            [GuardedRouteMetaEnum.needPermissions]: PermissionsEnum.buy_products,
            withoutPermissionRedirectTo: 'Profile',
            layout: 'OrderLayout'
        }
    },
    {
        path: '/order/:id',
        name: 'Order',
        component: () => import('@/views/orders/Order.vue'),
        meta: {
            [GuardedRouteMetaEnum.needPermissions]: PermissionsEnum.buy_products,
            withoutPermissionRedirectTo: 'Profile',
            layout: 'OrderLayout'
        }
    }
]
