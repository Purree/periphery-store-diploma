<template>
    <div class="top-discounts">
        <el-skeleton v-if="bannerPending" animated class="promotion-banners-skeleton">
            <template #template>
                <el-skeleton-item variant="rect" class="skeleton-item"/>
            </template>
        </el-skeleton>
        <promotion-banners v-else-if="banners.length > 0" class="promotion-banners" :banners="banners"/>

        <el-skeleton v-if="productsWithDiscountPending" animated class="products-with-discount-skeleton">
            <template #template>
                <el-skeleton-item variant="rect" class="skeleton-item"/>
            </template>
        </el-skeleton>
        <products-with-discount v-else-if="productsWithDiscount.length > 0"
                                class="products-with-discount"
                                :products="productsWithDiscount"
                                :class="{'full-width': banners.length < 1 && !bannerPending}"/>
    </div>
</template>

<script>
import PromotionBanners from '@/components/home/topPromotions/PromotionBanners.vue'
import ProductsWithDiscount from '@/components/home/topPromotions/ProductsWithDiscount.vue'
import apiRequest from '@/helpers/apiRequest'
import { API_GET_BANNERS_URL } from '@/api/banners'
import { API_GET_DISCOUNTED_PRODUCTS_URL } from '@/api/products'
import useErrorsCatch from '@/mixins/useErrorsCatch'

export default {
    name: 'TopPromotions',
    mixins: [useErrorsCatch],
    components: {
        ProductsWithDiscount,
        PromotionBanners
    },
    data() {
        return {
            bannerPending: true,
            banners: [],
            productsWithDiscountPending: true,
            productsWithDiscount: []
        }
    },
    methods: {
        async loadBanners() {
            await this.useErrorsCatch(async() => {
                const getBannersResponse = await apiRequest(API_GET_BANNERS_URL)
                this.banners = getBannersResponse.data
            })

            this.bannerPending = false
        },
        async loadProductWithDiscount() {
            await this.useErrorsCatch(async() => {
                const getProductsResponse = await apiRequest(API_GET_DISCOUNTED_PRODUCTS_URL)
                this.productsWithDiscount = getProductsResponse.data
            })

            this.productsWithDiscountPending = false
        }
    },
    mounted() {
        this.loadBanners()
        this.loadProductWithDiscount()
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
        margin-top: 20px;
        width: 100% !important;
    }
}

.products-with-discount, .promotion-banners, .promotion-banners-skeleton, .products-with-discount-skeleton {
    height: 326px;
}

.promotion-banners-skeleton, .products-with-discount-skeleton {
    padding-bottom: 15px;
}

.promotion-banners, .promotion-banners-skeleton {
    @include max-screen-size('big-tablet') {
        min-height: 126px;
        max-height: 240px;
    }
    @include max-screen-size('mobile') {
        max-height: 160px;
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
