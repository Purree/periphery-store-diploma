<template>
    <div class="review-header">
        <reviewer-card :is-anonymous="isAnonymous"
                       :reviewer-avatar="reviewerAvatar"
                       :reviewer-name="reviewerName"/>
        <review-interaction-time :created_at="created_at" :updated_at="updated_at"/>
    </div>
</template>

<script>
import ReviewerCard from '@/components/product/reviews/ReviewerCard.vue'
import ReviewInteractionTime from '@/components/product/reviews/ReviewInteractionTime.vue'

export default {
    name: 'ReviewHeader',
    components: {
        ReviewInteractionTime,
        ReviewerCard
    },
    props: {
        isAnonymous: {
            required: false,
            type: Boolean,
            default: false
        },
        reviewerAvatar: {
            required: false,
            type: String
        },
        reviewerName: {
            required: false,
            type: String
        },
        created_at: {
            required: true,
            type: String
        },
        updated_at: {
            required: false,
            type: [String, undefined, null]
        }
    }
}
</script>

<style scoped>
.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}
</style>
