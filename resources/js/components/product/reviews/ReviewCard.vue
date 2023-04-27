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

        <review-bottom-buttons-list :is-show-replies-button-visible="isRepliesExists && !isRepliesLoaded"
                                    :is-add-reply-button-visible="(!isRepliesExists && isReplyButtonVisible) || isShowAddReplyButtonForce"
                                    :show-replies-button-pending="repliesPending"
                                    @show-add-reply-form="changeAddReplyFormVisibility"
                                    @show-replies="usePending(loadReplies, 'repliesPending')"/>

        <div class="add-reply-form" v-if="(isRepliesLoaded || !isReplyButtonVisible) && !isShowAddReplyButtonForce">
            <add-reply-form @create-reply="onReplyCreate" :review-id="review.id"/>
        </div>
        <template v-if="isRepliesLoaded">
            <review-replies-block :replies="replies" :review-id="review.id"/>
        </template>
    </div>
</template>

<script>
import ProductRating from '@/components/product/ProductRating.vue'
import ReviewFeedback from '@/components/product/reviews/ReviewFeedback.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { API_GET_REVIEW_REPLIES_URL } from '@/api/reviews'
import usePending from '@/mixins/usePending'
import ReviewHeader from '@/components/product/reviews/ReviewHeader.vue'
import ExpandableBlock from '@/components/ExpandableBlock.vue'
import ReviewBottomButtonsList from '@/components/product/reviews/replies/ReviewBottomButtonsList.vue'
import AddReplyForm from '@/components/product/reviews/replies/AddReplyForm.vue'

export default {
    name: 'ReviewCard',
    mixins: [usePending],
    components: {
        AddReplyForm,
        ReviewBottomButtonsList,
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
            isShowAddReplyButtonForce: false
        }
    },
    props: {
        review: {
            required: true,
            type: Object
        }
    },
    computed: {
        isRepliesExists() {
            return this.review.repliesCount > 0
        },
        isRepliesLoaded() {
            return this.replies.length > 0
        }
    },
    methods: {
        async loadReplies() {
            try {
                const review = (await apiRequest(API_GET_REVIEW_REPLIES_URL, { id: this.review.id })).data

                this.replies.push(...review.replies)
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        },
        onReplyCreate(reply) {
            this.changeAddReplyFormVisibility()
            this.isShowAddReplyButtonForce = true
            this.replies.push(reply)
        },
        changeAddReplyFormVisibility() {
            this.isReplyButtonVisible = !this.isReplyButtonVisible
            this.isShowAddReplyButtonForce = false
        }
    }
}
</script>

<style scoped>
.review-rating {
    margin-bottom: 5px;
}

.add-reply-form {
    margin-bottom: 10px;
}
</style>
