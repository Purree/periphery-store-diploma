<template>
    <div class="card">
        <product-update-form @update-product="onProductUpdateButtonClick"/>
    </div>
</template>

<script>
import ProductUpdateForm from '@/components/product/interactions/ProductUpdateForm.vue'

export default {
    name: 'ProductUpdateCard',
    components: { ProductUpdateForm },
    methods: {
        onProductUpdateButtonClick(product) {

        }
    }
}
</script>

<style scoped>

</style>
