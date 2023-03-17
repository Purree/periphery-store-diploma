<template>
    <div v-if="title" class="title">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'ListTitle',
    props: {
        title: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 1.6rem;
    font-weight: bold;
}
</style>
