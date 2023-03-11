<template>
    <!--    TODO: Open slug in click-->
    <div class="product-card">
        <div class="product-image-container">
            <div class="product-image">
                <product-image :image-url="imageUrl"/>
            </div>
        </div>
        <div class="product-title">
            <product-title :title="title"/>
        </div>
        <div class="product-rating">
            <product-rating v-if="rating" :rating="rating"/>
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
import ProductImage from '@/components/home/ProductImage.vue'
import ProductTitle from '@/components/home/ProductTitle.vue'
import ProductRating from '@/components/home/ProductRating.vue'
import ProductPrice from '@/components/home/ProductPrice.vue'
import AddToCartButton from '@/components/home/AddToCartButton.vue'

export default {
    name: 'ProductCard',
    components: {
        AddToCartButton,
        ProductPrice,
        ProductRating,
        ProductTitle,
        ProductImage
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

.product-image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 168px;
}

.product-image {
    height: 100%;
}

.product-title {
    word-break: break-all;
    width: 100%;
    height: 44px;
}

.product-rating {
    width: 100%;
    height: 23px;
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
