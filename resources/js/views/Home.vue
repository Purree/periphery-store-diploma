<template>
    <div class="home-container">
        <top-promotions/>
    </div>
    <div class="products home-container">
        <products-collection :collection-title="$t('home.headerDiscounts.products.salesHits')" :products="products"/>
    </div>
</template>

<script>
import TopPromotions from '@/components/home/TopPromotions/TopPromotions.vue'
import ProductsCollection from '@/components/collections/ProductsCollection.vue'

export default {
    name: 'Home',
    components: {
        ProductsCollection,
        TopPromotions
    },
    data() {
        return {
            products: [{
                title: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                slug: 'test',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
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
.products {
    padding-top: 50px;
    background-color: var(--el-bg-color);
    height: 100%;
    border-top-left-radius: var(--el-border-radius-round);
    border-top-right-radius: var(--el-border-radius-round);

    flex: 1 1 auto;
}
</style>
