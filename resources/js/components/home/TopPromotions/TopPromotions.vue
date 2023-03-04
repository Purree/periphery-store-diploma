<template>
    <div class="top-discounts">
        <el-skeleton v-if="bannerPending" animated>
            <template #template>
                <el-skeleton-item variant="rect" class="skeleton-item"/>
            </template>
        </el-skeleton>
        <promotion-banners v-else-if="banners.length > 0" class="promotion-banners" :banners="banners" />
        <products-with-discount class="products-with-discount"
                                :products="randomProductsWithDiscount"
                                :class="{'full-width': banners.length < 1 && !bannerPending}" />
    </div>
</template>

<script>
import PromotionBanners from '@/components/home/TopPromotions/PromotionBanners.vue'
import ProductsWithDiscount from '@/components/home/TopPromotions/ProductsWithDiscount.vue'
import apiRequest from '@/helpers/apiRequest'
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { API_GET_BANNERS_URL } from '@/api/banners'

export default {
    name: 'TopPromotions',
    components: {
        ProductsWithDiscount,
        PromotionBanners
    },
    data() {
        return {
            bannerPending: true,
            banners: [],
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
    },
    methods: {
        async loadBanners() {
            try {
                const getBannersResponse = await apiRequest(API_GET_BANNERS_URL)
                this.banners = getBannersResponse.data
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            } finally {
                this.bannerPending = false
            }
        }
    },
    mounted() {
        this.loadBanners()
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
    &:not(.full-width) {
        width: 677px;
    }
    &.full-width {
        width: 100%;
    }
}

.skeleton-item {
    width: 100%;
    height: 100%;
}
</style>
