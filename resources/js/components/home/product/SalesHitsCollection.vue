<template>
    <products-collection v-if="salesHits.length > 0" :collection-title="$t('home.products.salesHits')"
                         :products="salesHits" class="sales-hits"/>
</template>

<script>
import ProductsCollection from '@/components/collections/ProductsCollection.vue'

export default {
    name: 'SalesHitsCollection',
    components: { ProductsCollection },
    data() {
        return {
            salesHits: [{
                title: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                slug: 'test',
                previewImage: 'http://diploma.com/storage/default.png',
                price: 100000000000000.0,
                discount: 50,
                priceWithDiscount: 50000000000000.0
            }, {
                title: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                reviewsCount: 6,
                rating: 2.5,
                slug: 'tost',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 10000000.0,
                discount: 1,
                priceWithDiscount: 10000000.0
            }, {
                title: 'test3',
                reviewsCount: 21,
                rating: 5,
                slug: 'text',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 100000.0,
                discount: 1,
                priceWithDiscount: 10000000.0
            }, {
                title: 'test3',
                reviewsCount: 21,
                rating: 5,
                slug: 'texts',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 10.0
            }, {
                title: 'test3',
                reviewsCount: 21,
                rating: 5,
                slug: 'toxt',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 100000.0,
                discount: 1,
                priceWithDiscount: 10000000.0
            }, {
                title: 'test3',
                reviewsCount: 21,
                rating: 5,
                slug: 'detox',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 100000.0,
                discount: 1,
                priceWithDiscount: 10000000.0
            }]
        }
    }
}
</script>

<style scoped>

</style>
