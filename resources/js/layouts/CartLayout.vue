<template>
    <product-layout>
        <div class="bottom-card">
            <slot></slot>
        </div>
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
