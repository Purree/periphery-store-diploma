<template>
    <div>
        <sales-hits-collection class="sales-hits"/>
        <popular-categories-collection class="popular-categories"/>
        <other-products-list/>
    </div>
</template>

<script>
import OtherProductsList from '@/components/home/product/OtherProductsList.vue'
import PopularCategoriesCollection from '@/components/home/PopularCategoriesCollection.vue'
import SalesHitsCollection from '@/components/home/product/SalesHitsCollection.vue'

export default {
    name: 'HomeProducts',
    components: {
        SalesHitsCollection,
        PopularCategoriesCollection,
        OtherProductsList
    }
}
</script>

<style scoped>
.sales-hits, .popular-categories {
    margin-bottom: 50px;
}
</style>
