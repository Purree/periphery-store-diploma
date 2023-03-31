<template>
    <div>
        <slot name="title">
            <list-title class="title" :title="title"/>
        </slot>
        <div class="products-list">
            <div class="product-container" :key="product.slug" v-for="product in products">
                <product-card :image-url="product.previewImage"
                              :title="product.title" :price="product.price" :slug="product.slug"
                              :discount="product.discount"
                              :price-with-discount="product.priceWithDiscount" :rating="product.rating"
                              :reviews-count="product.reviewsCount" class="product-card"/>
            </div>
            <el-skeleton v-if="pending" :key="skeletonId" v-for="skeletonId in 24" animated
                         class="product-container-skeleton">
                <template #template>
                    <el-skeleton-item variant="rect" class="product-card-skeleton"/>
                </template>
            </el-skeleton>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/home/product/ProductCard.vue'
import ListTitle from '@/components/ListTitle.vue'

export default {
    name: 'ProductsList',
    components: {
        ListTitle,
        ProductCard
    },
    props: {
        products: {
            required: true,
            type: Array
        },
        title: {
            required: false,
            type: String
        },
        pending: {
            required: false,
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.products-list {
    display: flex;
    flex-wrap: wrap;

}

.product-container, .product-container-skeleton {
    display: flex;
    justify-content: center;
    flex: 1 0 250px;
    border-bottom: 1px solid var(--el-border-color);
    padding-bottom: 40px;
    margin-bottom: 40px;
}

.title {
    margin-bottom: 20px;
}

.product-card-skeleton {
    width: 200px;
    height: 311px;
}
</style>
