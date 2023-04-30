<template>
    <img loading="lazy" class="product-image" :src="imageUrl" :alt="imageAlt"/>
</template>

<script>
export default {
    name: 'ItemImage',
    props: {
        imageUrl: {
            required: true,
            type: String
        },
        imageAlt: {
            required: false,
            type: String,
            default: 'Item image'
        }
    }
}
</script>

<style scoped>
.product-image {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
