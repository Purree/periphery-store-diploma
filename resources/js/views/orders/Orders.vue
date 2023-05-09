<template>
    <div>
        <view-title :text="$t('orders.orders')"/>

        <div class="cart-container">
            <div v-if="!pending">
                <div v-if="orders.length > 0">
                    <div v-for="order in orders" :key="order.id">
                        <order-item-card :status="order.status"
                                         :total-cost="order.totalCost"
                                         :order-id="order.id"
                                         :created-at="order.createdAt"
                                         :items="order.items"/>
                        <el-divider/>
                    </div>
                </div>
                <div v-else>
                    {{ $t('orders.noOrders') }}
                </div>
            </div>
            <div v-else>
                <div v-for="key in 10" :key="key">
                    <el-skeleton animated></el-skeleton>
                    <el-divider/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ViewTitle from '@/components/ViewTitle.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import usePending from '@/mixins/usePending'
import { API_GET_ALL_ORDERS_URL } from '@/api/orders'
import OrderItemCard from '@/components/orders/OrderItemCard.vue'

export default {
    name: 'Orders',
    components: {
        OrderItemCard,
        ViewTitle
    },
    mixins: [usePending],
    data() {
        return {
            pending: false,
            orders: []
        }
    },
    methods: {
        async loadOrders() {
            try {
                this.orders = (await apiRequest(API_GET_ALL_ORDERS_URL)).data
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        }
    },
    mounted() {
        this.orders = this.usePending(this.loadOrders)
    }
}
</script>

<style scoped>
.cart-container {
    margin-top: 10px;
}
</style>
