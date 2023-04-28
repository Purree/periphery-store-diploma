<template>
    <el-form>
        <errors-alert :errors="errors"/>
        <el-input
            v-model="text"
            :autosize="{ minRows: 3, maxRows: 4 }"
            type="textarea"
            :placeholder="$t('product.reviews.editComment')"
        />
        <div>
            <full-width-button :pending="pending" @click="usePending(updateReply)" type="info">
                {{ $t('general.edit') }}
            </full-width-button>
        </div>
    </el-form>
</template>

<script>
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import usePending from '@/mixins/usePending'
import FullWidthButton from '@/components/FullWidthButton.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_UPDATE_REVIEW_REPLY_URL } from '@/api/reviews'
import getErrorsFromResponse from '@/helpers/errors'

export default {
    name: 'EditReplyForm',
    components: {
        FullWidthButton,
        ErrorsAlert
    },
    emits: ['updateReply'],
    mixins: [usePending],
    data() {
        return {
            text: '',
            pending: false,
            errors: {}
        }
    },
    props: {
        replyId: {
            required: true,
            type: Number
        },
        currentText: {
            required: true,
            type: String
        }
    },
    mounted() {
        this.text = this.currentText
    },
    methods: {
        async updateReply() {
            try {
                const replyRequest = await apiRequest(
                    API_UPDATE_REVIEW_REPLY_URL,
                    { id: this.replyId },
                    {
                        text: this.text
                    }
                )

                this.$emit('updateReply', replyRequest.data)
            } catch (error) {
                this.errors = getErrorsFromResponse(error)
                console.error(error)
            }
        }
    }
}
</script>

<style scoped>

</style>
