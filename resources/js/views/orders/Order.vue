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
                        :full-name="generateFullName(order.name.firstName, order.name.middleName, order.name.lastName)"
                        :mobile="order.mobile"
                        :total-cost="order.totalCost"
                        :order-status="order.status"/>
        <div class="card recipient-data" v-else>
            <el-skeleton animated/>
        </div>
    </div>
</template>

<script>
import BasedText from '@/components/BasedText.vue'
import { beautifyDate } from '@/helpers/date'
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_ORDER_URL } from '@/api/orders'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import UnderHeaderTitle from '@/components/product/UnderHeaderTitle.vue'
import RecipientData from '@/components/orders/RecipientData.vue'
import { mapState } from 'vuex'
import { generateFullName } from '@/helpers/name'

export default {
    name: 'Order',
    mixins: [usePending],
    methods: {
        generateFullName,
        beautifyDate,
        async loadOrder() {
            try {
                this.order = (await apiRequest(API_GET_ORDER_URL, { id: this.orderId })).data
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
                this.$router.push({ name: 'Orders' })
            }
        }
    },
    components: {
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
.order-container, .recipient-data {
    margin-top: 20px;
}
</style>
