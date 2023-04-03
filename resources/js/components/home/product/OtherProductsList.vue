<template>
    <products-list :title="$t('home.products.otherProducts')" :products="otherProducts"
                   :pending="otherProductsPending" v-if="otherProducts.length > 0 || otherProductsPending"/>
    <div class="no-products-message" v-else>{{ $t('home.products.noProducts') }}</div>
</template>

<script>
import ProductsList from '@/components/home/product/ProductsList.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCTS_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    name: 'OtherProductsList',
    components: { ProductsList },
    data() {
        return {
            otherProducts: [],
            otherProductsPagination: [],
            otherProductsPending: true
        }
    },
    methods: {
        async getAllProducts(cursor = undefined) {
            const productsResponse = await apiRequest(API_GET_PRODUCTS_URL, {}, { params: { cursor } })
            return productsResponse.data
        },
        async pushProductsToArray(cursor = undefined) {
            try {
                const allProductsResponse = await this.getAllProducts(cursor)

                this.otherProducts.push(...allProductsResponse.data)
                this.otherProductsPagination = allProductsResponse.meta
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        }
    },
    async mounted() {
        await this.pushProductsToArray()
        this.otherProductsPending = false

        document.addEventListener('pageEndReached', async() => {
            if (Object.values(this.otherProductsPagination).length === 0 || this.otherProductsPending) {
                return
            }

            const nextCursor = this.otherProductsPagination.next_cursor

            if (nextCursor !== null) {
                this.otherProductsPending = true
                await this.pushProductsToArray(nextCursor)
                this.otherProductsPending = false
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
