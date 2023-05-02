<template>
    <div class="card">
        <product-update-form @update-product="onProductCreateButtonClick"/>
    </div>
</template>

<script>
import ProductUpdateForm from '@/components/product/interactions/ProductUpdateForm.vue'

export default {
    name: 'ProductCreateCard',
    components: { ProductUpdateForm },
    methods: {
        onProductCreateButtonClick(product) {

        }
    }
}
</script>

<style scoped>

</style>
