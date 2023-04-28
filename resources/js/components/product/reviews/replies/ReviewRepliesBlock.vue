<template>
    <div class="replies-container" :style="this.deviceType === 'mobile' ? 'flex-direction: column' : ''"
         v-for="reply in replies" :key="reply.id">
        <el-divider class="reply-divider" :direction="this.deviceType !== 'mobile' ? 'vertical' : 'horizontal'"/>
        <div class="reply-review">
            <review-reply-card @delete-reply="$emit('deleteReply', reply)"
                               @update-reply="onReplyUpdates"
                               :reply="reply" :review-id="reviewId"/>
        </div>
    </div>
</template>

<script>
import ReviewReplyCard from '@/components/product/reviews/replies/ReviewReplyCard.vue'
import screenWidth from '@/mixins/screenWidth'
import { screenSizes } from '@/helpers/enums/ScreenSizesEnum'

export default {
    name: 'ReviewRepliesBlock',
    computed: {
        screenSizes() {
            return screenSizes
        }
    },
    emits: ['deleteReply', 'updateReply'],
    mixins: [screenWidth],
    components: { ReviewReplyCard },
    props: {
        replies: {
            required: true,
            type: Array
        },
        reviewId: {
            required: true,
            type: Number
        }
    },
    methods: {
        onReplyUpdates(reply) {
            this.$emit('updateReply', { [reply.id]: reply })
        }
    }
}
</script>

<style scoped>
.replies-container {
    display: flex;
    width: 100%;
}

.reply-divider {
    height: auto;
    border-width: 3px;
}

.reply-review {
    width: 100%;
}
</style>
