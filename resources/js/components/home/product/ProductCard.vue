<template>
    <div class="product-card">
        <product-open-link class="product-image-link" :slug="slug">
            <div class="product-image-container">
                <div class="product-image">
                    <item-image :image-url="imageUrl"/>
                </div>
            </div>
        </product-open-link>
        <div class="product-title">
            <product-open-link :slug="slug">
                <item-title :title="title"/>
            </product-open-link>
        </div>
        <div class="product-feedback-container">
            <product-feedback class="product-feedback" :reviews-count="reviewsCount" :rating="rating"/>
        </div>
        <div class="product-price">
            <product-price :is-price-size-overwritten="true" :price="price" :discounted-price="priceWithDiscount"/>
        </div>
        <div class="product-actions">
            <add-to-cart-button/>
        </div>
    </div>
</template>

<script>
import ItemImage from '@/components/home/ItemImage.vue'
import ItemTitle from '@/components/home/ItemTitle.vue'
import ProductPrice from '@/components/home/product/ProductPrice.vue'
import AddToCartButton from '@/components/home/AddToCartButton.vue'
import ProductFeedback from '@/components/home/product/ProductFeedback.vue'
import ProductOpenLink from '@/components/home/product/ProductOpenLink.vue'

export default {
    name: 'ProductCard',
    components: {
        ProductOpenLink,
        ProductFeedback,
        AddToCartButton,
        ProductPrice,
        ItemTitle,
        ItemImage
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
        discount: {
            required: false,
            type: Number,
            default: 0
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
        }
    }
}
</script>

<style scoped>
.product-card {
    overflow: hidden;
    width: 200px;
}

.product-image-container, :deep(.product-image-link) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 168px;
}

.product-image {
    height: 100%;
}

.product-title {
    word-break: break-word;
    width: 100%;
    height: 44px;
}

.product-feedback-container {
    width: 100%;
    height: 23px;
}

.product-feedback {
    align-items: center;
}

.product-price {
    --price-size: var(--el-font-size-large);
    --old-price-size: var(--el-font-size-base);
    --price-mobile-size: var(--price-size);
    --old-price-mobile-size: var(--old-price-size);

    width: 100%;
    height: 39px;
}

.product-actions {
    width: 100%;
}
</style>
