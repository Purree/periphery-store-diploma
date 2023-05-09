<template>
    <el-card>
        <template #header>
            <div>
                <div>
                    <div>{{ $t('orders.orderDated') }} {{ beautifyDate(createdAt) }}</div>
                    <!--          @TODO Сделать кликабельным          -->
                    <div>{{ orderId }}</div>
                </div>
                <div>{{ getCurrency(totalCost) }}</div>
            </div>
        </template>
        <div>
            <el-tag>{{ status }}</el-tag>
            <div v-for="product in products" :key="product.slug">
                <product-open-link :slug="product.slug">
                    <item-image :image-url="product.previewImage"/>
                </product-open-link>
            </div>
        </div>
    </el-card>
</template>

<script>
import { beautifyDate } from '@/helpers/date'
import price from '@/mixins/price'
import ItemImage from '@/components/home/ItemImage.vue'
import ProductOpenLink from '@/components/home/product/ProductOpenLink.vue'

export default {
    name: 'OrderItemCard',
    components: { ProductOpenLink, ItemImage },
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
        }
    }
}
</script>

<style scoped>

</style>
