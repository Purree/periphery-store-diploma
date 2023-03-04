<template>
    <div class="product">
        <div class="product-data">
            <img class="product-image" :src="product.previewImage" :alt="product.title"/>
            <div class="product-characteristics">
                <div class="main-product-data">
                    <product-discount v-if="product.discount" :discount="product.discount" class="product-discount"/>
                    <product-price :price="product.price" :discounted-price="product.priceWithDiscount"/>
                    <div class="product-clients-block">
                        <product-rating v-if="product.rating" :rating="product.rating"/>
                        <product-reviews-count :reviews-count="product.reviewsCount"/>
                    </div>
                </div>
                <div class="product-title-container">
                    <product-title class="product-title" :product-name="product.title"/>
                    <!--                TODO: Реализовать добавление в корзину-->
                </div>
            </div>
        </div>
        <add-to-cart-button class="cart-button"/>
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
    components: {
        AddToCartButton,
        ProductTitle,
        ProductReviewsCount,
        ProductRating,
        ProductPrice,
        ProductDiscount
    },
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
    --cart-button-height: calc(var(--product-height) - (var(--product-height) * 0.8));
    --product-data-bottom-margin: 5px;
    --product-data-height: calc(var(--product-height) - var(--cart-button-height) - var(--product-data-bottom-margin));
    --product-height: calc(var(--carousel__item-height) - var(--carousel__item-padding)*2);

    height: var(--product-height);
    width: 100%;
}

.product-data {
    display: grid;
    align-items: center;
    height: var(--product-data-height);
    margin-bottom: var(--product-data-bottom-margin);
    width: 100%;
    grid-column-gap: 10%;
    grid-template-columns: 40% 50%;
}

.product-image {
    display: block;
    justify-self: center;
    max-height: var(--product-data-height);
    max-width: 90%;
    object-fit: cover;
}

.product-characteristics {
    display: flex;
    height: var(--product-data-height);
    flex-direction: column;
    justify-content: space-between;
    --main-product-data-height: calc(var(--product-height) - calc(var(--product-height) * 0.2));

    & .main-product-data {
        height: var(--main-product-data-height);
        overflow: hidden;
    }
    & .product-title-container {
        height: calc(var(--product-height) - var(--main-product-data-height));
    }
}

.product-discount {
    margin-bottom: 10px;
}

.product-clients-block {
    margin: 5px 0;
    font-size: var(--el-font-size-base);
    display: flex;
    align-items: flex-end;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
}

.product-title-container {
    display: flex;
    flex-direction: column;

    &, & > * {
        width: 100%;
    }
}

.cart-button {
    width: 100%;
    height: var(--cart-button-height);
}
</style>
