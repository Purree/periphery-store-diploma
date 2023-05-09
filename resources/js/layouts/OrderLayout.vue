<template>
    <cart-layout>
        <slot></slot>
    </cart-layout>
</template>

<script>
import CartLayout from '@/layouts/CartLayout.vue'

export default {
    name: 'OrderLayout',
    components: { CartLayout }
}
</script>

<style scoped>

</style>
