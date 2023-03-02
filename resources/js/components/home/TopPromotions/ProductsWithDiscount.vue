<template>
    <el-carousel class="products-carousel carousel-with-bottom-indentation" trigger="click"
                 :interval="25000">
        <!--        TODO: Redirect to product.slug on click -->
        <div class="products-header">{{ $t('home.headerDiscounts.products.productsWithDiscount') }}</div>
        <div class="products">
            <div v-for="product in products" :key="product.slug" class="product-container">
                <el-carousel-item :name="product.title">
                    <discounted-product :product="product"/>
                </el-carousel-item>
            </div>
        </div>
    </el-carousel>
</template>

<script>
import DiscountedProduct from '@/components/home/TopPromotions/DiscountedProduct.vue'

export default {
    name: 'ProductsWithDiscount',
    components: { DiscountedProduct },
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

    width: 677px;

    &:deep(.el-carousel__container) {
        display: flex;
        flex-direction: column;
        background-color: var(--el-bg-color);
        border-radius: var(--el-border-radius-round);

        &, .el-carousel__item {
            padding: 5%;
        }
    }
}

.products-header {
    font-weight: bold;
    height: var(--header-height);
    font-size: var(--header-height);
}

.el-carousel__item {
    top: calc(var(--header-height) + var(--product-top-margin));
    height: calc(var(--carousel-height) - var(--header-height) - var(--carousel-indicators-height) - var(--product-top-margin));
}
</style>
