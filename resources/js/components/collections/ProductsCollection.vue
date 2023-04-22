<template>
    <elements-collection :collection-title="collectionTitle" max-height="auto">
        <product-card :key="product.slug" v-for="product in products" :image-url="product.previewImage"
                      :title="product.title" :price="product.price" :slug="product.slug" :discount="product.discount"
                      :price-with-discount="product.priceWithDiscount" :rating="product.rating"
                      :reviews-count="product.reviewsCount" class="product-card"/>
    </elements-collection>
</template>

<script>
import ElementsCollection from '@/components/collections/ElementsCollection.vue'
import ProductCard from '@/components/home/product/ProductCard.vue'

export default {
    name: 'ProductsCollection',
    components: {
        ProductCard,
        ElementsCollection
    },
    props: {
        collectionTitle: {
            required: false,
            type: [String, undefined]
        },
        products: {
            required: true,
            type: Array
        }
    }
}
</script>

<style scoped>
.product-card:not(:last-child) {
    margin-right: 30px;
}
</style>
