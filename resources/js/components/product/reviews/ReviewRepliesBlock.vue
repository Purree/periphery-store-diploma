<template>
    <div class="replies-container">
        <el-divider class="reply-divider" direction="vertical"/>
        <div class="reply-review">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReviewRepliesBlock',
    props: {
        replies: {
            required: true,
            type: Array
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
