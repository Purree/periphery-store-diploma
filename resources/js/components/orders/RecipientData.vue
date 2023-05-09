<template>
    <div class="card">
        <div class="recipient-data-container">
            <div>
                <div class="recipient-data-header">
                    <based-text :title="$t('profile.contactInformation.addresses.address')"
                                class="recipient-data-header-text"/>
                </div>
                <div>
                    <based-text class="recipient-data-text"
                                :title="address"/>
                </div>
            </div>
            <div class="personal-recipient-data-container">
                <div class="recipient-data-header">
                    <based-text :title="$t('profile.titles.personalInformation')"
                                class="recipient-data-header-text"/>
                </div>
                <div>
                    <div class="recipient-data-text">
                        <based-text class="recipient-data-text"
                                :title="fullName"/>
                    </div>
                    <div class="recipient-data-text">
                        <based-text class="recipient-data-text"
                                :title="email"/>
                    </div>
                    <div class="recipient-data-text">
                        <based-text class="recipient-data-text"
                                :title="mobile"/>
                    </div>
                </div>
            </div>
            <div>
                <order-status-tag class="order-status-tag" :status="orderStatus"/>
            </div>
            <div>
                <div>
                    <based-text class="recipient-data-header-text"
                                :title="$t('general.total') + ': ' + getCurrency(totalCost)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import price from '@/mixins/price'
import BasedText from '@/components/BasedText.vue'
import OrderStatusTag from '@/components/orders/OrderStatusTag.vue'

export default {
    name: 'RecipientData',
    components: { OrderStatusTag, BasedText },
    mixins: [price],
    props: {
        address: {
            required: true,
            type: String
        },
        mobile: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String
        },
        fullName: {
            required: true,
            type: String
        },
        totalCost: {
            required: true,
            type: Number
        },
        orderStatus: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.recipient-data-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.recipient-data-header-text {
    font-size: var(--el-font-size-medium);
    font-weight: bold;
}

.recipient-data-header {
    margin-bottom: 10px;
}

.personal-recipient-data-container {
    display: flex;
    flex-direction: column;
}

.order-status-tag {
    width: 100%;
}
</style>
