<template>
    <main-product-data class="main-product-data" :product="product" :pending="productPending"/>

    <product-categories class="product-categories" :pending="productPending" :categories="product.categories"/>

    <product-reviews :pending="productPending" :latest-review="product.latestReview"
                     :reviews-count="product.reviewsCount"/>
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import MainProductData from '@/components/product/MainProductData.vue'
import ProductCategories from '@/components/product/ProductCategories.vue'
import ProductReviews from '@/components/product/reviews/ProductReviews.vue'

export default {
    name: 'Product',
    components: {
        ProductReviews,
        ProductCategories,
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
                } else {
                    openErrorNotification(getErrorsFromResponse(errors))
                }
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
.main-product-data, .product-categories {
    margin-bottom: 10px;
}
</style>
