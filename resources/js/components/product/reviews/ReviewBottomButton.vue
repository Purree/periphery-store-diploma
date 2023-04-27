<template>
    <el-link :disabled="pending" v-bind="$attrs">
        <slot>
            {{ text }}
        </slot>
    </el-link>
</template>

<script>
export default {
    name: 'ReviewBottomButton',
    props: {
        text: {
            required: false,
            type: String,
            default: ''
        },
        pending: {
            required: false,
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
