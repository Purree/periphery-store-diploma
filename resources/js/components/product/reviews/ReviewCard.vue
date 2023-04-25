<template>
    <div>
        <div class="review-header">
            <div>
                <div>
                    <div v-if="review.isAnonymous">
                        <based-text class="reviewer-anonymous-title" :title="$t('general.reviews.anonymousReview')"/>
                    </div>
                    <div v-else>
                        <div class="reviewer-container">
                            <user-avatar :src="review.reviewer.avatar"/>
                            <based-text class="reviewer-name" :title="review.reviewer.name"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <based-text class="review-date"
                                :title="$t('general.created') + ': ' + beautifyDate(review.created_at)"/>
                </div>
                <div v-if="review.updated_at && beautifyDate(review.created_at) !== beautifyDate(review.updated_at)">
                    <based-text class="review-date"
                                :title="$t('general.updated') + ': ' + beautifyDate(review.updated_at)"/>
                </div>
            </div>
        </div>
        <div class="review-rating">
            <product-rating :rating="review.rating"/>
        </div>
        <review-feedback :title="$t('general.reviews.advantages')" :text="review.advantages"/>
        <review-feedback :title="$t('general.reviews.disadvantages')" :text="review.disadvantages"/>
        <review-feedback :title="$t('general.reviews.comments')" :text="review.comments"/>

        <div v-if="replies.length > 0">
            <div v-for="reply in replies" :key="reply.id" class="replies-container">
                <el-divider class="reply-divider" direction="vertical"/>
                <review-card class="reply-review" :review="reply"/>
            </div>
        </div>

        <full-width-button :pending="repliesPending"
                           v-if="review.repliesCount > 0 && replies.length < 1"
                           @click="usePending(loadreplies, 'repliesPending')">
            {{
                $t('general.reviews.showReplies')
            }}
        </full-width-button>
    </div>
</template>

<script>
import UserAvatar from '@/components/profile/UserAvatar.vue'
import BasedText from '@/components/BasedText.vue'
import ProductRating from '@/components/product/ProductRating.vue'
import ReviewFeedback from '@/components/product/reviews/ReviewFeedback.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { API_GET_REVIEW_REPLIES_URL } from '@/api/reviews'
import usePending from '@/mixins/usePending'

export default {
    name: 'ReviewCard',
    mixins: [usePending],
    components: {
        FullWidthButton,
        ReviewFeedback,
        ProductRating,
        BasedText,
        UserAvatar
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
        beautifyDate(date) {
            return new Date(date).toLocaleDateString()
        },
        async loadreplies() {
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
.reviewer-container {
    display: flex;
    align-items: center;
}

.reviewer-name {
    margin-left: 15px;
}

.reviewer-name, .reviewer-anonymous-title {
    font-size: var(--el-font-size-large);
}

.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.review-date {
    word-break: initial;
}

.review-rating {
    margin-bottom: 5px;
}

.replies-container {
    display: flex;
    align-items: center;
}

.reply-divider {
    height: 200px;
    border-width: 3px;
}

.reply-review {
    width: 100%;
}
</style>
