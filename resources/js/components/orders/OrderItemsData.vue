<template>
    <div class="card">
        <div v-for="product in products" :key="product.slug">
            <product-card :product="product"
                          :is-show-add-to-cart-button="true">
                <template #additionalButtons>
                    {{ $t('orders.quantity') }}: {{ product.quantity }}
                </template>
            </product-card>
            <el-divider/>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/search/ProductCard.vue'

export default {
    name: 'OrderItemsData',
    components: { ProductCard },
    props: {
        items: {
            required: true,
            type: Object
        }
    },
    computed: {
        products() {
            return this.items.map(item => {
                return { ...item.product, ...item }
            })
        }
    }
}
</script>

<style scoped>

</style>
