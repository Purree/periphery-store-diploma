<template>
    <div class="home-container">
        <top-promotions/>
    </div>
    <div class="products home-container">
        <home-products/>
    </div>
</template>

<script>
import TopPromotions from '@/components/home/topPromotions/TopPromotions.vue'
import HomeProducts from '@/components/home/HomeProducts.vue'

export default {
    name: 'Home',
    components: {
        HomeProducts,
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
