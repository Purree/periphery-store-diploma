<template>
    <div class="error" :key="error" v-for="error in errors">
        <el-alert v-bind="$attrs" :title="error.join('\n')" type="error"/>
    </div>
</template>

<script>
export default {
    name: 'ErrorsAlert',
    props: {
        errors: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.error {
    margin-bottom: 10px;
}
</style>
