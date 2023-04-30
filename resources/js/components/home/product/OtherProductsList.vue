<template>
    <products-list :title="$t('home.products.otherProducts')" :products="products"
                   :pending="productsPending" v-if="products.length > 0 || productsPending"/>
    <div class="no-products-message" v-else>{{ $t('home.products.noProducts') }}</div>
</template>

<script>
import ProductsList from '@/components/home/product/ProductsList.vue'
import allProducts from '@/mixins/allProducts'

export default {
    name: 'OtherProductsList',
    mixins: [allProducts],
    components: { ProductsList },
    data() {
        return {
            productsPending: true
        }
    },
    async mounted() {
        await this.pushProductsToArray()
        this.productsPending = false

        document.addEventListener('pageEndReached', async() => {
            if (Object.values(this.productsPagination).length === 0 || this.productsPending) {
                return
            }

            const nextCursor = this.productsPagination.next_cursor

            if (nextCursor !== null) {
                this.productsPending = true
                await this.pushProductsToArray(nextCursor)
                this.productsPending = false
            }
        })
    }
}
</script>

<style scoped>
.no-products-message {
    font-size: var(--el-font-size-extra-large);
    color: var(--el-color-error);
    font-weight: bold;
    text-align: center;
}
</style>
