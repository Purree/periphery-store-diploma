<template>
    <div>
        <slot name="title">
            <list-title class="title" :title="title" />
        </slot>
        <div class="products-list">
            <div class="product-container" :key="product.slug" v-for="product in products">
                <product-card :image-url="product.previewImage"
                              :title="product.title" :price="product.price" :slug="product.slug"
                              :discount="product.discount"
                              :price-with-discount="product.priceWithDiscount" :rating="product.rating"
                              :reviews-count="product.reviewsCount" class="product-card"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/home/product/ProductCard.vue'
import ListTitle from '@/components/ListTitle.vue'

export default {
    name: 'ProductsList',
    components: { ListTitle, ProductCard },
    props: {
        products: {
            required: true,
            type: Array
        },
        title: {
            required: false,
            type: String
        }
    }
}
</script>

<style scoped>
.products-list {
    display: flex;
    flex-wrap: wrap;

}

.product-container {
    display: flex;
    justify-content: center;
    flex: 1 0 250px;
    border-bottom: 1px solid var(--el-border-color);
    padding: 40px 0;
}

.title {
    margin-bottom: 20px;
}
</style>
