<template>
    <div class="home-container top-discounts">
        <promotion-banners class="promotion-banners" :banners="banners"></promotion-banners>
        <products-with-discount class="products-with-discount" :products="randomProductsWithDiscount"></products-with-discount>
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
                slug: '404',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 100000000000000.0,
                discount: 50,
                priceWithDiscount: 50000000000000.0
            }, {
                title: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
                reviewsCount: 6,
                rating: 2.5,
                slug: '404',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 10000000.0,
                discount: 1,
                priceWithDiscount: 10000000.0
            }, {
                title: 'test3',
                reviewsCount: 21,
                rating: 5,
                slug: '404',
                previewImage: 'http://diploma.com/storage/product-images/image.jpg',
                price: 10.0,
                discount: 100,
                priceWithDiscount: 0
            }]
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

@include max-screen-size('small-desktop') {
    .top-discounts {
        flex-direction: column;
    }
    .products-with-discount {
        --carousel__item-padding: 15px;
        --carousel-height: min(40vh, 260px);

        margin-top: 20px;
        height: var(--carousel-height) !important;
        width: 100% !important;
    }
}
@include max-screen-size('big-tablet') {
    .promotion-banners {
        min-height: 126px;
        height: 20vh !important;
    }
}

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

.products-with-discount {
    width: 677px;
}

.products {
    background-color: var(--el-bg-color);
    height: 100%;
    border-top-left-radius: var(--el-border-radius-round);
    border-top-right-radius: var(--el-border-radius-round);

    flex: 1 1 auto;
}
</style>
