<template>
    <div>
        <expandable-block :max-height="500">
            <template #default>
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

            </template>
        </expandable-block>

        <replies-bottom-actions-panel :reply-id="null"
                                      :reviewer-id="review?.reviewer?.id || null"
                                      :review-id="review.id"
                                      :delete-reply-api-url="API_DELETE_REVIEW_URL()"
                                      :is-show-edit-reply-button="isShowEditReplyButton"
                                      :load-replies-api-url="API_GET_REVIEW_URL()"
                                      :replies="replies"
                                      :object-for-api-manipulation-id="review.id"
                                      :reply-children-count="review.repliesCount"
                                      reply-children-key="replies"
                                      @review-edit-button-click="$emit('editReview')"
                                      @delete-review="$emit('deleteReview')"
                                      @push-replies="onRepliesPush"
                                      @reload-replies="onRepliesReload"/>
    </div>
</template>

<script>
import ProductRating from '@/components/product/ProductRating.vue'
import ReviewFeedback from '@/components/product/reviews/ReviewFeedback.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { API_DELETE_REVIEW_URL, API_GET_REVIEW_URL } from '@/api/reviews'
import usePending from '@/mixins/usePending'
import ReviewHeader from '@/components/product/reviews/ReviewHeader.vue'
import ExpandableBlock from '@/components/ExpandableBlock.vue'
import RepliesBottomActionsPanel from '@/components/product/reviews/replies/RepliesBottomActionsPanel.vue'

export default {
    name: 'ReviewCard',
    mixins: [usePending],
    emits: ['deleteReview', 'editReview'],
    components: {
        RepliesBottomActionsPanel,
        ExpandableBlock,
        ReviewHeader,
        ReviewFeedback,
        ProductRating
    },
    data() {
        return {
            replies: [],
            repliesPending: false,
            isReplyButtonVisible: true,
            reviewDeletePending: false,
            isShowAddReplyButtonForce: false
        }
    },
    props: {
        review: {
            required: true,
            type: Object
        },
        isShowEditReplyButton: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    methods: {
        API_GET_REVIEW_URL() {
            return API_GET_REVIEW_URL
        },
        API_DELETE_REVIEW_URL() {
            return API_DELETE_REVIEW_URL
        },
        async loadReplies() {
            try {
                const review = (await apiRequest(API_GET_REVIEW_URL, { id: this.review.id })).data

                this.replies.push(...review.replies)
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
            }
        },
        onRepliesPush(replies) {
            this.replies.push(...replies)
        },
        onRepliesReload(replies) {
            this.replies = replies
        }
    }
}
</script>

<style scoped>
.review-rating {
    margin-bottom: 5px;
}
</style>
