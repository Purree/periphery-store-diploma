<template>
    <div class="card">
        <product-update-form :request-errors="errors"
                             :product-to-update="product"
                             :pending="pending"
                             @delete-product="usePending(onProductDeleteButtonClick)"
                             @update-product="(productFormData) => usePending(onProductUpdateButtonClick, 'pending', productFormData)"/>
    </div>
</template>

<script>
import ProductUpdateForm from '@/components/product/interactions/ProductUpdateForm.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL, API_UPDATE_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { mapState } from 'vuex'
import usePending from '@/mixins/usePending'

export default {
    name: 'ProductUpdateCard',
    components: { ProductUpdateForm },
    data() {
        return {
            product: {},
            errors: {},
            pending: false,
            productSlug: ''
        }
    },
    mixins: [usePending],
    methods: {
        async onProductUpdateButtonClick(productFormData) {
            this.errors = {}
            productFormData.append('_method', 'PUT')

            try {
                this.product = (await apiRequest(API_UPDATE_PRODUCT_URL, { slug: this.productSlug }, productFormData)).data
            } catch (errors) {
                this.errors = getErrorsFromResponse(errors)
            }
        },
        async onProductDeleteButtonClick() {
            await this.redirectToHome()
        },
        async loadProduct() {
            try {
                const product = (await apiRequest(API_GET_PRODUCT_URL, { slug: this.productSlug })).data
                if (product.seller.id !== this.user.id) {
                    await this.redirectToHome()
                }

                this.product = product
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
                await this.redirectToHome()
            }
        },
        async redirectToHome() {
            await this.$router.push({ name: 'Home' })
        }
    },
    computed: {
        ...mapState('auth', ['user'])
    },
    mounted() {
        this.productSlug = this.$route.params.slug
        this.usePending(this.loadProduct)
    }
}
</script>

<style scoped>

</style>
