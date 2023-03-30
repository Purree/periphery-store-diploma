<template>
    <div>
        <products-collection v-if="salesHits" :collection-title="$t('home.products.salesHits')" :products="salesHits"
                             class="sales-hits"/>
        <categories-collection v-if="categories" :collection-title="$t('home.categories.popularCategories')"
                               :categories="categories" class="popular-categories"/>
        <products-list :title="$t('home.products.otherProducts')" :products="otherProducts"/>
    </div>
</template>

<script>
import ProductsList from '@/components/home/product/ProductsList.vue'
import CategoriesCollection from '@/components/collections/CategoriesCollection.vue'
import ProductsCollection from '@/components/collections/ProductsCollection.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_PRODUCTS_URL } from '@/api/products'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'

export default {
    name: 'HomeProducts',
    components: {
        ProductsList,
        CategoriesCollection,
        ProductsCollection
    },
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
            }],
            otherProducts: [],
            otherProductsPagination: [],
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
    },
    methods: {
        async getAllProducts(page = 1) {
            try {
                const productsResponse = await apiRequest(API_GET_PRODUCTS_URL, {}, { page })
                return productsResponse.data
            } catch (error) {
                openErrorNotification(getErrorsFromResponse(error))
                return []
            }
        }
    },
    async mounted() {
        const allProductsResponse = await this.getAllProducts()
        this.otherProducts = allProductsResponse.data
        this.otherProductsPagination = allProductsResponse.meta
    }
}
</script>

<style scoped>
.sales-hits, .popular-categories {
    margin-bottom: 50px;
}
</style>
