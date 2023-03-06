<template>
    <div class="collection-container">
        <slot name="title">
            <div v-if="collectionTitle" class="collection-title">
                {{ collectionTitle }}
            </div>
        </slot>
        <div class="elements" :style="`height: ${height}`">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElementsCollection',
    props: {
        collectionTitle: {
            required: false,
            type: [String, undefined]
        },
        height: {
            required: false,
            type: String,
            default: '340px'
        }
    }
}
</script>

<style scoped>
.collection-title {
    font-size: 1.6rem;
    font-weight: bold;
}
</style>
