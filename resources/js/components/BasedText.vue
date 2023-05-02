<template>
    <el-text class="based-text">{{ title }}</el-text>
</template>

<script>
export default {
    name: 'BasedText',
    props: {
        title: {
            required: true
        }
    }
}
</script>

<style scoped>
.based-text {
    width: 100%;
    word-break: break-word;
    white-space: normal;
    overflow: hidden;
}
</style>
