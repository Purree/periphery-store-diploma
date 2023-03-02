<template>
    <div class="reviews-count" v-if="!reviewsCount">{{ $t('general.reviews.noReviews') }}</div>
    <div class="reviews-count" v-else>{{ $tc('general.reviews.reviewsCount', reviewsCount) }}</div>
</template>

<script>
export default {
    name: 'ProductReviewsCount',
    props: {
        reviewsCount: {
            type: [Number, undefined],
            required: false
        }
    }
}
</script>

<style scoped>
.reviews-count {
    color: var(--el-color-info-light-5);
}
</style>
