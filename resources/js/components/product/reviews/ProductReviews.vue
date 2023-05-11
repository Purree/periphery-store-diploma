<template>
    <div class="card" v-if="pending || latestReview || reviews.length > 0 || reviewsCount > 0">
        <div v-if="!pending">
            <div v-if="latestReview !== undefined" class="latest-review-container">
                <div class="latest-review-title" v-if="reviewsCount > 1">
                    {{ $t('product.reviews.latestReview') }}:
                </div>
                <review-card @delete-review="this.$emit('deleteLatestReview')" :review="latestReview"/>
            </div>

            <div v-if="reviews.length > 0">
                <div v-for="review in reviews"
                     :key="review.id">
                    <el-divider/>
                    <review-card @delete-review="this.$emit('deleteReview', review)" :review="review"/>
                </div>
            </div>

            <div v-if="reviewsCount > 1 && (reviews.length < 1 || reviewsPagination.next_cursor !== null)">
                <full-width-button @click="$emit('loadReviews')"
                                   :pending="reviewsPending">
                    {{ $t('product.reviews.allReviews') }}
                </full-width-button>
            </div>
        </div>
        <div v-else>
            <el-skeleton animated/>
        </div>
    </div>
</template>

<script>
import ReviewCard from '@/components/product/reviews/ReviewCard.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
export default {
    name: 'ProductReviews',
    emits: ['deleteReview', 'deleteLatestReview', 'loadReviews'],
    components: {
        FullWidthButton,
        ReviewCard
    },
    props: {
        reviews: {
            required: false,
            type: Array
        },
        latestReview: {
            required: false,
            type: Object
        },
        pending: {
            required: true,
            type: Boolean
        },
        userReview: {
            required: true,
            type: [null, Object]
        },
        reviewsCount: {
            required: false,
            type: Number
        },
        reviewsPending: {
            required: true,
            type: Boolean
        },
        canLeaveReview: {
            required: false,
            type: Boolean,
            default: false
        },
        reviewsPagination: {
            required: false,
            type: Object
        }
    }
}
</script>

<style scoped>
.latest-review-container {
    margin-bottom: 10px;
}

.latest-review-title {
    font-size: var(--el-font-size-extra-large);
    margin-bottom: 20px;
}
</style>
