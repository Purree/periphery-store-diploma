<template>
    <div class="product">
        <div class="product-data">
            <div class="product-image-container">
                <div class="product-image-wrapper">
                    <product-open-link :slug="product.slug">
                        <item-image class="product-image" :image-url="product.previewImage" :image-alt="product.title"/>
                    </product-open-link>
                </div>
            </div>
            <div class="product-information">
                <div class="product-characteristics">
                    <div class="main-product-data">
                        <product-discount v-if="product.discount" :discount="product.discount"
                                          class="product-discount"/>
                        <product-price :price="product.price" :discounted-price="product.priceWithDiscount"/>
                        <product-feedback :rating="product.rating" :reviews-count="product.reviewsCount"/>
                    </div>
                    <div class="product-title-container">
                        <product-open-link :slug="product.slug">
                            <based-text class="product-title" :title="product.title"/>
                        </product-open-link>
                    </div>
                </div>
                <add-to-cart-button :product-slug="product.slug" class="cart-button"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDiscount from '@/components/home/topPromotions/ProductDiscount.vue'
import ProductPrice from '@/components/product/ProductPrice.vue'
import BasedText from '@/components/BasedText.vue'
import AddToCartButton from '@/components/product/AddToCartButton.vue'
import ItemImage from '@/components/home/ItemImage.vue'
import ProductFeedback from '@/components/product/ProductFeedback.vue'
import ProductOpenLink from '@/components/home/product/ProductOpenLink.vue'

export default {
    name: 'DiscountedProduct',
    components: {
        ProductOpenLink,
        ProductFeedback,
        ItemImage,
        AddToCartButton,
        BasedText,
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
@import "@@/_variables.scss";
@import "@@/mixins.scss";

.product {
    --max-image-width: 60%;

    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.product-data {
    display: flex;
    align-items: start;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
}

@include screen-size('mobile') {
    .product {
        --max-image-width: 50% !important;
    }
}

.product-image-container {
    justify-self: center;
    align-self: center;

    width: var(--max-image-width);
}

.product-image-container, :deep(.product-image-wrapper) * {
    height: 100%;
}

.product-image-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    position: relative;
}

.product-image {
    max-height: 100%;
    aspect-ratio: 1 / 1;
    max-width: 100%;
}

.product-information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: calc(100% - var(--max-image-width));
}

.product-characteristics {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.product-discount {
    margin-bottom: 10px;
}

.product-title-container {
    display: flex;
    flex-direction: column;
    align-items: start;

    &, & > * {
        width: 100%;
    }
}
</style>
