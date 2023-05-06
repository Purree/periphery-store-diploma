<template>
    <!--  Also implicitly used in the SellerProducts and Cart.vue  -->
    <product-card v-for="product in products" :key="product.slug"
                  :reviews-count="product.reviewsCount"
                  :title="product.title"
                  :image-url="product.previewImage"
                  :price="product.price"
                  :price-with-discount="product.priceWithDiscount"
                  :rating="product.rating"
                  :slug="product.slug"
                  :is-show-add-to-cart-button="isShowAddToCartButton"
                  class="product-card"/>
</template>

<script>
import ProductCard from '@/components/search/ProductCard.vue'

export default {
    name: 'ProductCardFactory',
    components: { ProductCard },
    props: {
        products: {
            required: true,
            type: Array
        },
        isShowAddToCartButton: {
            required: false,
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>

</style>
