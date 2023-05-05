<template>
    <div class="seller-products-container">
        <full-width-button @click="onProductCreateButtonClick">{{
                $t('profile.productsForSale.createProduct')
            }}
        </full-width-button>
        <div v-if="!sellerProductsPending">
            <div v-if="sellerProducts.length > 0">
                <div v-for="product in sellerProducts" :key="product.slug">
                    <div class="product-interaction-buttons">
                        <full-width-button @click="onProductEditButtonClick(product.slug)">{{
                                $t('general.edit')
                            }}
                        </full-width-button>
                        <product-delete-button @delete-product="onProductDelete(product.slug)" :slug="product.slug"/>
                    </div>
                    <product-card :reviews-count="product.reviewsCount"
                                  :title="product.title"
                                  :image-url="product.previewImage"
                                  :price="product.price"
                                  :price-with-discount="product.priceWithDiscount"
                                  :rating="product.rating"
                                  :slug="product.slug"
                                  :is-show-add-to-cart-button="false"
                                  class="product-card"/>
                </div>
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
import FullWidthButton from '@/components/FullWidthButton.vue'
import ErrorsAlert from '@/components/errors/ErrorsAlert.vue'
import ProductCard from '@/components/search/ProductCard.vue'
import ProductDeleteButton from '@/components/product/interactions/ProductDeleteButton.vue'

export default {
    name: 'SellerProducts',
    components: {
        ProductDeleteButton,
        ProductCard,
        ErrorsAlert,
        FullWidthButton
    },
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
        },
        onProductEditButtonClick(slug) {
            this.$router.push({
                name: 'ProductUpdate',
                params: { slug }
            })
        },
        onProductDelete(slug) {
            this.sellerProducts = this.sellerProducts.filter((product) => product.slug !== slug)
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

.product-interaction-buttons {
    display: flex;
    margin-top: 10px;
}
</style>
