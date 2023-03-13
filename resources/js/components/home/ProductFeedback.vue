<template>
    <div class="product-feedback">
        <product-rating v-if="rating" :rating="rating"/>
        <product-reviews-count v-if="reviewsCount" :reviews-count="reviewsCount"/>
    </div>
</template>

<script>
import ProductRating from '@/components/home/ProductRating.vue'
import ProductReviewsCount from '@/components/home/ProductReviewsCount.vue'

export default {
    name: 'ProductFeedback',
    components: { ProductReviewsCount, ProductRating },
    props: {
        rating: {
            required: false,
            type: [Number, undefined]
        },
        reviewsCount: {
            required: false,
            type: [Number, undefined]
        }
    }
}
</script>

<style scoped lang="scss">
.product-feedback {
    margin: 5px 0;
    font-size: var(--el-font-size-base);
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
}
</style>
