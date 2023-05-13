<template>
    <el-card>
        <template #header>
            <div class="order-header">
                <div class="left-header-part-container">
                    <order-open-link :to="orderRoute" class="order-created-text">
                        {{ $t('orders.orderDated') }}
                        {{ beautifyDate(createdAt) }}
                    </order-open-link>
                    <styled-router-link class="order-link" :to="orderRoute">{{ orderId }}</styled-router-link>
                </div>
                <div class="order-price">{{ getCurrency(totalCost) }}</div>
            </div>
        </template>
        <div class="items-container">
            <div>
                <div>
                    {{ $t('orders.status') }}:
                </div>
                <order-status-tag class="order-status" :status="status"/>
            </div>
            <div class="order-products-container">
                <div v-for="product in products" :key="product.slug">
                    <product-open-link :slug="product.slug">
                        <item-image class="order-product-image" :image-url="product.previewImage"/>
                    </product-open-link>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script>
import { beautifyDate } from '@/helpers/date'
import price from '@/mixins/price'
import ItemImage from '@/components/home/ItemImage.vue'
import ProductOpenLink from '@/components/home/product/ProductOpenLink.vue'
import StyledRouterLink from '@/components/StyledRouterLink.vue'
import OrderOpenLink from '@/components/orders/OrderOpenLink.vue'
import OrderStatusTag from '@/components/orders/OrderStatusTag.vue'

export default {
    name: 'OrderCard',
    components: {
        OrderStatusTag,
        OrderOpenLink,
        StyledRouterLink,
        ProductOpenLink,
        ItemImage
    },
    methods: { beautifyDate },
    mixins: [price],
    props: {
        createdAt: {
            required: true,
            type: String
        },
        orderId: {
            required: true,
            type: [Number, String]
        },
        totalCost: {
            required: true,
            type: Number
        },
        status: {
            required: true,
            type: String
        },
        items: {
            required: true,
            type: Array
        }
    },
    computed: {
        products() {
            return this.items.map(item => item.product).slice(0, 4)
        },
        orderRoute: {
            get() {
                return this.$router.resolve({
                    name: 'Order',
                    params: { id: this.orderId }
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

.order-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.left-header-part-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
}

:deep(.order-created-text) {
    font-size: inherit;
}

.order-price {
    word-break: break-word;
}

.order-products-container {
    display: flex;
    gap: 5px;
    @include max-screen-size('mobile') {
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

.items-container {
    display: flex;
    justify-content: space-between;
    @include max-screen-size('mobile') {
        gap: 20px;
        flex-direction: column;
    }
}

.order-product-image {
    height: 84px;
    width: 84px;
}

.order-status {
    margin-top: 5px;
}

:deep(.order-link) {
    color: var(--el-color-primary);
}

</style>
