<template>
    <el-button :disabled="pending" :loading="pending" class="fullwidth-button" v-bind="$attrs">
        <slot></slot>
    </el-button>
</template>

<script>
export default {
    name: 'FullWidthButton',
    props: ['pending']
}
</script>

<style scoped>
.fullwidth-button {
    width: 100%;
}
</style>
