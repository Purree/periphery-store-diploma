<template>
    <div class="product">
        <div class="product-data">
            <div class="product-image">
                <product-open-link :slug="product.slug">
                    <item-image :image-url="product.previewImage" :image-alt="product.title" />
                </product-open-link>
            </div>
            <div class="product-characteristics">
                <div class="main-product-data">
                    <product-discount v-if="product.discount" :discount="product.discount" class="product-discount"/>
                    <product-price :price="product.price" :discounted-price="product.priceWithDiscount"/>
                    <product-feedback :rating="product.rating" :reviews-count="product.reviewsCount"/>
                </div>
                <div class="product-title-container">
                    <product-open-link :slug="product.slug">
                        <item-title class="product-title" :title="product.title"/>
                    </product-open-link>
                    <!--                TODO: Реализовать добавление в корзину-->
                </div>
            </div>
        </div>
        <add-to-cart-button class="cart-button"/>
    </div>
</template>

<script>
import ProductDiscount from '@/components/home/topPromotions/ProductDiscount.vue'
import ProductPrice from '@/components/home/product/ProductPrice.vue'
import ItemTitle from '@/components/home/ItemTitle.vue'
import AddToCartButton from '@/components/home/AddToCartButton.vue'
import ItemImage from '@/components/home/ItemImage.vue'
import ProductFeedback from '@/components/home/product/ProductFeedback.vue'
import ProductOpenLink from '@/components/home/product/ProductOpenLink.vue'

export default {
    name: 'DiscountedProduct',
    components: {
        ProductOpenLink,
        ProductFeedback,
        ItemImage,
        AddToCartButton,
        ItemTitle,
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

.product-title-container {
    display: flex;
    flex-direction: column;

    &, & > * {
        width: 100%;
    }
}

.cart-button {
    height: var(--cart-button-height);
}
</style>
