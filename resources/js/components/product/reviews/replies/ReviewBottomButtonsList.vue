<template>
    <div class="review-bottom-buttons-list">
        <review-bottom-button v-if="isShowRepliesButtonVisible" @click="$emit('showReplies')"
                              :pending="showRepliesButtonPending"
                              class="bottom-button" type="primary">
            {{ $t('product.reviews.showReplies') }}
            <font-awesome-icon class="button-icon"
                               :icon="showRepliesButtonPending ? ['fas', 'spinner'] : 'chevron-down'"
                               :spin="showRepliesButtonPending"/>
        </review-bottom-button>

        <review-bottom-button @click="$emit('showAddReplyForm')" v-if="isAddReplyButtonVisible && checkIsLoggedIn()"
                              class="bottom-button" type="primary">
            {{ $t('product.reviews.reply') }}
        </review-bottom-button>

        <review-bottom-button @click="$emit('deleteReview')" v-if="reviewerId === user?.id"
                              class="bottom-button" type="danger" :pending="reviewDeletePending">
            {{ $t('general.delete') }}
        </review-bottom-button>
    </div>
</template>

<script>
import ReviewBottomButton from '@/components/product/reviews/ReviewBottomButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import auth from '@/mixins/auth'
import { mapState } from 'vuex'

export default {
    name: 'ReviewBottomButtonsList',
    mixins: [auth],
    components: {
        FontAwesomeIcon,
        ReviewBottomButton
    },
    emits: ['showReplies', 'showAddReplyForm', 'deleteReview'],
    computed: {
        ...mapState('auth', ['user'])
    },
    props: {
        isShowRepliesButtonVisible: {
            required: false,
            type: Boolean,
            default: false
        },
        showRepliesButtonPending: {
            required: false,
            type: Boolean,
            default: false
        },
        isAddReplyButtonVisible: {
            required: false,
            type: Boolean,
            default: false
        },
        reviewDeletePending: {
            required: false,
            type: Boolean,
            default: false
        },
        reviewerId: {
            require: false,
            type: [null, Number],
            default: null
        }
    }
}
</script>

<style scoped>
.bottom-button {
    margin-right: 10px;
    font-size: var(--el-font-size-large);
}

.button-icon {
    margin-left: 5px;
    font-size: var(--el-font-size-small);
}

.review-bottom-buttons-list {
    margin-block: 10px;
}
</style>
