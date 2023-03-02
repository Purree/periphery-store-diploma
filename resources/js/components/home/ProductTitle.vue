<template>
    <div class="product-title">{{ productName }}</div>
</template>

<script>
export default {
    name: 'ProductTitle',
    props: {
        productName: {
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
    max-height: 40px;
    overflow: hidden;
    font-size: var(--el-font-size-base);
}
</style>
