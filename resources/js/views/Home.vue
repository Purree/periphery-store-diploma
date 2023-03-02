<template>
<!--    TODO: Адаптировать к мобилкам-->
    <div class="home-container top-discounts">
        <promotion-banners :banners="banners"></promotion-banners>
        <products-with-discount :products="randomProductsWithDiscount"></products-with-discount>
    </div>
    <div class="products">

    </div>
</template>

<script>
import PromotionBanners from '@/components/home/TopPromotions/PromotionBanners.vue'
import ProductsWithDiscount from '@/components/home/TopPromotions/ProductsWithDiscount.vue'

export default {
    name: 'Home',
    components: {
        ProductsWithDiscount,
        PromotionBanners
    },
    data() {
        return {
            // @TODO: Replace this.
            banners: [{
                name: 'test',
                url: '/404',
                image: 'http://diploma.com/storage/banners/banner.jpg'
            }, {
                name: 'test2',
                url: '/404',
                image: 'http://diploma.com/storage/banners/banner.jpg'
            }, {
                name: 'test3',
                url: '/404',
                image: 'http://diploma.com/storage/banners/banner.jpg'
            }
            ],
            // @TODO: Replace this.
            randomProductsWithDiscount: [{
                title: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                reviewsCount: 6,
                rating: 2.5,
                slug: '404',
                previewImage: 'http://diploma.com/storage/banners/banner.jpg',
                price: 10.0,
                discount: 10,
                priceWithDiscount: 9.0
            }, {
                title: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                slug: '404',
                previewImage: 'http://diploma.com/storage/banners/banner.jpg',
                price: 100000000000000.0,
                discount: 50,
                priceWithDiscount: 50000000000000.0
            }, {
                title: 'test3',
                reviewsCount: 21,
                rating: 5,
                slug: '404',
                previewImage: 'http://diploma.com/storage/banners/banner.jpg',
                price: 10.0,
                discount: 100,
                priceWithDiscount: 0
            }]
        }
    }
}
</script>

<style scoped lang="scss">
.top-discounts {
    display: flex;
    width: 100%;
    padding-top: calc(var(--el-main-padding) * 2);
    padding-bottom: calc(var(--el-main-padding) * 2);

    & > *:not(:last-child) {
        margin-right: 20px;
    }

    flex: 0 1 auto;
}

.products {
    background-color: var(--el-bg-color);
    height: 100%;
    border-top-left-radius: var(--el-border-radius-round);
    border-top-right-radius: var(--el-border-radius-round);

    flex: 1 1 auto;
}
</style>
