<template>
    <div v-if="(data || []).length === 0 && isAddDataButtonVisible">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'NoDataMessage',
    props: {
        data: {
            type: Array,
            required: true
        },
        isAddDataButtonVisible: {
            type: Boolean,
            required: true
        },
        text: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>

</style>
