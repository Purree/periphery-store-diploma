<template>
    <template v-if="!pending">
        <user-review @delete-review="$emit('deleteUserReview')"
                     @create-review="(review) => $emit('createUserReview', review)"
                     :can-create-review="canLeaveReview"
                     :user-review="userReview"/>

        <latest-review class="latest-review-container" @delete-latest-review="$emit('deleteLatestReview')"
                   :latest-review="latestReview || {}"/>
    </template>

    <div class="main-reviews-card card" v-if="pending || reviews.length > 0 || reviewsCount > 0">
        <div v-if="!pending">
            <div v-if="reviews.length > 0">
                <div v-for="review in reviews"
                     :key="review.id">
                    <review-card @delete-review="this.$emit('deleteReview', review)" :review="review"/>
                    <el-divider/>
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
import LatestReview from '@/components/product/reviews/cards/LatestReview.vue'
import UserReview from '@/components/product/reviews/cards/UserReview.vue'

export default {
    name: 'ProductReviews',
    emits: ['deleteReview', 'deleteLatestReview', 'loadReviews', 'deleteUserReview', 'createUserReview'],
    components: {
        UserReview,
        LatestReview,
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
            required: false,
            type: [null, Object],
            default: null
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
.main-reviews-card {
    margin-top: 10px;
}
</style>
