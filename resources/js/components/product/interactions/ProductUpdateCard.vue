<template>
    <div class="card">
        <product-update-form :request-errors="errors"
                             :product-to-update="product"
                             :pending="pending"
                             @delete-product="usePending(onProductDeleteButtonClick)"
                             @update-product="(productFormData) => usePending(onProductUpdateButtonClick, 'pending', productFormData)"/>
    </div>
    <div class="card">
        <product-categories-update-card @update-categories="usePending(loadProduct)"
                                        :product-slug="productSlug"
                                        :categories="product.categories || []"
                                        :external-pending="pending"/>
    </div>
    <div class="card">
        <product-images-update-card @images-update="usePending(loadProduct)"
                                    :product-slug="productSlug"
                                    :external-pending="pending"
                                    :current-images="product.images || []"/>
    </div>
</template>

<script>
import ProductUpdateForm from '@/components/product/interactions/updateForm/ProductUpdateForm.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCT_URL, API_UPDATE_PRODUCT_URL } from '@/api/products'
import getErrorsFromResponse from '@/helpers/errors'
import { mapState } from 'vuex'
import usePending from '@/mixins/usePending'
import ProductCategoriesUpdateCard from '@/components/product/interactions/ProductCategoriesUpdateCard.vue'
import ProductImagesUpdateCard from '@/components/product/interactions/ProductImagesUpdateCard.vue'
import useErrorsCatch from '@/mixins/useErrorsCatch'

export default {
    name: 'ProductUpdateCard',
    components: {
        ProductImagesUpdateCard,
        ProductCategoriesUpdateCard,
        ProductUpdateForm
    },
    data() {
        return {
            product: {},
            errors: {},
            pending: false,
            productSlug: ''
        }
    },
    mixins: [usePending, useErrorsCatch],
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
            await this.useErrorsCatch(async() => {
                const product = (await apiRequest(API_GET_PRODUCT_URL, { slug: this.productSlug })).data
                if (product.seller.id !== this.user.id) {
                    await this.redirectToHome()
                }

                this.product = product
            }, async() => {
                await this.redirectToHome()
            })
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
.card + .card {
    margin-top: 10px;
}
</style>
