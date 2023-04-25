<template>
    <div>
        <review-header :created_at="reply.created_at"
                       :updated_at="reply.updated_at"
                       :reviewer-name="reply.replier.name"
                       :reviewer-avatar="reply.replier.avatar"
                       :is-anonymous="false"/>
        <review-feedback title="" :text="reply.text"/>

        <div v-if="answers.length > 0" class="answers-container">
            <review-replies-block v-for="answer in answers" :key="answer.id"
                                  :replies="answers">
                <review-reply-card :reply="answer"/>
            </review-replies-block>
        </div>

        <full-width-button :pending="answersPending" class="show-answers-button"
                           v-if="reply.childrenCount > 0 && answers.length < 1"
                           @click="usePending(loadAnswers, 'answersPending')">
            {{
                $t('general.reviews.showReplies')
            }}
        </full-width-button>
    </div>
</template>

<script>
import ReviewFeedback from '@/components/product/reviews/ReviewFeedback.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_REVIEW_REPLIES_ANSWERS_URL } from '@/api/reviews'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import FullWidthButton from '@/components/FullWidthButton.vue'
import usePending from '@/mixins/usePending'
import ReviewRepliesBlock from '@/components/product/reviews/ReviewRepliesBlock.vue'
import ReviewHeader from '@/components/product/reviews/ReviewHeader.vue'

export default {
    name: 'ReviewReplyCard',
    mixins: [usePending],
    components: {
        ReviewHeader,
        ReviewRepliesBlock,
        FullWidthButton,
        ReviewFeedback
    },
    props: {
        reply: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            answers: [],
            answersPending: false
        }
    },
    methods: {
        async loadAnswers() {
            try {
                const reply = (await apiRequest(API_GET_REVIEW_REPLIES_ANSWERS_URL, { id: this.reply.id })).data

                this.answers = reply.children
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                console.error(error)
            }
        }
    }
}
</script>

<style scoped>
.show-answers-button {
    margin-block: 20px;
}

.answers-container {
    margin-bottom: 10px;
}
</style>
