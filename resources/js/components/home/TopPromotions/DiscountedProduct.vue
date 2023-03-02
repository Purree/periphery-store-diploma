<template>
    <div class="product">
        <div class="product-image" :style="'background-image: url(' + product.previewImage + ')'"></div>
        <div class="product-data">
            <div class="main-product-data">
                <product-discount v-if="product.discount" :discount="product.discount" class="product-discount"/>
                <product-price :price="product.price" :discounted-price="product.priceWithDiscount"/>
                <div class="product-clients-block">
                    <product-rating v-if="product.rating" :rating="product.rating"/>
                    <product-reviews-count :reviews-count="product.reviewsCount"/>
                </div>
            </div>
            <div class="product-interaction">
                <product-title class="product-title" :product-name="product.title" />
<!--                TODO: Реализовать добавление в корзину-->
                <add-to-cart-button/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDiscount from '@/components/home/TopPromotions/ProductDiscount.vue'
import ProductPrice from '@/components/home/ProductPrice.vue'
import ProductRating from '@/components/home/ProductRating.vue'
import ProductReviewsCount from '@/components/home/ProductReviewsCount.vue'
import ProductTitle from '@/components/home/ProductTitle.vue'
import AddToCartButton from '@/components/home/AddToCartButton.vue'

export default {
    name: 'DiscountedProduct',
    components: { AddToCartButton, ProductTitle, ProductReviewsCount, ProductRating, ProductPrice, ProductDiscount },
    props: {
        product: {
            required: true,
            type: Object
        }
    }
}
</script>

<style scoped lang="scss">
.product {
    display: grid;
    height: 100%;
    width: 100%;
    grid-column-gap: 10%;
    grid-template-columns: 40% 50%;
}

.product-image {
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    object-fit: cover;
}

.product-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-discount {
    margin-bottom: 10px;
}

.product-clients-block {
    margin: 5px 0;
    font-size: var(--el-font-size-base);
    display: flex;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
}

.product-interaction {
    display: flex;
    flex-direction: column;
    &, & > * {
        width: 100%;
    }
}

</style>
