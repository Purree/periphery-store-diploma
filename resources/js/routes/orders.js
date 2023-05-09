export default [
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('@/views/orders/Orders.vue'),
        meta: {
            layout: 'OrderLayout'
        }
    },
    {
        path: '/order/:id',
        name: 'Order',
        component: () => import('@/views/orders/Order.vue'),
        meta: {
            layout: 'OrderLayout'
        }
    }
]
