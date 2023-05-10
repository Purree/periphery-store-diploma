<template>
    <elements-collection :collection-title="collectionTitle" max-height="auto">
        <product-card :key="product.slug" v-for="product in products" :image-url="product.previewImage"
                      :title="product.title" :price="product.price" :slug="product.slug" :discount="product.discount"
                      :price-with-discount="product.priceWithDiscount" :rating="product.rating"
                      :reviews-count="product.reviewsCount" class="product-card"/>
        <template v-if="pending">
            <collection-skeleton/>
        </template>
    </elements-collection>
</template>

<script>
import ElementsCollection from '@/components/collections/ElementsCollection.vue'
import ProductCard from '@/components/home/product/ProductCard.vue'
import CollectionSkeleton from '@/components/collections/CollectionSkeleton.vue'

export default {
    name: 'ProductsCollection',
    components: {
        CollectionSkeleton,
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
        },
        pending: {
            required: false,
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.product-card:not(:last-child) {
    margin-right: 30px;
}
</style>
