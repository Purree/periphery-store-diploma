<template>
    <carousel class="products-carousel carousel-with-bottom-indentation" trigger="click"
                 height="inherit" :interval="25000">
        <!--        TODO: Redirect to product.slug on click -->
        <div class="products-header">{{ $t('home.products.productsWithDiscount') }}</div>
        <div class="products">
            <div v-for="product in products" :key="product.slug" class="product-container">
                <el-carousel-item :name="product.title">
                    <discounted-product :product="product"/>
                </el-carousel-item>
            </div>
        </div>
    </carousel>
</template>

<script>
import DiscountedProduct from '@/components/home/topPromotions/DiscountedProduct.vue'
import Carousel from '@/components/home/topPromotions/Carousel.vue'

export default {
    name: 'ProductsWithDiscount',
    components: { Carousel, DiscountedProduct },
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.products-carousel {
    --header-height: 1.5em;
    --product-top-margin: 20px;
    --carousel__item-padding: 22px;

    &:deep(.el-carousel__container) {
        display: flex;
        flex-direction: column;
        background-color: var(--el-bg-color);
        border-radius: var(--el-border-radius-round);

        &, .el-carousel__item {
            padding: var(--carousel__item-padding);
        }
    }
}

.products-header {
    font-weight: bold;
    height: var(--header-height);
    font-size: var(--header-height);
}

.el-carousel__item {
    --carousel__item-height: calc(var(--carousel-height) - var(--header-height) - var(--carousel-indicators-height) - var(--product-top-margin));
    top: calc(var(--header-height) + var(--product-top-margin));
    height: var(--carousel__item-height);
}
</style>
