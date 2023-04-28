<template>
    <review-bottom-buttons-list :is-show-replies-button-visible="isRepliesChildrenExists && !isRepliesLoaded"
                                :is-add-reply-button-visible="(!isRepliesChildrenExists && isReplyButtonVisible) || isShowAddReplyButtonForce"
                                :is-edit-review-button-visible="isShowEditReplyButton"
                                :show-replies-button-pending="repliesPending"
                                :reviewer-id="reviewerId"
                                :review-delete-pending="reviewDeletePending"
                                @delete-review="usePending(onReviewDeleteButtonClick, 'reviewDeletePending')"
                                @show-add-reply-form="changeAddReplyFormVisibility"
                                @show-replies="usePending(loadReplies, 'repliesPending')"
                                @edit-review="$emit('reviewEditButtonClick')"
                                class="bottom-buttons"/>

    <div class="add-reply-form" v-if="(isRepliesLoaded || !isReplyButtonVisible) && !isShowAddReplyButtonForce">
        <add-reply-form @create-reply="onReplyCreate" :review-id="reviewId" :reply-id="replyId"/>
    </div>

    <div v-if="isRepliesLoaded" class="answers-container">
        <review-replies-block :replies="replies" :review-id="reviewId" @delete-reply="onReplyDelete"
                              @update-reply="onReplyUpdate"/>
    </div>
</template>

<script>
import AddReplyForm from '@/components/product/reviews/replies/AddReplyForm.vue'
import ReviewBottomButtonsList from '@/components/product/reviews/replies/ReviewBottomButtonsList.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import usePending from '@/mixins/usePending'

export default {
    name: 'RepliesBottomActionsPanel',
    mixins: [usePending],
    components: {
        ReviewBottomButtonsList,
        AddReplyForm
    },
    emits: ['reloadReplies', 'pushReplies', 'deleteReview', 'reviewEditButtonClick'],
    data() {
        return {
            repliesPending: false,
            reviewDeletePending: false,
            isReplyButtonVisible: true,
            isShowAddReplyButtonForce: false
        }
    },
    computed: {
        isRepliesChildrenExists() {
            return this.replyChildrenCount > 0
        },
        isRepliesLoaded() {
            return this.replies.length > 0
        }
    },
    props: {
        replies: {
            required: true,
            type: Array
        },
        replyChildrenCount: {
            required: true,
            type: Number
        },
        replyChildrenKey: {
            required: true,
            type: String
        },
        reviewerId: {
            required: true,
            type: [Number, null]
        },
        isShowEditReplyButton: {
            required: true,
            type: Boolean
        },
        reviewId: {
            required: true,
            type: Number
        },
        replyId: {
            required: true,
            type: [null, Number]
        },
        objectForApiManipulationId: {
            required: true,
            type: Number
        },
        loadRepliesApiUrl: {
            required: true,
            type: Array
        },
        deleteReplyApiUrl: {
            required: true,
            type: Array
        }
    },
    methods: {
        onReplyCreate(reply) {
            this.changeAddReplyFormVisibility()
            this.isShowAddReplyButtonForce = true
            this.$emit('pushReplies', [reply])
        },
        onReplyUpdate(reply) {
            const replyId = Object.keys(reply)[0]
            const cachedReplies = this.replies

            cachedReplies[this.replies.findIndex(el => el.id === +replyId)].text = reply[replyId].text
            this.$emit('reloadReplies', cachedReplies)
        },
        onReplyDelete(reply) {
            this.$emit('reloadReplies', this.replies.filter((el) => el.id !== reply.id))
        },
        changeAddReplyFormVisibility() {
            this.isReplyButtonVisible = !this.isReplyButtonVisible
            this.isShowAddReplyButtonForce = false
        },
        async loadReplies() {
            try {
                const repliesParent = (await apiRequest(this.loadRepliesApiUrl, { id: this.objectForApiManipulationId })).data

                this.$emit('pushReplies', repliesParent[this.replyChildrenKey])
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
            }
        },
        async onReviewDeleteButtonClick() {
            try {
                await apiRequest(this.deleteReplyApiUrl, { id: this.objectForApiManipulationId })
                this.$emit('deleteReview')
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        }
    }
}
</script>

<style scoped>
.add-reply-form {
    margin-bottom: 10px;
}
</style>
