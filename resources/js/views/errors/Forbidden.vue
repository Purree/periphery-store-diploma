<template>
    <div class="error-text">403 | {{ $t('errors.forbidden') }}</div>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>

<style scoped>
    .error-text {
        font-size: var(--el-font-size-extra-large);
        color: var(--el-color-danger);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
