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
import getErrorsFromResponse, { openErrorNotification } from '@/helpers/errors'
import { API_GET_BANNERS_URL } from '@/api/banners'
import { API_GET_DISCOUNTED_PRODUCTS_URL } from '@/api/products'

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
            productsWithDiscountPending: true,
            productsWithDiscount: []
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
        },
        async loadProductWithDiscount() {
            try {
                const getProductsResponse = await apiRequest(API_GET_DISCOUNTED_PRODUCTS_URL)
                this.productsWithDiscount = getProductsResponse.data
            } catch (errors) {
                openErrorNotification(getErrorsFromResponse(errors))
            } finally {
                this.productsWithDiscountPending = false
            }
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
        --carousel__item-padding: 15px;
        --carousel-height: min(40vh, 260px);

        margin-top: 20px;
        height: var(--carousel-height) !important;
        width: 100% !important;
    }
}

.promotion-banners-skeleton, .products-with-discount-skeleton {
    height: 260px;
    padding-bottom: 15px;
}

@include max-screen-size('big-tablet') {
    .promotion-banners, .promotion-banners-skeleton {
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
