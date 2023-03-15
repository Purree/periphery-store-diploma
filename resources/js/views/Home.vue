<template>
    <div class="home-container">
        <top-promotions/>
    </div>
    <div class="products home-container">
        <products-collection v-if="products" :collection-title="$t('home.products.salesHits')" :products="products"
                             class="sales-hits"/>
        <categories-collection v-if="categories" :collection-title="$t('home.categories.popularCategories')"
                               :categories="categories"/>
    </div>
</template>

<script>
import TopPromotions from '@/components/home/topPromotions/TopPromotions.vue'
import ProductsCollection from '@/components/collections/ProductsCollection.vue'
import CategoriesCollection from '@/components/collections/CategoriesCollection.vue'

export default {
    name: 'Home',
    components: {
        CategoriesCollection,
        ProductsCollection,
        TopPromotions
    },
    data() {
        return {
            products: [{
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
            }],
            categories: [{
                image: 'http://diploma.com/storage/default.png',
                slug: 'test',
                title: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'
            }, {
                image: 'http://diploma.com/storage/default.png',
                slug: 'test2',
                title: 'tost'
            }, {
                image: 'http://diploma.com/storage/default.png',
                slug: 'test3',
                title: 'ещые'
            }, {
                image: 'http://diploma.com/storage/default.png',
                slug: 'test4',
                title: 'ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА'
            }, {
                image: 'http://diploma.com/storage/default.png',
                slug: 'test5',
                title: 'ББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББББ'
            }, {
                image: 'http://diploma.com/storage/banners/banner.jpg',
                slug: 'test6',
                title: 'ВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВ'
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

.sales-hits {
    margin-bottom: 50px;
}
</style>
