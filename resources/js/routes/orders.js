import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'
import PermissionsEnum from '@/helpers/enums/PermissionsEnum'

export default [
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('@/views/orders/Orders.vue'),
        meta: {
            title: 'titles.orders',
            [GuardedRouteMetaEnum.needPermissions]: PermissionsEnum.buy_products,
            withoutPermissionRedirectTo: 'Profile',
            layout: 'OrdersLayout'
        }
    },
    {
        path: '/order/:id',
        name: 'Order',
        component: () => import('@/views/orders/Order.vue'),
        meta: {
            title: 'titles.order',
            [GuardedRouteMetaEnum.needPermissions]: PermissionsEnum.buy_products,
            withoutPermissionRedirectTo: 'Profile',
            layout: 'OrderLayout'
        }
    }
]
