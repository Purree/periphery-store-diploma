<template>
    <div>
        <expandable-block :max-height="500">
            <review-header :created_at="reply.created_at"
                           :updated_at="reply.updated_at"
                           :reviewer-name="reply.replier.name"
                           :reviewer-avatar="reply.replier.avatar"
                           :is-anonymous="false"/>
            <review-feedback title="" :text="reply.text"/>

            <review-bottom-buttons-list @show-replies="usePending(loadAnswers, 'answersPending')"
                                        class="bottom-buttons"
                                        :is-show-replies-button-visible="reply.childrenCount > 0 && answers.length < 1"
                                        @show-add-reply-form="changeAddReplyFormVisibility()"
                                        :is-add-reply-button-visible="(isReplyButtonVisible && reply.childrenCount <= 0) || isShowAddReplyButtonForce"
                                        :show-replies-button-pending="answersPending"/>
            <add-reply-form @create-reply="onReplyCreate" v-if="(!isReplyButtonVisible || answers.length > 0) && !isShowAddReplyButtonForce"
                            :review-id="reviewId" :reply-id="reply.id"/>

            <div v-if="answers.length > 0" class="answers-container">
                <review-replies-block :replies="answers" :review-id='reviewId'/>
            </div>
        </expandable-block>

    </div>
</template>

<script>
import ReviewFeedback from '@/components/product/reviews/ReviewFeedback.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_REVIEW_REPLIES_ANSWERS_URL } from '@/api/reviews'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import usePending from '@/mixins/usePending'
import ReviewHeader from '@/components/product/reviews/ReviewHeader.vue'
import ReviewBottomButtonsList from '@/components/product/reviews/replies/ReviewBottomButtonsList.vue'
import ExpandableBlock from '@/components/ExpandableBlock.vue'
import AddReplyForm from '@/components/product/reviews/replies/AddReplyForm.vue'

export default {
    name: 'ReviewReplyCard',
    mixins: [usePending],
    components: {
        AddReplyForm,
        ExpandableBlock,
        ReviewBottomButtonsList,
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
            isShowAddReplyButtonForce: false
        }
    },
    methods: {
        async loadAnswers() {
            try {
                const reply = (await apiRequest(API_GET_REVIEW_REPLIES_ANSWERS_URL, { id: this.reply.id })).data

                this.answers.push(...reply.children)
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        },
        onReplyCreate(reply) {
            this.changeAddReplyFormVisibility()
            this.isShowAddReplyButtonForce = true
            this.answers.push(reply)
        },
        changeAddReplyFormVisibility() {
            this.isReplyButtonVisible = !this.isReplyButtonVisible
            this.isShowAddReplyButtonForce = false
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
