<template>
    <div class="card">
        <product-update-form :pending="pending"
                             :request-errors="errors"
                             @update-product="(productFormData) => usePending(onProductCreateButtonClick, 'pending', productFormData)"/>
    </div>
</template>

<script>
import ProductUpdateForm from '@/components/product/interactions/ProductUpdateForm.vue'
import { API_CREATE_PRODUCT_URL } from '@/api/products'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse from '@/helpers/errors'
import usePending from '@/mixins/usePending'

export default {
    name: 'ProductCreateCard',
    mixins: [usePending],
    components: { ProductUpdateForm },
    data() {
        return {
            errors: {},
            pending: false
        }
    },
    methods: {
        async onProductCreateButtonClick(productFormData) {
            this.errors = {}

            try {
                const createdProduct = (await apiRequest(API_CREATE_PRODUCT_URL, {}, productFormData)).data

                this.$router.push({ name: 'ProductUpdate', params: { slug: createdProduct.slug } })
            } catch (errors) {
                this.errors = getErrorsFromResponse(errors)
            }
        }
    }
}
</script>

<style scoped>

</style>
