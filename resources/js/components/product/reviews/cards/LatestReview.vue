<template>
    <div v-if="Object.keys(latestReview).length > 0" class="card latest-review-container">
        <div class="latest-review-title">
            <profile-title :text="$t('product.reviews.latestReview')"/>
        </div>
        <review-card @delete-review="this.$emit('deleteLatestReview')" :review="latestReview"/>
    </div>
</template>

<script>
import ReviewCard from '@/components/product/reviews/ReviewCard.vue'
import ProfileTitle from '@/components/profile/ProfileTitle.vue'

export default {
    name: 'LatestReview',
    emits: ['deleteLatestReview'],
    components: {
        ProfileTitle,
        ReviewCard
    },
    props: {
        latestReview: {
            required: true,
            type: Object
        }
    }
}
</script>

<style scoped>
.latest-review-container {
    margin-top: 10px;
}

.latest-review-title {
    margin-bottom: 20px;
}
</style>
