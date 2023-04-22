<template>
    <div class="product">
        <div class="product-title-container">
            <item-title v-if="!pending" :title="product.title"/>
            <el-skeleton v-else class="product-title-skeleton"
                         animated>
                <template #template>
                    <el-skeleton-item variant="rect"/>
                </template>
            </el-skeleton>
        </div>

        <div class="product-card card">
            <div class="product-images">
                <product-images-carousel v-if="product.images || product.previewImage || pending"
                                         :images="product.images"
                                         :pending="pending" :product-preview="product.previewImage"/>
            </div>
            <div class="product-data">
                <div class="product-title-small-container">
                    <item-title v-if="!pending" :title="product.title"/>
                    <el-skeleton v-else class="product-title-small-skeleton"
                                 animated>
                        <template #template>
                            <el-skeleton-item variant="rect"/>
                        </template>
                    </el-skeleton>
                </div>
                <div class="product-seller-container">
                    <product-seller-card v-if="!pending" :avatar="product.seller.avatar"
                                         :name="product.seller.name"/>
                    <el-skeleton v-else class="product-title-skeleton"
                                 animated>
                        <template #template>
                            <el-skeleton-item variant="rect"/>
                        </template>
                    </el-skeleton>
                </div>
                <div class="main-product-data-container">
                    <product-feedback :rating="product.rating" :reviews-count="product.reviewsCount"/>
                    <div v-if="!pending" class="main-product-data">
                        <div class="product-cost-data">
                            <product-discount class="product-discount" v-if="product.discount"
                                              :discount="product.discount"/>
                            <product-price class="product-price" :price="product.price"
                                           :discounted-price="product.priceWithDiscount"/>
                            <product-description v-if="product.description" :description="product.description"/>
                            <add-to-cart-button/>
                        </div>
                    </div>
                    <el-skeleton v-else
                                 animated>
                    </el-skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductPrice from '@/components/product/ProductPrice.vue'
import ProductImagesCarousel from '@/components/product/ProductImagesCarousel.vue'
import ProductDiscount from '@/components/home/topPromotions/ProductDiscount.vue'
import AddToCartButton from '@/components/product/AddToCartButton.vue'
import ItemTitle from '@/components/home/ItemTitle.vue'
import ProductFeedback from '@/components/product/ProductFeedback.vue'
import ProductSellerCard from '@/components/product/ProductSellerCard.vue'
import ProductDescription from '@/components/product/ProductDescription.vue'

export default {
    name: 'MainProductData',
    components: {
        ProductDescription,
        ProductSellerCard,
        ProductFeedback,
        ItemTitle,
        AddToCartButton,
        ProductDiscount,
        ProductImagesCarousel,
        ProductPrice
    },
    props: {
        product: {
            required: true,
            type: Object,
            default: () => {}
        },
        pending: {
            required: true,
            type: Boolean
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

.product {
    margin-top: 20px;
}

.product-discount, .product-price, .product-title-container {
    margin-bottom: 10px;
}

.product-data {
    display: flex;
    flex-direction: column;
}

.product-title-container {
    font-weight: bold;

    .product-title {
        font-size: 32px;
    }

    @include max-screen-size('big-tablet') {
        display: none;
    }
}

.main-product-data-container, .main-product-data, .product-cost-data {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.product-cost-data {
    justify-content: space-between;
}

.product-title-small-container {
    margin-bottom: 5px;
    .product-title {
        font-size: 24px;
    }

    @include screen-size('small-desktop') {
        display: none;
    }
}

.product-title-skeleton {
    height: 32px;

    & * {
        height: 100%;
    }
}

.product-title-small-skeleton {
    height: 24px;

    & * {
        height: 100%;
    }
}

.product-images {
    margin-bottom: 10px;
    max-height: 500px;
}

.product-card {
    min-height: 550px;
    display: grid;
    @include screen-size('small-desktop') {
        grid-template-columns: repeat(2, 1fr);
    }
    @include max-screen-size('big-tablet') {
        grid-template-rows: 400px 1fr;
    }
}

.product-seller-container {
    margin-bottom: 10px;
}
</style>
