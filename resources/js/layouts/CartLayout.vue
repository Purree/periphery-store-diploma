<template>
    <product-layout>
        <slot></slot>
    </product-layout>
</template>

<script>
import ProductLayout from '@/layouts/ProductLayout.vue'

export default {
    name: 'CartLayout',
    components: { ProductLayout }
}
</script>

<style scoped>

</style>
