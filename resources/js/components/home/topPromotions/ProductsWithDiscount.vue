<template>
    <div class="products-with-discount">
        <div class="products-header">{{ $t('home.products.productsWithDiscount') }}</div>
        <div class="products-carousel">
            <carousel trigger="click"
                      class="carousel"
                      height="inherit" :interval="25000">
                <el-carousel-item :name="product.title" v-for="product in products" :key="product.slug">
                    <discounted-product :product="product"/>
                </el-carousel-item>
            </carousel>
        </div>
    </div>
</template>

<script>
import DiscountedProduct from '@/components/home/topPromotions/DiscountedProduct.vue'
import Carousel from '@/components/home/topPromotions/Carousel.vue'

export default {
    name: 'ProductsWithDiscount',
    components: {
        Carousel,
        DiscountedProduct
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.products-with-discount {
    display: flex;
    flex-direction: column;
    background-color: var(--el-bg-color);
    padding-top: var(--el-border-radius-round);
    padding-inline: var(--el-border-radius-round);
    border-radius: var(--el-border-radius-round);
}

.products-header {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 20px;
}

.products-carousel {
    height: 100%;
    &:deep(.el-carousel__container) {
        display: flex;
        flex-direction: column;
        border-radius: var(--el-border-radius-round);
    }
}

:deep(.carousel) {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
