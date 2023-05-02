<template>
    <div class="seller-products-container">
        <full-width-button @click="onProductCreateButtonClick">{{ $t('profile.productsForSale.createProduct') }}</full-width-button>
        <div v-if="!sellerProductsPending">
            <div v-if="sellerProducts.length > 0">
                <product-card-factory :products="sellerProducts" :is-show-add-to-cart-button="false"/>
            </div>
            <div v-else>
                <errors-alert :errors="[[$t('profile.productsForSale.noProducts')]]"/>
            </div>
        </div>
        <div v-else>
            <el-skeleton v-for="key in 20" :key="key" class="product-card card" animated/>
        </div>
    </div>
</template>

<script>
import apiRequest from '@/helpers/apiRequest'
import { API_GET_USER_PRODUCTS_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import ProductCardFactory from '@/components/search/ProductCardFactory.vue'
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'

export default {
    name: 'SellerProducts',
    components: { ErrorsAlert, FullWidthButton, ProductCardFactory },
    data() {
        return {
            sellerProducts: [],
            sellerProductsPending: true
        }
    },
    methods: {
        async loadProducts() {
            try {
                this.sellerProducts = (await apiRequest(API_GET_USER_PRODUCTS_URL)).data
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            }
        },
        onProductCreateButtonClick() {
            this.$router.push({ name: 'ProductCreate' })
        }
    },
    async mounted() {
        await this.loadProducts()
        this.sellerProductsPending = false
    }
}
</script>

<style scoped>
.seller-products-container {
    margin-block: 10px;
}
</style>
