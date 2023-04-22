<template>
    <main-product-data :product="product" :pending="productPending"/>
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import MainProductData from '@/components/product/MainProductData.vue'

export default {
    name: 'Product',
    components: {
        MainProductData
    },
    data() {
        return {
            product: {},
            productPending: true
        }
    },
    methods: {
        async getProduct(slug) {
            try {
                const productResponse = await apiRequest(API_GET_PRODUCT_URL, { slug })
                return productResponse.data
            } catch (errors) {
                if (errors?.response?.status === 404) {
                    this.$router.push({ name: 'Home' })
                    openErrorNotification(this.$t('errors.pageNotFound'))
                    return {}
                }

                openErrorNotification(getErrorsFromResponse(errors))
                return {}
            }
        }
    },
    async mounted() {
        this.product = await this.getProduct(this.$route?.params?.slug)
        this.productPending = false
    }
}
</script>

<style scoped>
:deep(.card) {
    background: var(--el-bg-color);
    border-radius: var(--el-border-radius-round);
    padding: var(--el-border-radius-round);
}
</style>
