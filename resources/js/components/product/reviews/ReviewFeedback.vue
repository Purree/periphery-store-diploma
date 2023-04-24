<template>
    <div class="comment-category">
        <based-text class="comment-category-title" :title="title"/>
        <div>
            <based-text :title="text"/>
        </div>
    </div>
</template>

<script>
import BasedText from '@/components/BasedText.vue'

export default {
    name: 'ReviewFeedback',
    components: { BasedText },
    props: {
        title: {
            required: true,
            type: String
        },
        text: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.comment-category {
    margin-bottom: 10px;
}

.comment-category-title {
    font-weight: bold;
    font-size: var(--el-font-size-large) !important;
}
</style>
