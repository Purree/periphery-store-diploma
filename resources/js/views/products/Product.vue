<template>
    <main-product-data class="main-product-data" :product="product" :pending="productPending"/>

    <product-categories class="product-categories" :pending="productPending" :categories="product.categories"/>

    <product-reviews :pending="productPending"
                     :latest-review="product.latestReview"
                     :reviews-pending="productReviewsPending"
                     :reviews="reviews"
                     :reviews-pagination="reviewsPagination"
                     :reviews-count="product.reviewsCount"
                     :can-leave-review="product.canLeaveReview"
                     :user-review="product.userReview"
                     @delete-user-review="delete product.userReview"
                     @create-user-review="review => product.userReview = review"
                     @load-reviews="usePending(loadReviews, 'productReviewsPending')"
                     @delete-review="onReviewDelete"
                     @delete-latest-review="delete product.latestReview" />
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL } from '@/api/products'
import { API_GET_PRODUCT_REVIEWS_URL } from '@/api/reviews'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import MainProductData from '@/components/product/MainProductData.vue'
import ProductCategories from '@/components/product/ProductCategories.vue'
import ProductReviews from '@/components/product/reviews/ProductReviews.vue'
import usePending from '@/mixins/usePending'

export default {
    name: 'Product',
    mixins: [usePending],
    components: {
        ProductReviews,
        ProductCategories,
        MainProductData
    },
    data() {
        return {
            product: {},
            reviews: [],
            reviewsPagination: {},
            productPending: true,
            productReviewsPending: false
        }
    },
    methods: {
        async getProduct(slug) {
            try {
                const productResponse = await apiRequest(API_GET_PRODUCT_URL, { slug })
                return productResponse.data
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))

                if ([403, 404].includes(errors?.response?.status)) {
                    this.$router.push({ name: 'Home' })
                }
            }
        },
        async loadReviews() {
            try {
                const reviews = (await apiRequest(API_GET_PRODUCT_REVIEWS_URL, { slug: this.product.slug },
                    { params: { cursor: this.reviewsPagination?.next_cursor } })).data

                this.reviews.push(...reviews.data)
                this.reviewsPagination = reviews.meta
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        },
        onReviewDelete(review) {
            this.reviews = this.reviews.filter((el) => el.id !== review.id)
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
