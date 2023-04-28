<template>
    <div>
        <expandable-block :max-height="500">
            <review-header :created_at="reply.created_at"
                           :updated_at="reply.updated_at"
                           :reviewer-name="reply.replier.name"
                           :reviewer-avatar="reply.replier.avatar"
                           :is-anonymous="false"/>
            <review-feedback title="" :text="reply.text"/>
        </expandable-block>

        <edit-reply-form :reply-id="this.reply.id" v-if="!isShowEditReplyButton" :current-text="this.reply.text"
                         @update-reply="(data) => $emit('updateReply', data)"/>

        <replies-bottom-actions-panel :reply-id="reply.id"
                                      :reviewer-id="reply.replier.id"
                                      :review-id="reviewId"
                                      :delete-reply-api-url="API_DELETE_REVIEW_REPLY_URL()"
                                      :is-show-edit-reply-button="isShowEditReplyButton"
                                      :load-replies-api-url="API_GET_REVIEW_REPLIES_ANSWERS_URL()"
                                      :replies="answers"
                                      :object-for-api-manipulation-id="reply.id"
                                      :reply-children-count="reply.childrenCount"
                                      reply-children-key="children"
                                      @review-edit-button-click="onReplyEditButtonClick"
                                      @delete-review="$emit('deleteReply')"
                                      @push-replies="onRepliesPush"
                                      @reload-replies="onRepliesReload"/>
    </div>
</template>

<script>
import ReviewFeedback from '@/components/product/reviews/ReviewFeedback.vue'
import { API_DELETE_REVIEW_REPLY_URL, API_GET_REVIEW_REPLIES_ANSWERS_URL } from '@/api/reviews'
import usePending from '@/mixins/usePending'
import ReviewHeader from '@/components/product/reviews/ReviewHeader.vue'
import ExpandableBlock from '@/components/ExpandableBlock.vue'
import EditReplyForm from '@/components/product/reviews/replies/EditReplyForm.vue'
import RepliesBottomActionsPanel from '@/components/product/reviews/replies/RepliesBottomActionsPanel.vue'

export default {
    name: 'ReviewReplyCard',
    mixins: [usePending],
    emits: ['deleteReply', 'updateReply'],
    components: {
        RepliesBottomActionsPanel,
        EditReplyForm,
        ExpandableBlock,
        ReviewHeader,
        ReviewFeedback
    },
    props: {
        reply: {
            required: true,
            type: Object
        },
        reviewId: {
            required: true,
            type: Number
        }
    },
    data() {
        return {
            answers: [],
            answersPending: false,
            isReplyButtonVisible: true,
            replyDeletePending: false,
            replyEditPending: false,
            isShowAddReplyButtonForce: false,
            isShowEditReplyButton: true
        }
    },
    methods: {
        API_DELETE_REVIEW_REPLY_URL() {
            return API_DELETE_REVIEW_REPLY_URL
        },
        API_GET_REVIEW_REPLIES_ANSWERS_URL() {
            return API_GET_REVIEW_REPLIES_ANSWERS_URL
        },
        onRepliesPush(replies) {
            this.answers.push(...replies)
        },
        onRepliesReload(replies) {
            this.answers = replies
        },
        onReplyEditButtonClick() {
            this.isShowEditReplyButton = false
        }
    }
}
</script>

<style scoped>
.bottom-buttons {
    margin-block: 20px;
}

.answers-container {
    margin-bottom: 10px;
}
</style>
