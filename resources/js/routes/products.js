import PermissionsEnum from '@/helpers/enums/PermissionsEnum'
import { GuardedRouteMetaEnum } from '@/helpers/enums/GuardedRouteMetaEnum'

export default [
    {
        path: '/product/create',
        name: 'ProductCreate',
        component: () => import('@/views/products/ProductCreate.vue'),
        meta: {
            layout: 'ProductLayout',
            [GuardedRouteMetaEnum.needPermissions]: [PermissionsEnum.create_products]
        }
    }, {
        path: '/product/update/:slug',
        name: 'ProductUpdate',
        component: () => import('@/views/products/ProductUpdate.vue'),
        meta: {
            layout: 'ProductLayout',
            [GuardedRouteMetaEnum.needPermissions]: [PermissionsEnum.update_own_products]
        }
    },
    {
        path: '/product/:slug',
        name: 'Product',
        component: () => import('@/views/products/Product.vue'),
        meta: {
            layout: 'ProductLayout'
        }
    }
]
