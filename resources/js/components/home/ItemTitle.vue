<template>
    <div class="product-title">{{ title }}</div>
</template>

<script>
export default {
    name: 'ItemTitle',
    props: {
        title: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.product-title {
    width: 100%;
    word-break: break-all;
    white-space: normal;
    max-height: 40px;
    overflow: hidden;
    font-size: var(--el-font-size-base);
}
</style>
