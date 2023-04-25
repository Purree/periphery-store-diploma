<template>
    <div>
        <review-header :created_at="review.created_at"
                       :updated_at="review.updated_at"
                       :reviewer-avatar="review?.reviewer?.avatar"
                       :reviewer-name="review?.reviewer?.name"
                       :is-anonymous="review.isAnonymous"/>

        <div class="review-rating">
            <product-rating :rating="review.rating"/>
        </div>

        <review-feedback :title="$t('general.reviews.advantages')" :text="review.advantages"/>
        <review-feedback :title="$t('general.reviews.disadvantages')" :text="review.disadvantages"/>
        <review-feedback :title="$t('general.reviews.comments')" :text="review.comments"/>

        <template v-if="replies.length > 0">
            <review-replies-block v-for="reply in replies" :key="reply.id"
                                  :replies="replies">
                <review-reply-card :reply="reply"/>
            </review-replies-block>
        </template>

        <full-width-button :pending="repliesPending"
                           v-if="review.repliesCount > 0 && replies.length < 1"
                           @click="usePending(loadReplies, 'repliesPending')">
            {{
                $t('general.reviews.showReplies')
            }}
        </full-width-button>
    </div>
</template>

<script>
import ProductRating from '@/components/product/ProductRating.vue'
import ReviewFeedback from '@/components/product/reviews/ReviewFeedback.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { API_GET_REVIEW_REPLIES_URL } from '@/api/reviews'
import usePending from '@/mixins/usePending'
import ReviewHeader from '@/components/product/reviews/ReviewHeader.vue'
import ReviewRepliesBlock from '@/components/product/reviews/ReviewRepliesBlock.vue'
import ReviewReplyCard from '@/components/product/reviews/ReviewReplyCard.vue'

export default {
    name: 'ReviewCard',
    mixins: [usePending],
    components: {
        ReviewReplyCard,
        ReviewRepliesBlock,
        ReviewHeader,
        FullWidthButton,
        ReviewFeedback,
        ProductRating
    },
    data() {
        return {
            replies: [],
            repliesPending: false
        }
    },
    props: {
        review: {
            required: true,
            type: Object
        }
    },
    methods: {
        async loadReplies() {
            try {
                const review = (await apiRequest(API_GET_REVIEW_REPLIES_URL, { id: this.review.id })).data

                this.replies = review.replies
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        }
    }
}
</script>

<style scoped>
.review-rating {
    margin-bottom: 5px;
}
</style>
