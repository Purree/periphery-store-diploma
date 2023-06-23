<template>
    <div class="order-container">
        <under-header-title :text="$t('orders.order') + ' №' + order.id" :pending="pending">
            <div>
                <based-text :title="$t('orders.orderDated') + ' ' + beautifyDate(order.createdAt)"/>
            </div>
        </under-header-title>
        <recipient-data class="recipient-data"
                        v-if="!pending"
                        :address="order.address"
                        :email="this.user.email"
                        :full-name="order.name.fullName"
                        :mobile="order.mobile"
                        :total-cost="order.totalCost"
                        :order-status="order.status"/>
        <div class="card recipient-data" v-else>
            <el-skeleton animated/>
        </div>
        <div v-if="!pending" class="order-items-data">
            <order-items-data :items="order.items"/>
        </div>
        <div class="card order-items-data" v-else>
            <el-skeleton v-for="i in 20" :key="i" animated/>
        </div>
    </div>
</template>

<script>
import BasedText from '@/components/BasedText.vue'
import { beautifyDate } from '@/helpers/date'
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_ORDER_URL } from '@/api/orders'
import UnderHeaderTitle from '@/components/product/UnderHeaderTitle.vue'
import RecipientData from '@/components/orders/RecipientData.vue'
import { mapState } from 'vuex'
import OrderItemsData from '@/components/orders/OrderItemsData.vue'
import useErrorsCatch from '@/mixins/useErrorsCatch'
import title from '@/mixins/title'

export default {
    name: 'Order',
    mixins: [usePending, useErrorsCatch, title],
    methods: {
        beautifyDate,
        async loadOrder() {
            await this.useErrorsCatch(async() => {
                this.order = (await apiRequest(API_GET_ORDER_URL, { id: this.orderId })).data
                this.updateDocumentTitle('titles.order', { order: this.order.id })
            }, async() => {
                await this.$router.push({ name: 'Orders' })
            })
        }
    },
    components: {
        OrderItemsData,
        RecipientData,
        UnderHeaderTitle,
        BasedText
    },
    data() {
        return {
            pending: false,
            order: {},
            orderId: 0
        }
    },
    computed: {
        ...mapState('auth', ['user'])
    },
    beforeMount() {
        this.orderId = this.$route.params.id
        this.usePending(this.loadOrder)
    }
}
</script>

<style scoped>
.order-container, .recipient-data, .order-items-data {
    margin-top: 20px;
}
</style>
