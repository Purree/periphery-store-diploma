<template>
    <div class="home-container">
        <top-promotions/>
    </div>
    <div class="products">

    </div>
</template>

<script>
import TopPromotions from '@/components/home/TopPromotions/TopPromotions.vue'

export default {
    name: 'Home',
    components: {
        TopPromotions
    }
}
</script>

<style scoped>
.products {
    background-color: var(--el-bg-color);
    height: 100%;
    border-top-left-radius: var(--el-border-radius-round);
    border-top-right-radius: var(--el-border-radius-round);

    flex: 1 1 auto;
}
</style>
