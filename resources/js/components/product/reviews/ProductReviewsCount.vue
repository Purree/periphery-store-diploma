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

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";
@include max-screen-size('big-tablet') {
    .reviews-count {
        font-size: var(--el-font-size-extra-small);
    }
}
.reviews-count {
    color: var(--el-color-info-light-5);
}
</style>
