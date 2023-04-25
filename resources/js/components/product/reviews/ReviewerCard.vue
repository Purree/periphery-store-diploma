<template>
    <div>
        <div>
            <div v-if="isAnonymous">
                <based-text class="reviewer-anonymous-title" :title="$t('general.reviews.anonymousReview')"/>
            </div>
            <div v-else>
                <div class="reviewer-container">
                    <user-avatar :src="reviewerAvatar"/>
                    <based-text class="reviewer-name" :title="reviewerName"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasedText from '@/components/BasedText.vue'
import UserAvatar from '@/components/profile/UserAvatar.vue'

export default {
    name: 'ReviewerCard',
    components: {
        UserAvatar,
        BasedText
    },
    props: {
        isAnonymous: {
            required: false,
            type: Boolean,
            default: false
        },
        reviewerAvatar: {
            required: false,
            type: String
        },
        reviewerName: {
            required: false,
            type: String
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
</style>
