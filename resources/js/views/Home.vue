<template>
    <div class="home-container">
        <top-promotions/>
    </div>
    <div class="products home-container">
        <products-collection collection-title="Тест"/>
    </div>
</template>

<script>
import TopPromotions from '@/components/home/TopPromotions/TopPromotions.vue'
import ProductsCollection from '@/components/home/ProductsCollection.vue'

export default {
    name: 'Home',
    components: {
        ProductsCollection,
        TopPromotions
    }
}
</script>

<style scoped>
.products {
    padding-top: 50px;
    background-color: var(--el-bg-color);
    height: 100%;
    border-top-left-radius: var(--el-border-radius-round);
    border-top-right-radius: var(--el-border-radius-round);

    flex: 1 1 auto;
}
</style>
