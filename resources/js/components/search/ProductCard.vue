<template>
    <div class="product-card card">
        <div class="product-image-container">
            <product-open-link :slug="slug">
                <div class="product-image">
                    <item-image :image-url="imageUrl"/>
                </div>
            </product-open-link>
        </div>
        <div>
            <div class="product-title">
                <product-open-link :slug="slug">
                    <based-text :title="title"/>
                </product-open-link>
            </div>
            <div>
                <product-feedback class="product-feedback" :reviews-count="reviewsCount" :rating="rating"/>
            </div>
        </div>
        <div>
            <div class="product-price">
                <product-price :is-price-size-overwritten="true" :price="price" :discounted-price="priceWithDiscount"/>
            </div>
            <div>
                <add-to-cart-button :product-slug="slug" v-if="isShowAddToCartButton"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductFeedback from '@/components/product/ProductFeedback.vue'
import AddToCartButton from '@/components/product/AddToCartButton.vue'
import ProductPrice from '@/components/product/ProductPrice.vue'
import ProductOpenLink from '@/components/home/product/ProductOpenLink.vue'
import ItemImage from '@/components/home/ItemImage.vue'
import BasedText from '@/components/BasedText.vue'

export default {
    name: 'ProductCard',
    components: {
        BasedText,
        ItemImage,
        ProductOpenLink,
        ProductPrice,
        AddToCartButton,
        ProductFeedback
    },
    props: {
        title: {
            required: true,
            type: String
        },
        imageUrl: {
            required: true,
            type: String
        },
        slug: {
            required: true,
            type: String
        },
        price: {
            required: true,
            type: Number
        },
        rating: {
            required: false,
            type: [Number, undefined]
        },
        reviewsCount: {
            required: false,
            type: [Number, undefined]
        },
        priceWithDiscount: {
            required: false,
            type: [Number, undefined]
        },
        isShowAddToCartButton: {
            required: true,
            type: [Boolean]
        }
    }
}
</script>

<style scoped lang="scss">
@import "@@/_variables.scss";
@import "@@/mixins.scss";

.product-card {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    @include max-screen-size('big-tablet') {
        grid-template-columns: 1fr;
        column-gap: 5px;
    }
    column-gap: 20px;
}

.product-image-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-image {
    display: flex;
    justify-content: center;
    max-height: 160px;
    width: 100%;
    aspect-ratio: 1 / 1;
    height: 100%;
}

.product-title {
    overflow: hidden;
    word-break: break-word;
}

.product-feedback {
    align-items: center;
}

.product-price {
    --price-size: var(--el-font-size-large);
    --old-price-size: var(--el-font-size-base);
    --price-mobile-size: var(--el-font-size-base);
    --old-price-mobile-size: var(--el-font-size-small);

    margin-bottom: 10px;
    width: 100%;
}
</style>
