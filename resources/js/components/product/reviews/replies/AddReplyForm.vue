<template>
    <el-form v-if="checkIsLoggedIn()" @submit.prevent="usePending(createReply)">
        <errors-alert :errors="errors"/>
        <el-input
            v-model="text"
            :autosize="{ minRows: 3, maxRows: 4 }"
            type="textarea"
            :placeholder="$t('product.reviews.writeComment')"
        />
        <div class="add-reply-button">
            <el-button  :disabled="pending" :loading="pending" @click="usePending(createReply)" type="primary">
                {{ $t('product.reviews.reply') }}
            </el-button>
        </div>
    </el-form>
</template>

<script>
import usePending from '@/mixins/usePending'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse from '@/helpers/errors'
import { API_CREATE_REVIEW_REPLY_URL } from '@/api/reviews'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import auth from '@/mixins/auth'

export default {
    name: 'AddReplyForm',
    components: { ErrorsAlert },
    emits: ['createReply'],
    mixins: [usePending, auth],
    data() {
        return {
            text: '',
            pending: false,
            errors: {}
        }
    },
    props: {
        reviewId: {
            required: true,
            type: Number
        },
        replyId: {
            required: false,
            type: [Number, null],
            default: null
        }
    },
    methods: {
        async createReply() {
            try {
                const replyRequest = await apiRequest(
                    API_CREATE_REVIEW_REPLY_URL,
                    {},
                    {
                        text: this.text,
                        review_id: this.reviewId,
                        parent_id: this.replyId
                    }
                )

                this.$emit('createReply', replyRequest.data)
            } catch (error) {
                this.errors = getErrorsFromResponse(error)
                console.error(error)
            }
        }
    }
}
</script>

<style scoped>
.add-reply-button {
    margin-top: 2px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>
