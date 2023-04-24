<template>
    <div class="card" v-if="pending || latestReview !== undefined || (reviews !== undefined && reviews.length > 0)">
        <div v-if="!pending">
            <div v-if="latestReview !== undefined">
                <div class="latest-review-title" v-if="reviewsCount > 1">
                    {{ $t('product.reviews.latestReview') }}:
                </div>
                <review-card :review="latestReview"/>
            </div>

            <div v-if="reviews.length > 0">
                <div v-for="review in reviews"
                     :key="review.id">
                    <el-divider />
                    <review-card :review="review" />
                </div>
            </div>
            <div v-if="reviews.length < 1 || reviewsPagination.next_cursor !== null">
                <full-width-button @click="$emit('loadReviews')"
                                   v-if="reviewsCount > 1"
                                   :pending="reviewsPending">
                    {{ $t('product.reviews.allReviews') }} ({{
                        reviewsCount
                    }})
                </full-width-button>
            </div>
        </div>
    </div>
</template>

<script>
import ReviewCard from '@/components/product/reviews/ReviewCard.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'

export default {
    name: 'ProductReviews',
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
        reviewsCount: {
            required: false,
            type: Number
        },
        reviewsPending: {
            required: true,
            type: Boolean
        },
        reviewsPagination: {
            required: false,
            type: Object
        }
    }
}
</script>

<style scoped>
.latest-review-title {
    font-size: var(--el-font-size-extra-large);
    margin-bottom: 20px;
}
</style>
